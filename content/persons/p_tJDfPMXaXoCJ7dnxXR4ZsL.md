---
schema: wang-person/v1
id: p_tJDfPMXaXoCJ7dnxXR4ZsL
status: active
merged_into: null
display_name: 王繼宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3JRVnXURs9pSQ7o4HxXZTJ
        subject_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9p8Rr2P4AbURVF76VTyF8M
          claim_id: c_3JRVnXURs9pSQ7o4HxXZTJ
          source_id: s_YsbC6C8mF8xkNBHSQrY4UZ
          stance: supports
          locator: CBDB:126879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126879）
          source: &a1
            id: s_YsbC6C8mF8xkNBHSQrY4UZ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 126879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126879&o=json
            external_identifier: CBDB:126879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qx8hgS6eM6BNcbQLABfV1y
        subject_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P5oyADkPThtmL6w8VSf9Km
          claim_id: c_qx8hgS6eM6BNcbQLABfV1y
          source_id: s_YsbC6C8mF8xkNBHSQrY4UZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Mt_XqczmVMYAX5KF5zHGoK
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3HaATzfJIi_VepC06SUwu
          claim_id: c_Mt_XqczmVMYAX5KF5zHGoK
          source_id: s_Px6F8GhPpztGfFpkfsF9JT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Px6F8GhPpztGfFpkfsF9JT
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 292164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292164&o=json
            external_identifier: CBDB:292164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 292164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292164&o=json)
- [中国历代人物传记资料库：王繼宗（CBDB 126879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126879&o=json)
