---
schema: wang-person/v1
id: p_qqsY6t9Q8faV4F4CdLeZ5T
status: active
merged_into: null
display_name: 王本堅
cbdb_id: 332107
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iaJsuAjnRnzzF8tT5bcGra
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本堅，明人物。嘉靖四十四年進士，籍贯什邡，曾任主簿。（中国历代人物传记资料库 CBDB 332107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1c56xFvAktoR_RAg5zKcur
          claim_id: c_iaJsuAjnRnzzF8tT5bcGra
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: CBDB:332107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8mW4QyCmDN4jrYUjExNRUL
            source_type: api_record
            title: 中国历代人物传记资料库：王本堅（CBDB 332107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json
            external_identifier: CBDB:332107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g6JM31WU8SNa3aMo477NDb
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CY8yWgrT9co52msPxzbXPF
          claim_id: c_g6JM31WU8SNa3aMo477NDb
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: CBDB:332107
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dpCeYS1s3NAuekdwLFJdeK
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vj-Clyv4nisZKI7-fQiKtf
          claim_id: c_dpCeYS1s3NAuekdwLFJdeK
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8mW4QyCmDN4jrYUjExNRUL
            source_type: api_record
            title: 中国历代人物传记资料库：王本堅（CBDB 332107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json
            external_identifier: CBDB:332107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本堅，明人物。嘉靖四十四年進士，籍贯什邡，曾任主簿。（中国历代人物传记资料库 CBDB 332107） | accepted |
| name.primary | 王本堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本堅（CBDB 332107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json)
