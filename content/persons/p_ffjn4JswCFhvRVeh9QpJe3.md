---
schema: wang-person/v1
id: p_ffjn4JswCFhvRVeh9QpJe3
status: active
merged_into: null
display_name: 王方諝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kvfQpCzmgbbXVf2dWTjGWC
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方諝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_om6hZVAwu9sws5cy1N52c9
          claim_id: c_kvfQpCzmgbbXVf2dWTjGWC
          source_id: s_ZUH6G1cASQEfx5kKwPC7NR
          stance: supports
          locator: CBDB:175647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175647）
          source: &a1
            id: s_ZUH6G1cASQEfx5kKwPC7NR
            source_type: api_record
            title: 中国历代人物传记资料库：王方諝（CBDB 175647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175647&o=json
            external_identifier: CBDB:175647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NSFKe9WMAnks8D3725b2qY
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hagLWgZKGF8REoBmDgZHHR
          claim_id: c_NSFKe9WMAnks8D3725b2qY
          source_id: s_ZUH6G1cASQEfx5kKwPC7NR
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
        id: c_4QNDznqN13rB8iMn9Q8m47
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方諝（卒于625年），唐人物。曾任錄事參軍。（中国历代人物传记资料库 CBDB 175647）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QkdmRWnA3dSVwZDhXlxVao
          claim_id: c_4QNDznqN13rB8iMn9Q8m47
          source_id: s_ZUH6G1cASQEfx5kKwPC7NR
          stance: supports
          locator: CBDB:175647
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N3HLmOzYl_EVxiF3mW7nB4
        subject_person_id: p_8bxLujAKdv5L436XQAo6GK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HRRMBxwWezjeY6ifkZHejG
          claim_id: c_N3HLmOzYl_EVxiF3mW7nB4
          source_id: s_1wGUKgXTHMcKJKZcCMMFzQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1wGUKgXTHMcKJKZcCMMFzQ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘義（CBDB 175646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175646&o=json
            external_identifier: CBDB:175646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8bxLujAKdv5L436XQAo6GK
        status: active
        display_name: 王弘義
        merged_into_person_id: null
  children:
    - claim:
        id: c_KsNui5Ijb956HN3n69d3nZ
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_92on9Z7ZbHj2wBGtTrfGy3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U25Lk5fOG2xeh6X58DjA9h
          claim_id: c_KsNui5Ijb956HN3n69d3nZ
          source_id: s_dZU34ztUDa4PPuWM3K5gBv
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dZU34ztUDa4PPuWM3K5gBv
            source_type: api_record
            title: 中国历代人物传记资料库：王眘（CBDB 175648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175648&o=json
            external_identifier: CBDB:175648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_92on9Z7ZbHj2wBGtTrfGy3
        status: active
        display_name: 王眘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方諝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方諝 | accepted |
| death.date | 625年 | accepted |
| bio.summary | 王方諝（卒于625年），唐人物。曾任錄事參軍。（中国历代人物传记资料库 CBDB 175647） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8bxLujAKdv5L436XQAo6GK | 王弘義 | accepted |
| children | p_92on9Z7ZbHj2wBGtTrfGy3 | 王眘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方諝（CBDB 175647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175647&o=json)
- [中国历代人物传记资料库：王弘義（CBDB 175646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175646&o=json)
- [中国历代人物传记资料库：王眘（CBDB 175648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175648&o=json)
