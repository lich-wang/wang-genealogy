---
schema: wang-person/v1
id: p_qCDtQiLmeEnX8dr3rpqXVC
status: active
merged_into: null
display_name: 王頊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DUKwU2UFwxdoRvaDGP94oS
        subject_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kfyJ2zYHg26eKh192PZ9r5
          claim_id: c_DUKwU2UFwxdoRvaDGP94oS
          source_id: s_dSsSDaH4co84qWvM9U2aGR
          stance: supports
          locator: CBDB:141803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141803）
          source: &a1
            id: s_dSsSDaH4co84qWvM9U2aGR
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 141803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141803&o=json
            external_identifier: CBDB:141803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5zzqq3r7wfQGADQG9F3PbM
        subject_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDFfF3WGjGRuF65X5dyGzQ
          claim_id: c_5zzqq3r7wfQGADQG9F3PbM
          source_id: s_dSsSDaH4co84qWvM9U2aGR
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
        id: c_CC4KEBH5vD359KhS6mfuDo
        subject_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQHWQdcFqq5jonj2yXqCUf
          claim_id: c_CC4KEBH5vD359KhS6mfuDo
          source_id: s_dSsSDaH4co84qWvM9U2aGR
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
        id: c_FCMp1swVipcQArMNaGffUD
        subject_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
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
        - id: cs_hK3BnHnZSRCUbKjxonEXq6
          claim_id: c_FCMp1swVipcQArMNaGffUD
          source_id: s_dSsSDaH4co84qWvM9U2aGR
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
  ancestors:
    - claim:
        id: c_Jrus_1Fon5tkiSOXyKEmr2
        subject_person_id: p_bLHviNSMqcWaXUj1iVBaiL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbulVTCXf7qxA0jm9ukING
          claim_id: c_Jrus_1Fon5tkiSOXyKEmr2
          source_id: s_z98XsdwuTUocAtMFKmA1JJ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 17：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z98XsdwuTUocAtMFKmA1JJ
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 158635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158635&o=json
            external_identifier: CBDB:158635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bLHviNSMqcWaXUj1iVBaiL
        status: active
        display_name: 王晉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| birth.date | 790年 | accepted |
| death.date | 842年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bLHviNSMqcWaXUj1iVBaiL | 王晉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 158635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158635&o=json)
- [中国历代人物传记资料库：王頊（CBDB 141803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141803&o=json)
