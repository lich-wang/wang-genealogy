---
schema: wang-person/v1
id: p_NPncefunYMmyKCiKheCMKZ
status: active
merged_into: null
display_name: 王轼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQPJgVTeownAYdrqbsFViL
        subject_person_id: p_NPncefunYMmyKCiKheCMKZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轼（1439年—1506年），天順進士。维基数据以独立条目 Q15912162 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3msyW3x3Wrh5GW_CyC5CA1
          claim_id: c_EQPJgVTeownAYdrqbsFViL
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: Q15912162
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c5P6XDESWQnou4eJfLqHdu
        subject_person_id: p_NPncefunYMmyKCiKheCMKZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1439-01-01
            latest: 1439-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7jbJJtBzy3AuaJJNJFd1bi
          claim_id: c_c5P6XDESWQnou4eJfLqHdu
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_aWjLxyejW5w8euUyzcHQvF
        subject_person_id: p_NPncefunYMmyKCiKheCMKZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1506-01-01
            latest: 1506-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_735mCw7pkT3bFEKC5MGrQk
          claim_id: c_aWjLxyejW5w8euUyzcHQvF
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_61XrnucGZMK1teswY1fCye
        subject_person_id: p_NPncefunYMmyKCiKheCMKZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Fct1zdrZHMBBWYjsiYtdPJ
          claim_id: c_61XrnucGZMK1teswY1fCye
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: Q15912162
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1k2pZ7SSCQADE6CQeMCjaK
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NPncefunYMmyKCiKheCMKZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V5gxA41qVaB9M3FNTwU337
          claim_id: c_1k2pZ7SSCQADE6CQeMCjaK
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
        - id: cs_tVspaXc4tK7d1F1konvMVW
          claim_id: c_1k2pZ7SSCQADE6CQeMCjaK
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
      object_person:
        id: p_7Tia4RakEpFHiC5SDiDZSG
        status: active
        display_name: 王让
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6R9Jf1BqPFERiVAq2TgiXY
        subject_person_id: p_NPncefunYMmyKCiKheCMKZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bwYb87M6DFugTWUd97Rhq5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JLsN1pZrLxKwEprNAoWN2D
          claim_id: c_6R9Jf1BqPFERiVAq2TgiXY
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
        - id: cs_ViWf6rGKBf92325yvf7hSL
          claim_id: c_6R9Jf1BqPFERiVAq2TgiXY
          source_id: s_DxPVBCG46JWMiND6Wpgj2r
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：天順八年進士登科錄:一卷
          source:
            id: s_DxPVBCG46JWMiND6Wpgj2r
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王軾（67466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json
            external_identifier: CBDB:67466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:24.656Z
            metadata_json: null
        - id: cs_iULo5wdUXmUhPKmAXT4phh
          claim_id: c_6R9Jf1BqPFERiVAq2TgiXY
          source_id: s_7TvKeCkuVtwxkZDD7vS8yw
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7TvKeCkuVtwxkZDD7vS8yw
            source_type: api_record
            title: 维基数据：张氏（Q65860464）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65860464
            external_identifier: Q65860464
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.084Z
            metadata_json: null
      object_person:
        id: p_bwYb87M6DFugTWUd97Rhq5
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王轼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王轼（1439年—1506年），天順進士。维基数据以独立条目 Q15912162 收录该人物。 | accepted |
| birth.date | 1439年 | accepted |
| death.date | 1506年 | accepted |
| name.primary | 王轼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Tia4RakEpFHiC5SDiDZSG | 王让 | accepted |
| spouses | p_bwYb87M6DFugTWUd97Rhq5 | 张氏 | accepted |

## 外部来源

- [维基数据：王让（Q45561003）](https://www.wikidata.org/wiki/Q45561003)
- [维基数据：王轼（Q15912162）](https://www.wikidata.org/wiki/Q15912162)
- [维基数据：张氏（Q65860464）](https://www.wikidata.org/wiki/Q65860464)
- [CBDB 中国历代人物传记资料库：王軾（67466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json)
