---
schema: wang-person/v1
id: p_byyZthQWyZVmWP7uHiLRM9
status: active
merged_into: null
display_name: 王陛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPWNe553LH6cY2ZqsPnKDW
        subject_person_id: p_byyZthQWyZVmWP7uHiLRM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q9Jso7CaLZNnY5CifcrxAy
          claim_id: c_tPWNe553LH6cY2ZqsPnKDW
          source_id: s_49Aq2kb7aWZgmk4eRHEcjU
          stance: supports
          locator: CBDB:227300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227300）
          source: &a1
            id: s_49Aq2kb7aWZgmk4eRHEcjU
            source_type: api_record
            title: 中国历代人物传记资料库：王陛（CBDB 227300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json
            external_identifier: CBDB:227300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLLdS5ym281sNVKorBMxPw
        subject_person_id: p_byyZthQWyZVmWP7uHiLRM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陛，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227300）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uUrNz7gM8SdW6_41VgBELy
          claim_id: c_HLLdS5ym281sNVKorBMxPw
          source_id: s_49Aq2kb7aWZgmk4eRHEcjU
          stance: supports
          locator: CBDB:227300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T95nfXMsI-dqxsEpj1hSKz
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_byyZthQWyZVmWP7uHiLRM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LmZ2uyOm9Hl2WJ7PMH9D5N
          claim_id: c_T95nfXMsI-dqxsEpj1hSKz
          source_id: s_OpnGKK7abl8Rb_Y5wuWLN3
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王陛 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王陛 之父／母。
          source:
            id: s_OpnGKK7abl8Rb_Y5wuWLN3
            source_type: api_record
            title: 中国历代人物传记资料库：王陛（CBDB 227300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json
            external_identifier: CBDB:227300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FygGhfrnq3smeMksbXnbJf
        status: active
        display_name: 王雍熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DUa_1H9IHLUPLDUArJfZrS
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_byyZthQWyZVmWP7uHiLRM9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l03fGPStDzIrrNE-AsKQ7W
          claim_id: c_DUa_1H9IHLUPLDUArJfZrS
          source_id: s_OpnGKK7abl8Rb_Y5wuWLN3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OpnGKK7abl8Rb_Y5wuWLN3
            source_type: api_record
            title: 中国历代人物传记资料库：王陛（CBDB 227300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json
            external_identifier: CBDB:227300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
---

# 王陛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陛 | accepted |
| bio.summary | 王陛，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FygGhfrnq3smeMksbXnbJf | 王雍熙 | accepted |
| other | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陛（CBDB 227300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json)
