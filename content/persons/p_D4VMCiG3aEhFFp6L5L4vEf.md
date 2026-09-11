---
schema: wang-person/v1
id: p_D4VMCiG3aEhFFp6L5L4vEf
status: active
merged_into: null
display_name: 高雲
revision: 1
cbdb_id: 87236
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vaG_JcMcls1X9CW2k_DGv8
        subject_person_id: p_D4VMCiG3aEhFFp6L5L4vEf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高雲
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pavup0wsHTfzueUBgA-1n_
          claim_id: c_vaG_JcMcls1X9CW2k_DGv8
          source_id: s_pMblQPYvEI_qXHtcuZD0Qt
          stance: supports
          locator: CBDB:87236
          quotation: null
          interpretation_note: CBDB 明确记录的王蓮光配偶
          source: &a1
            id: s_pMblQPYvEI_qXHtcuZD0Qt
            source_type: api_record
            title: 中国历代人物传记资料库：高雲（CBDB 87236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=87236&o=json
            external_identifier: CBDB:87236
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
        id: c_l42TUUxaczdE4INwg_ZGIs
        subject_person_id: p_wfaxHP5LJwbenZEB2jvmAJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D4VMCiG3aEhFFp6L5L4vEf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-DKFHMWUiRAmN89n4u3GX
          claim_id: c_l42TUUxaczdE4INwg_ZGIs
          source_id: s_pMblQPYvEI_qXHtcuZD0Qt
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1784, HuWenKai #254：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wfaxHP5LJwbenZEB2jvmAJ
        status: active
        display_name: 王蓮光
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 高雲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wfaxHP5LJwbenZEB2jvmAJ | 王蓮光 | accepted |

## 外部来源

- [中国历代人物传记资料库：高雲（CBDB 87236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=87236&o=json)
