---
schema: wang-person/v1
id: p_93A1b1EQPwu12KzRxUo28C
status: active
merged_into: null
display_name: 王大有
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yu379xEyBW3yuw3CjfgieT
        subject_person_id: p_93A1b1EQPwu12KzRxUo28C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fh1usTxUwoENQMwrN3DzLi
          claim_id: c_Yu379xEyBW3yuw3CjfgieT
          source_id: s_q54fWYgjXdNB6MLRPg4KXt
          stance: supports
          locator: CBDB:101043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101043）
          source: &a1
            id: s_q54fWYgjXdNB6MLRPg4KXt
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 101043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101043&o=json
            external_identifier: CBDB:101043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eoQC3wVD8Hs9iLhNLraWyB
        subject_person_id: p_93A1b1EQPwu12KzRxUo28C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vYe486QJMTx6Sxc5bP8u5M
          claim_id: c_eoQC3wVD8Hs9iLhNLraWyB
          source_id: s_q54fWYgjXdNB6MLRPg4KXt
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

# 王大有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大有 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大有（CBDB 101043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101043&o=json)
