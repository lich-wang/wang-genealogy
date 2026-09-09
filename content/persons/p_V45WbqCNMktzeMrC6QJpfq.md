---
schema: wang-person/v1
id: p_V45WbqCNMktzeMrC6QJpfq
status: active
merged_into: null
display_name: 王穩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ELNRzdE2vvs8APH513Z9jX
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9zA9Ajt2ondC3pLMz8Zi7
          claim_id: c_ELNRzdE2vvs8APH513Z9jX
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
          stance: supports
          locator: CBDB:266955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266955）
          source: &a1
            id: s_XGB9gC8r39Aj1xFmkkAGHP
            source_type: api_record
            title: 中国历代人物传记资料库：王穩（CBDB 266955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json
            external_identifier: CBDB:266955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQELk6Jbc8LkD5xm1oPzkD
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
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
        - id: cs_MXSYpX51sr2vggWUzwVAae
          claim_id: c_DQELk6Jbc8LkD5xm1oPzkD
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
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

# 王穩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穩（CBDB 266955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json)
