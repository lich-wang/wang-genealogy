---
schema: wang-person/v1
id: p_Lc2gCDF5BzW25Fdhb8evAr
status: active
merged_into: null
display_name: 王蘊徽
cbdb_id: 56783
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5o4xGdLK4NZhLPsCTdQYD
        subject_person_id: p_Lc2gCDF5BzW25Fdhb8evAr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊徽，清人物。中国历代人物传记资料库（CBDB）以人物编号 56783 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ltxPTyIt8gh2n3qFR8_sGb
          claim_id: c_K5o4xGdLK4NZhLPsCTdQYD
          source_id: s_QCKmhnCbB82ND1djfaPAnh
          stance: supports
          locator: CBDB:56783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QCKmhnCbB82ND1djfaPAnh
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊徽（CBDB 56783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56783&o=json
            external_identifier: CBDB:56783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jsZAPKjULMzLagmHTrYSgH
        subject_person_id: p_Lc2gCDF5BzW25Fdhb8evAr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pPHhjrPW89FhDayCvTuiuw
          claim_id: c_jsZAPKjULMzLagmHTrYSgH
          source_id: s_QCKmhnCbB82ND1djfaPAnh
          stance: supports
          locator: CBDB:56783
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_QCKmhnCbB82ND1djfaPAnh
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊徽（CBDB 56783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56783&o=json
            external_identifier: CBDB:56783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vcyNo3bJa4ph8nOguFvvos
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lc2gCDF5BzW25Fdhb8evAr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKLdR1KJYVFkU3S_cI2YN1
          claim_id: c_vcyNo3bJa4ph8nOguFvvos
          source_id: s_QCKmhnCbB82ND1djfaPAnh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1138, HuWenKai #258：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dSq17UnVqarJGmqnUNoAds
        status: active
        display_name: 王春煦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_s4e6A6jtRU-taVzAlaZo50
        subject_person_id: p_Lc2gCDF5BzW25Fdhb8evAr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_toVLJwiZ4K3vU4jro3N7ki
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z5jLAdw5SUUdLCJcRsj9xh
          claim_id: c_s4e6A6jtRU-taVzAlaZo50
          source_id: s_PpI04Sd1NRzFCTUp55cPbr
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1138, HuWenKai #258：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PpI04Sd1NRzFCTUp55cPbr
            source_type: api_record
            title: 中国历代人物传记资料库：楊紹文（CBDB 56787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56787&o=json
            external_identifier: CBDB:56787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_toVLJwiZ4K3vU4jro3N7ki
        status: active
        display_name: 楊紹文
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蘊徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蘊徽，清人物。中国历代人物传记资料库（CBDB）以人物编号 56783 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王蘊徽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dSq17UnVqarJGmqnUNoAds | 王春煦 | accepted |
| spouses | p_toVLJwiZ4K3vU4jro3N7ki | 楊紹文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘊徽（CBDB 56783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56783&o=json)
- [中国历代人物传记资料库：楊紹文（CBDB 56787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56787&o=json)
