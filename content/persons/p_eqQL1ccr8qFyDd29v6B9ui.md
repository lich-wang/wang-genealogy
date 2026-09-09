---
schema: wang-person/v1
id: p_eqQL1ccr8qFyDd29v6B9ui
status: active
merged_into: null
display_name: 王慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNxAQQmCRB5UnVYXNv38FB
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DLBmvQVkU9MjC6T6NmTHyB
          claim_id: c_bNxAQQmCRB5UnVYXNv38FB
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: CBDB:140379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140379）
          source: &a1
            id: s_dKWFbw4nTEroGpFfAb4Bkd
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json
            external_identifier: CBDB:140379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2E35PP25sgvY4pe9Dey78G
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 630年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MwdR7DJV4b86UGFsRixDmH
          claim_id: c_2E35PP25sgvY4pe9Dey78G
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
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
        id: c_wBzVjsHrYwUg672MJdjV7s
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_26uJfW3BFr2D1rZm2B1dGo
          claim_id: c_wBzVjsHrYwUg672MJdjV7s
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
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
        id: c_3Z9zJ3zD92ep72rtLYJAsQ
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fnw5AR48bL6E7XUjM694qJ
          claim_id: c_3Z9zJ3zD92ep72rtLYJAsQ
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
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

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| birth.date | 630年 | accepted |
| death.date | 714年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 140379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json)
