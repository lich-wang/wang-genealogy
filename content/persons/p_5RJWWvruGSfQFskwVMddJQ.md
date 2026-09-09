---
schema: wang-person/v1
id: p_5RJWWvruGSfQFskwVMddJQ
status: active
merged_into: null
display_name: 王萬年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zkaTL7LCau28rAByG5YGDk
        subject_person_id: p_5RJWWvruGSfQFskwVMddJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mu4VQUd6P6f4h2KEE8BAym
          claim_id: c_zkaTL7LCau28rAByG5YGDk
          source_id: s_46mFMzpr22E3dKs9z9jMub
          stance: supports
          locator: CBDB:458389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458389）
          source: &a1
            id: s_46mFMzpr22E3dKs9z9jMub
            source_type: api_record
            title: 中国历代人物传记资料库：王萬年（CBDB 458389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458389&o=json
            external_identifier: CBDB:458389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sJd4tgpo5R2ZmDKPgSJNPV
        subject_person_id: p_5RJWWvruGSfQFskwVMddJQ
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
        - id: cs_eXGuWpqiBaKW6SpQAgDoAE
          claim_id: c_sJd4tgpo5R2ZmDKPgSJNPV
          source_id: s_46mFMzpr22E3dKs9z9jMub
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

# 王萬年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬年（CBDB 458389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458389&o=json)
