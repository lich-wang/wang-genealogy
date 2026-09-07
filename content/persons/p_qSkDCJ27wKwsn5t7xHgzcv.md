---
schema: wang-person/v1
id: p_qSkDCJ27wKwsn5t7xHgzcv
status: active
merged_into: null
display_name: 王世弼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DIka2t7Z_aB9q8cTOdX4vc
        subject_person_id: p_qSkDCJ27wKwsn5t7xHgzcv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世弼（？—520年），京兆郡霸城县（今陕西省西安市灞桥区）人，南齐、北魏官员。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EvLIoF7LtxyF_wDpTOBU4O
          claim_id: c_DIka2t7Z_aB9q8cTOdX4vc
          source_id: s_rO9xVgQprAl-ui6-6aMyF1
          stance: supports
          locator: 导言
          quotation: 王世弼（？—520年），京兆郡霸城县（今陕西省西安市灞桥区）人，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_rO9xVgQprAl-ui6-6aMyF1
            source_type: website
            title: 中文维基百科：王世弼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E5%BC%BC
            external_identifier: Q11572898
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7qJR2U9gJRKjWsntCgApc9
        subject_person_id: p_qSkDCJ27wKwsn5t7xHgzcv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D66jNq6no6GJfSeo1LzMqr
          claim_id: c_7qJR2U9gJRKjWsntCgApc9
          source_id: s_yVnNZ1nPQVBNA2mGS42jQn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yVnNZ1nPQVBNA2mGS42jQn
            source_type: api_record
            title: 维基数据：王世弼（Q11572898）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572898
            external_identifier: Q11572898
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:05.036Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_49cRBhcVorA9U6LosV9jhP
        subject_person_id: p_qSkDCJ27wKwsn5t7xHgzcv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 520年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0520-01-01
            latest: 0520-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pUrmKzN9cBAyfY8HBiVYHt
          claim_id: c_49cRBhcVorA9U6LosV9jhP
          source_id: s_yVnNZ1nPQVBNA2mGS42jQn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yVnNZ1nPQVBNA2mGS42jQn
            source_type: api_record
            title: 维基数据：王世弼（Q11572898）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572898
            external_identifier: Q11572898
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:05.036Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_75RtYgDQ6fczEMQmRoJHYs
        subject_person_id: p_qSkDCJ27wKwsn5t7xHgzcv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世弼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LKcwBVn2Ewdhky3EJojuHS
          claim_id: c_75RtYgDQ6fczEMQmRoJHYs
          source_id: s_yVnNZ1nPQVBNA2mGS42jQn
          stance: supports
          locator: Q11572898
          quotation: null
          interpretation_note: null
          source:
            id: s_yVnNZ1nPQVBNA2mGS42jQn
            source_type: api_record
            title: 维基数据：王世弼（Q11572898）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572898
            external_identifier: Q11572898
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:05.036Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LW38GbLNz8JhaZPGEkF1Mw
        subject_person_id: p_qSkDCJ27wKwsn5t7xHgzcv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3nDBm4NvnfwcdWJA92tVtP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4D3Xw8G3FcEkMFKM1tQRuE
          claim_id: c_LW38GbLNz8JhaZPGEkF1Mw
          source_id: s_SopLWnTm2YTbBKi3f5fpo6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SopLWnTm2YTbBKi3f5fpo6
            source_type: api_record
            title: 维基数据：王由（Q48903522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48903522
            external_identifier: Q48903522
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:11.336Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%94%B1
        - id: cs_qEEgKvV491grahWrWbD2DK
          claim_id: c_LW38GbLNz8JhaZPGEkF1Mw
          source_id: s_yVnNZ1nPQVBNA2mGS42jQn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_yVnNZ1nPQVBNA2mGS42jQn
            source_type: api_record
            title: 维基数据：王世弼（Q11572898）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572898
            external_identifier: Q11572898
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:05.036Z
            metadata_json: null
      object_person:
        id: p_3nDBm4NvnfwcdWJA92tVtP
        status: active
        display_name: 王由
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世弼（？—520年），京兆郡霸城县（今陕西省西安市灞桥区）人，南齐、北魏官员。 | accepted |
| birth.date | 5世纪 | accepted |
| death.date | 520年 | accepted |
| name.primary | 王世弼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3nDBm4NvnfwcdWJA92tVtP | 王由 | accepted |

## 外部来源

- [维基数据：王世弼（Q11572898）](https://www.wikidata.org/wiki/Q11572898)
- [维基数据：王由（Q48903522）](https://www.wikidata.org/wiki/Q48903522)
- [中文维基百科：王世弼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E5%BC%BC)
