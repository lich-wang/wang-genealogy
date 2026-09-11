---
schema: wang-person/v1
id: p_gaRB6foh67PJ327C2wT8be
status: active
merged_into: null
display_name: 王郇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bFwZxxbW3tyGF3kjKRC6yC
        subject_person_id: p_gaRB6foh67PJ327C2wT8be
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v2xie2UkYgGJtaJYj5eqNM
          claim_id: c_bFwZxxbW3tyGF3kjKRC6yC
          source_id: s_7QaFC3zDEzWeKw6PQ8BsRU
          stance: supports
          locator: CBDB:186848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186848）
          source: &a1
            id: s_7QaFC3zDEzWeKw6PQ8BsRU
            source_type: api_record
            title: 中国历代人物传记资料库：王郇（CBDB 186848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186848&o=json
            external_identifier: CBDB:186848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9t2dWui5EZwiKzRau2A81q
        subject_person_id: p_gaRB6foh67PJ327C2wT8be
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 959年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VvmS8j5P9QDnEb9g8jxK7b
          claim_id: c_9t2dWui5EZwiKzRau2A81q
          source_id: s_7QaFC3zDEzWeKw6PQ8BsRU
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
        id: c_tki2n5EXhcyPJekz4Ay1SM
        subject_person_id: p_gaRB6foh67PJ327C2wT8be
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郇（卒于959年），五代人物。籍贯曲陽。（中国历代人物传记资料库 CBDB 186848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WoSFuS6qomBJKi72casHAQ
          claim_id: c_tki2n5EXhcyPJekz4Ay1SM
          source_id: s_7QaFC3zDEzWeKw6PQ8BsRU
          stance: supports
          locator: CBDB:186848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MQbekgqsD1v-GkMv0CglNU
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gaRB6foh67PJ327C2wT8be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9j4bkU9PMddF0GyMw3MPS
          claim_id: c_MQbekgqsD1v-GkMv0CglNU
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DUzV7KbT9MziCZ4BqcdavQ
            source_type: api_record
            title: 中国历代人物传记资料库：王處直（CBDB 144827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json
            external_identifier: CBDB:144827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gNLMaQqWEd6Tcr2zT2brF
        status: active
        display_name: 王處直
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郇 | accepted |
| death.date | 959年 | accepted |
| bio.summary | 王郇（卒于959年），五代人物。籍贯曲陽。（中国历代人物传记资料库 CBDB 186848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4gNLMaQqWEd6Tcr2zT2brF | 王處直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處直（CBDB 144827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json)
- [中国历代人物传记资料库：王郇（CBDB 186848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186848&o=json)
