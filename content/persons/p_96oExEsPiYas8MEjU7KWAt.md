---
schema: wang-person/v1
id: p_96oExEsPiYas8MEjU7KWAt
status: active
merged_into: null
display_name: 王際元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h83JoB1QKpCCmQDL8DL85G
        subject_person_id: p_96oExEsPiYas8MEjU7KWAt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mht6RkBMXbZHUrHD1PFw6V
          claim_id: c_h83JoB1QKpCCmQDL8DL85G
          source_id: s_qsv9q7cqRc4BeGNLTYutq2
          stance: supports
          locator: CBDB:640783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640783）
          source: &a1
            id: s_qsv9q7cqRc4BeGNLTYutq2
            source_type: api_record
            title: 中国历代人物传记资料库：王際元（CBDB 640783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640783&o=json
            external_identifier: CBDB:640783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rkeaw8ZYvaFFfGit6hA4rH
        subject_person_id: p_96oExEsPiYas8MEjU7KWAt
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
        - id: cs_57AAiHCcoT1jJJqfZ9Ubyb
          claim_id: c_rkeaw8ZYvaFFfGit6hA4rH
          source_id: s_qsv9q7cqRc4BeGNLTYutq2
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

# 王際元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際元 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際元（CBDB 640783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640783&o=json)
