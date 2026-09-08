---
schema: wang-person/v1
id: p_VhYJfua3oKHd9zWvRRU8LK
status: active
merged_into: null
display_name: 王銲
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hup5cdHkkr82wO1QWqO1hZ
        subject_person_id: p_VhYJfua3oKHd9zWvRRU8LK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銲（生于752年），史料所见人物。本项目依据《王銲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qAV5yTc7QP2lueijC4QX1-
          claim_id: c_Hup5cdHkkr82wO1QWqO1hZ
          source_id: s_hGMxK9qCJ3iKjQGBh2Rpgc
          stance: supports
          locator: Q11572873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hGMxK9qCJ3iKjQGBh2Rpgc
            source_type: api_record
            title: 维基数据：王銲（Q11572873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572873
            external_identifier: Q11572873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ouMrzG9gzKEjywVca9nzb4
        subject_person_id: p_VhYJfua3oKHd9zWvRRU8LK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0752-01-01
            latest: 0752-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bPZ7AcNA2ndLvkzUkgEe5a
          claim_id: c_ouMrzG9gzKEjywVca9nzb4
          source_id: s_hGMxK9qCJ3iKjQGBh2Rpgc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wxziGnBcEPhhsn2e1kzhMC
        subject_person_id: p_VhYJfua3oKHd9zWvRRU8LK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JwAw84pZSmD9KNEADF2eKD
          claim_id: c_wxziGnBcEPhhsn2e1kzhMC
          source_id: s_hGMxK9qCJ3iKjQGBh2Rpgc
          stance: supports
          locator: Q11572873
          quotation: null
          interpretation_note: null
          source:
            id: s_hGMxK9qCJ3iKjQGBh2Rpgc
            source_type: api_record
            title: 维基数据：王銲（Q11572873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572873
            external_identifier: Q11572873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SiVYUhhUh1LkcFYmrCTn5X
        subject_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VhYJfua3oKHd9zWvRRU8LK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRuHYoapf9URLrANXqj1T8
          claim_id: c_SiVYUhhUh1LkcFYmrCTn5X
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4FfCSxs5x4oN7PKmKxPivL
            source_type: api_record
            title: 维基数据：王瑨（Q26209205）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209205
            external_identifier: Q26209205
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_fM3P1nDkWoCt8RYNZQdCwM
          claim_id: c_SiVYUhhUh1LkcFYmrCTn5X
          source_id: s_hGMxK9qCJ3iKjQGBh2Rpgc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_SWj94NjtR8s9z11cKaR2Bx
        status: active
        display_name: 王瑨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王銲（生于752年），史料所见人物。本项目依据《王銲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 752年 | accepted |
| name.primary | 王銲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SWj94NjtR8s9z11cKaR2Bx | 王瑨 | accepted |

## 外部来源

- [维基数据：王銲（Q11572873）](https://www.wikidata.org/wiki/Q11572873)
- [维基数据：王瑨（Q26209205）](https://www.wikidata.org/wiki/Q26209205)
