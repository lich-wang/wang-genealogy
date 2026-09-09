---
schema: wang-person/v1
id: p_byMnc1rViQF879sQ7WQB6d
status: active
merged_into: null
display_name: 王夢彪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TUM2M431s9VmSj2ov9H8bV
        subject_person_id: p_byMnc1rViQF879sQ7WQB6d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7p1SgRAHXwvSUGfT5JqVHe
          claim_id: c_TUM2M431s9VmSj2ov9H8bV
          source_id: s_rHftw86k7DdJRBHDQMgA7H
          stance: supports
          locator: CBDB:636864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636864）
          source: &a1
            id: s_rHftw86k7DdJRBHDQMgA7H
            source_type: api_record
            title: 中国历代人物传记资料库：王夢彪（CBDB 636864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636864&o=json
            external_identifier: CBDB:636864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p8BKzYBJdKCizfJiA4i1LL
        subject_person_id: p_byMnc1rViQF879sQ7WQB6d
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
        - id: cs_cNFQydWM49JRYYDd4C4naf
          claim_id: c_p8BKzYBJdKCizfJiA4i1LL
          source_id: s_rHftw86k7DdJRBHDQMgA7H
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

# 王夢彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢彪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢彪（CBDB 636864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636864&o=json)
