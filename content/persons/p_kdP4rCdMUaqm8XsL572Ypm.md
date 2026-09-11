---
schema: wang-person/v1
id: p_kdP4rCdMUaqm8XsL572Ypm
status: merged
merged_into: p_nNCdrm1mnJ77Np28ADWXHR
display_name: 王衡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mGWnuT7u6x2BvfERyA3SxQ
        subject_person_id: p_kdP4rCdMUaqm8XsL572Ypm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1mVPXoEct44jehpg96YZkL
          claim_id: c_mGWnuT7u6x2BvfERyA3SxQ
          source_id: s_Dg94Bv8hJT9xsXTGFQVJ2d
          stance: supports
          locator: CBDB:124005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124005）
          source: &a1
            id: s_Dg94Bv8hJT9xsXTGFQVJ2d
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 124005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124005&o=json
            external_identifier: CBDB:124005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A7Fwv9mF1GVGfjufdSwgMD
        subject_person_id: p_kdP4rCdMUaqm8XsL572Ypm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kxV87EP64La1GnwZRVzFcJ
          claim_id: c_A7Fwv9mF1GVGfjufdSwgMD
          source_id: s_Dg94Bv8hJT9xsXTGFQVJ2d
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
        id: c_EM4gDaxdDS4Dm7X7XJe8Lg
        subject_person_id: p_kdP4rCdMUaqm8XsL572Ypm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1609年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igsn1FRFmwFnyq6a8StjZM
          claim_id: c_EM4gDaxdDS4Dm7X7XJe8Lg
          source_id: s_Dg94Bv8hJT9xsXTGFQVJ2d
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
        id: c_TKM7Fn6uJM6R12HN48AYK6
        subject_person_id: p_kdP4rCdMUaqm8XsL572Ypm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmUdNFRgBJ9hVfPXYKhGVA
          claim_id: c_TKM7Fn6uJM6R12HN48AYK6
          source_id: s_Dg94Bv8hJT9xsXTGFQVJ2d
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
        id: c_9LysD8oWG7xW-0lmmI2itU
        subject_person_id: p_kdP4rCdMUaqm8XsL572Ypm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iw1mx2XqzPws1aHh5JOm_k
          claim_id: c_9LysD8oWG7xW-0lmmI2itU
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: 國朝畫徵錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9nCMaerC4DaYCofcJD8XP7
            source_type: api_record
            title: 中国历代人物传记资料库：王時敏（CBDB 55432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json
            external_identifier: CBDB:55432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HWF5mXUhrhbQxoWV5rhmVR
        status: active
        display_name: 王時敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| birth.date | 1561年 | accepted |
| death.date | 1609年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HWF5mXUhrhbQxoWV5rhmVR | 王時敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王衡（CBDB 124005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124005&o=json)
- [中国历代人物传记资料库：王時敏（CBDB 55432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json)
