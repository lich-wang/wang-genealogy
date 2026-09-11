---
schema: wang-person/v1
id: p_EDFy4V5vjvdQB2NseDcP32
status: active
merged_into: null
display_name: 元氏
revision: 1
cbdb_id: 145369
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2aK3q9xVf5yg5eGWrBBqz7
        subject_person_id: p_EDFy4V5vjvdQB2NseDcP32
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 元氏（762—822），唐人物。籍贯硤石。（中国历代人物传记资料库 CBDB 145369）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJqs75pBVKuiJ7baEYp05v
          claim_id: c_2aK3q9xVf5yg5eGWrBBqz7
          source_id: s_wBfkFKbDNCJdzguZbvgPGU
          stance: supports
          locator: CBDB:145369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wBfkFKbDNCJdzguZbvgPGU
            source_type: api_record
            title: 中国历代人物传记资料库：元氏(元晟女)（CBDB 145369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145369&o=json
            external_identifier: CBDB:145369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XknSzwKmXxRTld2fxDODqE
        subject_person_id: p_EDFy4V5vjvdQB2NseDcP32
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 元氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PzgGq6qfSIxZi131OiR6zR
          claim_id: c_XknSzwKmXxRTld2fxDODqE
          source_id: s_wBfkFKbDNCJdzguZbvgPGU
          stance: supports
          locator: CBDB:145369
          quotation: null
          interpretation_note: CBDB 明确记录的王淮配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9-LecR0b6vyp7jcDcUUnRm
        subject_person_id: p_4PfjFLtLyYNM8C58Ah2PUW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EDFy4V5vjvdQB2NseDcP32
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LGj5PQBq1iwWXcgOHgX_k8
          claim_id: c_9-LecR0b6vyp7jcDcUUnRm
          source_id: s_wBfkFKbDNCJdzguZbvgPGU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4PfjFLtLyYNM8C58Ah2PUW
        status: active
        display_name: 王淮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 元氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 元氏（762—822），唐人物。籍贯硤石。（中国历代人物传记资料库 CBDB 145369） | accepted |
| name.primary | 元氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4PfjFLtLyYNM8C58Ah2PUW | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：元氏(元晟女)（CBDB 145369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145369&o=json)
