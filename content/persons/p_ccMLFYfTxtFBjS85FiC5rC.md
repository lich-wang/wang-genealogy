---
schema: wang-person/v1
id: p_ccMLFYfTxtFBjS85FiC5rC
status: active
merged_into: null
display_name: 王世德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XYRhuNPPUWCD9WREgh441X
        subject_person_id: p_ccMLFYfTxtFBjS85FiC5rC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SzA4fDWKPQqZMfQG3djhB3
          claim_id: c_XYRhuNPPUWCD9WREgh441X
          source_id: s_D95wZ6DyWu368iMTtKHr4s
          stance: supports
          locator: CBDB:95457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（95457）
          source: &a1
            id: s_D95wZ6DyWu368iMTtKHr4s
            source_type: api_record
            title: 中国历代人物传记资料库：王世德（CBDB 95457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95457&o=json
            external_identifier: CBDB:95457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6qeSc7nw94kcQ3pPd9WcnQ
        subject_person_id: p_ccMLFYfTxtFBjS85FiC5rC
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
        - id: cs_vbD8QQtHcDPHD1NHBJMQsm
          claim_id: c_6qeSc7nw94kcQ3pPd9WcnQ
          source_id: s_D95wZ6DyWu368iMTtKHr4s
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
  spouses:
    - claim:
        id: c_VvBAwTgEjMKVNxPxqoannq
        subject_person_id: p_ccMLFYfTxtFBjS85FiC5rC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5UUNUhK6f4HtHEGT5NAVcS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pgx3o3vhwYOpt6f34_a3Bk
          claim_id: c_VvBAwTgEjMKVNxPxqoannq
          source_id: s_IoRkcuF26Zl90Cg6CUfLy1
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1678, HuWenKai #133：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_IoRkcuF26Zl90Cg6CUfLy1
            source_type: api_record
            title: 中国历代人物传记资料库：范景姒（CBDB 95455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95455&o=json
            external_identifier: CBDB:95455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5UUNUhK6f4HtHEGT5NAVcS
        status: active
        display_name: 范景姒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王世德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5UUNUhK6f4HtHEGT5NAVcS | 范景姒 | accepted |

## 外部来源

- [中国历代人物传记资料库：范景姒（CBDB 95455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95455&o=json)
- [中国历代人物传记资料库：王世德（CBDB 95457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95457&o=json)
