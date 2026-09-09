---
schema: wang-person/v1
id: p_NCWQSLKK5kPHCCGdFTEbVf
status: active
merged_into: null
display_name: 王蕙士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4gFapok1TK5yxFuETNN2Fe
        subject_person_id: p_NCWQSLKK5kPHCCGdFTEbVf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T1WN1K3v6wB6VY1X7SG7oD
          claim_id: c_4gFapok1TK5yxFuETNN2Fe
          source_id: s_L9YHnuRAg7t3rWwRF126AM
          stance: supports
          locator: CBDB:640167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640167）
          source: &a1
            id: s_L9YHnuRAg7t3rWwRF126AM
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙士（CBDB 640167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640167&o=json
            external_identifier: CBDB:640167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K46omMPWUqv4emMVwi6C9T
        subject_person_id: p_NCWQSLKK5kPHCCGdFTEbVf
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
        - id: cs_ZQLdRm64t8KHvuDtziex7t
          claim_id: c_K46omMPWUqv4emMVwi6C9T
          source_id: s_L9YHnuRAg7t3rWwRF126AM
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

# 王蕙士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕙士 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕙士（CBDB 640167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640167&o=json)
