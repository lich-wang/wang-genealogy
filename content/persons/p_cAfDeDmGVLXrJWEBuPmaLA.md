---
schema: wang-person/v1
id: p_cAfDeDmGVLXrJWEBuPmaLA
status: active
merged_into: null
display_name: 王顗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9JP2DiSrGKfQEZtQARW37X
        subject_person_id: p_cAfDeDmGVLXrJWEBuPmaLA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hfhrMXsqvYg5jP1FNa91of
          claim_id: c_9JP2DiSrGKfQEZtQARW37X
          source_id: s_NAarnj9zEKE2QWyBe5LmzB
          stance: supports
          locator: CBDB:191291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191291）
          source: &a1
            id: s_NAarnj9zEKE2QWyBe5LmzB
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 191291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191291&o=json
            external_identifier: CBDB:191291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wDuDvw6z9gDkAacPQ3bPg5
        subject_person_id: p_cAfDeDmGVLXrJWEBuPmaLA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 664年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d3CeyX1ELRxCp3KZMtAjWL
          claim_id: c_wDuDvw6z9gDkAacPQ3bPg5
          source_id: s_NAarnj9zEKE2QWyBe5LmzB
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
        id: c_8DSyuN468RufnQMaGxY8yV
        subject_person_id: p_cAfDeDmGVLXrJWEBuPmaLA
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
        - id: cs_8G5K91iNYFyeF8SZ2dFGET
          claim_id: c_8DSyuN468RufnQMaGxY8yV
          source_id: s_NAarnj9zEKE2QWyBe5LmzB
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

# 王顗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顗 | accepted |
| death.date | 664年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顗（CBDB 191291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191291&o=json)
