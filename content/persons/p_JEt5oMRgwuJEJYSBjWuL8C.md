---
schema: wang-person/v1
id: p_JEt5oMRgwuJEJYSBjWuL8C
status: active
merged_into: null
display_name: 王仕詮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XEmLApXMDyJrQsszW3ghN5
        subject_person_id: p_JEt5oMRgwuJEJYSBjWuL8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕詮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uanXNxF3xEHNCAZTRofQeG
          claim_id: c_XEmLApXMDyJrQsszW3ghN5
          source_id: s_bzJ6ACWrci28T9nCZUEYVH
          stance: supports
          locator: CBDB:189752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189752）
          source: &a1
            id: s_bzJ6ACWrci28T9nCZUEYVH
            source_type: api_record
            title: 中国历代人物传记资料库：王仕詮（CBDB 189752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189752&o=json
            external_identifier: CBDB:189752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9rvBx64dmsgJeV1VeiWWiN
        subject_person_id: p_JEt5oMRgwuJEJYSBjWuL8C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 822年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yo643AGenR7g52pCmRtHW3
          claim_id: c_9rvBx64dmsgJeV1VeiWWiN
          source_id: s_bzJ6ACWrci28T9nCZUEYVH
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
        id: c_MbRmsZ6T1QvHs4uwugaf12
        subject_person_id: p_JEt5oMRgwuJEJYSBjWuL8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jLhpq7GBY18EkhK3XYkc4c
          claim_id: c_MbRmsZ6T1QvHs4uwugaf12
          source_id: s_bzJ6ACWrci28T9nCZUEYVH
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

# 王仕詮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕詮 | accepted |
| death.date | 822年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕詮（CBDB 189752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189752&o=json)
