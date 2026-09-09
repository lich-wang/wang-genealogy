---
schema: wang-person/v1
id: p_LLrnLMs7sjmk9MARMFMq3T
status: active
merged_into: null
display_name: 王仲祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tF7GUB9pnGkMeSzZDBupXs
        subject_person_id: p_LLrnLMs7sjmk9MARMFMq3T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vfRLGQLAmRCFsaspE4tAtB
          claim_id: c_tF7GUB9pnGkMeSzZDBupXs
          source_id: s_J6AdkTSa3XrLAQpLSFdPeM
          stance: supports
          locator: CBDB:473880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473880）
          source: &a1
            id: s_J6AdkTSa3XrLAQpLSFdPeM
            source_type: api_record
            title: 中国历代人物传记资料库：王仲祥（CBDB 473880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473880&o=json
            external_identifier: CBDB:473880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YF43oWxPh9Vq92Vkyn7RLG
        subject_person_id: p_LLrnLMs7sjmk9MARMFMq3T
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
        - id: cs_PGFeQgQkj1X1v6bBqVPQpc
          claim_id: c_YF43oWxPh9Vq92Vkyn7RLG
          source_id: s_J6AdkTSa3XrLAQpLSFdPeM
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

# 王仲祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲祥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲祥（CBDB 473880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473880&o=json)
