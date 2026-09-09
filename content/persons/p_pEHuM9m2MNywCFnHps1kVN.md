---
schema: wang-person/v1
id: p_pEHuM9m2MNywCFnHps1kVN
status: active
merged_into: null
display_name: 王敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x8NNTURcYbLB19jcCRm7B7
        subject_person_id: p_pEHuM9m2MNywCFnHps1kVN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_36GuMpbfJkQcjNuQySghMd
          claim_id: c_x8NNTURcYbLB19jcCRm7B7
          source_id: s_wgQqqN7nj8EDdtTRHF97g2
          stance: supports
          locator: CBDB:208727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208727）
          source: &a1
            id: s_wgQqqN7nj8EDdtTRHF97g2
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 208727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json
            external_identifier: CBDB:208727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QxVuajGMUcxkQLJBp5oQup
        subject_person_id: p_pEHuM9m2MNywCFnHps1kVN
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
        - id: cs_vPwhK1BBNKB7NGNnPCtE28
          claim_id: c_QxVuajGMUcxkQLJBp5oQup
          source_id: s_wgQqqN7nj8EDdtTRHF97g2
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

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 208727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json)
