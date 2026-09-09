---
schema: wang-person/v1
id: p_9MD4jCakdaAwyFN7YqvMeF
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zjcuw3dE6oud93DoKLfWy2
        subject_person_id: p_9MD4jCakdaAwyFN7YqvMeF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4YbXUqNdF822YTMnkdNF8L
          claim_id: c_zjcuw3dE6oud93DoKLfWy2
          source_id: s_Z9CqfEcFzEEsssyi4pWf1G
          stance: supports
          locator: CBDB:488786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488786）
          source: &a1
            id: s_Z9CqfEcFzEEsssyi4pWf1G
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 488786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488786&o=json
            external_identifier: CBDB:488786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LpzQvd4h5yb5UriA9L5MxH
        subject_person_id: p_9MD4jCakdaAwyFN7YqvMeF
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
        - id: cs_p7xRydykAAdRvLKa7tTkXC
          claim_id: c_LpzQvd4h5yb5UriA9L5MxH
          source_id: s_Z9CqfEcFzEEsssyi4pWf1G
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 488786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488786&o=json)
