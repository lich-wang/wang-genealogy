---
schema: wang-person/v1
id: p_uB46uL98T77hfvwFC9EHxQ
status: active
merged_into: null
display_name: 王枳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mBMR7KB664dMsNnP8LRHT1
        subject_person_id: p_uB46uL98T77hfvwFC9EHxQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQD7rwCCUFDHSbGAScPzxc
          claim_id: c_mBMR7KB664dMsNnP8LRHT1
          source_id: s_m514nXyxsb3HUxBFPiC2Db
          stance: supports
          locator: CBDB:445617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445617）
          source: &a1
            id: s_m514nXyxsb3HUxBFPiC2Db
            source_type: api_record
            title: 中国历代人物传记资料库：王枳（CBDB 445617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445617&o=json
            external_identifier: CBDB:445617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t8oyc9qfdUARauc1TuQYSX
        subject_person_id: p_uB46uL98T77hfvwFC9EHxQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枳，史料所见人物。本项目依据《中国历代人物传记资料库：王枳（CBDB 445617）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ppws8fO8s7csz8ISLfiqDF
          claim_id: c_t8oyc9qfdUARauc1TuQYSX
          source_id: s_m514nXyxsb3HUxBFPiC2Db
          stance: supports
          locator: CBDB:445617
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

# 王枳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王枳 | accepted |
| bio.summary | 王枳，史料所见人物。本项目依据《中国历代人物传记资料库：王枳（CBDB 445617）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王枳（CBDB 445617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445617&o=json)
