---
schema: wang-person/v1
id: p_vhcCu9maYiwozZ887bpyfC
status: active
merged_into: null
display_name: 王秬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wG4y5wl2niC56yAp8vBPQE
        subject_person_id: p_vhcCu9maYiwozZ887bpyfC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬（卒于1173年），史料所见人物。本项目依据《王秬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KpFH_vBHp3SzaZ6QhsnYpQ
          claim_id: c_wG4y5wl2niC56yAp8vBPQE
          source_id: s_FL4kSNMxs8rmbatGJRKhFj
          stance: supports
          locator: Q45359428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FL4kSNMxs8rmbatGJRKhFj
            source_type: api_record
            title: 维基数据：王秬（Q45359428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359428
            external_identifier: Q45359428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.421Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qHdkWhhx6nL1dwEvJocR8D
        subject_person_id: p_vhcCu9maYiwozZ887bpyfC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1173年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1173-01-01
            latest: 1173-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tMXi3z87YoCa6iXJESJ7Nh
          claim_id: c_qHdkWhhx6nL1dwEvJocR8D
          source_id: s_FL4kSNMxs8rmbatGJRKhFj
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
        id: c_6jsA964GEqBRwq5JYEGJbc
        subject_person_id: p_vhcCu9maYiwozZ887bpyfC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6F43eT5d9AaFGHnDxpZqEq
          claim_id: c_6jsA964GEqBRwq5JYEGJbc
          source_id: s_FL4kSNMxs8rmbatGJRKhFj
          stance: supports
          locator: Q45359428
          quotation: null
          interpretation_note: null
          source:
            id: s_FL4kSNMxs8rmbatGJRKhFj
            source_type: api_record
            title: 维基数据：王秬（Q45359428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359428
            external_identifier: Q45359428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.421Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秬（卒于1173年），史料所见人物。本项目依据《王秬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1173年 | accepted |
| name.primary | 王秬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王秬（Q45359428）](https://www.wikidata.org/wiki/Q45359428)
