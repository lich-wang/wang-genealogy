---
schema: wang-person/v1
id: p_gCD2GDK6A4kzkP2Xc3aWB3
status: active
merged_into: null
display_name: 王彭之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_l_mmHKnyPNhNzodOinM-E0
        subject_person_id: p_gCD2GDK6A4kzkP2Xc3aWB3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭之，史料所见人物。本项目依据《王彭之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PIiJzpABjsr93DkqUgCzMX
          claim_id: c_l_mmHKnyPNhNzodOinM-E0
          source_id: s_GHgHH1y2ZZkykRTcrs57H4
          stance: supports
          locator: Q22815025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GHgHH1y2ZZkykRTcrs57H4
            source_type: api_record
            title: 维基数据：王彭之（Q22815025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815025
            external_identifier: Q22815025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CmH33rQvJ1Mh8Caz5n7uxn
        subject_person_id: p_gCD2GDK6A4kzkP2Xc3aWB3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jmTJGsrtyEVhZqVu73v9fk
          claim_id: c_CmH33rQvJ1Mh8Caz5n7uxn
          source_id: s_GHgHH1y2ZZkykRTcrs57H4
          stance: supports
          locator: Q22815025
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1STkMmxuBdNRfftvHEv3h2
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gCD2GDK6A4kzkP2Xc3aWB3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_24P2fA1tbpuFCxkNVJiF1n
          claim_id: c_1STkMmxuBdNRfftvHEv3h2
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_M4zzsbJSRq3bAo8JcT9UJN
          claim_id: c_1STkMmxuBdNRfftvHEv3h2
          source_id: s_GHgHH1y2ZZkykRTcrs57H4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GHgHH1y2ZZkykRTcrs57H4
            source_type: api_record
            title: 维基数据：王彭之（Q22815025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815025
            external_identifier: Q22815025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_PULX1Jg5LaHh489zq9YfMZ
          claim_id: c_1STkMmxuBdNRfftvHEv3h2
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王彭之
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_R5y82s3r8Ph6RksxdRRR99
        status: active
        display_name: 王彬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彭之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彭之，史料所见人物。本项目依据《王彭之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王彭之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R5y82s3r8Ph6RksxdRRR99 | 王彬 | accepted |

## 外部来源

- [维基数据：王彬（Q15909509）](https://www.wikidata.org/wiki/Q15909509)
- [维基数据：王彭之（Q22815025）](https://www.wikidata.org/wiki/Q22815025)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
