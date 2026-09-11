---
schema: wang-person/v1
id: p_PjzXh9MRpdHs5qZ3d1XoVt
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zQR39iFt9v5SZEEEz8QFKu
        subject_person_id: p_PjzXh9MRpdHs5qZ3d1XoVt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sodh6mzD8iMAH7ZZ1MAaHX
          claim_id: c_zQR39iFt9v5SZEEEz8QFKu
          source_id: s_oCSH916RUvXpQTFBpYJLbT
          stance: supports
          locator: CBDB:175730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175730）
          source: &a1
            id: s_oCSH916RUvXpQTFBpYJLbT
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 175730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175730&o=json
            external_identifier: CBDB:175730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SYWiRc3amBTwhCgpCQ6t2p
        subject_person_id: p_PjzXh9MRpdHs5qZ3d1XoVt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCNPLtyBJDY5etZymPGvZ9
          claim_id: c_SYWiRc3amBTwhCgpCQ6t2p
          source_id: s_oCSH916RUvXpQTFBpYJLbT
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
        id: c_fk6aGKTSWd3bNxfLMv5iT1
        subject_person_id: p_PjzXh9MRpdHs5qZ3d1XoVt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎（卒于806年），唐人物。籍贯淮陰。（中国历代人物传记资料库 CBDB 175730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mTsW30UkaCom5uWM5kUT0K
          claim_id: c_fk6aGKTSWd3bNxfLMv5iT1
          source_id: s_oCSH916RUvXpQTFBpYJLbT
          stance: supports
          locator: CBDB:175730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YdWwz9JQkyMdoFt13u-1__
        subject_person_id: p_YoDjUd1XQ5XAGLu3C54M9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PjzXh9MRpdHs5qZ3d1XoVt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IKhFc2YgTUWNfyOwKiFqHj
          claim_id: c_YdWwz9JQkyMdoFt13u-1__
          source_id: s_oCSH916RUvXpQTFBpYJLbT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YoDjUd1XQ5XAGLu3C54M9C
        status: active
        display_name: 王翽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| death.date | 806年 | accepted |
| bio.summary | 王鼎（卒于806年），唐人物。籍贯淮陰。（中国历代人物传记资料库 CBDB 175730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YoDjUd1XQ5XAGLu3C54M9C | 王翽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 175730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175730&o=json)
