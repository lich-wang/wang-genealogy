---
schema: wang-person/v1
id: p_yr8fqvLJH1oMzLPa3PcC7o
status: active
merged_into: null
display_name: 王世隆
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pPKo1tw9xU28Lr6U-6I5rm
        subject_person_id: p_yr8fqvLJH1oMzLPa3PcC7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆（卒于1004年），史料所见人物。本项目依据《王世隆》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-GVESm54awxPM92yh-ntGf
          claim_id: c_pPKo1tw9xU28Lr6U-6I5rm
          source_id: s_j39bhEb8FT67PtzQts5Lna
          stance: supports
          locator: Q45387131
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_j39bhEb8FT67PtzQts5Lna
            source_type: api_record
            title: 维基数据：王世隆（Q45387131）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387131
            external_identifier: Q45387131
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.660Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iAyGdwMyuxaDDUKSEogwkP
        subject_person_id: p_yr8fqvLJH1oMzLPa3PcC7o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1004年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1004-01-01
            latest: 1004-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JavCJnHAWrmyM5oUW7Ktef
          claim_id: c_iAyGdwMyuxaDDUKSEogwkP
          source_id: s_j39bhEb8FT67PtzQts5Lna
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
        id: c_d8ehbxJ6Y4GiBGqc9KpvPo
        subject_person_id: p_yr8fqvLJH1oMzLPa3PcC7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ttDLEwyP19HXHWcA7EMxmB
          claim_id: c_d8ehbxJ6Y4GiBGqc9KpvPo
          source_id: s_j39bhEb8FT67PtzQts5Lna
          stance: supports
          locator: Q45387131
          quotation: null
          interpretation_note: null
          source:
            id: s_j39bhEb8FT67PtzQts5Lna
            source_type: api_record
            title: 维基数据：王世隆（Q45387131）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387131
            external_identifier: Q45387131
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.660Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gMukSmM47KHD7CZKqSKmed
        subject_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_yr8fqvLJH1oMzLPa3PcC7o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BqRBfauEerpUZLvwDBCoPb
          claim_id: c_gMukSmM47KHD7CZKqSKmed
          source_id: s_5h3ogmep1VLLiYxHP9RUqR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5h3ogmep1VLLiYxHP9RUqR
            source_type: api_record
            title: 维基数据：王承衍（Q28415659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28415659
            external_identifier: Q28415659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E8%A1%8D
        - id: cs_izNBH9HLeWbLETW4QXBiqK
          claim_id: c_gMukSmM47KHD7CZKqSKmed
          source_id: s_j39bhEb8FT67PtzQts5Lna
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_j39bhEb8FT67PtzQts5Lna
            source_type: api_record
            title: 维基数据：王世隆（Q45387131）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387131
            external_identifier: Q45387131
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.660Z
            metadata_json: null
      object_person:
        id: p_6MGDJDsMfhoCMpi8TCXnFR
        status: active
        display_name: 王承衍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世隆（卒于1004年），史料所见人物。本项目依据《王世隆》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1004年 | accepted |
| name.primary | 王世隆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |

## 外部来源

- [维基数据：王承衍（Q28415659）](https://www.wikidata.org/wiki/Q28415659)
- [维基数据：王世隆（Q45387131）](https://www.wikidata.org/wiki/Q45387131)
