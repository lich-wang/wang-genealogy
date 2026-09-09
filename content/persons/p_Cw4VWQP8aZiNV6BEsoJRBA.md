---
schema: wang-person/v1
id: p_Cw4VWQP8aZiNV6BEsoJRBA
status: active
merged_into: null
display_name: 王元鶚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CHtX9feXsFvyNB7jNYLJ77
        subject_person_id: p_Cw4VWQP8aZiNV6BEsoJRBA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元鶚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wbJroTAhSeJZ2STX5Pv3tY
          claim_id: c_CHtX9feXsFvyNB7jNYLJ77
          source_id: s_nAJjtCzorz1ER4JZ66H2w8
          stance: supports
          locator: CBDB:636185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636185）
          source: &a1
            id: s_nAJjtCzorz1ER4JZ66H2w8
            source_type: api_record
            title: 中国历代人物传记资料库：王元鶚（CBDB 636185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636185&o=json
            external_identifier: CBDB:636185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_696CJKLsCDRVRLgpVo38Ag
        subject_person_id: p_Cw4VWQP8aZiNV6BEsoJRBA
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
        - id: cs_hu66WZ59J8QntA74r4g3Jq
          claim_id: c_696CJKLsCDRVRLgpVo38Ag
          source_id: s_nAJjtCzorz1ER4JZ66H2w8
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

# 王元鶚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元鶚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元鶚（CBDB 636185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636185&o=json)
