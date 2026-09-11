---
schema: wang-person/v1
id: p_6aEwqJdunYzRZ2QR1J627E
status: active
merged_into: null
display_name: 王繼昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9uoHZvKG6Cv4RS24jdGyKs
        subject_person_id: p_6aEwqJdunYzRZ2QR1J627E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fM1XwNRA5gJHu6wrjw1zr3
          claim_id: c_9uoHZvKG6Cv4RS24jdGyKs
          source_id: s_3MRQwg8Dhiu5xQ2KP6ZwXi
          stance: supports
          locator: CBDB:480177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480177）
          source: &a1
            id: s_3MRQwg8Dhiu5xQ2KP6ZwXi
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昌（CBDB 480177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480177&o=json
            external_identifier: CBDB:480177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXWbMQkejxL9tKriUamvnF
        subject_person_id: p_6aEwqJdunYzRZ2QR1J627E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼昌，史料所见人物。本项目依据《中国历代人物传记资料库：王繼昌（CBDB 480177）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r9NdWTn9haIX0zxZ4OOHK3
          claim_id: c_gXWbMQkejxL9tKriUamvnF
          source_id: s_3MRQwg8Dhiu5xQ2KP6ZwXi
          stance: supports
          locator: CBDB:480177
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

# 王繼昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼昌 | accepted |
| bio.summary | 王繼昌，史料所见人物。本项目依据《中国历代人物传记资料库：王繼昌（CBDB 480177）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼昌（CBDB 480177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480177&o=json)
