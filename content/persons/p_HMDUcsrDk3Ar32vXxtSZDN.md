---
schema: wang-person/v1
id: p_HMDUcsrDk3Ar32vXxtSZDN
status: active
merged_into: null
display_name: 王良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cfZsAUkDX2my6QLA3o7tw5
        subject_person_id: p_HMDUcsrDk3Ar32vXxtSZDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZXE2gvKpUkd89B3EJwHpUq
          claim_id: c_cfZsAUkDX2my6QLA3o7tw5
          source_id: s_7DLBvY6q1GKK8KJsvDCfEr
          stance: supports
          locator: CBDB:66594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66594）
          source: &a1
            id: s_7DLBvY6q1GKK8KJsvDCfEr
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 66594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66594&o=json
            external_identifier: CBDB:66594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_meqpHkW7ARndMtmnCYGdEM
        subject_person_id: p_HMDUcsrDk3Ar32vXxtSZDN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ENvwwPwUY8LxsmSWNNFxk
          claim_id: c_meqpHkW7ARndMtmnCYGdEM
          source_id: s_7DLBvY6q1GKK8KJsvDCfEr
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
        id: c_waC9Rc7qFfQbYG6nzXqWrA
        subject_person_id: p_HMDUcsrDk3Ar32vXxtSZDN
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
        - id: cs_MNK3NnfgPbpBrPArwzk4yp
          claim_id: c_waC9Rc7qFfQbYG6nzXqWrA
          source_id: s_7DLBvY6q1GKK8KJsvDCfEr
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

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| death.date | 1402年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 66594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66594&o=json)
