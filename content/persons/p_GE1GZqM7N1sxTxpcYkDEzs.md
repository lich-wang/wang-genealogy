---
schema: wang-person/v1
id: p_GE1GZqM7N1sxTxpcYkDEzs
status: active
merged_into: null
display_name: 王泰亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDCiNhA9z8VY3ebJeXbo2S
        subject_person_id: p_GE1GZqM7N1sxTxpcYkDEzs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZiKxTwDb8nTzD2okqLLcb8
          claim_id: c_BDCiNhA9z8VY3ebJeXbo2S
          source_id: s_3QMN9nfb4LxCrc79Y6WJMt
          stance: supports
          locator: CBDB:219261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219261）
          source: &a1
            id: s_3QMN9nfb4LxCrc79Y6WJMt
            source_type: api_record
            title: 中国历代人物传记资料库：王泰亨（CBDB 219261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219261&o=json
            external_identifier: CBDB:219261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bc7QNdCB5ZW1PfPvH2pDEB
        subject_person_id: p_GE1GZqM7N1sxTxpcYkDEzs
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
        - id: cs_WeBV2eHSMW2DL8XSg8Heev
          claim_id: c_Bc7QNdCB5ZW1PfPvH2pDEB
          source_id: s_3QMN9nfb4LxCrc79Y6WJMt
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

# 王泰亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰亨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰亨（CBDB 219261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219261&o=json)
