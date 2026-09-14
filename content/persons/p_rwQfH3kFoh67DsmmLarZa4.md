---
schema: wang-person/v1
id: p_rwQfH3kFoh67DsmmLarZa4
status: active
merged_into: null
display_name: 王敔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uZSXa8yJywVECFGTUZAARR
        subject_person_id: p_rwQfH3kFoh67DsmmLarZa4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qgaaz8GQqiAWhxW1WjWY76
          claim_id: c_uZSXa8yJywVECFGTUZAARR
          source_id: s_Gkxmq3uqgTSsm5nTvgF8BK
          stance: supports
          locator: CBDB:255598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255598）
          source: &a1
            id: s_Gkxmq3uqgTSsm5nTvgF8BK
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 255598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255598&o=json
            external_identifier: CBDB:255598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjY65FnaBiFHvX1jeFLrfX
        subject_person_id: p_rwQfH3kFoh67DsmmLarZa4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敔，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XHknM9dw6TvUljwmd-QMBX
          claim_id: c_SjY65FnaBiFHvX1jeFLrfX
          source_id: s_Gkxmq3uqgTSsm5nTvgF8BK
          stance: supports
          locator: CBDB:255598
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kALUzsjyh7q_AZQNcOiwxb
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rwQfH3kFoh67DsmmLarZa4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TguN0NZVqL_n5MuNXMggMR
          claim_id: c_kALUzsjyh7q_AZQNcOiwxb
          source_id: s_iYAxLGqmBjuA2-A3ZoerFr
          stance: supports
          locator: CBDB：兄弟 王敞（126724）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王敔 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王敔 之父／母。
          source:
            id: s_iYAxLGqmBjuA2-A3ZoerFr
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 255598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255598&o=json
            external_identifier: CBDB:255598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EPre6RwkxTdv7w3sC85r9v
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bAQyylH8DOZVFPnj4YUkOP
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rwQfH3kFoh67DsmmLarZa4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_97JbquDHAIhhstGWgYUgQF
          claim_id: c_bAQyylH8DOZVFPnj4YUkOP
          source_id: s_iYAxLGqmBjuA2-A3ZoerFr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126724 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iYAxLGqmBjuA2-A3ZoerFr
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 255598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255598&o=json
            external_identifier: CBDB:255598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8CKJNGVaripT3AVjGSTRgL
        status: active
        display_name: 王敞
        merged_into_person_id: null
---

# 王敔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敔 | accepted |
| bio.summary | 王敔，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EPre6RwkxTdv7w3sC85r9v | 王忠 | accepted |
| other | p_8CKJNGVaripT3AVjGSTRgL | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敔（CBDB 255598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255598&o=json)
