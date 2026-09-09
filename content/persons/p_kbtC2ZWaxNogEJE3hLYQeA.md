---
schema: wang-person/v1
id: p_kbtC2ZWaxNogEJE3hLYQeA
status: active
merged_into: null
display_name: 王漢源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GH385KNkC2NgdyLU3ecyfk
        subject_person_id: p_kbtC2ZWaxNogEJE3hLYQeA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TK5uKQeG7aQjoowKPGZ2XD
          claim_id: c_GH385KNkC2NgdyLU3ecyfk
          source_id: s_PSv29noFDCXCCPtEAWZQni
          stance: supports
          locator: CBDB:526981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526981）
          source: &a1
            id: s_PSv29noFDCXCCPtEAWZQni
            source_type: api_record
            title: 中国历代人物传记资料库：王漢源（CBDB 526981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526981&o=json
            external_identifier: CBDB:526981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Roni4Z9g26Q6nC71E8L9SR
        subject_person_id: p_kbtC2ZWaxNogEJE3hLYQeA
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
        - id: cs_yGP5NfsonMFz9PaFus7BYe
          claim_id: c_Roni4Z9g26Q6nC71E8L9SR
          source_id: s_PSv29noFDCXCCPtEAWZQni
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

# 王漢源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢源 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢源（CBDB 526981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526981&o=json)
