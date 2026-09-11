---
schema: wang-person/v1
id: p_ChwVo4Bn3TwGaT9qN5VSo6
status: active
merged_into: null
display_name: 王烈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HPaCwiUedfBqGDw1bQft4P
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Gs6tdcKtLPYnJAiUpCzoX
          claim_id: c_HPaCwiUedfBqGDw1bQft4P
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: CBDB:139708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139708）
          source: &a1
            id: s_tCfD8QjcvmuW2fCStLZSoK
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 139708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json
            external_identifier: CBDB:139708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H7e3KD6xwQjm3JxHoA4MJZ
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBzobB9JpFeR2NAK9iZcsp
          claim_id: c_H7e3KD6xwQjm3JxHoA4MJZ
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
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
        id: c_zUqTrqBs94NvjF1HyfwMWV
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hv9ZqEKG3zSKfXvRM69JrY
          claim_id: c_zUqTrqBs94NvjF1HyfwMWV
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
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
        id: c_bCiU9v554mA2VApuFq9FDz
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈（623年—674年），唐人物。籍贯太原，曾任縣丞、參軍、通直郎。（中国历代人物传记资料库 CBDB 139708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E7Kbq25me9QkR-9_tNvG2y
          claim_id: c_bCiU9v554mA2VApuFq9FDz
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: CBDB:139708
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2GWK-tLCTvh21a8cMvtjMC
        subject_person_id: p_YGiv39GBAC5sbLNAGAUY7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NatcDAmtJTDDAKXzFw2qcj
          claim_id: c_2GWK-tLCTvh21a8cMvtjMC
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YGiv39GBAC5sbLNAGAUY7T
        status: active
        display_name: 王贇
        merged_into_person_id: null
  children:
    - claim:
        id: c_9LRHKgP02vJY4NyM5YxNG4
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STpC0fyWcgVFtawD8j5hiL
          claim_id: c_9LRHKgP02vJY4NyM5YxNG4
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xD2UGXBYGMspPLNa3BxAbe
        status: active
        display_name: 王齊丘
        merged_into_person_id: null
    - claim:
        id: c_ApUL3lSmu9tQ5Z5YY0L0FD
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pSPUQQj4uGUjufxnL2fe5r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ilnUhJ5g6mBjLi2YK5-PF
          claim_id: c_ApUL3lSmu9tQ5Z5YY0L0FD
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pSPUQQj4uGUjufxnL2fe5r
        status: active
        display_name: 王齊旦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lV47w2AZUqtstmH_PQ4FyA
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JUEFBG67FzPay7oDj6LCSS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ViqFb__7QLlpKSM_NysbC
          claim_id: c_lV47w2AZUqtstmH_PQ4FyA
          source_id: s_v4J08E4IN_rHNUIry9Lwz8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v4J08E4IN_rHNUIry9Lwz8
            source_type: api_record
            title: 中国历代人物传记资料库：江氏(王烈妻)（CBDB 148830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148830&o=json
            external_identifier: CBDB:148830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JUEFBG67FzPay7oDj6LCSS
        status: active
        display_name: 江氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| birth.date | 623年 | accepted |
| death.date | 674年 | accepted |
| bio.summary | 王烈（623年—674年），唐人物。籍贯太原，曾任縣丞、參軍、通直郎。（中国历代人物传记资料库 CBDB 139708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YGiv39GBAC5sbLNAGAUY7T | 王贇 | accepted |
| children | p_xD2UGXBYGMspPLNa3BxAbe | 王齊丘 | accepted |
| children | p_pSPUQQj4uGUjufxnL2fe5r | 王齊旦 | accepted |
| spouses | p_JUEFBG67FzPay7oDj6LCSS | 江氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：江氏(王烈妻)（CBDB 148830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148830&o=json)
- [中国历代人物传记资料库：王烈（CBDB 139708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json)
