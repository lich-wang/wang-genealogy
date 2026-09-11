---
schema: wang-person/v1
id: p_FD6kQmASy9WR4q6BpFqmHM
status: active
merged_into: null
display_name: 王註
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7Rz88fZJAUhBwEdmhJz5o
        subject_person_id: p_FD6kQmASy9WR4q6BpFqmHM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王註
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_krMjp76o2VuqWAFxUxrS6f
          claim_id: c_F7Rz88fZJAUhBwEdmhJz5o
          source_id: s_w5UAbwXhFDAofDnPiLZeZy
          stance: supports
          locator: CBDB:71112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71112）
          source: &a1
            id: s_w5UAbwXhFDAofDnPiLZeZy
            source_type: api_record
            title: 中国历代人物传记资料库：王註（CBDB 71112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71112&o=json
            external_identifier: CBDB:71112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RqaBfomHtR9oQyrmuoMMfD
        subject_person_id: p_FD6kQmASy9WR4q6BpFqmHM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1650年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LGT2AaKXx9MoMN6Mr8y7NF
          claim_id: c_RqaBfomHtR9oQyrmuoMMfD
          source_id: s_w5UAbwXhFDAofDnPiLZeZy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nFG2JrbKm8RN7qtTose9Gx
        subject_person_id: p_FD6kQmASy9WR4q6BpFqmHM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王註（生于1650年），清人物。籍贯蒲城。（中国历代人物传记资料库 CBDB 71112）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8_Uucy6TgVKCZjNLG0-d-0
          claim_id: c_nFG2JrbKm8RN7qtTose9Gx
          source_id: s_w5UAbwXhFDAofDnPiLZeZy
          stance: supports
          locator: CBDB:71112
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

# 王註

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王註 | accepted |
| birth.date | 1650年 | accepted |
| bio.summary | 王註（生于1650年），清人物。籍贯蒲城。（中国历代人物传记资料库 CBDB 71112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王註（CBDB 71112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71112&o=json)
