---
schema: wang-person/v1
id: p_zgfTjDam3ebxMrPf4MZA8T
status: active
merged_into: null
display_name: 王公彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VdjHVwB1jaxe33PMYTy8pV
        subject_person_id: p_zgfTjDam3ebxMrPf4MZA8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_su2NktiUes4KK1EjXUVPhR
          claim_id: c_VdjHVwB1jaxe33PMYTy8pV
          source_id: s_fbNR57EWRU7dUMkMpL2oR7
          stance: supports
          locator: CBDB:24987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24987）
          source: &a1
            id: s_fbNR57EWRU7dUMkMpL2oR7
            source_type: api_record
            title: 中国历代人物传记资料库：王公彥（CBDB 24987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24987&o=json
            external_identifier: CBDB:24987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4aHrbRDrgAED9MKK4dKoEm
        subject_person_id: p_zgfTjDam3ebxMrPf4MZA8T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1131年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3RT1wTXBLTo7DJdHrVbiT
          claim_id: c_4aHrbRDrgAED9MKK4dKoEm
          source_id: s_fbNR57EWRU7dUMkMpL2oR7
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
        id: c_euySDxbpr3e9cAQoXpTMDZ
        subject_person_id: p_zgfTjDam3ebxMrPf4MZA8T
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
        - id: cs_xWLcLM7bJ8Fk6Uo2y1hK1F
          claim_id: c_euySDxbpr3e9cAQoXpTMDZ
          source_id: s_fbNR57EWRU7dUMkMpL2oR7
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

# 王公彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公彥 | accepted |
| death.date | 1131年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公彥（CBDB 24987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24987&o=json)
