---
schema: wang-person/v1
id: p_65g8o6f3iNCjHS9Q5ojrP4
status: active
merged_into: null
display_name: 王公淑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z92GCgMR3spEACscxEuGFr
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qca5kqkksiu2eN39EuSddx
          claim_id: c_z92GCgMR3spEACscxEuGFr
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: CBDB:144996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144996）
          source: &a1
            id: s_CH5cyGnFWoErX6LHxt9G4U
            source_type: api_record
            title: 中国历代人物传记资料库：王公淑（CBDB 144996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json
            external_identifier: CBDB:144996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RmUyCDTo5yRz6FBxwrJ3VF
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPDxxmQNVJf1LxP39S4fLS
          claim_id: c_RmUyCDTo5yRz6FBxwrJ3VF
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
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
        id: c_fsFo8L5WymzSUFEpnXsFqx
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZeDRwj1f74YEA91YQUSe4
          claim_id: c_fsFo8L5WymzSUFEpnXsFqx
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
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
        id: c_7V73PiLRPBsff3wvE7izNU
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公淑（780年—848年），唐人物。籍贯幽都，曾任殿中侍御史、節度留後、上柱國。（中国历代人物传记资料库 CBDB 144996）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6CLyavLqwWjJctsLoiEgo3
          claim_id: c_7V73PiLRPBsff3wvE7izNU
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: CBDB:144996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_34lRrnIRRY1q5tMms6ZQdM
        subject_person_id: p_vG24H9X7wmLEEn1XrdiCWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSEPlmB4Zvb87dXD8f6VEs
          claim_id: c_34lRrnIRRY1q5tMms6ZQdM
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vG24H9X7wmLEEn1XrdiCWd
        status: active
        display_name: 王戩
        merged_into_person_id: null
  children:
    - claim:
        id: c_-jeTXANfgL2vKdWXszUu7F
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmKU9VX3w64ocyJLJwDATJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fC6_jsel50jt6AWfrsMJ7z
          claim_id: c_-jeTXANfgL2vKdWXszUu7F
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hmKU9VX3w64ocyJLJwDATJ
        status: active
        display_name: 王弘裕
        merged_into_person_id: null
    - claim:
        id: c_xNFxWMcZ9GNl8leM_DLoZg
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fy6WS44aKuLX9PaFkFZWV3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rT7UcIZD8X48cRJd1O_4lk
          claim_id: c_xNFxWMcZ9GNl8leM_DLoZg
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fy6WS44aKuLX9PaFkFZWV3
        status: active
        display_name: 王弘爽
        merged_into_person_id: null
    - claim:
        id: c_Dpf1Y4vQ5hl9Fitpjv2cfV
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gg4X88WChFbJy2DVbDJGyu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WqMuw0O994UdF7L67VYoh
          claim_id: c_Dpf1Y4vQ5hl9Fitpjv2cfV
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gg4X88WChFbJy2DVbDJGyu
        status: active
        display_name: 王弘慶
        merged_into_person_id: null
    - claim:
        id: c_G6ZqU1r92MlN3iRrtLyQoF
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHexXHyM2F6emmgNY7URa4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvWGlf2JiXJlJ4oaIulGKf
          claim_id: c_G6ZqU1r92MlN3iRrtLyQoF
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jHexXHyM2F6emmgNY7URa4
        status: active
        display_name: 王弘道
        merged_into_person_id: null
    - claim:
        id: c_pYmd8NeN1FYWNkQKCwDFgq
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NzV51KB6tw1GyQQgwrA7mr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rt4cmlwSqcUbxHfUWP1PQk
          claim_id: c_pYmd8NeN1FYWNkQKCwDFgq
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NzV51KB6tw1GyQQgwrA7mr
        status: active
        display_name: 王弘安
        merged_into_person_id: null
    - claim:
        id: c_2AAKWhq60JOdzkTdAL_g0e
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Y5pNN6KG9WimxBxsCcwWB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVUmmqG7kqoVJ-84LR-Sm1
          claim_id: c_2AAKWhq60JOdzkTdAL_g0e
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2Y5pNN6KG9WimxBxsCcwWB
        status: active
        display_name: 王弘信
        merged_into_person_id: null
    - claim:
        id: c_E-gcsJk226zoKNaX7_W5qn
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tiQC6hevPEHVB2bpZTnzyG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0WYJ5DEk-GoKFr1-FIJxxW
          claim_id: c_E-gcsJk226zoKNaX7_W5qn
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tiQC6hevPEHVB2bpZTnzyG
        status: active
        display_name: 王弘順
        merged_into_person_id: null
    - claim:
        id: c_IjWe6eiGbFwugl3G-2LYFL
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vpih8rpLxjm39HU48JcdDK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2oGJHbPWAqQmacNzb8pN7B
          claim_id: c_IjWe6eiGbFwugl3G-2LYFL
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vpih8rpLxjm39HU48JcdDK
        status: active
        display_name: 王弘德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公淑 | accepted |
| birth.date | 780年 | accepted |
| death.date | 848年 | accepted |
| bio.summary | 王公淑（780年—848年），唐人物。籍贯幽都，曾任殿中侍御史、節度留後、上柱國。（中国历代人物传记资料库 CBDB 144996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vG24H9X7wmLEEn1XrdiCWd | 王戩 | accepted |
| children | p_hmKU9VX3w64ocyJLJwDATJ | 王弘裕 | accepted |
| children | p_fy6WS44aKuLX9PaFkFZWV3 | 王弘爽 | accepted |
| children | p_gg4X88WChFbJy2DVbDJGyu | 王弘慶 | accepted |
| children | p_jHexXHyM2F6emmgNY7URa4 | 王弘道 | accepted |
| children | p_NzV51KB6tw1GyQQgwrA7mr | 王弘安 | accepted |
| children | p_2Y5pNN6KG9WimxBxsCcwWB | 王弘信 | accepted |
| children | p_tiQC6hevPEHVB2bpZTnzyG | 王弘順 | accepted |
| children | p_vpih8rpLxjm39HU48JcdDK | 王弘德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公淑（CBDB 144996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json)
