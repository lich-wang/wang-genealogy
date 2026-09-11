---
schema: wang-person/v1
id: p_7QnGBiPzUFUWD8rSwCwAQh
status: active
merged_into: null
display_name: 王鈞
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yjQEgqZDaL5zXWSCqCfcWe
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAQShR5bFxDogXLNav7NNR
          claim_id: c_yjQEgqZDaL5zXWSCqCfcWe
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: CBDB:143108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143108）
          source: &a1
            id: s_y7B65XeE2bvCsAck3T9oCY
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 143108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json
            external_identifier: CBDB:143108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LEz7RC1Zqjs1NkkJXJK9zf
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeZz4wNPvsqnEeAEidT8Xn
          claim_id: c_LEz7RC1Zqjs1NkkJXJK9zf
          source_id: s_y7B65XeE2bvCsAck3T9oCY
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
        id: c_FbeLnyvPFQj5NiWsWhWoWM
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 776年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5B6EV6jHHBEEuT66tqVK3J
          claim_id: c_FbeLnyvPFQj5NiWsWhWoWM
          source_id: s_y7B65XeE2bvCsAck3T9oCY
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
        id: c_3WAAuyfwLRqWvQQZ8eAk6M
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞（696年—776年），史料所见人物。本项目依据《中国历代人物传记资料库：王鈞（CBDB 143108）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcKymvzy0lYWZNjP-t7H-q
          claim_id: c_3WAAuyfwLRqWvQQZ8eAk6M
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: CBDB:143108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UXN_msUQTAVUqXCqR5GNsQ
        subject_person_id: p_sd3hcMsGVmiPNhPP7xuPH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXLrjDgmDIlhJlBhx341gR
          claim_id: c_UXN_msUQTAVUqXCqR5GNsQ
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sd3hcMsGVmiPNhPP7xuPH6
        status: active
        display_name: 王悌
        merged_into_person_id: null
  children:
    - claim:
        id: c_KDr0LQth7v7Nem-IJvWAW4
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3UsnYALpsLqLgKX6vUBvrD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Urt2w1hbiiztdmH19DnZvQ
          claim_id: c_KDr0LQth7v7Nem-IJvWAW4
          source_id: s_dRTXLFNFKDpJZN66tKKwpB
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dRTXLFNFKDpJZN66tKKwpB
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 165256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165256&o=json
            external_identifier: CBDB:165256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3UsnYALpsLqLgKX6vUBvrD
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_WpmLisiYS0iOLFduX5szUH
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5v9AuJb4c8dfuy6JYiZGbw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2pnVrMJSUWIZpbV1lM11l
          claim_id: c_WpmLisiYS0iOLFduX5szUH
          source_id: s_NyfQ7g8pkEBn8sf7Esf8Cf
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NyfQ7g8pkEBn8sf7Esf8Cf
            source_type: api_record
            title: 中国历代人物传记资料库：王澡（CBDB 165258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165258&o=json
            external_identifier: CBDB:165258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5v9AuJb4c8dfuy6JYiZGbw
        status: active
        display_name: 王澡
        merged_into_person_id: null
    - claim:
        id: c_aPAb25Cg_1_svAtf4__xT4
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A84W4Qt6NZjv8BXVPciqQL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Onff6NKNhJuGKzrp1lfLwq
          claim_id: c_aPAb25Cg_1_svAtf4__xT4
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A84W4Qt6NZjv8BXVPciqQL
        status: active
        display_name: 王沐
        merged_into_person_id: null
    - claim:
        id: c_JcL8JDVYUTY3T2fTE_jMtl
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b5CJHTF3CJhC1Zauo4Pc4i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnlxfahdkBHOugA16ZeBVt
          claim_id: c_JcL8JDVYUTY3T2fTE_jMtl
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b5CJHTF3CJhC1Zauo4Pc4i
        status: active
        display_name: 王浰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6U30anhS3A_xYQHT-Etx1P
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hDt1dBQpLhxLJc7ytN2m1U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQTzClk3_9wFsUpp0-P2hj
          claim_id: c_6U30anhS3A_xYQHT-Etx1P
          source_id: s_4z2KtNb98LuJtqvAK82dYq
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4z2KtNb98LuJtqvAK82dYq
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王鈞妻)（CBDB 165255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165255&o=json
            external_identifier: CBDB:165255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hDt1dBQpLhxLJc7ytN2m1U
        status: active
        display_name: 盧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_H3x2GqcFs-FQEJLJMyC0VU
        subject_person_id: p_VCCsC6Ka6PLxT1974FrH4p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0f1VEGpwDwmIOT5RsuxBA
          claim_id: c_H3x2GqcFs-FQEJLJMyC0VU
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VCCsC6Ka6PLxT1974FrH4p
        status: active
        display_name: 王宏之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| birth.date | 696年 | accepted |
| death.date | 776年 | accepted |
| bio.summary | 王鈞（696年—776年），史料所见人物。本项目依据《中国历代人物传记资料库：王鈞（CBDB 143108）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sd3hcMsGVmiPNhPP7xuPH6 | 王悌 | accepted |
| children | p_3UsnYALpsLqLgKX6vUBvrD | 王淇 | accepted |
| children | p_5v9AuJb4c8dfuy6JYiZGbw | 王澡 | accepted |
| children | p_A84W4Qt6NZjv8BXVPciqQL | 王沐 | accepted |
| children | p_b5CJHTF3CJhC1Zauo4Pc4i | 王浰 | accepted |
| spouses | p_hDt1dBQpLhxLJc7ytN2m1U | 盧氏 | accepted |
| ancestors | p_VCCsC6Ka6PLxT1974FrH4p | 王宏之 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王鈞妻)（CBDB 165255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165255&o=json)
- [中国历代人物传记资料库：王鈞（CBDB 143108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json)
- [中国历代人物传记资料库：王淇（CBDB 165256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165256&o=json)
- [中国历代人物传记资料库：王澡（CBDB 165258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165258&o=json)
