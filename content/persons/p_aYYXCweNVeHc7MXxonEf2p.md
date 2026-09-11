---
schema: wang-person/v1
id: p_aYYXCweNVeHc7MXxonEf2p
status: active
merged_into: null
display_name: 俞启忠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sYtY6CNqvaU1EgrCE5l73e
        subject_person_id: p_aYYXCweNVeHc7MXxonEf2p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 俞启忠，史料所见人物。本项目依据《俞启忠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SEghe-qiJqr6hdtaDV5WlT
          claim_id: c_sYtY6CNqvaU1EgrCE5l73e
          source_id: s_QeCFrSiuzYMpJLGA5vSMGK
          stance: supports
          locator: Q61306665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QeCFrSiuzYMpJLGA5vSMGK
            source_type: api_record
            title: 维基数据：俞启忠（Q61306665）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306665
            external_identifier: Q61306665
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A2MHrz7e5DL7197gAJqPLW
        subject_person_id: p_aYYXCweNVeHc7MXxonEf2p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 俞启忠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3oB8ZSDZCaUAJK91WSrUTK
          claim_id: c_A2MHrz7e5DL7197gAJqPLW
          source_id: s_QeCFrSiuzYMpJLGA5vSMGK
          stance: supports
          locator: Q61306665
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
        id: c_ToN7hGNYx2GEWed4aWSYXP
        subject_person_id: p_aYYXCweNVeHc7MXxonEf2p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QC8gM4R78b4ALUG573C8tw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBR2zKeub7nho42HRi8MA8
          claim_id: c_ToN7hGNYx2GEWed4aWSYXP
          source_id: s_tmHCmvEMPsE5UH3YGfsgVW
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_tmHCmvEMPsE5UH3YGfsgVW
            source_type: api_record
            title: 维基数据：王明贞（Q56005549）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56005549
            external_identifier: Q56005549
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.151Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%8E%E8%B4%9E
        - id: cs_B1ArAvtQARJkpPEoJuuX7f
          claim_id: c_ToN7hGNYx2GEWed4aWSYXP
          source_id: s_QeCFrSiuzYMpJLGA5vSMGK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_QC8gM4R78b4ALUG573C8tw
        status: active
        display_name: 王明贞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 俞启忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 俞启忠，史料所见人物。本项目依据《俞启忠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 俞启忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QC8gM4R78b4ALUG573C8tw | 王明贞 | accepted |

## 外部来源

- [维基数据：王明贞（Q56005549）](https://www.wikidata.org/wiki/Q56005549)
- [维基数据：俞启忠（Q61306665）](https://www.wikidata.org/wiki/Q61306665)
