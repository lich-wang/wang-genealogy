---
schema: wang-person/v1
id: p_nAcvuR3XXjLqTH4m91wGfV
status: active
merged_into: null
display_name: 王宜之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CyEMhKZqPdM9hVDXwTn4Cv
        subject_person_id: p_nAcvuR3XXjLqTH4m91wGfV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜之，宋人物。CBDB 记录其籍贯记录为烏程。中国历代人物传记资料库（CBDB）以人物编号 36517 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1B58Xtdkz9fib3jRZgvUu9
          claim_id: c_CyEMhKZqPdM9hVDXwTn4Cv
          source_id: s_Dn4c389mVDsanz2KMS6F4t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Dn4c389mVDsanz2KMS6F4t
            source_type: api_record
            title: 维基数据：王宜之（Q45427782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427782
            external_identifier: Q45427782
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_UXGaocJc1MMZxR5aJ3AS3L
          claim_id: c_CyEMhKZqPdM9hVDXwTn4Cv
          source_id: s_w7DwTCuaPiaszpQvhBYbiG
          stance: supports
          locator: CBDB:36517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w7DwTCuaPiaszpQvhBYbiG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宜之（36517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36517&o=json
            external_identifier: CBDB:36517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.546Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EKaAsQBAjFitXWBrZDdsmS
        subject_person_id: p_nAcvuR3XXjLqTH4m91wGfV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aU6a3Dkb3giTLkoiR6Y38P
          claim_id: c_EKaAsQBAjFitXWBrZDdsmS
          source_id: s_w7DwTCuaPiaszpQvhBYbiG
          stance: supports
          locator: Q45427782
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yig1XHNKKbwyQZWb1Bsx5d
          claim_id: c_EKaAsQBAjFitXWBrZDdsmS
          source_id: s_Dn4c389mVDsanz2KMS6F4t
          stance: supports
          locator: Q45427782
          quotation: null
          interpretation_note: null
          source:
            id: s_Dn4c389mVDsanz2KMS6F4t
            source_type: api_record
            title: 维基数据：王宜之（Q45427782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427782
            external_identifier: Q45427782
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n3QV7aTDLexpZ25GUdYdXP
        subject_person_id: p_sJJf5iLL8jKATB3SGymAEh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nAcvuR3XXjLqTH4m91wGfV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1coUPUdkbrvvMCUqB6B5tC
          claim_id: c_n3QV7aTDLexpZ25GUdYdXP
          source_id: s_mEBYMH5kdjjtRC5hDznzCe
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mEBYMH5kdjjtRC5hDznzCe
            source_type: api_record
            title: 维基数据：王珏（Q45359441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359441
            external_identifier: Q45359441
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_5qvELCmLo8m5HnKtJAoXUr
          claim_id: c_n3QV7aTDLexpZ25GUdYdXP
          source_id: s_oouDz44Q7KDuVLqbnpogG7
          stance: supports
          locator: 亲属关系：獨子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_oouDz44Q7KDuVLqbnpogG7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珏（1796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1796&o=json
            external_identifier: CBDB:1796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:02.855Z
            metadata_json: null
        - id: cs_fs8KV7g42SRcMKNnya4mME
          claim_id: c_n3QV7aTDLexpZ25GUdYdXP
          source_id: s_Dn4c389mVDsanz2KMS6F4t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Dn4c389mVDsanz2KMS6F4t
            source_type: api_record
            title: 维基数据：王宜之（Q45427782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427782
            external_identifier: Q45427782
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_B2GE7xuApigXZwASn99mMD
          claim_id: c_n3QV7aTDLexpZ25GUdYdXP
          source_id: s_w7DwTCuaPiaszpQvhBYbiG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_w7DwTCuaPiaszpQvhBYbiG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宜之（36517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36517&o=json
            external_identifier: CBDB:36517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.546Z
            metadata_json: null
      object_person:
        id: p_sJJf5iLL8jKATB3SGymAEh
        status: active
        display_name: 王珏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宜之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宜之，宋人物。CBDB 记录其籍贯记录为烏程。中国历代人物传记资料库（CBDB）以人物编号 36517 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宜之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sJJf5iLL8jKATB3SGymAEh | 王珏 | accepted |

## 外部来源

- [维基数据：王珏（Q45359441）](https://www.wikidata.org/wiki/Q45359441)
- [维基数据：王宜之（Q45427782）](https://www.wikidata.org/wiki/Q45427782)
- [CBDB 中国历代人物传记资料库：王珏（1796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1796&o=json)
- [CBDB 中国历代人物传记资料库：王宜之（36517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36517&o=json)
