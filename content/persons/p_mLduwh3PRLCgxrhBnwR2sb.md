---
schema: wang-person/v1
id: p_mLduwh3PRLCgxrhBnwR2sb
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHLVXS87E4BU4QVG93pEAu
        subject_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_es3ARnMF8XkyuNkNQtL8gB
          claim_id: c_PHLVXS87E4BU4QVG93pEAu
          source_id: s_M6RUru4ZKe7QYMDceSiB4U
          stance: supports
          locator: CBDB:241144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241144）
          source: &a1
            id: s_M6RUru4ZKe7QYMDceSiB4U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 241144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json
            external_identifier: CBDB:241144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m371TnMxxGHCwyyrhAy1j2
        subject_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NHjJ20M8KAzpSwF34hI0BB
          claim_id: c_m371TnMxxGHCwyyrhAy1j2
          source_id: s_M6RUru4ZKe7QYMDceSiB4U
          stance: supports
          locator: CBDB:241144
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 241144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json)
