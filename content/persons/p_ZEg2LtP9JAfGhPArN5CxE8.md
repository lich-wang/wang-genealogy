---
schema: wang-person/v1
id: p_ZEg2LtP9JAfGhPArN5CxE8
status: active
merged_into: null
display_name: 王廷璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9QY7zuEBP65uPsKqy7LC3k
        subject_person_id: p_ZEg2LtP9JAfGhPArN5CxE8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f94G4XuTPKLDZuec9tjPDb
          claim_id: c_9QY7zuEBP65uPsKqy7LC3k
          source_id: s_VpPB8QLKMeWnvph3CCx4LF
          stance: supports
          locator: CBDB:341942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341942）
          source: &a1
            id: s_VpPB8QLKMeWnvph3CCx4LF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷璧（CBDB 341942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341942&o=json
            external_identifier: CBDB:341942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZhsRaVBixFmq43JnTn7JXr
        subject_person_id: p_ZEg2LtP9JAfGhPArN5CxE8
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
        - id: cs_PMo6PQN4DSaH1khqfjY1Fd
          claim_id: c_ZhsRaVBixFmq43JnTn7JXr
          source_id: s_VpPB8QLKMeWnvph3CCx4LF
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

# 王廷璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷璧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷璧（CBDB 341942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341942&o=json)
