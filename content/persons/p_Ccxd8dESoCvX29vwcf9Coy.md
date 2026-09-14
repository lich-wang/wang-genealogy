---
schema: wang-person/v1
id: p_Ccxd8dESoCvX29vwcf9Coy
status: active
merged_into: null
display_name: 王一元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XTAH6mWSNsZ9zZghP8r8mL
        subject_person_id: p_Ccxd8dESoCvX29vwcf9Coy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ah5W2mGwoNwYwQzdB49Nb9
          claim_id: c_XTAH6mWSNsZ9zZghP8r8mL
          source_id: s_qZTW2bHy3cSoA6FjRR9Jz8
          stance: supports
          locator: CBDB:227298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227298）
          source: &a1
            id: s_qZTW2bHy3cSoA6FjRR9Jz8
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 227298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json
            external_identifier: CBDB:227298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hYzcM1GumZ1aoyKQnMdX72
        subject_person_id: p_Ccxd8dESoCvX29vwcf9Coy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227298）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7qIn1oHqlWjDrYJBshIFrI
          claim_id: c_hYzcM1GumZ1aoyKQnMdX72
          source_id: s_qZTW2bHy3cSoA6FjRR9Jz8
          stance: supports
          locator: CBDB:227298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1VNl5S6aCOhRNvva5myS5u
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ccxd8dESoCvX29vwcf9Coy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4Z0mx09iNCiYAe_9D5nlt
          claim_id: c_1VNl5S6aCOhRNvva5myS5u
          source_id: s_gTzyRAUJ-HoqgM4EOQ_yfC
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王一元 与 王都 为同胞（CBDB 记「弟」），王都 之父／母即 王一元 之父／母。
          source:
            id: s_gTzyRAUJ-HoqgM4EOQ_yfC
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 227298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json
            external_identifier: CBDB:227298
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
        id: c_TmlTipgMBYagUi18ZNBjOq
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ccxd8dESoCvX29vwcf9Coy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqGrZdhUvOyoIG07SZ1TlF
          claim_id: c_TmlTipgMBYagUi18ZNBjOq
          source_id: s_gTzyRAUJ-HoqgM4EOQ_yfC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gTzyRAUJ-HoqgM4EOQ_yfC
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 227298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json
            external_identifier: CBDB:227298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
---

# 王一元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一元 | accepted |
| bio.summary | 王一元，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FygGhfrnq3smeMksbXnbJf | 王雍熙 | accepted |
| other | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一元（CBDB 227298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227298&o=json)
