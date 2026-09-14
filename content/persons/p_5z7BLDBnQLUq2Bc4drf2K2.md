---
schema: wang-person/v1
id: p_5z7BLDBnQLUq2Bc4drf2K2
status: active
merged_into: null
display_name: 王桐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LULGuzgwsExjJE4w8x6Fr9
        subject_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QNnkNxf56SfAtMAnNCbA3A
          claim_id: c_LULGuzgwsExjJE4w8x6Fr9
          source_id: s_gLzPftyHU8f6btwpfU1zNN
          stance: supports
          locator: CBDB:283698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283698）
          source: &a1
            id: s_gLzPftyHU8f6btwpfU1zNN
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1sn33m7ASzX7EHgM5t8YPQ
        subject_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g3JbdsHBhQ6vsu0OkJrZ0M
          claim_id: c_1sn33m7ASzX7EHgM5t8YPQ
          source_id: s_gLzPftyHU8f6btwpfU1zNN
          stance: supports
          locator: CBDB:283698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gh3v24q6Z2lXwUvKEJjjGM
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YiWv0sN12pJSYRHnMUgbJu
          claim_id: c_gh3v24q6Z2lXwUvKEJjjGM
          source_id: s_L792pN15ISSF5XABbq0OR3
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王桐 与 王楊 为同胞（CBDB 记「弟」），王楊 之父／母即 王桐 之父／母。
          source:
            id: s_L792pN15ISSF5XABbq0OR3
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GgBh2auK8RVvqWbllYAO-w
        subject_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hpzItsMJGjrT44SJYKHX6h
          claim_id: c_GgBh2auK8RVvqWbllYAO-w
          source_id: s_L792pN15ISSF5XABbq0OR3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L792pN15ISSF5XABbq0OR3
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VzREVG9zqkmWPrWDHfGpmG
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_orbMDw1S6_w-uknIsDdOik
        subject_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbTmekv1789EX7poORM3QL
          claim_id: c_orbMDw1S6_w-uknIsDdOik
          source_id: s_L792pN15ISSF5XABbq0OR3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L792pN15ISSF5XABbq0OR3
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDYJiKmBDGx8GATz5Lz7eZ
        status: active
        display_name: 王楠
        merged_into_person_id: null
---

# 王桐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桐 | accepted |
| bio.summary | 王桐，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| other | p_VzREVG9zqkmWPrWDHfGpmG | 王楊 | accepted |
| other | p_GDYJiKmBDGx8GATz5Lz7eZ | 王楠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桐（CBDB 283698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json)
