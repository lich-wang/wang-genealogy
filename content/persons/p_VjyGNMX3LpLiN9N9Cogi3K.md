---
schema: wang-person/v1
id: p_VjyGNMX3LpLiN9N9Cogi3K
status: active
merged_into: null
display_name: 王寡言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AhC96kDLHumKuBF6eKZRhC
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寡言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R6iFG8dT2i65DeA3UN7egv
          claim_id: c_AhC96kDLHumKuBF6eKZRhC
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
          stance: supports
          locator: CBDB:175718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175718）
          source: &a1
            id: s_5koLLBULa2Yqd2GY1h9GaC
            source_type: api_record
            title: 中国历代人物传记资料库：王寡言（CBDB 175718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175718&o=json
            external_identifier: CBDB:175718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uJAJFroBV379nSRHALw5Pj
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oikFTMHYFangmR2ZEBAVT
          claim_id: c_uJAJFroBV379nSRHALw5Pj
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
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
        id: c_FTAMKvJL8St81o4XZXJL18
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寡言（卒于878年），唐人物。籍贯淮陰。（中国历代人物传记资料库 CBDB 175718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9x6hhO-cpJDuZnNERJLumA
          claim_id: c_FTAMKvJL8St81o4XZXJL18
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
          stance: supports
          locator: CBDB:175718
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kdWcBdG9NevqtZnoQ25YPq
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hV7Ys9SUThQQEao-ZE8W7G
          claim_id: c_kdWcBdG9NevqtZnoQ25YPq
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yBtPvdFHB94uiBW1TdCCXp
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  children:
    - claim:
        id: c_4r-3eIIENlPahsO-sSjq10
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HiG2GSGG1BU3tAoqGMnt3j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aWiNkTbR30qLW5RH1-favU
          claim_id: c_4r-3eIIENlPahsO-sSjq10
          source_id: s_WgcvsP2WM83DHnSGsdrLtq
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WgcvsP2WM83DHnSGsdrLtq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍇（CBDB 175719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175719&o=json
            external_identifier: CBDB:175719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HiG2GSGG1BU3tAoqGMnt3j
        status: active
        display_name: 王鍇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寡言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寡言 | accepted |
| death.date | 878年 | accepted |
| bio.summary | 王寡言（卒于878年），唐人物。籍贯淮陰。（中国历代人物传记资料库 CBDB 175718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yBtPvdFHB94uiBW1TdCCXp | 王敬仲 | accepted |
| children | p_HiG2GSGG1BU3tAoqGMnt3j | 王鍇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寡言（CBDB 175718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175718&o=json)
- [中国历代人物传记资料库：王鍇（CBDB 175719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175719&o=json)
