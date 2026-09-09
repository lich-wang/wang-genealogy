---
schema: wang-person/v1
id: p_ZGgaB9piautiHN92NAR6Th
status: active
merged_into: null
display_name: 王澹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wmGQfnLkJQNZngKgAnpdrt
        subject_person_id: p_ZGgaB9piautiHN92NAR6Th
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Y3kQyNqAMwYvnQor881Co
          claim_id: c_wmGQfnLkJQNZngKgAnpdrt
          source_id: s_5E3CwJQQxr3mVUajCJdji6
          stance: supports
          locator: CBDB:445576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445576）
          source: &a1
            id: s_5E3CwJQQxr3mVUajCJdji6
            source_type: api_record
            title: 中国历代人物传记资料库：王澹（CBDB 445576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445576&o=json
            external_identifier: CBDB:445576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwNBGDhtCXpYbQQt5cMPtD
        subject_person_id: p_ZGgaB9piautiHN92NAR6Th
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
        - id: cs_iAFKqmYe8EP4QbTceCSdTJ
          claim_id: c_WwNBGDhtCXpYbQQt5cMPtD
          source_id: s_5E3CwJQQxr3mVUajCJdji6
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

# 王澹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澹 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澹（CBDB 445576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445576&o=json)
