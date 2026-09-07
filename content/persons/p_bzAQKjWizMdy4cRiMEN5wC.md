---
schema: wang-person/v1
id: p_bzAQKjWizMdy4cRiMEN5wC
status: active
merged_into: null
display_name: 王若虚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_10cIyZ54j85O6Is34wZWZc
        subject_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若虚（1174年—1243年），史料所见人物。本项目依据《王若虚》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_7DTnEDrwL7X46kJk9P5qlK
          claim_id: c_10cIyZ54j85O6Is34wZWZc
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: Q10416678
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xBMvWUXNeZVHJNoYa97GPT
        subject_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1174年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1174-01-01
            latest: 1174-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AbkYa2GkNTTZabB9ABBMxM
          claim_id: c_xBMvWUXNeZVHJNoYa97GPT
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Bmuz6iTihLFy4VhN1Wa9jM
        subject_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1243年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1243-01-01
            latest: 1243-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_szrcqw1dZCKZyNp3rwRQx6
          claim_id: c_Bmuz6iTihLFy4VhN1Wa9jM
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aX7oAwKm6i2BTC1JcJWYLH
        subject_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若虚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Kux6TsMy5JjLeVhb6mB792
          claim_id: c_aX7oAwKm6i2BTC1JcJWYLH
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: Q10416678
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JBFZsEk9ZmggqNTnFgNi5M
        subject_person_id: p_5n5BCmMC6knNH6nTbms1wx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WFRh37G6dUvNHb27GjEdgn
          claim_id: c_JBFZsEk9ZmggqNTnFgNi5M
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: P22（父）
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
        - id: cs_oPdN9HPDdEKnLvhf3Cd7tR
          claim_id: c_JBFZsEk9ZmggqNTnFgNi5M
          source_id: s_YHRoir3GbWsFC4aCHfeCcL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YHRoir3GbWsFC4aCHfeCcL
            source_type: api_record
            title: 维基数据：王靖（Q45416099）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416099
            external_identifier: Q45416099
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
      object_person:
        id: p_5n5BCmMC6knNH6nTbms1wx
        status: active
        display_name: 王靖
        merged_into_person_id: null
  children:
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
        id: p_d3w2Zz33HMdUXy7wFyvT4A
        status: active
        display_name: 王恕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王若虚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王若虚（1174年—1243年），史料所见人物。本项目依据《王若虚》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1174年 | accepted |
| death.date | 1243年 | accepted |
| name.primary | 王若虚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5n5BCmMC6knNH6nTbms1wx | 王靖 | accepted |
| children | p_d3w2Zz33HMdUXy7wFyvT4A | 王恕 | accepted |

## 外部来源

- [维基数据：王靖（Q45416099）](https://www.wikidata.org/wiki/Q45416099)
- [维基数据：王若虚（Q10416678）](https://www.wikidata.org/wiki/Q10416678)
- [维基数据：王恕（Q45416101）](https://www.wikidata.org/wiki/Q45416101)
- [CBDB 中国历代人物传记资料库：王若虛（29507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29507&o=json)
