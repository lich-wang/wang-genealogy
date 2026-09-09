---
schema: wang-person/v1
id: p_JeWsBNwAAMvaBffA9g8xqG
status: active
merged_into: null
display_name: 王浩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rxp3vuY16fU7nRkhadg7pc
        subject_person_id: p_JeWsBNwAAMvaBffA9g8xqG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3C1oeKN8vr8g15Dc2vR2DL
          claim_id: c_rxp3vuY16fU7nRkhadg7pc
          source_id: s_ja6L3zo1QHHzfMY3DUheEV
          stance: supports
          locator: CBDB:318317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318317）
          source: &a1
            id: s_ja6L3zo1QHHzfMY3DUheEV
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 318317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318317&o=json
            external_identifier: CBDB:318317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_21gBqrspdUumJqbDweEwHy
        subject_person_id: p_JeWsBNwAAMvaBffA9g8xqG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJgszM53q4Xk43ihhCDaW9
          claim_id: c_21gBqrspdUumJqbDweEwHy
          source_id: s_ja6L3zo1QHHzfMY3DUheEV
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

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 318317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318317&o=json)
