---
schema: wang-person/v1
id: p_HeGfMzKQ5r77Gp7MCsAkL6
status: active
merged_into: null
display_name: 王仲舒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1dsFE4uHwsRBvyoTZA5ctd
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3KBmojg22pTyv3y1SjLnVM
          claim_id: c_1dsFE4uHwsRBvyoTZA5ctd
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
          stance: supports
          locator: CBDB:91998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91998）
          source: &a1
            id: s_ab1srMQ3PeiCZNBsYp79zB
            source_type: api_record
            title: 中国历代人物传记资料库：王仲舒（CBDB 91998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91998&o=json
            external_identifier: CBDB:91998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DG9rLnjnzj9iCBKa4gbicP
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZFgrK8pTf6WMzMSUy5eZL
          claim_id: c_DG9rLnjnzj9iCBKa4gbicP
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
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
        id: c_jrJL941MxcyTPZuP58ET9B
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 823年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RuEc26JeNBSMV5r8VSi5sm
          claim_id: c_jrJL941MxcyTPZuP58ET9B
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
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
        id: c_qcz9nGiFxtaW3BRRc5SDEH
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
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
        - id: cs_T7P3YvCVWXKCFrKAjdGXZM
          claim_id: c_qcz9nGiFxtaW3BRRc5SDEH
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
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

# 王仲舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲舒 | accepted |
| birth.date | 762年 | accepted |
| death.date | 823年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲舒（CBDB 91998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91998&o=json)
