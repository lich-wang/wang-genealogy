---
schema: wang-person/v1
id: p_v1AomDuRQ9c27C4dEWhW3K
status: active
merged_into: null
display_name: 王大用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xrW2fpgF5FRwpAspVATtKc
        subject_person_id: p_v1AomDuRQ9c27C4dEWhW3K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9tK5p8PGrSc1thuFD8XWtk
          claim_id: c_xrW2fpgF5FRwpAspVATtKc
          source_id: s_UFo7iA9GJ3VBTnMmXk2GrU
          stance: supports
          locator: CBDB:126454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126454）
          source: &a1
            id: s_UFo7iA9GJ3VBTnMmXk2GrU
            source_type: api_record
            title: 中国历代人物传记资料库：王大用（CBDB 126454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126454&o=json
            external_identifier: CBDB:126454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pU5MiAE9wE8DMT785fEaii
        subject_person_id: p_v1AomDuRQ9c27C4dEWhW3K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1479年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xu6nKAGvp128NxRbM1oQBE
          claim_id: c_pU5MiAE9wE8DMT785fEaii
          source_id: s_UFo7iA9GJ3VBTnMmXk2GrU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iG9c1F4cAw7e1bNWwsd95z
        subject_person_id: p_v1AomDuRQ9c27C4dEWhW3K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9k775KJwYvahnzAYzho8V
          claim_id: c_iG9c1F4cAw7e1bNWwsd95z
          source_id: s_UFo7iA9GJ3VBTnMmXk2GrU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HogJBjYpE6mCaWLoS6KM4Z
        subject_person_id: p_v1AomDuRQ9c27C4dEWhW3K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3z1Y5E7Cd2F7Jsy16wRRjF
          claim_id: c_HogJBjYpE6mCaWLoS6KM4Z
          source_id: s_UFo7iA9GJ3VBTnMmXk2GrU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王大用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大用 | accepted |
| birth.date | 1479年 | accepted |
| death.date | 1553年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大用（CBDB 126454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126454&o=json)
