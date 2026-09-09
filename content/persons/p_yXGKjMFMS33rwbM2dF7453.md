---
schema: wang-person/v1
id: p_yXGKjMFMS33rwbM2dF7453
status: active
merged_into: null
display_name: 王志鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZB7FzhnBMskWMU7LDPa4C8
        subject_person_id: p_yXGKjMFMS33rwbM2dF7453
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXxXo4qgvfzM3FAVn3nEHH
          claim_id: c_ZB7FzhnBMskWMU7LDPa4C8
          source_id: s_GAcSz7mJnCpKQuMeGD84eP
          stance: supports
          locator: CBDB:637775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637775）
          source: &a1
            id: s_GAcSz7mJnCpKQuMeGD84eP
            source_type: api_record
            title: 中国历代人物传记资料库：王志鈞（CBDB 637775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637775&o=json
            external_identifier: CBDB:637775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X2BbdHwaN8ARoPns7tUr5g
        subject_person_id: p_yXGKjMFMS33rwbM2dF7453
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
        - id: cs_Mh74BBBHGYQN91td89STzA
          claim_id: c_X2BbdHwaN8ARoPns7tUr5g
          source_id: s_GAcSz7mJnCpKQuMeGD84eP
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

# 王志鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志鈞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志鈞（CBDB 637775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637775&o=json)
