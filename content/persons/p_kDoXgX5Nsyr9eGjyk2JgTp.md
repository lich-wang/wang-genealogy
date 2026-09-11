---
schema: wang-person/v1
id: p_kDoXgX5Nsyr9eGjyk2JgTp
status: active
merged_into: null
display_name: 林初文
revision: 1
cbdb_id: 134850
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_in03xe3JXgpKWTLo4DyJVS
        subject_person_id: p_kDoXgX5Nsyr9eGjyk2JgTp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林初文
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btgdwp9c8wLMPquvD1329h
          claim_id: c_in03xe3JXgpKWTLo4DyJVS
          source_id: s_LumpSO0dPf6VTLW64kII_l
          stance: supports
          locator: CBDB:134850
          quotation: null
          interpretation_note: CBDB 明确记录的王娙配偶
          source: &a1
            id: s_LumpSO0dPf6VTLW64kII_l
            source_type: api_record
            title: 中国历代人物传记资料库：林初文（CBDB 134850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134850&o=json
            external_identifier: CBDB:134850
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
        id: c_Hy0c7DPoVOgeihiYSOeuTY
        subject_person_id: p_MuBDBkHv9HCTN2p95387f6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kDoXgX5Nsyr9eGjyk2JgTp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iOIkG2SEN94ePhMyEbf494
          claim_id: c_Hy0c7DPoVOgeihiYSOeuTY
          source_id: s_LumpSO0dPf6VTLW64kII_l
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5504：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MuBDBkHv9HCTN2p95387f6
        status: active
        display_name: 王娙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林初文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 林初文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MuBDBkHv9HCTN2p95387f6 | 王娙 | accepted |

## 外部来源

- [中国历代人物传记资料库：林初文（CBDB 134850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134850&o=json)
