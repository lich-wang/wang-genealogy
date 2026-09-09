---
schema: wang-person/v1
id: p_d79Edn96mamC7Lu7KFw99H
status: active
merged_into: null
display_name: 王逸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2nCdMfKDQACKbm62Qm4hEv
        subject_person_id: p_d79Edn96mamC7Lu7KFw99H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBV4SFDVG657Cv5StwRrg4
          claim_id: c_2nCdMfKDQACKbm62Qm4hEv
          source_id: s_pwUiN8wTR9Apb7Q7hGdEMa
          stance: supports
          locator: CBDB:463953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463953）
          source: &a1
            id: s_pwUiN8wTR9Apb7Q7hGdEMa
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 463953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463953&o=json
            external_identifier: CBDB:463953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CLRj8hP6afk2Q5MjLbnP3
        subject_person_id: p_d79Edn96mamC7Lu7KFw99H
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
        - id: cs_Lh2pcynEePDyqXWm9wQsBi
          claim_id: c_7CLRj8hP6afk2Q5MjLbnP3
          source_id: s_pwUiN8wTR9Apb7Q7hGdEMa
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

# 王逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逸 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逸（CBDB 463953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463953&o=json)
