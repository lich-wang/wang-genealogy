---
schema: wang-person/v1
id: p_EJwVDZj1xNqv72p5LMTvfk
status: active
merged_into: null
display_name: 王達途
cbdb_id: 279744
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SL7yHwV8Lt9CV6C1A3KiXf
        subject_person_id: p_EJwVDZj1xNqv72p5LMTvfk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達途，明人物。正德十二年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 279744）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Zbe0DIHPJOJwmzl0JIsiHX
          claim_id: c_SL7yHwV8Lt9CV6C1A3KiXf
          source_id: s_MiYBGoueKwAb1vBGkyp9WU
          stance: supports
          locator: CBDB:279744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MiYBGoueKwAb1vBGkyp9WU
            source_type: api_record
            title: 中国历代人物传记资料库：王達途（CBDB 279744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279744&o=json
            external_identifier: CBDB:279744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZCPeryP3qzCJEa22S56DNz
        subject_person_id: p_EJwVDZj1xNqv72p5LMTvfk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達途
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QaNE81suBdGnCXLDBkcUY8
          claim_id: c_ZCPeryP3qzCJEa22S56DNz
          source_id: s_MiYBGoueKwAb1vBGkyp9WU
          stance: supports
          locator: CBDB:279744
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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

# 王達途

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王達途，明人物。正德十二年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 279744） | accepted |
| name.primary | 王達途 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達途（CBDB 279744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279744&o=json)
