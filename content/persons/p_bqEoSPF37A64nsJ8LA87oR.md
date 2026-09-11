---
schema: wang-person/v1
id: p_bqEoSPF37A64nsJ8LA87oR
status: active
merged_into: null
display_name: 王德新
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LBBe65KPbAtCv1nYZhY7st
        subject_person_id: p_bqEoSPF37A64nsJ8LA87oR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7bnimgYdoDxhaSs1jzZEAR
          claim_id: c_LBBe65KPbAtCv1nYZhY7st
          source_id: s_Ng32YVz7D2uzMtquofEcqw
          stance: supports
          locator: CBDB:570986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570986）
          source: &a1
            id: s_Ng32YVz7D2uzMtquofEcqw
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 570986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570986&o=json
            external_identifier: CBDB:570986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQeGa6TDwD5JBecKRqwfcP
        subject_person_id: p_bqEoSPF37A64nsJ8LA87oR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新，清人物。籍贯蕭山。（中国历代人物传记资料库 CBDB 570986）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OZUMRqUhfcOaVSI4Op-xA6
          claim_id: c_AQeGa6TDwD5JBecKRqwfcP
          source_id: s_Ng32YVz7D2uzMtquofEcqw
          stance: supports
          locator: CBDB:570986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p5bILWaiWAX3EURE8Zd8c5
        subject_person_id: p_pP1ZFJ9Eu2YF7pkebSdPnY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqEoSPF37A64nsJ8LA87oR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybcM5LWCoKIpjLDSnXxg4o
          claim_id: c_p5bILWaiWAX3EURE8Zd8c5
          source_id: s_Ng32YVz7D2uzMtquofEcqw
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pP1ZFJ9Eu2YF7pkebSdPnY
        status: active
        display_name: 王家楨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4Jkts8CK0BhKen0pt-ef6X
        subject_person_id: p_bqEoSPF37A64nsJ8LA87oR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KYWRsH6nLq7aw1qYYBCMoD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1N9hVbgCTytamjk5X38t3H
          claim_id: c_4Jkts8CK0BhKen0pt-ef6X
          source_id: s_OrlMK8w1bUtyvVv_BlXXCr
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OrlMK8w1bUtyvVv_BlXXCr
            source_type: api_record
            title: 中国历代人物传记资料库：來氏(王德新妻)（CBDB 570987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570987&o=json
            external_identifier: CBDB:570987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KYWRsH6nLq7aw1qYYBCMoD
        status: active
        display_name: 來氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_7WDlhZy10HFptApcmI10YA
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bqEoSPF37A64nsJ8LA87oR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4CdUOW_-Zt1jCpvfKFsGv
          claim_id: c_7WDlhZy10HFptApcmI10YA
          source_id: s_Ng32YVz7D2uzMtquofEcqw
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KK8vNXZj4epAzhpkfscadd
        status: active
        display_name: 王士珪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王德新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德新 | accepted |
| bio.summary | 王德新，清人物。籍贯蕭山。（中国历代人物传记资料库 CBDB 570986） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pP1ZFJ9Eu2YF7pkebSdPnY | 王家楨 | accepted |
| spouses | p_KYWRsH6nLq7aw1qYYBCMoD | 來氏 | accepted |
| ancestors | p_KK8vNXZj4epAzhpkfscadd | 王士珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：來氏(王德新妻)（CBDB 570987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570987&o=json)
- [中国历代人物传记资料库：王德新（CBDB 570986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570986&o=json)
