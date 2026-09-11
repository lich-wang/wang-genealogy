---
schema: wang-person/v1
id: p_YPzdBPecC1S3RdYXnNN4Lo
status: active
merged_into: null
display_name: 王繼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_95uuiWvrLBxKcSfTtpX52o
        subject_person_id: p_YPzdBPecC1S3RdYXnNN4Lo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLQMWNvesH9xZpzvF4wJQd
          claim_id: c_95uuiWvrLBxKcSfTtpX52o
          source_id: s_hBvjBCuGbo5JpJQqm5BsWp
          stance: supports
          locator: CBDB:122822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122822）
          source: &a1
            id: s_hBvjBCuGbo5JpJQqm5BsWp
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 122822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122822&o=json
            external_identifier: CBDB:122822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eGKmuT5VLsghX3pvvaJbtJ
        subject_person_id: p_YPzdBPecC1S3RdYXnNN4Lo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，史料所见人物。本项目依据《中国历代人物传记资料库：王繼（CBDB 122822）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KYU8b8q7OSVc3IyuOvVKXN
          claim_id: c_eGKmuT5VLsghX3pvvaJbtJ
          source_id: s_hBvjBCuGbo5JpJQqm5BsWp
          stance: supports
          locator: CBDB:122822
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

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，史料所见人物。本项目依据《中国历代人物传记资料库：王繼（CBDB 122822）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 122822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122822&o=json)
