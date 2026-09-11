---
schema: wang-person/v1
id: p_YyANARVNyNvBnk5riMJd4z
status: active
merged_into: null
display_name: 王庶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ERaafxDWbg888mscMa3C5x
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PDA1gYmn6HFb2KHZGxAXg
          claim_id: c_ERaafxDWbg888mscMa3C5x
          source_id: s_jr4u1PpFa2nwU1h17BFX4A
          stance: supports
          locator: CBDB:1878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1878）
          source: &a1
            id: s_jr4u1PpFa2nwU1h17BFX4A
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 1878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1878&o=json
            external_identifier: CBDB:1878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_w8TPhE4QAHKqU6YmCwgoBf
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1143年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rvELHT5Ag4YNU6R7PYtnZ
          claim_id: c_w8TPhE4QAHKqU6YmCwgoBf
          source_id: s_jr4u1PpFa2nwU1h17BFX4A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q88L3h8fHTrUCAVqUVSmAo
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeQsQvLEJXEkFAKwbPstKk
          claim_id: c_Q88L3h8fHTrUCAVqUVSmAo
          source_id: s_jr4u1PpFa2nwU1h17BFX4A
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
        id: c_cTfsdsj0v2V7Q3ayhPSlm8
        subject_person_id: p_NWD6tzMxEyomjXxFXMQ1yX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YyANARVNyNvBnk5riMJd4z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcMQXCxUyfhai-objM1FOt
          claim_id: c_cTfsdsj0v2V7Q3ayhPSlm8
          source_id: s_WXGYTyp84DG9LKfvhp2sDW
          stance: supports
          locator: 宋人傳記資料索引(電子版)，888;889：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WXGYTyp84DG9LKfvhp2sDW
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 13755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13755&o=json
            external_identifier: CBDB:13755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NWD6tzMxEyomjXxFXMQ1yX
        status: active
        display_name: 王茂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庶 | accepted |
| death.date | 1143年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NWD6tzMxEyomjXxFXMQ1yX | 王茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂（CBDB 13755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13755&o=json)
- [中国历代人物传记资料库：王庶（CBDB 1878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1878&o=json)
