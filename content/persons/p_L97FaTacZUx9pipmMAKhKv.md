---
schema: wang-person/v1
id: p_L97FaTacZUx9pipmMAKhKv
status: active
merged_into: null
display_name: 王富
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w5KAttPi4Cc97LZEEzNdrd
        subject_person_id: p_L97FaTacZUx9pipmMAKhKv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wwwnHAXyfd31VQ8GKJ1RSo
          claim_id: c_w5KAttPi4Cc97LZEEzNdrd
          source_id: s_sPucKuYP4uFxMsF8Am63qD
          stance: supports
          locator: CBDB:37230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37230）
          source: &a1
            id: s_sPucKuYP4uFxMsF8Am63qD
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 37230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37230&o=json
            external_identifier: CBDB:37230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fogLefQJxMYw4rRPTMHXCx
        subject_person_id: p_L97FaTacZUx9pipmMAKhKv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFGGQ354ww2UvrMBSMxZef
          claim_id: c_fogLefQJxMYw4rRPTMHXCx
          source_id: s_sPucKuYP4uFxMsF8Am63qD
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
        id: c_cmybg77dgYCG7PqjUnF3CF
        subject_person_id: p_L97FaTacZUx9pipmMAKhKv
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
        - id: cs_RA8L2xHVHkSz28mBa2sSjX
          claim_id: c_cmybg77dgYCG7PqjUnF3CF
          source_id: s_sPucKuYP4uFxMsF8Am63qD
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

# 王富

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王富 | accepted |
| death.date | 1181年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王富（CBDB 37230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37230&o=json)
