---
schema: wang-person/v1
id: p_YpJT2mCdf7M1zWCNEVz3Lk
status: active
merged_into: null
display_name: 王庭凑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WZ9BcDnBMwaJpAHoXZpD4
        subject_person_id: p_YpJT2mCdf7M1zWCNEVz3Lk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭凑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wRXHApzrF6YwhGejJSrn1V
          claim_id: c_8WZ9BcDnBMwaJpAHoXZpD4
          source_id: s_TY828AGapdm7HCNHgT59ou
          stance: supports
          locator: CBDB:184951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184951）
          source: &a1
            id: s_TY828AGapdm7HCNHgT59ou
            source_type: api_record
            title: 中国历代人物传记资料库：王庭凑（CBDB 184951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184951&o=json
            external_identifier: CBDB:184951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tPwbTWJNdsiXaTmPyqZiJE
        subject_person_id: p_YpJT2mCdf7M1zWCNEVz3Lk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 834年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pmkLMCMCbpUtePkNSDdGJq
          claim_id: c_tPwbTWJNdsiXaTmPyqZiJE
          source_id: s_TY828AGapdm7HCNHgT59ou
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
        id: c_CEdhjFqk2w5QQVG4wM8EUH
        subject_person_id: p_YpJT2mCdf7M1zWCNEVz3Lk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭凑（卒于834年），唐人物。籍贯晉陽，曾任太子太傅。（中国历代人物传记资料库 CBDB 184951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NTPe0RKWzk450IIWZYRfvJ
          claim_id: c_CEdhjFqk2w5QQVG4wM8EUH
          source_id: s_TY828AGapdm7HCNHgT59ou
          stance: supports
          locator: CBDB:184951
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wXXgrBpe9HwwKR7SH3Ekiv
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YpJT2mCdf7M1zWCNEVz3Lk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PkN6HsdwBhMdiHJKI-RVt
          claim_id: c_wXXgrBpe9HwwKR7SH3Ekiv
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bJcyg5f5Za13XdP5DsLL6h
            source_type: api_record
            title: 中国历代人物传记资料库：王昇朝（CBDB 159541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json
            external_identifier: CBDB:159541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EzMUKy9VQQxtLyAvd3YBRM
        status: active
        display_name: 王昇朝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭凑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭凑 | accepted |
| death.date | 834年 | accepted |
| bio.summary | 王庭凑（卒于834年），唐人物。籍贯晉陽，曾任太子太傅。（中国历代人物传记资料库 CBDB 184951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EzMUKy9VQQxtLyAvd3YBRM | 王昇朝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇朝（CBDB 159541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json)
- [中国历代人物传记资料库：王庭凑（CBDB 184951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184951&o=json)
