---
schema: wang-person/v1
id: p_SeASHf59yQi2kF1TxBPJRr
status: active
merged_into: null
display_name: 王虛明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_43vkxse9JMDQyF2KrM5QjF
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虛明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VgPVqZAP1kUTYej1248UxP
          claim_id: c_43vkxse9JMDQyF2KrM5QjF
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
          stance: supports
          locator: CBDB:145077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145077）
          source: &a1
            id: s_N2C7HXGsRiLvTiRugnLkxv
            source_type: api_record
            title: 中国历代人物传记资料库：王虛明（CBDB 145077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145077&o=json
            external_identifier: CBDB:145077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CxE92Qim53FoBvBy7ptPWe
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoaF7DPEB4YHiejJLzAR8A
          claim_id: c_CxE92Qim53FoBvBy7ptPWe
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
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
        id: c_fhN2tERNamrRM6wSXKjSq5
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpGMX4MH6NeRTPHYu8XdPi
          claim_id: c_fhN2tERNamrRM6wSXKjSq5
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
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
        id: c_7EGFkqQQW785RD29pp8wJB
        subject_person_id: p_SeASHf59yQi2kF1TxBPJRr
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
        - id: cs_nH3KrvqL8rDAJx4fjyqZFp
          claim_id: c_7EGFkqQQW785RD29pp8wJB
          source_id: s_N2C7HXGsRiLvTiRugnLkxv
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

# 王虛明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虛明 | accepted |
| birth.date | 792年 | accepted |
| death.date | 859年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王虛明（CBDB 145077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145077&o=json)
