---
schema: wang-person/v1
id: p_GxNLbt4z2RUssb1mHCMuWL
status: active
merged_into: null
display_name: 王儒卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xWmnMSnLp2asFRybDAz4gz
        subject_person_id: p_GxNLbt4z2RUssb1mHCMuWL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oCnKf4Zj1V8kH3RJvv3Yk4
          claim_id: c_xWmnMSnLp2asFRybDAz4gz
          source_id: s_G9w7Au8LMEnWJDjwkuBC8m
          stance: supports
          locator: CBDB:687143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687143）
          source: &a1
            id: s_G9w7Au8LMEnWJDjwkuBC8m
            source_type: api_record
            title: 中国历代人物传记资料库：王儒卿（CBDB 687143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687143&o=json
            external_identifier: CBDB:687143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQqGk4Y84mUhCZxi66bRvh
        subject_person_id: p_GxNLbt4z2RUssb1mHCMuWL
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
        - id: cs_snwE1vFpxTfs3rKgBe29gn
          claim_id: c_yQqGk4Y84mUhCZxi66bRvh
          source_id: s_G9w7Au8LMEnWJDjwkuBC8m
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

# 王儒卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒卿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒卿（CBDB 687143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687143&o=json)
