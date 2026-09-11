---
schema: wang-person/v1
id: p_Pvbhr3LE5rh7bWATKZco7S
status: active
merged_into: null
display_name: 王深
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7FwNA6nQ8BFwVHFFCuuyH8
        subject_person_id: p_Pvbhr3LE5rh7bWATKZco7S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yNJKAguKJX5D4wRjLbWvzT
          claim_id: c_7FwNA6nQ8BFwVHFFCuuyH8
          source_id: s_zFJNAAhM8vM7xWDHEo61A5
          stance: supports
          locator: CBDB:35687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35687）
          source: &a1
            id: s_zFJNAAhM8vM7xWDHEo61A5
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 35687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35687&o=json
            external_identifier: CBDB:35687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BK6sF5FnYe4Bxu5HCw2JhV
        subject_person_id: p_Pvbhr3LE5rh7bWATKZco7S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深，宋人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 35687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_khkoMrurPbaY2W_DbzpU9N
          claim_id: c_BK6sF5FnYe4Bxu5HCw2JhV
          source_id: s_zFJNAAhM8vM7xWDHEo61A5
          stance: supports
          locator: CBDB:35687
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

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| bio.summary | 王深，宋人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 35687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 35687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35687&o=json)
