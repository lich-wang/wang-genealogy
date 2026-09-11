---
schema: wang-person/v1
id: p_kXrauqiRDQXXD79d2V6tEj
status: active
merged_into: null
display_name: 王觀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fxKtPTWoDhPWGGoJJtYVjt
        subject_person_id: p_kXrauqiRDQXXD79d2V6tEj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yW9NV2VPDQPULm5ecddVA8
          claim_id: c_fxKtPTWoDhPWGGoJJtYVjt
          source_id: s_apedDyRhTEqKQh7k45Ln1g
          stance: supports
          locator: CBDB:295273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295273）
          source: &a1
            id: s_apedDyRhTEqKQh7k45Ln1g
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 295273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295273&o=json
            external_identifier: CBDB:295273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UDD2H56BKDX9fjGLtk3gJP
        subject_person_id: p_kXrauqiRDQXXD79d2V6tEj
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
        - id: cs_C45MkZUDDoGHJPibdgS1MX
          claim_id: c_UDD2H56BKDX9fjGLtk3gJP
          source_id: s_apedDyRhTEqKQh7k45Ln1g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TpB8SUNZ6oh7EuZlS3WF7o
        subject_person_id: p_kXrauqiRDQXXD79d2V6tEj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0nDph48VADhDzLH5ObTGGK
          claim_id: c_TpB8SUNZ6oh7EuZlS3WF7o
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wFAosYYDj6D1VR7Gxa42bv
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 198620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json
            external_identifier: CBDB:198620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7XvdYNGwLHctu4cLzYQ7kr
        status: active
        display_name: 王冕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7XvdYNGwLHctu4cLzYQ7kr | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 295273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295273&o=json)
- [中国历代人物传记资料库：王冕（CBDB 198620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json)
