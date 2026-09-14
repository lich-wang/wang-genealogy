---
schema: wang-person/v1
id: p_Zc7mv2e4ZRM13rfjpkZkya
status: active
merged_into: null
display_name: 王玼
cbdb_id: 272144
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3hZ7kjDbfMFFE7ce6gDusA
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玼，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BW2hgVbtiWAoLK8vx5FAUZ
          claim_id: c_3hZ7kjDbfMFFE7ce6gDusA
          source_id: s_YXrnRLtd5RNpZ3VXKj43wz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YXrnRLtd5RNpZ3VXKj43wz
            source_type: api_record
            title: 维基数据：王玼（Q45436592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436592
            external_identifier: Q45436592
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_y4MHrR_-UVnfgzcwedWl8a
          claim_id: c_3hZ7kjDbfMFFE7ce6gDusA
          source_id: s_G6mDRfhyCyky3TvhbbKYUw
          stance: supports
          locator: CBDB:272144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_G6mDRfhyCyky3TvhbbKYUw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王玼（272144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272144&o=json
            external_identifier: CBDB:272144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:50.134Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFzrvrcXKzvuL1uT7uvAsF
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1R1cxtekftPDNFzsqFqrZW
          claim_id: c_TFzrvrcXKzvuL1uT7uvAsF
          source_id: s_YXrnRLtd5RNpZ3VXKj43wz
          stance: supports
          locator: Q45436592
          quotation: null
          interpretation_note: null
          source:
            id: s_YXrnRLtd5RNpZ3VXKj43wz
            source_type: api_record
            title: 维基数据：王玼（Q45436592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436592
            external_identifier: Q45436592
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_AaFDT8BkG5JxffRJukLLEj
          claim_id: c_TFzrvrcXKzvuL1uT7uvAsF
          source_id: s_G6mDRfhyCyky3TvhbbKYUw
          stance: supports
          locator: Q45436592
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bmimr1QGsL3rAGf6izKMwA
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G2WkTjQG7LogUEfmtxy51t
          claim_id: c_Bmimr1QGsL3rAGf6izKMwA
          source_id: s_YXrnRLtd5RNpZ3VXKj43wz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YXrnRLtd5RNpZ3VXKj43wz
            source_type: api_record
            title: 维基数据：王玼（Q45436592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436592
            external_identifier: Q45436592
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_MuSd8V6MHpzbzxGRnFWSa9
          claim_id: c_Bmimr1QGsL3rAGf6izKMwA
          source_id: s_aQzAA5DLYuYCc83Ec75f7c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_aQzAA5DLYuYCc83Ec75f7c
            source_type: api_record
            title: 维基数据：王宗（Q45436530）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436530
            external_identifier: Q45436530
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
      object_person:
        id: p_255t2nDMrWzFXS93NLqNE3
        status: active
        display_name: 王宗
        merged_into_person_id: null
  children:
    - claim:
        id: c_nqzvHmtDf2HMLtn45QDxE9
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YFXpD1H4mYzD71g98dxSNt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EqpEoUx4AkoHUipNUNmWeq
          claim_id: c_nqzvHmtDf2HMLtn45QDxE9
          source_id: s_nMm7HFiky9P7HNhESGnnNx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nMm7HFiky9P7HNhESGnnNx
            source_type: api_record
            title: 维基数据：王爌（Q15926463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926463
            external_identifier: Q15926463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
        - id: cs_T5uKDMC8mfB6wvizrJ9J5m
          claim_id: c_nqzvHmtDf2HMLtn45QDxE9
          source_id: s_YXrnRLtd5RNpZ3VXKj43wz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YXrnRLtd5RNpZ3VXKj43wz
            source_type: api_record
            title: 维基数据：王玼（Q45436592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436592
            external_identifier: Q45436592
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
      object_person:
        id: p_YFXpD1H4mYzD71g98dxSNt
        status: active
        display_name: 王爌
        merged_into_person_id: null
    - claim:
        id: c_36jFLGw2pdbLnDYQb_EWDt
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kv39NRa4pyncJyBwuhLb4Z
          claim_id: c_36jFLGw2pdbLnDYQb_EWDt
          source_id: s_WKZA2u0n1ON6z96B_28XHz
          stance: supports
          locator: CBDB：兄弟 王爌（68280）之父／母 王玼
          quotation: null
          interpretation_note: 由兄弟关系推断：王炫 与 王爌 为同胞（CBDB 记「兄」），王爌 之父／母即 王炫 之父／母。
          source:
            id: s_WKZA2u0n1ON6z96B_28XHz
            source_type: api_record
            title: 中国历代人物传记资料库：王炫（CBDB 272149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json
            external_identifier: CBDB:272149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C3UyF1t9PwmEJYY4zJQBV8
        status: active
        display_name: 王炫
        merged_into_person_id: null
    - claim:
        id: c_PVSr_S1UrvEh9npynUHF-w
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zFbpxQtGYwWDiJxKzHRPE1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRVvBOJ0_KX52OehD13rnx
          claim_id: c_PVSr_S1UrvEh9npynUHF-w
          source_id: s_lfiHtzYr_uFCxFKTldP9LR
          stance: supports
          locator: CBDB：兄弟 王爌（68280）之父／母 王玼
          quotation: null
          interpretation_note: 由兄弟关系推断：王燁 与 王爌 为同胞（CBDB 记「弟」），王爌 之父／母即 王燁 之父／母。
          source:
            id: s_lfiHtzYr_uFCxFKTldP9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 272147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272147&o=json
            external_identifier: CBDB:272147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zFbpxQtGYwWDiJxKzHRPE1
        status: active
        display_name: 王燁
        merged_into_person_id: null
    - claim:
        id: c_atFlXzu03HVHrH0-3Lc8fK
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zu3QxS3dL67wx3qZ58j46L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qcDzY8sbZb2PfERyDqBmdq
          claim_id: c_atFlXzu03HVHrH0-3Lc8fK
          source_id: s_uS4YULKSrRWQS63OT7bDSp
          stance: supports
          locator: CBDB：兄弟 王爌（68280）之父／母 王玼
          quotation: null
          interpretation_note: 由兄弟关系推断：王烈 与 王爌 为同胞（CBDB 记「弟」），王爌 之父／母即 王烈 之父／母。
          source:
            id: s_uS4YULKSrRWQS63OT7bDSp
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 272148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272148&o=json
            external_identifier: CBDB:272148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zu3QxS3dL67wx3qZ58j46L
        status: active
        display_name: 王烈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玼，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272144） | accepted |
| name.primary | 王玼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_255t2nDMrWzFXS93NLqNE3 | 王宗 | accepted |
| children | p_YFXpD1H4mYzD71g98dxSNt | 王爌 | accepted |
| children | p_C3UyF1t9PwmEJYY4zJQBV8 | 王炫 | accepted |
| children | p_zFbpxQtGYwWDiJxKzHRPE1 | 王燁 | accepted |
| children | p_zu3QxS3dL67wx3qZ58j46L | 王烈 | accepted |

## 外部来源

- [维基数据：王玼（Q45436592）](https://www.wikidata.org/wiki/Q45436592)
- [维基数据：王爌（Q15926463）](https://www.wikidata.org/wiki/Q15926463)
- [维基数据：王宗（Q45436530）](https://www.wikidata.org/wiki/Q45436530)
- [中国历代人物传记资料库：王烈（CBDB 272148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272148&o=json)
- [中国历代人物传记资料库：王炫（CBDB 272149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json)
- [中国历代人物传记资料库：王燁（CBDB 272147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272147&o=json)
- [CBDB 中国历代人物传记资料库：王玼（272144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272144&o=json)
