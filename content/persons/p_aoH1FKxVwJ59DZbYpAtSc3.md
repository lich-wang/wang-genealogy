---
schema: wang-person/v1
id: p_aoH1FKxVwJ59DZbYpAtSc3
status: active
merged_into: null
display_name: 王柯齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JKCP1FQAk24P9yd8Y9brf
        subject_person_id: p_aoH1FKxVwJ59DZbYpAtSc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柯齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XaH8M2sFz35tuY71N1Gobz
          claim_id: c_2JKCP1FQAk24P9yd8Y9brf
          source_id: s_ZypGsGycxQTf4AjQ3Tb6Sq
          stance: supports
          locator: CBDB:638702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638702）
          source: &a1
            id: s_ZypGsGycxQTf4AjQ3Tb6Sq
            source_type: api_record
            title: 中国历代人物传记资料库：王柯齡（CBDB 638702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638702&o=json
            external_identifier: CBDB:638702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dEZA5Apfai9phDDa2Anz8G
        subject_person_id: p_aoH1FKxVwJ59DZbYpAtSc3
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
        - id: cs_u5YmKxjgnGMfJJHAE6iBEW
          claim_id: c_dEZA5Apfai9phDDa2Anz8G
          source_id: s_ZypGsGycxQTf4AjQ3Tb6Sq
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

# 王柯齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柯齡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柯齡（CBDB 638702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638702&o=json)
