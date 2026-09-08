---
schema: wang-person/v1
id: p_Zc7mv2e4ZRM13rfjpkZkya
status: active
merged_into: null
display_name: 王玼
revision: 2
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
          text: 王玼，明人物。CBDB 记录其籍贯记录为黃巖。中国历代人物传记资料库（CBDB）以人物编号 272144 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
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
| bio.summary | 王玼，明人物。CBDB 记录其籍贯记录为黃巖。中国历代人物传记资料库（CBDB）以人物编号 272144 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_255t2nDMrWzFXS93NLqNE3 | 王宗 | accepted |
| children | p_YFXpD1H4mYzD71g98dxSNt | 王爌 | accepted |

## 外部来源

- [维基数据：王玼（Q45436592）](https://www.wikidata.org/wiki/Q45436592)
- [维基数据：王爌（Q15926463）](https://www.wikidata.org/wiki/Q15926463)
- [维基数据：王宗（Q45436530）](https://www.wikidata.org/wiki/Q45436530)
- [CBDB 中国历代人物传记资料库：王玼（272144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272144&o=json)
