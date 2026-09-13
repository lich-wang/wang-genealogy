---
schema: wang-person/v1
id: p_4vdSvSD5BUu5uYcGsx6QVM
status: active
merged_into: null
display_name: 王潤民
cbdb_id: 209991
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MnGmXCQWsWL78qXuKRuD5q
        subject_person_id: p_4vdSvSD5BUu5uYcGsx6QVM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤民，史料所见人物。本项目依据《中国历代人物传记资料库：王潤民（CBDB 209991）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_g0-f1weiqHukVo45qC63mD
          claim_id: c_MnGmXCQWsWL78qXuKRuD5q
          source_id: s_gTPYMGCZtAqLLPfg2ugh8C
          stance: supports
          locator: CBDB:209991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gTPYMGCZtAqLLPfg2ugh8C
            source_type: api_record
            title: 中国历代人物传记资料库：王潤民（CBDB 209991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209991&o=json
            external_identifier: CBDB:209991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_syZwY9jv7eetEmT7M7g8FH
        subject_person_id: p_4vdSvSD5BUu5uYcGsx6QVM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MavE2jHQ89G51hAqQfgQzG
          claim_id: c_syZwY9jv7eetEmT7M7g8FH
          source_id: s_gTPYMGCZtAqLLPfg2ugh8C
          stance: supports
          locator: CBDB:209991
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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

# 王潤民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王潤民，史料所见人物。本项目依据《中国历代人物传记资料库：王潤民（CBDB 209991）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王潤民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤民（CBDB 209991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209991&o=json)
