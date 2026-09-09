---
schema: wang-person/v1
id: p_vZP12oPB8pqAEh8ntCzAQu
status: active
merged_into: null
display_name: 王閏之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GikFwCZnFZ8BpFqTksfKyH
        subject_person_id: p_vZP12oPB8pqAEh8ntCzAQu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6kJFF49qA6yg4D4sj1RMvC
          claim_id: c_GikFwCZnFZ8BpFqTksfKyH
          source_id: s_cgJEPk3e9BtA4iGGAM7HMk
          stance: supports
          locator: CBDB:5109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（5109）
          source: &a1
            id: s_cgJEPk3e9BtA4iGGAM7HMk
            source_type: api_record
            title: 中国历代人物传记资料库：王閏之（CBDB 5109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5109&o=json
            external_identifier: CBDB:5109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U8whiT2q94znEM5Md2qRYr
        subject_person_id: p_vZP12oPB8pqAEh8ntCzAQu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1048年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nTbiA2kDLzzv5poEMng5B
          claim_id: c_U8whiT2q94znEM5Md2qRYr
          source_id: s_cgJEPk3e9BtA4iGGAM7HMk
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
        id: c_LpXS51pGUh4pDLQi7vXS4e
        subject_person_id: p_vZP12oPB8pqAEh8ntCzAQu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1093年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2RFmQGGP9qMy2k1xqww5Kg
          claim_id: c_LpXS51pGUh4pDLQi7vXS4e
          source_id: s_cgJEPk3e9BtA4iGGAM7HMk
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
        id: c_H7T2dBCMYZ1X792pjTQo1n
        subject_person_id: p_vZP12oPB8pqAEh8ntCzAQu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1akx9sJC7bEqApWKBLf94V
          claim_id: c_H7T2dBCMYZ1X792pjTQo1n
          source_id: s_cgJEPk3e9BtA4iGGAM7HMk
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

# 王閏之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏之 | accepted |
| birth.date | 1048年 | accepted |
| death.date | 1093年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閏之（CBDB 5109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5109&o=json)
