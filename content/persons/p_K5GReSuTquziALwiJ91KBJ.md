---
schema: wang-person/v1
id: p_K5GReSuTquziALwiJ91KBJ
status: active
merged_into: null
display_name: 廖奉献
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDN7ikPeDEIDfZvO7OSVpV
        subject_person_id: p_K5GReSuTquziALwiJ91KBJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 廖奉献，史料所见人物。本项目依据《廖奉献》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3c2fSpuH53u6DpboxhsD98
          claim_id: c_ZDN7ikPeDEIDfZvO7OSVpV
          source_id: s_xJ33NAoYGeCjCpdfKNdiKX
          stance: supports
          locator: Q112678639
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xJ33NAoYGeCjCpdfKNdiKX
            source_type: api_record
            title: 维基数据：廖奉献（Q112678639）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678639
            external_identifier: Q112678639
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dQQV1w19UG3DiVvQuxARD9
        subject_person_id: p_K5GReSuTquziALwiJ91KBJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 廖奉献
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eH7n5XjyoVL7Lsa5aPoJrH
          claim_id: c_dQQV1w19UG3DiVvQuxARD9
          source_id: s_xJ33NAoYGeCjCpdfKNdiKX
          stance: supports
          locator: Q112678639
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_r9RT79GaE6CTHL3iqNqMNB
        subject_person_id: p_K5GReSuTquziALwiJ91KBJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zyHxsVZox5Dbnu11LPXNR6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5L4B4mdAK6emYzAmeAuqA6
          claim_id: c_r9RT79GaE6CTHL3iqNqMNB
          source_id: s_xJ33NAoYGeCjCpdfKNdiKX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_8TQQ9cfLy15KLHuMx31Kxe
          claim_id: c_r9RT79GaE6CTHL3iqNqMNB
          source_id: s_m4spp5B0p3qB3lQLKodo83
          stance: supports
          locator: P26（配偶）
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
      object_person:
        id: p_zyHxsVZox5Dbnu11LPXNR6
        status: active
        display_name: 王正黼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 廖奉献

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 廖奉献，史料所见人物。本项目依据《廖奉献》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 廖奉献 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zyHxsVZox5Dbnu11LPXNR6 | 王正黼 | accepted |

## 外部来源

- [维基数据：廖奉献（Q112678639）](https://www.wikidata.org/wiki/Q112678639)
- [中文维基百科：王正黼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC)
