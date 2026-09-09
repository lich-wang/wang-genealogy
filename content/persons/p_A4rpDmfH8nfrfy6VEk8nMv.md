---
schema: wang-person/v1
id: p_A4rpDmfH8nfrfy6VEk8nMv
status: active
merged_into: null
display_name: 王煥章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AzvHTFV5ncfHHZsSV7Hvoh
        subject_person_id: p_A4rpDmfH8nfrfy6VEk8nMv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TunKXSTtFt6R46Jg8f9YPK
          claim_id: c_AzvHTFV5ncfHHZsSV7Hvoh
          source_id: s_kX4C156nPf4SchnVF2BrJa
          stance: supports
          locator: CBDB:494077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494077）
          source: &a1
            id: s_kX4C156nPf4SchnVF2BrJa
            source_type: api_record
            title: 中国历代人物传记资料库：王煥章（CBDB 494077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494077&o=json
            external_identifier: CBDB:494077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gQYQU3SgSWZzQF7wrCBer7
        subject_person_id: p_A4rpDmfH8nfrfy6VEk8nMv
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
        - id: cs_hKYHqvBbYh91micMmTzjxn
          claim_id: c_gQYQU3SgSWZzQF7wrCBer7
          source_id: s_kX4C156nPf4SchnVF2BrJa
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

# 王煥章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥章（CBDB 494077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494077&o=json)
