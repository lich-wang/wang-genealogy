---
schema: wang-person/v1
id: p_ppR1Wa76bJiih22FaU25VS
status: active
merged_into: null
display_name: 王映青
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJsud3bFsLwimupDBBnQNp
        subject_person_id: p_ppR1Wa76bJiih22FaU25VS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映青
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jc1K4JbJ4ga22wSMT482P5
          claim_id: c_EJsud3bFsLwimupDBBnQNp
          source_id: s_ACExUzDn5waK6xSwXUPd6Q
          stance: supports
          locator: CBDB:638405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638405）
          source: &a1
            id: s_ACExUzDn5waK6xSwXUPd6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王映青（CBDB 638405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638405&o=json
            external_identifier: CBDB:638405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxNBBzAdcxJwSCCNw57vN2
        subject_person_id: p_ppR1Wa76bJiih22FaU25VS
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
        - id: cs_T4PqJP9Ph8CHjUKUvHPhpJ
          claim_id: c_LxNBBzAdcxJwSCCNw57vN2
          source_id: s_ACExUzDn5waK6xSwXUPd6Q
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

# 王映青

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王映青 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王映青（CBDB 638405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638405&o=json)
