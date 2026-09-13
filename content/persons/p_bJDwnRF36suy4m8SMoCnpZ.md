---
schema: wang-person/v1
id: p_bJDwnRF36suy4m8SMoCnpZ
status: active
merged_into: null
display_name: 王進朝
cbdb_id: 520474
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1nyrqUfMBKRq7XMQgv46uK
        subject_person_id: p_bJDwnRF36suy4m8SMoCnpZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進朝，史料所见人物。本项目依据《中国历代人物传记资料库：王進朝（CBDB 520474）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_sG-HCxhkdcyMdCGZI9K4J3
          claim_id: c_1nyrqUfMBKRq7XMQgv46uK
          source_id: s_FEE3dHXRBD4iKBHWR75N4f
          stance: supports
          locator: CBDB:520474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FEE3dHXRBD4iKBHWR75N4f
            source_type: api_record
            title: 中国历代人物传记资料库：王進朝（CBDB 520474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520474&o=json
            external_identifier: CBDB:520474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_67RxtGPpLZdJFErbNSzGZc
        subject_person_id: p_bJDwnRF36suy4m8SMoCnpZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LPx6XtLm6oPcfXLYTk43c7
          claim_id: c_67RxtGPpLZdJFErbNSzGZc
          source_id: s_FEE3dHXRBD4iKBHWR75N4f
          stance: supports
          locator: CBDB:520474
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
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

# 王進朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王進朝，史料所见人物。本项目依据《中国历代人物传记资料库：王進朝（CBDB 520474）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王進朝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進朝（CBDB 520474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520474&o=json)
