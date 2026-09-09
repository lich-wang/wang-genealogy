---
schema: wang-person/v1
id: p_47Hk28KZUwgZ9F4C3LXK6t
status: active
merged_into: null
display_name: 王藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4da247LTafyXQBw8zyn5bq
        subject_person_id: p_47Hk28KZUwgZ9F4C3LXK6t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MBr5ndzCuxpcp785hceBjQ
          claim_id: c_4da247LTafyXQBw8zyn5bq
          source_id: s_NH9dR3MDc3LJubw4h3JDVZ
          stance: supports
          locator: CBDB:454711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454711）
          source: &a1
            id: s_NH9dR3MDc3LJubw4h3JDVZ
            source_type: api_record
            title: 中国历代人物传记资料库：王藩（CBDB 454711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454711&o=json
            external_identifier: CBDB:454711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p7n5hMFiE29vb2EbQMTTRm
        subject_person_id: p_47Hk28KZUwgZ9F4C3LXK6t
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
        - id: cs_Ftz14RsLLMABMvCjubtLxn
          claim_id: c_p7n5hMFiE29vb2EbQMTTRm
          source_id: s_NH9dR3MDc3LJubw4h3JDVZ
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

# 王藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藩（CBDB 454711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454711&o=json)
