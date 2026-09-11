---
schema: wang-person/v1
id: p_A9oLiaD4xcFsHGFj7fqFJN
status: active
merged_into: null
display_name: 王瑨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HgmpHQVBMK9t86xjLkGWA8
        subject_person_id: p_A9oLiaD4xcFsHGFj7fqFJN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rH27ZEu9yrj3JSuwJj8j6f
          claim_id: c_HgmpHQVBMK9t86xjLkGWA8
          source_id: s_1cB4ngQjEy6CJhBfTs1trz
          stance: supports
          locator: CBDB:255296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255296）
          source: &a1
            id: s_1cB4ngQjEy6CJhBfTs1trz
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 255296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255296&o=json
            external_identifier: CBDB:255296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7oGzPxDDrhLdfh5wNSH2c
        subject_person_id: p_A9oLiaD4xcFsHGFj7fqFJN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨，明人物。成化十七年進士，籍贯嘉善，曾任主簿。（中国历代人物传记资料库 CBDB 255296）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7wpzqMcqK6JtBcZ4v_uWDK
          claim_id: c_f7oGzPxDDrhLdfh5wNSH2c
          source_id: s_1cB4ngQjEy6CJhBfTs1trz
          stance: supports
          locator: CBDB:255296
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王瑨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑨 | accepted |
| bio.summary | 王瑨，明人物。成化十七年進士，籍贯嘉善，曾任主簿。（中国历代人物传记资料库 CBDB 255296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑨（CBDB 255296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255296&o=json)
