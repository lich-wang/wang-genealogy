---
schema: wang-person/v1
id: p_p7K3tmeqp6utYYMJ6NNNHL
status: active
merged_into: null
display_name: 王師感
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6aVMJY8HFPnccL1ytbKCow
        subject_person_id: p_p7K3tmeqp6utYYMJ6NNNHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5JpAABHsrrL1wDHuAD4Aqk
          claim_id: c_6aVMJY8HFPnccL1ytbKCow
          source_id: s_87kkoCWnSBEgCGgL3mLpe2
          stance: supports
          locator: CBDB:139087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139087）
          source: &a1
            id: s_87kkoCWnSBEgCGgL3mLpe2
            source_type: api_record
            title: 中国历代人物传记资料库：王師感（CBDB 139087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139087&o=json
            external_identifier: CBDB:139087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WLR7crb1T7cq3f11Pf896S
        subject_person_id: p_p7K3tmeqp6utYYMJ6NNNHL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hD6prZeR2dnCm9G8aknN4o
          claim_id: c_WLR7crb1T7cq3f11Pf896S
          source_id: s_87kkoCWnSBEgCGgL3mLpe2
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
        id: c_mofDmkf7EA4VFisTSyKYvC
        subject_person_id: p_p7K3tmeqp6utYYMJ6NNNHL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 656年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJ8jWuHzJc2W98Gc7wQted
          claim_id: c_mofDmkf7EA4VFisTSyKYvC
          source_id: s_87kkoCWnSBEgCGgL3mLpe2
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
        id: c_kiMq53DgzKch642nrqg3iu
        subject_person_id: p_p7K3tmeqp6utYYMJ6NNNHL
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
        - id: cs_C2EmZuHhaPX5hrx5tSne2r
          claim_id: c_kiMq53DgzKch642nrqg3iu
          source_id: s_87kkoCWnSBEgCGgL3mLpe2
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

# 王師感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師感 | accepted |
| birth.date | 599年 | accepted |
| death.date | 656年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師感（CBDB 139087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139087&o=json)
