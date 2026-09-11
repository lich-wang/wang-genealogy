---
schema: wang-person/v1
id: p_kwNFAbAozRsuWbREB5WQrq
status: active
merged_into: null
display_name: 王季雍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sbBnEdS4GtcyfjaW5u4VRG
        subject_person_id: p_kwNFAbAozRsuWbREB5WQrq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjH9d7FmGSYudND6cCFAYy
          claim_id: c_sbBnEdS4GtcyfjaW5u4VRG
          source_id: s_91JNZ5K5QW7JoVWgXwvE4j
          stance: supports
          locator: CBDB:97854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97854）
          source: &a1
            id: s_91JNZ5K5QW7JoVWgXwvE4j
            source_type: api_record
            title: 中国历代人物传记资料库：王季雍（CBDB 97854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97854&o=json
            external_identifier: CBDB:97854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_626JVTz8BKfJ1GhNSsCLaC
        subject_person_id: p_kwNFAbAozRsuWbREB5WQrq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季雍，史料所见人物。本项目依据《中国历代人物传记资料库：王季雍（CBDB 97854）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BOYb7nxZAZ29p_oEodiV6K
          claim_id: c_626JVTz8BKfJ1GhNSsCLaC
          source_id: s_91JNZ5K5QW7JoVWgXwvE4j
          stance: supports
          locator: CBDB:97854
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

# 王季雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季雍 | accepted |
| bio.summary | 王季雍，史料所见人物。本项目依据《中国历代人物传记资料库：王季雍（CBDB 97854）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王季雍（CBDB 97854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97854&o=json)
