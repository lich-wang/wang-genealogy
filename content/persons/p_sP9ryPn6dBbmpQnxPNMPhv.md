---
schema: wang-person/v1
id: p_sP9ryPn6dBbmpQnxPNMPhv
status: active
merged_into: null
display_name: 王凝之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dvYcA3c84P9f6ijN9SxE41
        subject_person_id: p_sP9ryPn6dBbmpQnxPNMPhv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cN67uqXJB66vZTHcLzhMSP
          claim_id: c_dvYcA3c84P9f6ijN9SxE41
          source_id: s_fJntZw9Gt6yhZohKxv3V4N
          stance: supports
          locator: CBDB:134837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134837）
          source: &a1
            id: s_fJntZw9Gt6yhZohKxv3V4N
            source_type: api_record
            title: 中国历代人物传记资料库：王凝之（CBDB 134837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134837&o=json
            external_identifier: CBDB:134837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_19BdkbdJQtQuKCp3J6dFWs
        subject_person_id: p_sP9ryPn6dBbmpQnxPNMPhv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 134837）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QKozeA8b2SKbQ0Rd8GoJDP
          claim_id: c_19BdkbdJQtQuKCp3J6dFWs
          source_id: s_fJntZw9Gt6yhZohKxv3V4N
          stance: supports
          locator: CBDB:134837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vIOQvS8shFR9yoLvFugEuo
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sP9ryPn6dBbmpQnxPNMPhv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pw-yBFB-_U5ysZULQrMeMx
          claim_id: c_vIOQvS8shFR9yoLvFugEuo
          source_id: s_fJntZw9Gt6yhZohKxv3V4N
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2001, HuWenKai #10：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VCkK1jW79rQ6D9gE1Q4vrU
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5BwbohUlD7CGgo8tUySPK2
        subject_person_id: p_sP9ryPn6dBbmpQnxPNMPhv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EqbrV19BGLaVPSHLLe15u8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kgH-1RTVEPATXLi1WTfKD
          claim_id: c_5BwbohUlD7CGgo8tUySPK2
          source_id: s_fJntZw9Gt6yhZohKxv3V4N
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2001, HuWenKai #10：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EqbrV19BGLaVPSHLLe15u8
        status: active
        display_name: 谢道韫
        merged_into_person_id: null
    - claim:
        id: c_TSQkEHcq0Dyjf_FbDlOBtZ
        subject_person_id: p_EqbrV19BGLaVPSHLLe15u8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sP9ryPn6dBbmpQnxPNMPhv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLRza_cIHfg2bpvVJboGAC
          claim_id: c_TSQkEHcq0Dyjf_FbDlOBtZ
          source_id: s_rooNr82sBkVcuvNxr7FNYJ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2001, HuWenKai #10：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rooNr82sBkVcuvNxr7FNYJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：謝道韞（134836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134836&o=json
            external_identifier: CBDB:134836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:45.053Z
            metadata_json: null
      object_person:
        id: p_EqbrV19BGLaVPSHLLe15u8
        status: active
        display_name: 谢道韫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王凝之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝之 | accepted |
| bio.summary | 王凝之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 134837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VCkK1jW79rQ6D9gE1Q4vrU | 王羲之 | accepted |
| spouses | p_EqbrV19BGLaVPSHLLe15u8 | 谢道韫 | accepted |
| spouses | p_EqbrV19BGLaVPSHLLe15u8 | 谢道韫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凝之（CBDB 134837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134837&o=json)
- [CBDB 中国历代人物传记资料库：謝道韞（134836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134836&o=json)
