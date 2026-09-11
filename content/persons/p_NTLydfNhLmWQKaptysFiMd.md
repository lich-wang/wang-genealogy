---
schema: wang-person/v1
id: p_NTLydfNhLmWQKaptysFiMd
status: active
merged_into: null
display_name: 王子卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hu48i6BciUw6PEXAiRVb6F
        subject_person_id: p_NTLydfNhLmWQKaptysFiMd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qi6SCGSEwrG4gyWoTebEug
          claim_id: c_hu48i6BciUw6PEXAiRVb6F
          source_id: s_3pi7ntRn7tw3UHm37Py25L
          stance: supports
          locator: CBDB:126457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126457）
          source: &a1
            id: s_3pi7ntRn7tw3UHm37Py25L
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 126457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126457&o=json
            external_identifier: CBDB:126457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p5iECMRGUQ4sSA4ezRLCJi
        subject_person_id: p_NTLydfNhLmWQKaptysFiMd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nbjtFVxfz949qErEN7KooX
          claim_id: c_p5iECMRGUQ4sSA4ezRLCJi
          source_id: s_3pi7ntRn7tw3UHm37Py25L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NL9P9otuKJYwydLeBm8rBn
        subject_person_id: p_NTLydfNhLmWQKaptysFiMd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1567年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqKzmaNr7ePHLvNxbqDZ4U
          claim_id: c_NL9P9otuKJYwydLeBm8rBn
          source_id: s_3pi7ntRn7tw3UHm37Py25L
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
        id: c_cgPzcsfbASnZxrQFwHgrAC
        subject_person_id: p_NTLydfNhLmWQKaptysFiMd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子卿（1510年—1567年），明人物。籍贯仁和，曾任大理評事、縣令、知府。（中国历代人物传记资料库 CBDB 126457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0lteD3TdYoX93M4iag6lWq
          claim_id: c_cgPzcsfbASnZxrQFwHgrAC
          source_id: s_3pi7ntRn7tw3UHm37Py25L
          stance: supports
          locator: CBDB:126457
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

# 王子卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子卿 | accepted |
| birth.date | 1510年 | accepted |
| death.date | 1567年 | accepted |
| bio.summary | 王子卿（1510年—1567年），明人物。籍贯仁和，曾任大理評事、縣令、知府。（中国历代人物传记资料库 CBDB 126457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子卿（CBDB 126457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126457&o=json)
