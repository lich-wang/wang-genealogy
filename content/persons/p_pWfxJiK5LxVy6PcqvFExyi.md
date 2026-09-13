---
schema: wang-person/v1
id: p_pWfxJiK5LxVy6PcqvFExyi
status: active
merged_into: null
display_name: 王鑭
cbdb_id: 261856
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJN6Uu8Ddp9T9Dpme9xT5V
        subject_person_id: p_pWfxJiK5LxVy6PcqvFExyi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑭，史料所见人物。本项目依据《中国历代人物传记资料库：王鑭（CBDB 261856）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zK-EAROK10AXnffqxgdZy7
          claim_id: c_gJN6Uu8Ddp9T9Dpme9xT5V
          source_id: s_7tQuuYBkDGmJujDGXkfMCn
          stance: supports
          locator: CBDB:261856
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7tQuuYBkDGmJujDGXkfMCn
            source_type: api_record
            title: 中国历代人物传记资料库：王鑭（CBDB 261856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261856&o=json
            external_identifier: CBDB:261856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8J239maT7QcSjB73McgRB
        subject_person_id: p_pWfxJiK5LxVy6PcqvFExyi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_u7qrpVE7nANyGkPdcFYPjT
          claim_id: c_a8J239maT7QcSjB73McgRB
          source_id: s_7tQuuYBkDGmJujDGXkfMCn
          stance: supports
          locator: CBDB:261856
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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

# 王鑭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鑭，史料所见人物。本项目依据《中国历代人物传记资料库：王鑭（CBDB 261856）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鑭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑭（CBDB 261856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261856&o=json)
