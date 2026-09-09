---
schema: wang-person/v1
id: p_rCnbwXzc5524R42AtLYK9s
status: active
merged_into: null
display_name: 王允謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QL62cUgcr9NVp7e7wA6yaF
        subject_person_id: p_rCnbwXzc5524R42AtLYK9s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sfs3Z62RajCA2BBY2KMfkB
          claim_id: c_QL62cUgcr9NVp7e7wA6yaF
          source_id: s_KYxqxYUg4Genc9NFYUcNCQ
          stance: supports
          locator: CBDB:342247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342247）
          source: &a1
            id: s_KYxqxYUg4Genc9NFYUcNCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王允謙（CBDB 342247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342247&o=json
            external_identifier: CBDB:342247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v25zTcV81bFFcn7dKrwBsF
        subject_person_id: p_rCnbwXzc5524R42AtLYK9s
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
        - id: cs_qE9crj71KxCA3zsMgm7P8z
          claim_id: c_v25zTcV81bFFcn7dKrwBsF
          source_id: s_KYxqxYUg4Genc9NFYUcNCQ
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

# 王允謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允謙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允謙（CBDB 342247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342247&o=json)
