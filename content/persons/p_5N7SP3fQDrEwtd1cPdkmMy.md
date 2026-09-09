---
schema: wang-person/v1
id: p_5N7SP3fQDrEwtd1cPdkmMy
status: active
merged_into: null
display_name: 王儼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNg9yVnkhYFMo9Ghfeht2o
        subject_person_id: p_5N7SP3fQDrEwtd1cPdkmMy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9bSWhou7MwrC64JnU7u6N
          claim_id: c_MNg9yVnkhYFMo9Ghfeht2o
          source_id: s_2fC4bY1CR7gwFLFREJcz1D
          stance: supports
          locator: CBDB:1921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1921）
          source: &a1
            id: s_2fC4bY1CR7gwFLFREJcz1D
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 1921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1921&o=json
            external_identifier: CBDB:1921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E3cp7YgmG2R1sRxHBkEzx9
        subject_person_id: p_5N7SP3fQDrEwtd1cPdkmMy
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
        - id: cs_jyohf2e759W1FWTFLdgYN4
          claim_id: c_E3cp7YgmG2R1sRxHBkEzx9
          source_id: s_2fC4bY1CR7gwFLFREJcz1D
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

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 1921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1921&o=json)
