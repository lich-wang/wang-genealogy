---
schema: wang-person/v1
id: p_cnLC2aLV9en8L7saBqcdpg
status: active
merged_into: null
display_name: 王禮春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U4JJ9HeqqK7XYYTLo3cA5m
        subject_person_id: p_cnLC2aLV9en8L7saBqcdpg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiaJTxZV8S9hjVswq94rzL
          claim_id: c_U4JJ9HeqqK7XYYTLo3cA5m
          source_id: s_mSFEH3JWYpVFw3cozVsjFg
          stance: supports
          locator: CBDB:639628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639628）
          source: &a1
            id: s_mSFEH3JWYpVFw3cozVsjFg
            source_type: api_record
            title: 中国历代人物传记资料库：王禮春（CBDB 639628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639628&o=json
            external_identifier: CBDB:639628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rXc4zoXyiqMfoJ7LBeV9h1
        subject_person_id: p_cnLC2aLV9en8L7saBqcdpg
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
        - id: cs_W4huReofmBHYDw934iVgdB
          claim_id: c_rXc4zoXyiqMfoJ7LBeV9h1
          source_id: s_mSFEH3JWYpVFw3cozVsjFg
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

# 王禮春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮春 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禮春（CBDB 639628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639628&o=json)
