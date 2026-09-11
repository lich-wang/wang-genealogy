---
schema: wang-person/v1
id: p_BT3BRuCXcJU5otdxcsJ6fj
status: active
merged_into: null
display_name: 王微
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNhABqpZZHvjnRjP6nFATS
        subject_person_id: p_BT3BRuCXcJU5otdxcsJ6fj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nvXLQ5eFHogC52vqTmwEGF
          claim_id: c_WNhABqpZZHvjnRjP6nFATS
          source_id: s_uwvMpP68GYfg1DqMMM6HA1
          stance: supports
          locator: CBDB:56579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56579）
          source: &a1
            id: s_uwvMpP68GYfg1DqMMM6HA1
            source_type: api_record
            title: 中国历代人物传记资料库：王微（CBDB 56579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56579&o=json
            external_identifier: CBDB:56579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZNR2RJRi2w2JBCe18ZWFGq
        subject_person_id: p_BT3BRuCXcJU5otdxcsJ6fj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WzS4hkvTo1frd5EFPhC84d
          claim_id: c_ZNR2RJRi2w2JBCe18ZWFGq
          source_id: s_uwvMpP68GYfg1DqMMM6HA1
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
        id: c_RVGNyXLsV68HKXPiTMcEae
        subject_person_id: p_BT3BRuCXcJU5otdxcsJ6fj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1647年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_53YVWediNm13ytt7pa6XMb
          claim_id: c_RVGNyXLsV68HKXPiTMcEae
          source_id: s_uwvMpP68GYfg1DqMMM6HA1
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
        id: c_eGkSaX5MYCf7dyAzQLYc45
        subject_person_id: p_BT3BRuCXcJU5otdxcsJ6fj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微（1600年—1647年），史料所见人物。本项目依据《中国历代人物传记资料库：王微（CBDB 56579）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9If_cGcaZSKDlIrDxbHAOO
          claim_id: c_eGkSaX5MYCf7dyAzQLYc45
          source_id: s_uwvMpP68GYfg1DqMMM6HA1
          stance: supports
          locator: CBDB:56579
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

# 王微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王微 | accepted |
| birth.date | 1600年 | accepted |
| death.date | 1647年 | accepted |
| bio.summary | 王微（1600年—1647年），史料所见人物。本项目依据《中国历代人物传记资料库：王微（CBDB 56579）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王微（CBDB 56579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56579&o=json)
