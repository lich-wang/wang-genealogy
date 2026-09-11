---
schema: wang-person/v1
id: p_Td2fuKuEoYV2zfraAXswcd
status: active
merged_into: null
display_name: 王汝楫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLM3U24bGo6k7kvAgFNLJf
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gv8adPw19sA5uWNJbHSx6f
          claim_id: c_aLM3U24bGo6k7kvAgFNLJf
          source_id: s_ojVSoT42EcjGUkSQpDz5BQ
          stance: supports
          locator: CBDB:202580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202580）
          source: &a1
            id: s_ojVSoT42EcjGUkSQpDz5BQ
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 202580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202580&o=json
            external_identifier: CBDB:202580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_si7dHrK1omY11TBRQHwR1n
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4NSgRP21ZaE2QYGP44E1AP
          claim_id: c_si7dHrK1omY11TBRQHwR1n
          source_id: s_ojVSoT42EcjGUkSQpDz5BQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ym8pJdAEBZodhMBcrt7M2R
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
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
        - id: cs_dEdxn5xkDfrmcBh2kEU8Qa
          claim_id: c_Ym8pJdAEBZodhMBcrt7M2R
          source_id: s_ojVSoT42EcjGUkSQpDz5BQ
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
        id: c_r9rOMRoNuOV_KkcBkWx7VN
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFpW8uv3T7LghPBbqR2vC7
          claim_id: c_r9rOMRoNuOV_KkcBkWx7VN
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M8X3wh89XBfdrbhLFWVZiq
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 290256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json
            external_identifier: CBDB:290256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C5NJgthLEeWbSTDMxHE6iV
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_MeFUi0iqIzYWJuz0Hgfxpk
        subject_person_id: p_LxHzuFLodDjYAodhqdeJE6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIAA2qXzGW1h-LBmLDfmJI
          claim_id: c_MeFUi0iqIzYWJuz0Hgfxpk
          source_id: s_8cfnxRb3a7VhHGaSp2qEhP
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8cfnxRb3a7VhHGaSp2qEhP
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 290255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290255&o=json
            external_identifier: CBDB:290255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LxHzuFLodDjYAodhqdeJE6
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_B_dRh_vdAcrknuu2dM6dXT
        subject_person_id: p_ga1Zg1T9kuUr93iK7UoAH2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxnZ2nvIfS7uDsfqmbJoM8
          claim_id: c_B_dRh_vdAcrknuu2dM6dXT
          source_id: s_wfuxpEU2NypZWYhr6zaNiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wfuxpEU2NypZWYhr6zaNiq
            source_type: api_record
            title: 中国历代人物传记资料库：王揀（CBDB 290254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json
            external_identifier: CBDB:290254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ga1Zg1T9kuUr93iK7UoAH2
        status: active
        display_name: 王揀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝楫 | accepted |
| birth.date | 1492年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5NJgthLEeWbSTDMxHE6iV | 王寧 | accepted |
| ancestors | p_LxHzuFLodDjYAodhqdeJE6 | 王中 | accepted |
| ancestors | p_ga1Zg1T9kuUr93iK7UoAH2 | 王揀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王揀（CBDB 290254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json)
- [中国历代人物传记资料库：王寧（CBDB 290256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json)
- [中国历代人物传记资料库：王汝楫（CBDB 202580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202580&o=json)
- [中国历代人物传记资料库：王中（CBDB 290255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290255&o=json)
