---
schema: wang-person/v1
id: p_QCcyW4CwTE4jK8ewZKh23S
status: active
merged_into: null
display_name: 王士明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8efk1S9eCNeuhxmViW92aK
        subject_person_id: p_QCcyW4CwTE4jK8ewZKh23S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d5DDxg9YMx14Ku8zdvKTzf
          claim_id: c_8efk1S9eCNeuhxmViW92aK
          source_id: s_ConF3pXonBSBxVg6cd92yQ
          stance: supports
          locator: CBDB:636798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636798）
          source: &a1
            id: s_ConF3pXonBSBxVg6cd92yQ
            source_type: api_record
            title: 中国历代人物传记资料库：王士明（CBDB 636798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636798&o=json
            external_identifier: CBDB:636798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hcDjhc7JTAM2dTpKSV9okE
        subject_person_id: p_QCcyW4CwTE4jK8ewZKh23S
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
        - id: cs_fMgwJ6XpwC8wHpoSFAJeX1
          claim_id: c_hcDjhc7JTAM2dTpKSV9okE
          source_id: s_ConF3pXonBSBxVg6cd92yQ
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

# 王士明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士明 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士明（CBDB 636798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636798&o=json)
