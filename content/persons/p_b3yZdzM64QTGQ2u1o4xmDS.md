---
schema: wang-person/v1
id: p_b3yZdzM64QTGQ2u1o4xmDS
status: active
merged_into: null
display_name: 王用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Puxfhrdnv5ENvVn16XUeyF
        subject_person_id: p_b3yZdzM64QTGQ2u1o4xmDS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4udo4y5Cm7ijG8dV4rE8V8
          claim_id: c_Puxfhrdnv5ENvVn16XUeyF
          source_id: s_j8e1sT75e5YdZQTPNeAGWt
          stance: supports
          locator: CBDB:145401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145401）
          source: &a1
            id: s_j8e1sT75e5YdZQTPNeAGWt
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 145401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145401&o=json
            external_identifier: CBDB:145401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WDrM4xwLn8vRMbsvDJETK6
        subject_person_id: p_b3yZdzM64QTGQ2u1o4xmDS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxkBzpahJuRH2ttpncbjtU
          claim_id: c_WDrM4xwLn8vRMbsvDJETK6
          source_id: s_j8e1sT75e5YdZQTPNeAGWt
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
        id: c_ytP3Q7TGtymW9hjB2ybzq6
        subject_person_id: p_b3yZdzM64QTGQ2u1o4xmDS
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
        - id: cs_ZERzQJQHL65iUnteGoF7Nb
          claim_id: c_ytP3Q7TGtymW9hjB2ybzq6
          source_id: s_j8e1sT75e5YdZQTPNeAGWt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8TupLtHNvGbyQu0Sshv8CE
        subject_person_id: p_b3yZdzM64QTGQ2u1o4xmDS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DFF4BsSLcVu7QDEXYaBzHd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4wsUWAW9I9hwIHasxl0c-c
          claim_id: c_8TupLtHNvGbyQu0Sshv8CE
          source_id: s_j8e1sT75e5YdZQTPNeAGWt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DFF4BsSLcVu7QDEXYaBzHd
        status: active
        display_name: 王子簡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| death.date | 880年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DFF4BsSLcVu7QDEXYaBzHd | 王子簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 145401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145401&o=json)
