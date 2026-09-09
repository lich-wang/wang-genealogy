---
schema: wang-person/v1
id: p_Z7AEJyZ6q5B9FFzL66K3pD
status: active
merged_into: null
display_name: 王榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BF8VURyWN8zvJ2YQGakkix
        subject_person_id: p_Z7AEJyZ6q5B9FFzL66K3pD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mw9tJtUydPjBDK5FE7C3ys
          claim_id: c_BF8VURyWN8zvJ2YQGakkix
          source_id: s_my6fzQezqj9q1JZTV2JKsY
          stance: supports
          locator: CBDB:69409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69409）
          source: &a1
            id: s_my6fzQezqj9q1JZTV2JKsY
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 69409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69409&o=json
            external_identifier: CBDB:69409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ckHUKNS1s7rSoxV5G6fk6K
        subject_person_id: p_Z7AEJyZ6q5B9FFzL66K3pD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8fnk9gN1FZxVF7PtdTC7B1
          claim_id: c_ckHUKNS1s7rSoxV5G6fk6K
          source_id: s_my6fzQezqj9q1JZTV2JKsY
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
        id: c_9ExaEFBs11GzuKMGif3cWH
        subject_person_id: p_Z7AEJyZ6q5B9FFzL66K3pD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FXVdwbGbpuSQ2fPGsC43Ht
          claim_id: c_9ExaEFBs11GzuKMGif3cWH
          source_id: s_my6fzQezqj9q1JZTV2JKsY
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 69409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69409&o=json)
