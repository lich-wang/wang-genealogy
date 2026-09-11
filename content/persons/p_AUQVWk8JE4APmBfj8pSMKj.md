---
schema: wang-person/v1
id: p_AUQVWk8JE4APmBfj8pSMKj
status: active
merged_into: null
display_name: 王高
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N9FUHTCDtwKnFWG324qSY3
        subject_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FYABmvXmRLVrAMUrmfqpmz
          claim_id: c_N9FUHTCDtwKnFWG324qSY3
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: CBDB:126625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126625）
          source: &a1
            id: s_QPr5EUKVLbTNH9qryNyKZR
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 126625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126625&o=json
            external_identifier: CBDB:126625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bqV5dGUW5hXMQx961vFnC9
        subject_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8e1botAA7H4ArHnXZo8Zeu
          claim_id: c_bqV5dGUW5hXMQx961vFnC9
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TEbDUUDSRpVZrMnS-WwnVs
        subject_person_id: p_HuYEH2YSebAHXaYh9GTn72
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fXib7kHcToXd1N_VpuzBm
          claim_id: c_TEbDUUDSRpVZrMnS-WwnVs
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HuYEH2YSebAHXaYh9GTn72
        status: active
        display_name: 王繼和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sV84Oqss79tZO3K7GhLcri
        subject_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9EKXaEr7g8QX9VA1ZNwBAo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HvJ333yk0VvMPEjg7EFQZk
          claim_id: c_sV84Oqss79tZO3K7GhLcri
          source_id: s_WYaxlF-2QxTm2ILmf_zJTn
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WYaxlF-2QxTm2ILmf_zJTn
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王高妻)（CBDB 254109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254109&o=json
            external_identifier: CBDB:254109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9EKXaEr7g8QX9VA1ZNwBAo
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_j4vOxvdMCG-E4Elcc0RLGX
        subject_person_id: p_E9TsEtqCFLz7zALK14tps2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wsq8Np6cTO_mnUIpnOus5r
          claim_id: c_j4vOxvdMCG-E4Elcc0RLGX
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E9TsEtqCFLz7zALK14tps2
        status: active
        display_name: 王仲銘
        merged_into_person_id: null
    - claim:
        id: c_pABmZ6Wni0Tq1sGf6iaFqj
        subject_person_id: p_KRc4bKqJyLfqU2NiC9wdSf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AyePMGu11glYzRr1WiGP4l
          claim_id: c_pABmZ6Wni0Tq1sGf6iaFqj
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KRc4bKqJyLfqU2NiC9wdSf
        status: active
        display_name: 王思齊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HuYEH2YSebAHXaYh9GTn72 | 王繼和 | accepted |
| spouses | p_9EKXaEr7g8QX9VA1ZNwBAo | 徐氏 | accepted |
| ancestors | p_E9TsEtqCFLz7zALK14tps2 | 王仲銘 | accepted |
| ancestors | p_KRc4bKqJyLfqU2NiC9wdSf | 王思齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 126625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126625&o=json)
- [中国历代人物传记资料库：徐氏(王高妻)（CBDB 254109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254109&o=json)
