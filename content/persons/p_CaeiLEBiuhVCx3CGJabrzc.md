---
schema: wang-person/v1
id: p_CaeiLEBiuhVCx3CGJabrzc
status: active
merged_into: null
display_name: 王子讓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mt3nJfwEm85vSgPVJ6DN5Z
        subject_person_id: p_CaeiLEBiuhVCx3CGJabrzc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A5R1AvUVxAP7mnwfQVfc9d
          claim_id: c_Mt3nJfwEm85vSgPVJ6DN5Z
          source_id: s_pPPFKGAksm7LBqR4JSRxn9
          stance: supports
          locator: CBDB:239298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239298）
          source: &a1
            id: s_pPPFKGAksm7LBqR4JSRxn9
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 239298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239298&o=json
            external_identifier: CBDB:239298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L7PQ7H8MM3PmaBEToZM5SZ
        subject_person_id: p_CaeiLEBiuhVCx3CGJabrzc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子讓，明人物。正统十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 239298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oZywRfDviGqjIwzIFO64ds
          claim_id: c_L7PQ7H8MM3PmaBEToZM5SZ
          source_id: s_pPPFKGAksm7LBqR4JSRxn9
          stance: supports
          locator: CBDB:239298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nciWHkLAGtFTxH9iAGhDHC
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CaeiLEBiuhVCx3CGJabrzc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4IQaYXXty2CpKeAZRkxv5d
          claim_id: c_nciWHkLAGtFTxH9iAGhDHC
          source_id: s_Gxj_xrbhPJCDUm3JsE2IGC
          stance: supports
          locator: CBDB：兄弟 王福（208015）之父／母 王意
          quotation: null
          interpretation_note: 由兄弟关系推断：王子讓 与 王福 为同胞（CBDB 记「兄」），王福 之父／母即 王子讓 之父／母。
          source:
            id: s_Gxj_xrbhPJCDUm3JsE2IGC
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 239298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239298&o=json
            external_identifier: CBDB:239298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UKmnBNaYcR6Y5ExUHqMqA5
        status: active
        display_name: 王意
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gne9ZWmL7PQc0105GogKLN
        subject_person_id: p_CaeiLEBiuhVCx3CGJabrzc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjnnaEN7g-31tiAmrHsIMt
          claim_id: c_gne9ZWmL7PQc0105GogKLN
          source_id: s_Gxj_xrbhPJCDUm3JsE2IGC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208015 王福）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gxj_xrbhPJCDUm3JsE2IGC
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 239298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239298&o=json
            external_identifier: CBDB:239298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H841UufcMkWpzbemaqposM
        status: active
        display_name: 王福
        merged_into_person_id: null
---

# 王子讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子讓 | accepted |
| bio.summary | 王子讓，明人物。正统十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 239298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKmnBNaYcR6Y5ExUHqMqA5 | 王意 | accepted |
| other | p_H841UufcMkWpzbemaqposM | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子讓（CBDB 239298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239298&o=json)
