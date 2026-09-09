---
schema: wang-person/v1
id: p_9K68Hg6LWRw6qDHq2f6Rbj
status: active
merged_into: null
display_name: 王國良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AkVCXpLmSa9athbAkFBama
        subject_person_id: p_9K68Hg6LWRw6qDHq2f6Rbj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zLPGUtrvMA3qs9MGtXXvDr
          claim_id: c_AkVCXpLmSa9athbAkFBama
          source_id: s_nJZMFqrH3vsvSzRihD9vmB
          stance: supports
          locator: CBDB:191565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191565）
          source: &a1
            id: s_nJZMFqrH3vsvSzRihD9vmB
            source_type: api_record
            title: 中国历代人物传记资料库：王國良（CBDB 191565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191565&o=json
            external_identifier: CBDB:191565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Gxu8pJAde8tR7cnV5M8zFE
        subject_person_id: p_9K68Hg6LWRw6qDHq2f6Rbj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 834年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7bYykyhzPqFkTEJG55SnbA
          claim_id: c_Gxu8pJAde8tR7cnV5M8zFE
          source_id: s_nJZMFqrH3vsvSzRihD9vmB
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
        id: c_ByeppBweJJP1uZFXRnKbLM
        subject_person_id: p_9K68Hg6LWRw6qDHq2f6Rbj
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
        - id: cs_PsyFrGLbcV38UX5AinscCx
          claim_id: c_ByeppBweJJP1uZFXRnKbLM
          source_id: s_nJZMFqrH3vsvSzRihD9vmB
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

# 王國良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國良 | accepted |
| death.date | 834年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國良（CBDB 191565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191565&o=json)
