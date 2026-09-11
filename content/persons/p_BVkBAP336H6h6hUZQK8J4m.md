---
schema: wang-person/v1
id: p_BVkBAP336H6h6hUZQK8J4m
status: active
merged_into: null
display_name: 王珂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNQsiyCRC42yFqT74P4aeL
        subject_person_id: p_BVkBAP336H6h6hUZQK8J4m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9QXKdVZ38v2jRNc6MxMpor
          claim_id: c_CNQsiyCRC42yFqT74P4aeL
          source_id: s_Wm3MBEVaPDKwAQVCFtAL7F
          stance: supports
          locator: CBDB:194808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194808）
          source: &a1
            id: s_Wm3MBEVaPDKwAQVCFtAL7F
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 194808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194808&o=json
            external_identifier: CBDB:194808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mFLmfsBfP4NKueRVNMR5rn
        subject_person_id: p_BVkBAP336H6h6hUZQK8J4m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 924年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NiWVGUr7mJV6CGa5Qw9bnu
          claim_id: c_mFLmfsBfP4NKueRVNMR5rn
          source_id: s_Wm3MBEVaPDKwAQVCFtAL7F
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
        id: c_mDJwzFPdDKxKpjVvBAf3XQ
        subject_person_id: p_BVkBAP336H6h6hUZQK8J4m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂（卒于924年），唐人物。籍贯河東，曾任節度使。（中国历代人物传记资料库 CBDB 194808）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w2LxD1Ra0EuOKhlHojeLox
          claim_id: c_mDJwzFPdDKxKpjVvBAf3XQ
          source_id: s_Wm3MBEVaPDKwAQVCFtAL7F
          stance: supports
          locator: CBDB:194808
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rzVMf8LOjL_gweeX6AzvOY
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BVkBAP336H6h6hUZQK8J4m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6p6njNM1OG6k9bEjpNdgY
          claim_id: c_rzVMf8LOjL_gweeX6AzvOY
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Kh4ohyjr1CuQj4gARXkoz
            source_type: api_record
            title: 中国历代人物传记资料库：王重榮（CBDB 185355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json
            external_identifier: CBDB:185355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8WSGHAfAoQ3TLEpo8p8wJU
        status: active
        display_name: 王重榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珂 | accepted |
| death.date | 924年 | accepted |
| bio.summary | 王珂（卒于924年），唐人物。籍贯河東，曾任節度使。（中国历代人物传记资料库 CBDB 194808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8WSGHAfAoQ3TLEpo8p8wJU | 王重榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珂（CBDB 194808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194808&o=json)
- [中国历代人物传记资料库：王重榮（CBDB 185355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json)
