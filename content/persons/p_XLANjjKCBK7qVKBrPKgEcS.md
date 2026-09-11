---
schema: wang-person/v1
id: p_XLANjjKCBK7qVKBrPKgEcS
status: active
merged_into: null
display_name: 王堅
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qtn53aQvpnLMg9CTWvnz8k
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jKiDPB51NCBpGUBk4r2HvD
          claim_id: c_qtn53aQvpnLMg9CTWvnz8k
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
          stance: supports
          locator: CBDB:186733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186733）
          source: &a1
            id: s_ECj7QkZf2eqrd31bgGYu9Z
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 186733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186733&o=json
            external_identifier: CBDB:186733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_j2rvKbc4jCebzPL5M8G5mF
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Biyc3fi9pWbBBJLWNqDf5B
          claim_id: c_j2rvKbc4jCebzPL5M8G5mF
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
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
        id: c_cZvLgZkZcxxNH75B2yZNW1
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅（卒于803年），唐人物。曾任節度都知兵馬使。（中国历代人物传记资料库 CBDB 186733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fRgKtLNpQPM4fN8DyHWUCR
          claim_id: c_cZvLgZkZcxxNH75B2yZNW1
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
          stance: supports
          locator: CBDB:186733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gm5EHxrIV6e_yP1YUN8j-Q
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nLiT1zEiwV2dsUPbDKdS49
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1Umf4q2L330SrEve4sD1z
          claim_id: c_gm5EHxrIV6e_yP1YUN8j-Q
          source_id: s_GcteQKM4PHg5fMVxee24tt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GcteQKM4PHg5fMVxee24tt
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 186737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186737&o=json
            external_identifier: CBDB:186737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nLiT1zEiwV2dsUPbDKdS49
        status: active
        display_name: 王岳
        merged_into_person_id: null
    - claim:
        id: c_2YFoSfgjZXwMhQKvKMWn-t
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_siyVkBP3BBDbeJ9Le2oaDN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjGPH3gdPpXRkUMZ2I5ABB
          claim_id: c_2YFoSfgjZXwMhQKvKMWn-t
          source_id: s_unDKcdFgSh9qYmGdaoPHWg
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_unDKcdFgSh9qYmGdaoPHWg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲康（CBDB 186739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186739&o=json
            external_identifier: CBDB:186739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_siyVkBP3BBDbeJ9Le2oaDN
        status: active
        display_name: 王仲康
        merged_into_person_id: null
    - claim:
        id: c_L9hkQ2ZlVOSgbcsirYqg4e
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f64t58x2UHRKvrzQmw1Cj5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwPifsmsRtcRFA0BuYsilV
          claim_id: c_L9hkQ2ZlVOSgbcsirYqg4e
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f64t58x2UHRKvrzQmw1Cj5
        status: active
        display_name: 王仲初
        merged_into_person_id: null
    - claim:
        id: c_94HVMsWo6E8QpW5zkYvzwg
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJdKzNPvPGqGFk5vNPPWhh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTlbzIqh68lwQ0Cyw_1ygH
          claim_id: c_94HVMsWo6E8QpW5zkYvzwg
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eJdKzNPvPGqGFk5vNPPWhh
        status: active
        display_name: 王仲詹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1tUw1E45QJWiO7MvSwlLIM
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r4GYYa5kPSbCmZLu1J7GgJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVpdsTKLwWcn2goZ8YrDZX
          claim_id: c_1tUw1E45QJWiO7MvSwlLIM
          source_id: s_YNK2xYnUNJCZZIe9R2K7uC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YNK2xYnUNJCZZIe9R2K7uC
            source_type: api_record
            title: 中国历代人物传记资料库：宇文氏(宇文荃女)（CBDB 145638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145638&o=json
            external_identifier: CBDB:145638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r4GYYa5kPSbCmZLu1J7GgJ
        status: active
        display_name: 宇文氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堅 | accepted |
| death.date | 803年 | accepted |
| bio.summary | 王堅（卒于803年），唐人物。曾任節度都知兵馬使。（中国历代人物传记资料库 CBDB 186733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nLiT1zEiwV2dsUPbDKdS49 | 王岳 | accepted |
| children | p_siyVkBP3BBDbeJ9Le2oaDN | 王仲康 | accepted |
| children | p_f64t58x2UHRKvrzQmw1Cj5 | 王仲初 | accepted |
| children | p_eJdKzNPvPGqGFk5vNPPWhh | 王仲詹 | accepted |
| spouses | p_r4GYYa5kPSbCmZLu1J7GgJ | 宇文氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堅（CBDB 186733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186733&o=json)
- [中国历代人物传记资料库：王岳（CBDB 186737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186737&o=json)
- [中国历代人物传记资料库：王仲康（CBDB 186739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186739&o=json)
- [中国历代人物传记资料库：宇文氏(宇文荃女)（CBDB 145638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145638&o=json)
