---
schema: wang-person/v1
id: p_qXvqD9NHgDqEpGMzLXGXbP
status: active
merged_into: null
display_name: 王震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ngJxW614A5DzVsL8VatQEA
        subject_person_id: p_qXvqD9NHgDqEpGMzLXGXbP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1kN78JHVj7Z7s2WJ6GLaC
          claim_id: c_ngJxW614A5DzVsL8VatQEA
          source_id: s_bj2TFavXbXga211tpCpmRC
          stance: supports
          locator: CBDB:71270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71270）
          source: &a1
            id: s_bj2TFavXbXga211tpCpmRC
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 71270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71270&o=json
            external_identifier: CBDB:71270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R54DkmKQLoFbMUDXKt9Kzz
        subject_person_id: p_qXvqD9NHgDqEpGMzLXGXbP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pU19T2gEWoQrFRdLdCnXor
          claim_id: c_R54DkmKQLoFbMUDXKt9Kzz
          source_id: s_bj2TFavXbXga211tpCpmRC
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
        id: c_LXA11VU5DLenRmfVp4mrno
        subject_person_id: p_qXvqD9NHgDqEpGMzLXGXbP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1938年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HN2wAazG8uXE1jkd8S6YSH
          claim_id: c_LXA11VU5DLenRmfVp4mrno
          source_id: s_bj2TFavXbXga211tpCpmRC
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
        id: c_Tjva7ov1bLPT8QK1uvi45n
        subject_person_id: p_qXvqD9NHgDqEpGMzLXGXbP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NRAe1mcfeyvDFCAQUEirLV
          claim_id: c_Tjva7ov1bLPT8QK1uvi45n
          source_id: s_bj2TFavXbXga211tpCpmRC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 1867年 | accepted |
| death.date | 1938年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 71270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71270&o=json)
