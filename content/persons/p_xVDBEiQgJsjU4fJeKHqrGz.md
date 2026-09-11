---
schema: wang-person/v1
id: p_xVDBEiQgJsjU4fJeKHqrGz
status: active
merged_into: null
display_name: 王恭斌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uqYF7-yNJRxArn5LplKegS
        subject_person_id: p_xVDBEiQgJsjU4fJeKHqrGz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭斌（1919年3月11日—2011年12月25日），史料所见人物。本项目依据《王恭斌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j-w2aEB7JshNHrGZus0WIm
          claim_id: c_uqYF7-yNJRxArn5LplKegS
          source_id: s_7Ku8TffQsqXuGSNxV1abzC
          stance: supports
          locator: Q20688418
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7Ku8TffQsqXuGSNxV1abzC
            source_type: api_record
            title: 维基数据：王恭斌（Q20688418）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20688418
            external_identifier: Q20688418
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E6%96%8C
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5svD8kBgaijapue3nqSjZK
        subject_person_id: p_xVDBEiQgJsjU4fJeKHqrGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭斌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PN5vFEDr38bwtTZfJcGh7H
          claim_id: c_5svD8kBgaijapue3nqSjZK
          source_id: s_7Ku8TffQsqXuGSNxV1abzC
          stance: supports
          locator: Q20688418
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kssX5M6iACDcygm5xnn7YT
        subject_person_id: p_xVDBEiQgJsjU4fJeKHqrGz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1919年3月11日
            calendar_note: 维基数据 P569 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WKa7CsYaZUkohwK5uwvnkc
          claim_id: c_kssX5M6iACDcygm5xnn7YT
          source_id: s_7Ku8TffQsqXuGSNxV1abzC
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eQWcM3BxrUgM1bThLY5YCN
        subject_person_id: p_xVDBEiQgJsjU4fJeKHqrGz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 2011年12月25日
            calendar_note: 维基数据 P570 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PEMA1bUitRARrFfqgW3kET
          claim_id: c_eQWcM3BxrUgM1bThLY5YCN
          source_id: s_7Ku8TffQsqXuGSNxV1abzC
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s9gUc3jhxiUC9KvbjATPjx
        subject_person_id: p_zyHxsVZox5Dbnu11LPXNR6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xVDBEiQgJsjU4fJeKHqrGz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ffHzB3QQdFc842FGYwmMx
          claim_id: c_s9gUc3jhxiUC9KvbjATPjx
          source_id: s_m4spp5B0p3qB3lQLKodo83
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m4spp5B0p3qB3lQLKodo83
            source_type: website
            title: 中文维基百科：王正黼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC
            external_identifier: Q15908672
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
        - id: cs_MnnPDNKfECV8xWKB2HtpQF
          claim_id: c_s9gUc3jhxiUC9KvbjATPjx
          source_id: s_7Ku8TffQsqXuGSNxV1abzC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_zyHxsVZox5Dbnu11LPXNR6
        status: active
        display_name: 王正黼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恭斌（1919年3月11日—2011年12月25日），史料所见人物。本项目依据《王恭斌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恭斌 | accepted |
| birth.date | 1919年3月11日 | accepted |
| death.date | 2011年12月25日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zyHxsVZox5Dbnu11LPXNR6 | 王正黼 | accepted |

## 外部来源

- [维基数据：王恭斌（Q20688418）](https://www.wikidata.org/wiki/Q20688418)
- [中文维基百科：王正黼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC)
