---
schema: wang-person/v1
id: p_XUGeYPBtKeWehLXSEW7tK8
status: active
merged_into: null
display_name: 王啟涑
cbdb_id: 513445
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zS1FvEssfR9r15axf38a7Z
        subject_person_id: p_XUGeYPBtKeWehLXSEW7tK8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟涑，史料所见人物。本项目依据《中国历代人物传记资料库：王啟涑（CBDB 513445）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Hjn3rh8I8R0mea7AiwlW6e
          claim_id: c_zS1FvEssfR9r15axf38a7Z
          source_id: s_EEEZe5xjUN7gdCJBBjjwna
          stance: supports
          locator: CBDB:513445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EEEZe5xjUN7gdCJBBjjwna
            source_type: api_record
            title: 中国历代人物传记资料库：王啟涑（CBDB 513445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513445&o=json
            external_identifier: CBDB:513445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tGX9ee4c4ypRMo56aw4YB
        subject_person_id: p_XUGeYPBtKeWehLXSEW7tK8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟涑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B6He862yF1RTLEZJEBw3EE
          claim_id: c_5tGX9ee4c4ypRMo56aw4YB
          source_id: s_EEEZe5xjUN7gdCJBBjjwna
          stance: supports
          locator: CBDB:513445
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
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

# 王啟涑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟涑，史料所见人物。本项目依据《中国历代人物传记资料库：王啟涑（CBDB 513445）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王啟涑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟涑（CBDB 513445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513445&o=json)
