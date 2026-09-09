---
schema: wang-person/v1
id: p_noWTRh4QBHD4VaQUCHjziM
status: active
merged_into: null
display_name: 王景賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_awz58yF6BDQ7TpUqpM91Bb
        subject_person_id: p_noWTRh4QBHD4VaQUCHjziM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M8DMsfkCKPEqhqHdvfKmj3
          claim_id: c_awz58yF6BDQ7TpUqpM91Bb
          source_id: s_eqEtDsEFEfTz3H2F3roXUc
          stance: supports
          locator: CBDB:72066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72066）
          source: &a1
            id: s_eqEtDsEFEfTz3H2F3roXUc
            source_type: api_record
            title: 中国历代人物传记资料库：王景賢（CBDB 72066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72066&o=json
            external_identifier: CBDB:72066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ep3CgDMFk7BPCTdSaXUkBB
        subject_person_id: p_noWTRh4QBHD4VaQUCHjziM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HugecPAjv8fTf9qKRC9k7H
          claim_id: c_ep3CgDMFk7BPCTdSaXUkBB
          source_id: s_eqEtDsEFEfTz3H2F3roXUc
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
        id: c_bXMw8rFSjYkfovVt1hJEN9
        subject_person_id: p_noWTRh4QBHD4VaQUCHjziM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRgYboSFGXm3KNPCQtXKYy
          claim_id: c_bXMw8rFSjYkfovVt1hJEN9
          source_id: s_eqEtDsEFEfTz3H2F3roXUc
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
        id: c_mFcsEqCCHmGYxX4SH4f62k
        subject_person_id: p_noWTRh4QBHD4VaQUCHjziM
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
        - id: cs_RQbYRh6w51Z5qjDLURdMwT
          claim_id: c_mFcsEqCCHmGYxX4SH4f62k
          source_id: s_eqEtDsEFEfTz3H2F3roXUc
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

# 王景賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景賢 | accepted |
| birth.date | 1798年 | accepted |
| death.date | 1873年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景賢（CBDB 72066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72066&o=json)
