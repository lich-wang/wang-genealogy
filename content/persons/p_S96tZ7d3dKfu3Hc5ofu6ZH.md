---
schema: wang-person/v1
id: p_S96tZ7d3dKfu3Hc5ofu6ZH
status: active
merged_into: null
display_name: 王柌
cbdb_id: 254953
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JowZP5CJu2zuNE2iBDsAUz
        subject_person_id: p_S96tZ7d3dKfu3Hc5ofu6ZH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柌，明人物。成化十七年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 254953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eTEoO3DMhfAXtf4H4L9a_y
          claim_id: c_JowZP5CJu2zuNE2iBDsAUz
          source_id: s_C81fGgP9KkiXTfDJsjMUvB
          stance: supports
          locator: CBDB:254953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C81fGgP9KkiXTfDJsjMUvB
            source_type: api_record
            title: 中国历代人物传记资料库：王柌（CBDB 254953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254953&o=json
            external_identifier: CBDB:254953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TAQqWMzXDTXMHaVVva6xbA
        subject_person_id: p_S96tZ7d3dKfu3Hc5ofu6ZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fR9tQ3hjsGGdBqE4kAfhhQ
          claim_id: c_TAQqWMzXDTXMHaVVva6xbA
          source_id: s_C81fGgP9KkiXTfDJsjMUvB
          stance: supports
          locator: CBDB:254953
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I5kDBRM79POVTRhTrSDCNo
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S96tZ7d3dKfu3Hc5ofu6ZH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUnvC2FtvKKHLjqhFjSRfj
          claim_id: c_I5kDBRM79POVTRhTrSDCNo
          source_id: s_SEWqfYkbMw_oyqwvHFGIOQ
          stance: supports
          locator: CBDB：兄弟 王機（200214）之父／母 王宣清
          quotation: null
          interpretation_note: 由兄弟关系推断：王柌 与 王機 为同胞（CBDB 记「兄」），王機 之父／母即 王柌 之父／母。
          source:
            id: s_SEWqfYkbMw_oyqwvHFGIOQ
            source_type: api_record
            title: 中国历代人物传记资料库：王柌（CBDB 254953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254953&o=json
            external_identifier: CBDB:254953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h8sJHgEUaQHScKxtt1BkuB
        status: active
        display_name: 王宣清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QoBegqZdjMn_k5D2ElTisG
        subject_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S96tZ7d3dKfu3Hc5ofu6ZH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NTki1aYjEDiT84WA8DVslx
          claim_id: c_QoBegqZdjMn_k5D2ElTisG
          source_id: s_SEWqfYkbMw_oyqwvHFGIOQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200214 王機）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SEWqfYkbMw_oyqwvHFGIOQ
            source_type: api_record
            title: 中国历代人物传记资料库：王柌（CBDB 254953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254953&o=json
            external_identifier: CBDB:254953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G8UB9fUGo95gK5v77Cu4Q6
        status: active
        display_name: 王機
        merged_into_person_id: null
---

# 王柌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王柌，明人物。成化十七年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 254953） | accepted |
| name.primary | 王柌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h8sJHgEUaQHScKxtt1BkuB | 王宣清 | accepted |
| other | p_G8UB9fUGo95gK5v77Cu4Q6 | 王機 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柌（CBDB 254953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254953&o=json)
