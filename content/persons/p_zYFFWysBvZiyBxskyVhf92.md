---
schema: wang-person/v1
id: p_zYFFWysBvZiyBxskyVhf92
status: active
merged_into: null
display_name: 彭氏
revision: 1
cbdb_id: 561619
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c__F_WMM4rcP_lIHy61ghYDg
        subject_person_id: p_zYFFWysBvZiyBxskyVhf92
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 彭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rKHsbzzsxFBOEh28R97Xgg
          claim_id: c__F_WMM4rcP_lIHy61ghYDg
          source_id: s_xHbNGBRFPuinAmqXdCGCvC
          stance: supports
          locator: CBDB:561619
          quotation: null
          interpretation_note: CBDB 明确记录的王朱聘配偶
          source: &a1
            id: s_xHbNGBRFPuinAmqXdCGCvC
            source_type: api_record
            title: 中国历代人物传记资料库：彭氏(王朱聘妻)（CBDB 561619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561619&o=json
            external_identifier: CBDB:561619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HV8i1hLYywln5mr79j35ZE
        subject_person_id: p_N49J6AiFwPzMzPB93YPVcK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zYFFWysBvZiyBxskyVhf92
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7zdoqWAJv_JE5LsV3POqVP
          claim_id: c_HV8i1hLYywln5mr79j35ZE
          source_id: s_xHbNGBRFPuinAmqXdCGCvC
          stance: supports
          locator: 南陽府志，lgid=878866：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N49J6AiFwPzMzPB93YPVcK
        status: active
        display_name: 王朱聘
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 彭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 彭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_N49J6AiFwPzMzPB93YPVcK | 王朱聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：彭氏(王朱聘妻)（CBDB 561619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561619&o=json)
