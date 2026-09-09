---
schema: wang-person/v1
id: p_LwqmPffRs8hpmJNojszCBn
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_22dMjK1iWw2t78mXWYGYe2
        subject_person_id: p_LwqmPffRs8hpmJNojszCBn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E1vUaNcWpwi1wrGBgkXx2g
          claim_id: c_22dMjK1iWw2t78mXWYGYe2
          source_id: s_D7kc1fvP7FxHimDxJyjLvg
          stance: supports
          locator: CBDB:100625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100625）
          source: &a1
            id: s_D7kc1fvP7FxHimDxJyjLvg
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 100625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100625&o=json
            external_identifier: CBDB:100625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KsVEcoHwAzKTKdSGYKVCwV
        subject_person_id: p_LwqmPffRs8hpmJNojszCBn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1241年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kz8qGfmiH3nhEh9a8tMWRR
          claim_id: c_KsVEcoHwAzKTKdSGYKVCwV
          source_id: s_D7kc1fvP7FxHimDxJyjLvg
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
        id: c_CgrVELT8h8VYGiTRWNC33w
        subject_person_id: p_LwqmPffRs8hpmJNojszCBn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1311年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXHBZeGobWfYhnzzCTT2Zc
          claim_id: c_CgrVELT8h8VYGiTRWNC33w
          source_id: s_D7kc1fvP7FxHimDxJyjLvg
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
        id: c_p8J3344P782weJ3kPDA9Eh
        subject_person_id: p_LwqmPffRs8hpmJNojszCBn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hmgnpeDuDVWw1ZLKhx5yr2
          claim_id: c_p8J3344P782weJ3kPDA9Eh
          source_id: s_D7kc1fvP7FxHimDxJyjLvg
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| birth.date | 1241年 | accepted |
| death.date | 1311年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 100625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100625&o=json)
