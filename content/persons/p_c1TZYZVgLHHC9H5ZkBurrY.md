---
schema: wang-person/v1
id: p_c1TZYZVgLHHC9H5ZkBurrY
status: active
merged_into: null
display_name: 王靖之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NtsDbFFYxlg15huYxxGXRj
        subject_person_id: p_c1TZYZVgLHHC9H5ZkBurrY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖之，史料所见人物。本项目依据《維基數據：王靖之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_t_5K4Lz-c8n2IOgnR3JISf
          claim_id: c_NtsDbFFYxlg15huYxxGXRj
          source_id: s_n3SRECKend5W8Y18sURPuj
          stance: supports
          locator: Q67196814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n3SRECKend5W8Y18sURPuj
            source_type: api_record
            title: 維基數據：王靖之（Q67196814）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q67196814
            external_identifier: Q67196814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:21.306Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BEcwahhhRKveKXeRFHDcFA
        subject_person_id: p_c1TZYZVgLHHC9H5ZkBurrY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nexJGfz5k4ZK4bcRKhpN6o
          claim_id: c_BEcwahhhRKveKXeRFHDcFA
          source_id: s_n3SRECKend5W8Y18sURPuj
          stance: supports
          locator: Q67196814
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FTrF5nVWMLREHnB5PV9wn5
        subject_person_id: p_9kvwNC8EwFdL41MBGhg7HG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c1TZYZVgLHHC9H5ZkBurrY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JYN11418GgDBQ1LZ66oWj9
          claim_id: c_FTrF5nVWMLREHnB5PV9wn5
          source_id: s_95dF5c3fH2rDR5sHrw8xuZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_95dF5c3fH2rDR5sHrw8xuZ
            source_type: website
            title: 中文维基百科：王獻之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王獻之
            external_identifier: Q559425
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_Tek6gs1v1TzEAQkNS9p8Lm
          claim_id: c_FTrF5nVWMLREHnB5PV9wn5
          source_id: s_dypc2T3zk15WKQ7XHyCLp1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dypc2T3zk15WKQ7XHyCLp1
            source_type: api_record
            title: 維基數據：王獻之（Q559425）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q559425
            external_identifier: Q559425
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:47.659Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%AE%E4%B9%8B
        - id: cs_5kx1fgQ75gHxJ8qvQFHUYK
          claim_id: c_FTrF5nVWMLREHnB5PV9wn5
          source_id: s_n3SRECKend5W8Y18sURPuj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_n3SRECKend5W8Y18sURPuj
            source_type: api_record
            title: 維基數據：王靖之（Q67196814）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q67196814
            external_identifier: Q67196814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:21.306Z
            metadata_json: null
      object_person:
        id: p_9kvwNC8EwFdL41MBGhg7HG
        status: active
        display_name: 王獻之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王靖之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靖之，史料所见人物。本项目依据《維基數據：王靖之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王靖之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9kvwNC8EwFdL41MBGhg7HG | 王獻之 | accepted |

## 外部来源

- [維基數據：王靖之（Q67196814）](https://www.wikidata.org/wiki/Q67196814)
- [維基數據：王獻之（Q559425）](https://www.wikidata.org/wiki/Q559425)
- [中文维基百科：王獻之](https://zh.wikipedia.org/wiki/王獻之)
