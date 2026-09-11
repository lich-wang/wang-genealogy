---
schema: wang-person/v1
id: p_XUt9jdj1gAyL6sZsB7m4f1
status: active
merged_into: null
display_name: 王懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aD5xTnx8EpPzjZ9hMRt3Ar
        subject_person_id: p_XUt9jdj1gAyL6sZsB7m4f1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_93AbvGM7vhw4ARL3AcrGu1
          claim_id: c_aD5xTnx8EpPzjZ9hMRt3Ar
          source_id: s_R3UwN8hBuHdwTaGH7gJjth
          stance: supports
          locator: CBDB:467004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467004）
          source: &a1
            id: s_R3UwN8hBuHdwTaGH7gJjth
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 467004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467004&o=json
            external_identifier: CBDB:467004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SnxVkMkAKLRmnCLR4dHpJ6
        subject_person_id: p_XUt9jdj1gAyL6sZsB7m4f1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 467004）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__6xu1vqGzV4zr76m331oCy
          claim_id: c_SnxVkMkAKLRmnCLR4dHpJ6
          source_id: s_R3UwN8hBuHdwTaGH7gJjth
          stance: supports
          locator: CBDB:467004
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

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 467004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 467004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467004&o=json)
