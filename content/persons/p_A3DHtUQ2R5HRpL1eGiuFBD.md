---
schema: wang-person/v1
id: p_A3DHtUQ2R5HRpL1eGiuFBD
status: active
merged_into: null
display_name: 王昱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nrpsERrdFRL6yZZS7HCAmG
        subject_person_id: p_A3DHtUQ2R5HRpL1eGiuFBD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ANpWhqqgWnFdzBQQAG6ZZ
          claim_id: c_nrpsERrdFRL6yZZS7HCAmG
          source_id: s_3uM6vaDFtUtQt42EBsUJ6u
          stance: supports
          locator: CBDB:38140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38140）
          source: &a1
            id: s_3uM6vaDFtUtQt42EBsUJ6u
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 38140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38140&o=json
            external_identifier: CBDB:38140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4MosqyC3vFfUiLG98HCSHc
        subject_person_id: p_A3DHtUQ2R5HRpL1eGiuFBD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 962年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32jCi3xo6JdXqAwxY4u6YJ
          claim_id: c_4MosqyC3vFfUiLG98HCSHc
          source_id: s_3uM6vaDFtUtQt42EBsUJ6u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4SCWCmo7MSU1vz5HRMBrN3
        subject_person_id: p_A3DHtUQ2R5HRpL1eGiuFBD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1035年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qpA8b3EXSb6aFPGGitsFDw
          claim_id: c_4SCWCmo7MSU1vz5HRMBrN3
          source_id: s_3uM6vaDFtUtQt42EBsUJ6u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RB6s8f3hVf8F7hzWn836FD
        subject_person_id: p_A3DHtUQ2R5HRpL1eGiuFBD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F8NLdTpQMeC1pXieT5xZDz
          claim_id: c_RB6s8f3hVf8F7hzWn836FD
          source_id: s_3uM6vaDFtUtQt42EBsUJ6u
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

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| birth.date | 962年 | accepted |
| death.date | 1035年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 38140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38140&o=json)
