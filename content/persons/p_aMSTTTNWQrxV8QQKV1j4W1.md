---
schema: wang-person/v1
id: p_aMSTTTNWQrxV8QQKV1j4W1
status: active
merged_into: null
display_name: 王克任
cbdb_id: 413945
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6d7C7EkGLrZqrh8wgMkDQV
        subject_person_id: p_aMSTTTNWQrxV8QQKV1j4W1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克任，明人物。曾任知府。（中国历代人物传记资料库 CBDB 413945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cuJhxU5NuXyODCBMRFnIsQ
          claim_id: c_6d7C7EkGLrZqrh8wgMkDQV
          source_id: s_yCeLKsn25StGdiJC8AMLGb
          stance: supports
          locator: CBDB:413945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yCeLKsn25StGdiJC8AMLGb
            source_type: api_record
            title: 中国历代人物传记资料库：王克任（CBDB 413945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413945&o=json
            external_identifier: CBDB:413945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:26.305Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fpScMhtd8DiZ7Qu74LnzTX
        subject_person_id: p_aMSTTTNWQrxV8QQKV1j4W1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DCmUKQvRapnzWqpWxnusmV
          claim_id: c_fpScMhtd8DiZ7Qu74LnzTX
          source_id: s_yCeLKsn25StGdiJC8AMLGb
          stance: supports
          locator: CBDB:413945
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5101-5200）｜历史性依据：CBDB 朝代 = 明
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

# 王克任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克任，明人物。曾任知府。（中国历代人物传记资料库 CBDB 413945） | accepted |
| name.primary | 王克任 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克任（CBDB 413945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413945&o=json)
