---
schema: wang-person/v1
id: p_ptMfEt1rAT4WiPXRdKXa9c
status: active
merged_into: null
display_name: 王馨
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1NTZASHnnPVXJrgvGmzmki
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馨，明人物。CBDB 记录其曾任教諭、中書舍人。中国历代人物传记资料库（CBDB）以人物编号 302967 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MXEgZHsrvDifMYPDg1tBMk
          claim_id: c_1NTZASHnnPVXJrgvGmzmki
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
        - id: cs_6QXGC1_7-Z2-KDU0144wF0
          claim_id: c_1NTZASHnnPVXJrgvGmzmki
          source_id: s_McGXGnhaqmXfDMKXXBUtoM
          stance: supports
          locator: CBDB:302967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_McGXGnhaqmXfDMKXXBUtoM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王馨（302967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302967&o=json
            external_identifier: CBDB:302967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.654Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1aBuLPP8kmwJtHGQnpv59q
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JWbxNoS811ZSkb1hnSoJAg
          claim_id: c_1aBuLPP8kmwJtHGQnpv59q
          source_id: s_McGXGnhaqmXfDMKXXBUtoM
          stance: supports
          locator: Q45626817
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_psKk7fg8hiq25Lo2Rw2yA5
          claim_id: c_1aBuLPP8kmwJtHGQnpv59q
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: Q45626817
          quotation: null
          interpretation_note: null
          source:
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
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

# 王馨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王馨，明人物。CBDB 记录其曾任教諭、中書舍人。中国历代人物传记资料库（CBDB）以人物编号 302967 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王馨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王馨（Q45626817）](https://www.wikidata.org/wiki/Q45626817)
- [CBDB 中国历代人物传记资料库：王馨（302967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302967&o=json)
