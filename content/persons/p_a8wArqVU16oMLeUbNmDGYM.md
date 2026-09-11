---
schema: wang-person/v1
id: p_a8wArqVU16oMLeUbNmDGYM
status: active
merged_into: null
display_name: 王紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNcxLJDBq27LDE471U64RC
        subject_person_id: p_a8wArqVU16oMLeUbNmDGYM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VioAtgWH4eGrxc15x4ZgjN
          claim_id: c_MNcxLJDBq27LDE471U64RC
          source_id: s_w4b3FG6mBRuB1R4Ur4jmJ6
          stance: supports
          locator: CBDB:445541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445541）
          source: &a1
            id: s_w4b3FG6mBRuB1R4Ur4jmJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 445541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445541&o=json
            external_identifier: CBDB:445541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUTLryFvRw8e22Tsn8mT84
        subject_person_id: p_a8wArqVU16oMLeUbNmDGYM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，史料所见人物。本项目依据《中国历代人物传记资料库：王紹（CBDB 445541）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P29PAOH-LKwduQHbyv_cps
          claim_id: c_UUTLryFvRw8e22Tsn8mT84
          source_id: s_w4b3FG6mBRuB1R4Ur4jmJ6
          stance: supports
          locator: CBDB:445541
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

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，史料所见人物。本项目依据《中国历代人物传记资料库：王紹（CBDB 445541）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 445541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445541&o=json)
