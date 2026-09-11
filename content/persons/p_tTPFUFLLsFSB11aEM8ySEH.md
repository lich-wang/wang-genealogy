---
schema: wang-person/v1
id: p_tTPFUFLLsFSB11aEM8ySEH
status: active
merged_into: null
display_name: 王崇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7nJB5zzrFwouvmTBzHX8Wz
        subject_person_id: p_tTPFUFLLsFSB11aEM8ySEH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_32FmpykMHMBRQNCQCjsmcF
          claim_id: c_7nJB5zzrFwouvmTBzHX8Wz
          source_id: s_juMGtsbD6WAzZoLYnwHi5r
          stance: supports
          locator: CBDB:175874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175874）
          source: &a1
            id: s_juMGtsbD6WAzZoLYnwHi5r
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 175874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175874&o=json
            external_identifier: CBDB:175874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gPQk2ugc9gBpqxyxN711pv
        subject_person_id: p_tTPFUFLLsFSB11aEM8ySEH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYP6RLxZDi47qybSPAbso3
          claim_id: c_gPQk2ugc9gBpqxyxN711pv
          source_id: s_juMGtsbD6WAzZoLYnwHi5r
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
        id: c_8TcjGTkffy71DX2ugLamx3
        subject_person_id: p_tTPFUFLLsFSB11aEM8ySEH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZnfPZ8QuQLWVKNVW17r7h
          claim_id: c_8TcjGTkffy71DX2ugLamx3
          source_id: s_juMGtsbD6WAzZoLYnwHi5r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hYzbLXKZvzW9qbOQYfDg-H
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tTPFUFLLsFSB11aEM8ySEH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UF9CAsvv5SvznpVeaeLFUX
          claim_id: c_hYzbLXKZvzW9qbOQYfDg-H
          source_id: s_juMGtsbD6WAzZoLYnwHi5r
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoFqrFneyxXNJVFsSfLURF
        status: active
        display_name: 王仁忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| death.date | 798年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoFqrFneyxXNJVFsSfLURF | 王仁忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 175874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175874&o=json)
