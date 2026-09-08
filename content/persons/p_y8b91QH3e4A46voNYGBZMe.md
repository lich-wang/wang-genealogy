---
schema: wang-person/v1
id: p_y8b91QH3e4A46voNYGBZMe
status: active
merged_into: null
display_name: 王嗣昌
cbdb_id: 175559
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yriyny81J93A3RLeBjkKPH
        subject_person_id: p_y8b91QH3e4A46voNYGBZMe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣昌（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175559 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Hx2atd2v1P2fhBfJh4yEHp
          claim_id: c_yriyny81J93A3RLeBjkKPH
          source_id: s_Go4DmtqKjSm8V2fAfHDRco
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Go4DmtqKjSm8V2fAfHDRco
            source_type: api_record
            title: 维基数据：王嗣昌（Q45666506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666506
            external_identifier: Q45666506
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_tYNFqiE5jAUgE4tdgAEScL
          claim_id: c_yriyny81J93A3RLeBjkKPH
          source_id: s_V6UQq479KuF5YNmsKrtTQt
          stance: supports
          locator: CBDB:175559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V6UQq479KuF5YNmsKrtTQt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣昌（175559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175559&o=json
            external_identifier: CBDB:175559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.151Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ggwABPFYijaDJTUV3jcbbR
        subject_person_id: p_y8b91QH3e4A46voNYGBZMe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m68i3o8Wn9MP19BQrtqQa5
          claim_id: c_ggwABPFYijaDJTUV3jcbbR
          source_id: s_Go4DmtqKjSm8V2fAfHDRco
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Go4DmtqKjSm8V2fAfHDRco
            source_type: api_record
            title: 维基数据：王嗣昌（Q45666506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666506
            external_identifier: Q45666506
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KRWA9C31AVc9xMujMvtd3n
        subject_person_id: p_y8b91QH3e4A46voNYGBZMe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣昌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8yHpmjyfCmNMLyW1ooyKgX
          claim_id: c_KRWA9C31AVc9xMujMvtd3n
          source_id: s_Go4DmtqKjSm8V2fAfHDRco
          stance: supports
          locator: Q45666506
          quotation: null
          interpretation_note: null
          source:
            id: s_Go4DmtqKjSm8V2fAfHDRco
            source_type: api_record
            title: 维基数据：王嗣昌（Q45666506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666506
            external_identifier: Q45666506
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_ChgaBu3NdphABgU7daFb5o
          claim_id: c_KRWA9C31AVc9xMujMvtd3n
          source_id: s_V6UQq479KuF5YNmsKrtTQt
          stance: supports
          locator: Q45666506
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wq3GPBDhGFa7VVtAF8Amz8
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8b91QH3e4A46voNYGBZMe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YLJ9UXQDBZshKgz3BVAxx3
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_cSQN58UHdWXq5Qp4FC9XMG
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_7g1NTYMMwtt2aH1314d3AT
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_Go4DmtqKjSm8V2fAfHDRco
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Go4DmtqKjSm8V2fAfHDRco
            source_type: api_record
            title: 维基数据：王嗣昌（Q45666506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666506
            external_identifier: Q45666506
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_VVBoeCyBbT3sXybXh2C4RS
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_V6UQq479KuF5YNmsKrtTQt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_V6UQq479KuF5YNmsKrtTQt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣昌（175559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175559&o=json
            external_identifier: CBDB:175559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.151Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣昌（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175559 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王嗣昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |

## 外部来源

- [维基数据：王嗣昌（Q45666506）](https://www.wikidata.org/wiki/Q45666506)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王嗣昌（175559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175559&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
