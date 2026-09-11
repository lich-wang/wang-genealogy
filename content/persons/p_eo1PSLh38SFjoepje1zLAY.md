---
schema: wang-person/v1
id: p_eo1PSLh38SFjoepje1zLAY
status: active
merged_into: null
display_name: 王應澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KkML4M2VjEoCBpiMKsCsyy
        subject_person_id: p_eo1PSLh38SFjoepje1zLAY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qUnDPnQwmh2hFxGw4YGj4t
          claim_id: c_KkML4M2VjEoCBpiMKsCsyy
          source_id: s_xLoP3QLvc25MPWKDT9kq9n
          stance: supports
          locator: CBDB:637416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637416）
          source: &a1
            id: s_xLoP3QLvc25MPWKDT9kq9n
            source_type: api_record
            title: 中国历代人物传记资料库：王應澍（CBDB 637416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637416&o=json
            external_identifier: CBDB:637416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m3PrRXx5TnxqoJDpN454F3
        subject_person_id: p_eo1PSLh38SFjoepje1zLAY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應澍，清人物。籍贯青陽，曾任典史。（中国历代人物传记资料库 CBDB 637416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vatUPbKbUIEysMeZ2Riv0o
          claim_id: c_m3PrRXx5TnxqoJDpN454F3
          source_id: s_xLoP3QLvc25MPWKDT9kq9n
          stance: supports
          locator: CBDB:637416
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

# 王應澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應澍 | accepted |
| bio.summary | 王應澍，清人物。籍贯青陽，曾任典史。（中国历代人物传记资料库 CBDB 637416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應澍（CBDB 637416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637416&o=json)
