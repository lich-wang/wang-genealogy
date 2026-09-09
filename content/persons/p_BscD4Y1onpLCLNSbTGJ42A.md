---
schema: wang-person/v1
id: p_BscD4Y1onpLCLNSbTGJ42A
status: active
merged_into: null
display_name: 王璟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_csAuGYT31LNDDp11KwgKhh
        subject_person_id: p_BscD4Y1onpLCLNSbTGJ42A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VgeZC2oLDtUPeRCjXmNNBW
          claim_id: c_csAuGYT31LNDDp11KwgKhh
          source_id: s_QuVxBomFsFw6B4CbWQaXxK
          stance: supports
          locator: CBDB:483854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483854）
          source: &a1
            id: s_QuVxBomFsFw6B4CbWQaXxK
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 483854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483854&o=json
            external_identifier: CBDB:483854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q2v3FY4oTE99GbWUNNcp6C
        subject_person_id: p_BscD4Y1onpLCLNSbTGJ42A
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
        - id: cs_X7eP6p2CU1W4XkUjYJoMBg
          claim_id: c_Q2v3FY4oTE99GbWUNNcp6C
          source_id: s_QuVxBomFsFw6B4CbWQaXxK
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

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 483854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483854&o=json)
