---
schema: wang-person/v1
id: p_RR9PPqquuGdswQ5A9s8RMa
status: active
merged_into: null
display_name: 王景中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vE5pXpJrRKfdMwqQ467FQr
        subject_person_id: p_RR9PPqquuGdswQ5A9s8RMa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DcfCMgykgGNGhX8xp16MZN
          claim_id: c_vE5pXpJrRKfdMwqQ467FQr
          source_id: s_Te9wA7d9diAwHF2g8MmSGJ
          stance: supports
          locator: CBDB:189362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189362）
          source: &a1
            id: s_Te9wA7d9diAwHF2g8MmSGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王景中（CBDB 189362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189362&o=json
            external_identifier: CBDB:189362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ioPUrphTtVPf418qN4bsn8
        subject_person_id: p_RR9PPqquuGdswQ5A9s8RMa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJHwKnAB7afCwkcNi3R6Co
          claim_id: c_ioPUrphTtVPf418qN4bsn8
          source_id: s_Te9wA7d9diAwHF2g8MmSGJ
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
        id: c_vDr5Xd9ogz5sfuqPHgasx2
        subject_person_id: p_RR9PPqquuGdswQ5A9s8RMa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景中（卒于853年），唐人物。籍贯并州。（中国历代人物传记资料库 CBDB 189362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mli-PGTE0rC4z6Nvdff_6v
          claim_id: c_vDr5Xd9ogz5sfuqPHgasx2
          source_id: s_Te9wA7d9diAwHF2g8MmSGJ
          stance: supports
          locator: CBDB:189362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7rx5plC1Nitg-u3F-D24rH
        subject_person_id: p_FMXmB2MmUk4FK9xsBPgkTL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RR9PPqquuGdswQ5A9s8RMa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SuK6n_C9rEubGFBj6_i4f8
          claim_id: c_7rx5plC1Nitg-u3F-D24rH
          source_id: s_MX4N5wv6B9wWJBWsvey5KM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MX4N5wv6B9wWJBWsvey5KM
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 145283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145283&o=json
            external_identifier: CBDB:145283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FMXmB2MmUk4FK9xsBPgkTL
        status: active
        display_name: 王澈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景中 | accepted |
| death.date | 853年 | accepted |
| bio.summary | 王景中（卒于853年），唐人物。籍贯并州。（中国历代人物传记资料库 CBDB 189362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FMXmB2MmUk4FK9xsBPgkTL | 王澈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 145283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145283&o=json)
- [中国历代人物传记资料库：王景中（CBDB 189362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189362&o=json)
