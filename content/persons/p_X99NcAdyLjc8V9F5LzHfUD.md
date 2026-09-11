---
schema: wang-person/v1
id: p_X99NcAdyLjc8V9F5LzHfUD
status: active
merged_into: null
display_name: 王源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1qXsnSf8Cu5hAVhd78tWxw
        subject_person_id: p_X99NcAdyLjc8V9F5LzHfUD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PW3EXUGUT6AjnMjUmqCFRN
          claim_id: c_1qXsnSf8Cu5hAVhd78tWxw
          source_id: s_KaRVA5BQKQ55WL7y7AVuMS
          stance: supports
          locator: CBDB:67879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67879）
          source: &a1
            id: s_KaRVA5BQKQ55WL7y7AVuMS
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 67879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67879&o=json
            external_identifier: CBDB:67879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iR45nrZVgS6fEGPZYDujTR
        subject_person_id: p_X99NcAdyLjc8V9F5LzHfUD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源，明人物。曾任大理寺左少卿、衛知事。（中国历代人物传记资料库 CBDB 67879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lSQJpdYTWKFEL94GtwrZmk
          claim_id: c_iR45nrZVgS6fEGPZYDujTR
          source_id: s_KaRVA5BQKQ55WL7y7AVuMS
          stance: supports
          locator: CBDB:67879
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

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| bio.summary | 王源，明人物。曾任大理寺左少卿、衛知事。（中国历代人物传记资料库 CBDB 67879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 67879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67879&o=json)
