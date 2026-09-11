---
schema: wang-person/v1
id: p_WYxR7HdQPeyqsZPMVPy55m
status: active
merged_into: null
display_name: 王益
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FzSLP6GwyZ7wZyfCH3zzhn
        subject_person_id: p_WYxR7HdQPeyqsZPMVPy55m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_baPh3KNJQy6duvhoWVA1pV
          claim_id: c_FzSLP6GwyZ7wZyfCH3zzhn
          source_id: s_JdP6w63ArRYHroYBKr7pBk
          stance: supports
          locator: CBDB:38376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38376）
          source: &a1
            id: s_JdP6w63ArRYHroYBKr7pBk
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 38376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38376&o=json
            external_identifier: CBDB:38376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ey38LmQgu99syn9p1Zji7X
        subject_person_id: p_WYxR7HdQPeyqsZPMVPy55m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益，宋人物。曾任刺史、左武大夫、承節郎。（中国历代人物传记资料库 CBDB 38376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_11b0POvlQCNpLtDswWqJPX
          claim_id: c_Ey38LmQgu99syn9p1Zji7X
          source_id: s_JdP6w63ArRYHroYBKr7pBk
          stance: supports
          locator: CBDB:38376
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

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| bio.summary | 王益，宋人物。曾任刺史、左武大夫、承節郎。（中国历代人物传记资料库 CBDB 38376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 38376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38376&o=json)
