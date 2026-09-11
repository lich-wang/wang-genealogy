---
schema: wang-person/v1
id: p_4ms3zQzj6wikwvfLy2y12w
status: active
merged_into: null
display_name: 王彝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WGXkXEY3thsowSaEWSopfj
        subject_person_id: p_4ms3zQzj6wikwvfLy2y12w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3iLKN1j4YHHa2TQ7yxyZ8i
          claim_id: c_WGXkXEY3thsowSaEWSopfj
          source_id: s_Ru2GckTrZK3DV4thPTNQHN
          stance: supports
          locator: CBDB:191077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191077）
          source: &a1
            id: s_Ru2GckTrZK3DV4thPTNQHN
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 191077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191077&o=json
            external_identifier: CBDB:191077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MhNHqUzc5KqFjjT75fvnjF
        subject_person_id: p_4ms3zQzj6wikwvfLy2y12w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 744年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L2j5ADXDtHEpVKrd1oCEk2
          claim_id: c_MhNHqUzc5KqFjjT75fvnjF
          source_id: s_Ru2GckTrZK3DV4thPTNQHN
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
        id: c_6hHFw25HNAHsZPdSJ5UJMY
        subject_person_id: p_4ms3zQzj6wikwvfLy2y12w
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
        - id: cs_xyq5zbrR4nYw53JedJngxi
          claim_id: c_6hHFw25HNAHsZPdSJ5UJMY
          source_id: s_Ru2GckTrZK3DV4thPTNQHN
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
        id: c_Q-PkDvfmXwbk3MdcBCJden
        subject_person_id: p_4ms3zQzj6wikwvfLy2y12w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbtkRepz65zt6fY1dTLEkm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFvrloq6N4pNUM2bfAPfYH
          claim_id: c_Q-PkDvfmXwbk3MdcBCJden
          source_id: s_Ru2GckTrZK3DV4thPTNQHN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bbtkRepz65zt6fY1dTLEkm
        status: active
        display_name: 王沁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| death.date | 744年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bbtkRepz65zt6fY1dTLEkm | 王沁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 191077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191077&o=json)
