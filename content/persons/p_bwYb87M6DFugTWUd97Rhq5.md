---
schema: wang-person/v1
id: p_bwYb87M6DFugTWUd97Rhq5
status: active
merged_into: null
display_name: 张氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DtrsDEO-kTXLi1FQjJpYBj
        subject_person_id: p_bwYb87M6DFugTWUd97Rhq5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，王軾妻。维基数据以独立条目 Q65860464 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_O_fT1FmoWopqPGnkUaHQtJ
          claim_id: c_DtrsDEO-kTXLi1FQjJpYBj
          source_id: s_7TvKeCkuVtwxkZDD7vS8yw
          stance: supports
          locator: Q65860464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_46HA9WCwCtdgs46rCC5bMN
        subject_person_id: p_bwYb87M6DFugTWUd97Rhq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oHGmVWts2rMcoSNNQcDef2
          claim_id: c_46HA9WCwCtdgs46rCC5bMN
          source_id: s_7TvKeCkuVtwxkZDD7vS8yw
          stance: supports
          locator: Q65860464
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_oNxrhaBEMN4GQaFFUtDrEU
          claim_id: c_46HA9WCwCtdgs46rCC5bMN
          source_id: s_fczo2JCMLo6Q6J3gkaUXcH
          stance: supports
          locator: Q65860464
          quotation: null
          interpretation_note: null
          source:
            id: s_fczo2JCMLo6Q6J3gkaUXcH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（333177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333177&o=json
            external_identifier: CBDB:333177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:43.293Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
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
        id: p_NPncefunYMmyKCiKheCMKZ
        status: active
        display_name: 王轼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，王軾妻。维基数据以独立条目 Q65860464 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NPncefunYMmyKCiKheCMKZ | 王轼 | accepted |

## 外部来源

- [维基数据：王轼（Q15912162）](https://www.wikidata.org/wiki/Q15912162)
- [维基数据：张氏（Q65860464）](https://www.wikidata.org/wiki/Q65860464)
- [CBDB 中国历代人物传记资料库：王軾（67466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json)
- [CBDB 中国历代人物传记资料库：張氏（333177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333177&o=json)
