---
schema: wang-person/v1
id: p_d3w2Zz33HMdUXy7wFyvT4A
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L8L8bYyLPt4iju4Ze2hTRq
        subject_person_id: p_d3w2Zz33HMdUXy7wFyvT4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，元人物。CBDB 记录其籍贯记录为槁城，身份包括農民。中国历代人物传记资料库（CBDB）以人物编号 29509 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WN6mDMB3d4mdM3gzgxyxX1
          claim_id: c_L8L8bYyLPt4iju4Ze2hTRq
          source_id: s_fM1HdZ9v9LYkiBLv4jj8Zy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fM1HdZ9v9LYkiBLv4jj8Zy
            source_type: api_record
            title: 维基数据：王恕（Q45416101）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416101
            external_identifier: Q45416101
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_pKRuvtF2czQqQjtMIsZzak
          claim_id: c_L8L8bYyLPt4iju4Ze2hTRq
          source_id: s_EDzaVnfanBFu1h81WtsKxn
          stance: supports
          locator: CBDB:29509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EDzaVnfanBFu1h81WtsKxn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恕（29509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29509&o=json
            external_identifier: CBDB:29509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:00.863Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BQ8GhhFrbpm5UxC7uV5cWs
        subject_person_id: p_d3w2Zz33HMdUXy7wFyvT4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nmR8q64aRXBNDQakV3F1Mg
          claim_id: c_BQ8GhhFrbpm5UxC7uV5cWs
          source_id: s_fM1HdZ9v9LYkiBLv4jj8Zy
          stance: supports
          locator: Q45416101
          quotation: null
          interpretation_note: null
          source:
            id: s_fM1HdZ9v9LYkiBLv4jj8Zy
            source_type: api_record
            title: 维基数据：王恕（Q45416101）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416101
            external_identifier: Q45416101
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_w1mdsCTzEewyGEazqHxMgB
          claim_id: c_BQ8GhhFrbpm5UxC7uV5cWs
          source_id: s_EDzaVnfanBFu1h81WtsKxn
          stance: supports
          locator: Q45416101
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gNz9UFchhh9RBk1zxEmPMG
        subject_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_d3w2Zz33HMdUXy7wFyvT4A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Cw1Sr1wQoXmqd9oPTEMx3
          claim_id: c_gNz9UFchhh9RBk1zxEmPMG
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_q3DfY227GV45awewhA8Nrq
            source_type: api_record
            title: 维基数据：王若虚（Q10416678）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416678
            external_identifier: Q10416678
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
        - id: cs_Dk4PSCRtd7DQiZjwQ4Xpnj
          claim_id: c_gNz9UFchhh9RBk1zxEmPMG
          source_id: s_fM1HdZ9v9LYkiBLv4jj8Zy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fM1HdZ9v9LYkiBLv4jj8Zy
            source_type: api_record
            title: 维基数据：王恕（Q45416101）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416101
            external_identifier: Q45416101
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_PBP6YVcvwrDt86khj53j8e
          claim_id: c_gNz9UFchhh9RBk1zxEmPMG
          source_id: s_X9p7LZ9BW7sNm3GoU1w76w
          stance: supports
          locator: 亲属关系：獨子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_X9p7LZ9BW7sNm3GoU1w76w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王若虛（29507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29507&o=json
            external_identifier: CBDB:29507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:35.582Z
            metadata_json: null
      object_person:
        id: p_bzAQKjWizMdy4cRiMEN5wC
        status: active
        display_name: 王若虚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恕，元人物。CBDB 记录其籍贯记录为槁城，身份包括農民。中国历代人物传记资料库（CBDB）以人物编号 29509 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王恕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bzAQKjWizMdy4cRiMEN5wC | 王若虚 | accepted |

## 外部来源

- [维基数据：王若虚（Q10416678）](https://www.wikidata.org/wiki/Q10416678)
- [维基数据：王恕（Q45416101）](https://www.wikidata.org/wiki/Q45416101)
- [CBDB 中国历代人物传记资料库：王若虛（29507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29507&o=json)
- [CBDB 中国历代人物传记资料库：王恕（29509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29509&o=json)
