---
schema: wang-person/v1
id: p_P6Bt8pFBTgzDDyqTqHGqva
status: active
merged_into: null
display_name: 王訥言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UiKMqEX3H9G1RGtSKGRN7d
        subject_person_id: p_P6Bt8pFBTgzDDyqTqHGqva
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KdL2MQZtA8fNHKjjfEj9Zd
          claim_id: c_UiKMqEX3H9G1RGtSKGRN7d
          source_id: s_yPrAKytfJQrKmTSzdc7RHE
          stance: supports
          locator: CBDB:565565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565565）
          source: &a1
            id: s_yPrAKytfJQrKmTSzdc7RHE
            source_type: api_record
            title: 中国历代人物传记资料库：王訥言（CBDB 565565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565565&o=json
            external_identifier: CBDB:565565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yA1ZGJYMjLc32aHGXSxeGU
        subject_person_id: p_P6Bt8pFBTgzDDyqTqHGqva
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥言，史料所见人物。本项目依据《中国历代人物传记资料库：王訥言（CBDB 565565）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RtyTcNfLCBrnEdk1PTddoj
          claim_id: c_yA1ZGJYMjLc32aHGXSxeGU
          source_id: s_yPrAKytfJQrKmTSzdc7RHE
          stance: supports
          locator: CBDB:565565
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

# 王訥言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訥言 | accepted |
| bio.summary | 王訥言，史料所见人物。本项目依据《中国历代人物传记资料库：王訥言（CBDB 565565）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訥言（CBDB 565565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565565&o=json)
