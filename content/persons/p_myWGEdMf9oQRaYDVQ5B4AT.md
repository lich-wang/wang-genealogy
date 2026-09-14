---
schema: wang-person/v1
id: p_myWGEdMf9oQRaYDVQ5B4AT
status: active
merged_into: null
display_name: 王珉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HwPc2Cr9yD4zUEokVPq3fZ
        subject_person_id: p_myWGEdMf9oQRaYDVQ5B4AT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4AJMM5cacUCHtSaGamhKis
          claim_id: c_HwPc2Cr9yD4zUEokVPq3fZ
          source_id: s_APGYCMdtWYBPCeLtAJD7sQ
          stance: supports
          locator: CBDB:241145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241145）
          source: &a1
            id: s_APGYCMdtWYBPCeLtAJD7sQ
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 241145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json
            external_identifier: CBDB:241145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bm8KgQBZikDMEpypUMVwJj
        subject_person_id: p_myWGEdMf9oQRaYDVQ5B4AT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J_CFlosbiMFG76R9a4R45e
          claim_id: c_Bm8KgQBZikDMEpypUMVwJj
          source_id: s_APGYCMdtWYBPCeLtAJD7sQ
          stance: supports
          locator: CBDB:241145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gDF3uJ7G8-Eg0t-aVtc0IY
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_myWGEdMf9oQRaYDVQ5B4AT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHbgwPai5ctwU1DsXiu4oN
          claim_id: c_gDF3uJ7G8-Eg0t-aVtc0IY
          source_id: s_Ru1_5q5pi3Iw1cgED0OVGZ
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王珉 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王珉 之父／母。
          source:
            id: s_Ru1_5q5pi3Iw1cgED0OVGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 241145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json
            external_identifier: CBDB:241145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CsnxPJ1Pqskb685MNmLx9
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_A0twQzZElBAYsVOWyDrmMK
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_myWGEdMf9oQRaYDVQ5B4AT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WONYT3FMX_27RUDqkJUblk
          claim_id: c_A0twQzZElBAYsVOWyDrmMK
          source_id: s_Ru1_5q5pi3Iw1cgED0OVGZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ru1_5q5pi3Iw1cgED0OVGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 241145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json
            external_identifier: CBDB:241145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bF6WY3wgJWVigFgpBLaV3H
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | 王珉，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5CsnxPJ1Pqskb685MNmLx9 | 王鎬 | accepted |
| other | p_bF6WY3wgJWVigFgpBLaV3H | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 241145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json)
