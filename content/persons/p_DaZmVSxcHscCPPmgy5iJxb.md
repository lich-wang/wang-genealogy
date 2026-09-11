---
schema: wang-person/v1
id: p_DaZmVSxcHscCPPmgy5iJxb
status: active
merged_into: null
display_name: 王俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bFP69a26QaaTw35YjyuLTA
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zzQkNmoK4xoee4SehEXwiF
          claim_id: c_bFP69a26QaaTw35YjyuLTA
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
          stance: supports
          locator: CBDB:143262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143262）
          source: &a1
            id: s_dh4zjkmv1XJFeJpicRWdiq
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 143262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143262&o=json
            external_identifier: CBDB:143262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E6PYNoQD1FxuANhBGBuKGS
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 729年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZe2iCTz9HaAz8HQg8rxZe
          claim_id: c_E6PYNoQD1FxuANhBGBuKGS
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
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
        id: c_AjSTcmBnrTfvdDaMmmRCqQ
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUggDh3xZqAnmgJkbBV77g
          claim_id: c_AjSTcmBnrTfvdDaMmmRCqQ
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
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
        id: c_3wFgsTaTQntrW8rpzJKeBu
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊（729年—811年），史料所见人物。本项目依据《中国历代人物传记资料库：王俊（CBDB 143262）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZmbYcpvIwFdL2TXrRh9eIV
          claim_id: c_3wFgsTaTQntrW8rpzJKeBu
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
          stance: supports
          locator: CBDB:143262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R8XQTRi-CP-qaG9jDoe3x-
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AX5qk81h3RnEJCnp9j3mox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KncFOGTBLeejUEnV_Hdu-j
          claim_id: c_R8XQTRi-CP-qaG9jDoe3x-
          source_id: s_ASUWT6bsXbZ9HG2DgzUy4Z
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe37：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ASUWT6bsXbZ9HG2DgzUy4Z
            source_type: api_record
            title: 中国历代人物传记资料库：王忠義（CBDB 166052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166052&o=json
            external_identifier: CBDB:166052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AX5qk81h3RnEJCnp9j3mox
        status: active
        display_name: 王忠義
        merged_into_person_id: null
    - claim:
        id: c_OI2y_naQY4miXzC-_mazcO
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lq7akvF2H5JESKpzcPgJ6Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IECaHbWwL4AVT1AOxLk-s
          claim_id: c_OI2y_naQY4miXzC-_mazcO
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lq7akvF2H5JESKpzcPgJ6Y
        status: active
        display_name: 王忠順
        merged_into_person_id: null
    - claim:
        id: c_EyEPkUSvL1ODMq6uXxzF72
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYjRk2djR1PLWDVMHBdBWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCITTwDI91cd6eRNEvjiBj
          claim_id: c_EyEPkUSvL1ODMq6uXxzF72
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RYjRk2djR1PLWDVMHBdBWX
        status: active
        display_name: 王恆宬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| birth.date | 729年 | accepted |
| death.date | 811年 | accepted |
| bio.summary | 王俊（729年—811年），史料所见人物。本项目依据《中国历代人物传记资料库：王俊（CBDB 143262）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AX5qk81h3RnEJCnp9j3mox | 王忠義 | accepted |
| children | p_Lq7akvF2H5JESKpzcPgJ6Y | 王忠順 | accepted |
| children | p_RYjRk2djR1PLWDVMHBdBWX | 王恆宬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 143262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143262&o=json)
- [中国历代人物传记资料库：王忠義（CBDB 166052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166052&o=json)
