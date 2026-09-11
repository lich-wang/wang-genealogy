---
schema: wang-person/v1
id: p_r4ZUZWMDNoU7uRCn4abADP
status: active
merged_into: null
display_name: 王藩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vz9VfDNtwsdnAaJxMEuLEb
        subject_person_id: p_r4ZUZWMDNoU7uRCn4abADP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bJtgwqmeunzKZT2qvZihH
          claim_id: c_vz9VfDNtwsdnAaJxMEuLEb
          source_id: s_6EKZZtrb21kksyaSV5LwYM
          stance: supports
          locator: CBDB:175695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175695）
          source: &a1
            id: s_6EKZZtrb21kksyaSV5LwYM
            source_type: api_record
            title: 中国历代人物传记资料库：王藩（CBDB 175695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175695&o=json
            external_identifier: CBDB:175695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VJC3m9V74YR9LQv2aTzEnw
        subject_person_id: p_r4ZUZWMDNoU7uRCn4abADP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 885年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcyEqti39DKLsKBkXTfh5D
          claim_id: c_VJC3m9V74YR9LQv2aTzEnw
          source_id: s_6EKZZtrb21kksyaSV5LwYM
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
        id: c_K2X8WLihAAz1uxqRsLx8Dq
        subject_person_id: p_r4ZUZWMDNoU7uRCn4abADP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩（卒于885年），唐人物。籍贯萬年，曾任戶部郎中。（中国历代人物传记资料库 CBDB 175695）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x7x9jPt4K0leXsJHSBs_va
          claim_id: c_K2X8WLihAAz1uxqRsLx8Dq
          source_id: s_6EKZZtrb21kksyaSV5LwYM
          stance: supports
          locator: CBDB:175695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JQX9VkruwDQ8dW7cbzF2Jv
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4ZUZWMDNoU7uRCn4abADP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rzqc0JosPegoUM3f45jOpG
          claim_id: c_JQX9VkruwDQ8dW7cbzF2Jv
          source_id: s_6EKZZtrb21kksyaSV5LwYM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wgfYedxmMy9VG8HzciXPDK
        status: active
        display_name: 王貞伯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藩 | accepted |
| death.date | 885年 | accepted |
| bio.summary | 王藩（卒于885年），唐人物。籍贯萬年，曾任戶部郎中。（中国历代人物传记资料库 CBDB 175695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wgfYedxmMy9VG8HzciXPDK | 王貞伯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藩（CBDB 175695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175695&o=json)
