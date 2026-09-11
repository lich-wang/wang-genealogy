---
schema: wang-person/v1
id: p_nj6JBEX9XtvP1QDpNKrZXN
status: active
merged_into: null
display_name: 王達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DvHv9cRAqv6MMYVkivpg2v
        subject_person_id: p_nj6JBEX9XtvP1QDpNKrZXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YnrUBeehZQUJWH89yXJaJW
          claim_id: c_DvHv9cRAqv6MMYVkivpg2v
          source_id: s_uoQ1NA3W69z64NosDnQS5L
          stance: supports
          locator: CBDB:277028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277028）
          source: &a1
            id: s_uoQ1NA3W69z64NosDnQS5L
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 277028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277028&o=json
            external_identifier: CBDB:277028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AyowQjTPrvBM3nT9oYNSmV
        subject_person_id: p_nj6JBEX9XtvP1QDpNKrZXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。正德六年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 277028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_coceTxxBs1nrPUduFq9cuF
          claim_id: c_AyowQjTPrvBM3nT9oYNSmV
          source_id: s_uoQ1NA3W69z64NosDnQS5L
          stance: supports
          locator: CBDB:277028
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。正德六年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 277028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 277028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277028&o=json)
