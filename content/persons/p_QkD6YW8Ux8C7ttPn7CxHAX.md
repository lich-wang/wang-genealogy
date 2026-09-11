---
schema: wang-person/v1
id: p_QkD6YW8Ux8C7ttPn7CxHAX
status: active
merged_into: null
display_name: 王妙善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suCiFvNZEzkyBS35DfzJet
        subject_person_id: p_QkD6YW8Ux8C7ttPn7CxHAX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王妙善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C6yw91Vxnz9H8J15nqLyMQ
          claim_id: c_suCiFvNZEzkyBS35DfzJet
          source_id: s_6C1e2PU24BNq54JxHbynaB
          stance: supports
          locator: CBDB:690533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690533）
          source: &a1
            id: s_6C1e2PU24BNq54JxHbynaB
            source_type: api_record
            title: 中国历代人物传记资料库：王妙善（CBDB 690533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690533&o=json
            external_identifier: CBDB:690533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n7drkg63Rd7Ve4uN1x6nir
        subject_person_id: p_QkD6YW8Ux8C7ttPn7CxHAX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1234年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6J4BiiDxeLU9Fzp5FU7BKU
          claim_id: c_n7drkg63Rd7Ve4uN1x6nir
          source_id: s_6C1e2PU24BNq54JxHbynaB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_D6VuHZBtgk39MQW9VBRbwe
        subject_person_id: p_QkD6YW8Ux8C7ttPn7CxHAX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1310年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9W19RC6paZ5jTWfQzJpeLt
          claim_id: c_D6VuHZBtgk39MQW9VBRbwe
          source_id: s_6C1e2PU24BNq54JxHbynaB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4q2bqqgGBJEvfxExFAoVqL
        subject_person_id: p_QkD6YW8Ux8C7ttPn7CxHAX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王妙善（1234年—1310年），史料所见人物。本项目依据《中国历代人物传记资料库：王妙善（CBDB 690533）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HlFa8AH1y0HNVk6bwoP55H
          claim_id: c_4q2bqqgGBJEvfxExFAoVqL
          source_id: s_6C1e2PU24BNq54JxHbynaB
          stance: supports
          locator: CBDB:690533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
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

# 王妙善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王妙善 | accepted |
| birth.date | 1234年 | accepted |
| death.date | 1310年 | accepted |
| bio.summary | 王妙善（1234年—1310年），史料所见人物。本项目依据《中国历代人物传记资料库：王妙善（CBDB 690533）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王妙善（CBDB 690533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690533&o=json)
