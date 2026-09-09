---
schema: wang-person/v1
id: p_4n8nL87L4faDUBx7FvBMZB
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S4ejCspNmHpSBBP8WnLg4i
        subject_person_id: p_4n8nL87L4faDUBx7FvBMZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgfNNbZkuCYJqMU3Bzq4Wq
          claim_id: c_S4ejCspNmHpSBBP8WnLg4i
          source_id: s_am6rB8Pda8JrnK1CnwdmEs
          stance: supports
          locator: CBDB:139177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139177）
          source: &a1
            id: s_am6rB8Pda8JrnK1CnwdmEs
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 139177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139177&o=json
            external_identifier: CBDB:139177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pNwLLkk996e5CXK2nLtZM2
        subject_person_id: p_4n8nL87L4faDUBx7FvBMZB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 603年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HHVHFrHv1wfDEwhBBmFPDb
          claim_id: c_pNwLLkk996e5CXK2nLtZM2
          source_id: s_am6rB8Pda8JrnK1CnwdmEs
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
        id: c_hfW4WDEDkstx78ykFiKFEq
        subject_person_id: p_4n8nL87L4faDUBx7FvBMZB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 659年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sA9sBAo6Wgc8ohcjBH7Pc8
          claim_id: c_hfW4WDEDkstx78ykFiKFEq
          source_id: s_am6rB8Pda8JrnK1CnwdmEs
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
        id: c_CHFJBkNAnbuDS7ZNiAnj59
        subject_person_id: p_4n8nL87L4faDUBx7FvBMZB
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
        - id: cs_y7ZLZ6rvF1Te8hM9uS7a5s
          claim_id: c_CHFJBkNAnbuDS7ZNiAnj59
          source_id: s_am6rB8Pda8JrnK1CnwdmEs
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| birth.date | 603年 | accepted |
| death.date | 659年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 139177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139177&o=json)
