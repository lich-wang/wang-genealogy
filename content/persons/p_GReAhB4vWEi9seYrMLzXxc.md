---
schema: wang-person/v1
id: p_GReAhB4vWEi9seYrMLzXxc
status: active
merged_into: null
display_name: 王志卿
cbdb_id: 414572
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fsFvzLg5ADRFT8ZeaZnb19
        subject_person_id: p_GReAhB4vWEi9seYrMLzXxc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志卿，史料所见人物。本项目依据《中国历代人物传记资料库：王志卿（CBDB 414572）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_n5KDdLqiGIwAfJAyYJmSDv
          claim_id: c_fsFvzLg5ADRFT8ZeaZnb19
          source_id: s_Sr76q22uuDhqM9puGyNBkw
          stance: supports
          locator: CBDB:414572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Sr76q22uuDhqM9puGyNBkw
            source_type: api_record
            title: 中国历代人物传记资料库：王志卿（CBDB 414572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414572&o=json
            external_identifier: CBDB:414572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RbKSmT5MPL5FveE4VLwKxY
        subject_person_id: p_GReAhB4vWEi9seYrMLzXxc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UWQcwTda5Ach3Ptg2WzUoa
          claim_id: c_RbKSmT5MPL5FveE4VLwKxY
          source_id: s_Sr76q22uuDhqM9puGyNBkw
          stance: supports
          locator: CBDB:414572
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 明
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

# 王志卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志卿，史料所见人物。本项目依据《中国历代人物传记资料库：王志卿（CBDB 414572）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王志卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志卿（CBDB 414572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414572&o=json)
