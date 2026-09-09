---
schema: wang-person/v1
id: p_qizDTnB3WekbPdnh4QuvEM
status: active
merged_into: null
display_name: 王照遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PagoN4aPdxzduxyBjrF4pE
        subject_person_id: p_qizDTnB3WekbPdnh4QuvEM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王照遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MUFHUFYUVPnNn5wvTy4Ci4
          claim_id: c_PagoN4aPdxzduxyBjrF4pE
          source_id: s_8bh6hi7y69iR7R2tS2ARgx
          stance: supports
          locator: CBDB:69427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69427）
          source: &a1
            id: s_8bh6hi7y69iR7R2tS2ARgx
            source_type: api_record
            title: 中国历代人物传记资料库：王照遠（CBDB 69427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69427&o=json
            external_identifier: CBDB:69427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xAp4Zb8JaiQUTLABwt6eGZ
        subject_person_id: p_qizDTnB3WekbPdnh4QuvEM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBS9yCnQ8H1vP5A2DBNo6Q
          claim_id: c_xAp4Zb8JaiQUTLABwt6eGZ
          source_id: s_8bh6hi7y69iR7R2tS2ARgx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xtxYMiDc5u4wf2f7JGAH4f
        subject_person_id: p_qizDTnB3WekbPdnh4QuvEM
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
        - id: cs_epWbH2Nm7UHFxKxwgtN5Yg
          claim_id: c_xtxYMiDc5u4wf2f7JGAH4f
          source_id: s_8bh6hi7y69iR7R2tS2ARgx
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

# 王照遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王照遠 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王照遠（CBDB 69427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69427&o=json)
