---
schema: wang-person/v1
id: p_YZgMMK2h5d44s5CGoUpM7o
status: active
merged_into: null
display_name: 王盧
cbdb_id: 198449
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SF9zq8dDPofcu7xeg2UFM6
        subject_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盧（生于1424年），史料所见人物。本项目依据《中国历代人物传记资料库：王盧（CBDB 198449）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Ca_ffyGriiEwVMUL2qIixV
          claim_id: c_SF9zq8dDPofcu7xeg2UFM6
          source_id: s_U4M1gGaQ3E1UB7JFqC36bu
          stance: supports
          locator: CBDB:198449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_U4M1gGaQ3E1UB7JFqC36bu
            source_type: api_record
            title: 中国历代人物传记资料库：王盧（CBDB 198449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198449&o=json
            external_identifier: CBDB:198449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zdaqyRmJB2hEmxn5V2h6BZ
        subject_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1424-01-01
            latest: 1424-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TiDM7MP9FfWHTMiNJz36Wk
          claim_id: c_zdaqyRmJB2hEmxn5V2h6BZ
          source_id: s_U4M1gGaQ3E1UB7JFqC36bu
          stance: supports
          locator: CBDB:198449
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1424
          source:
            id: s_U4M1gGaQ3E1UB7JFqC36bu
            source_type: api_record
            title: 中国历代人物传记资料库：王盧（CBDB 198449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198449&o=json
            external_identifier: CBDB:198449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dcd7ergF9Z1Fb4n7NFTdKp
        subject_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P8UGBgBG1t3Dkjp6VMKU4m
          claim_id: c_dcd7ergF9Z1Fb4n7NFTdKp
          source_id: s_U4M1gGaQ3E1UB7JFqC36bu
          stance: supports
          locator: CBDB:198449
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1424
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZtcbwnNIx-GqH_gU-7tmTd
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiyRiNY5bekK928s7e81KO
          claim_id: c_ZtcbwnNIx-GqH_gU-7tmTd
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5GmKVCG3pEU9z49RRsPfCX
            source_type: api_record
            title: 中国历代人物传记资料库：王伯堅（CBDB 273594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json
            external_identifier: CBDB:273594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fbcjmX688Gs2kLT5MbYSLr
        status: active
        display_name: 王伯堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_I3TdSueLAlkPDjYE8jxWM8
        subject_person_id: p_m4HYJEsoe9N29gPaPihab2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l69qunP_M-zXcg1L0_r2Ax
          claim_id: c_I3TdSueLAlkPDjYE8jxWM8
          source_id: s_FCRnjE2idGXpBVoETrVYRE
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FCRnjE2idGXpBVoETrVYRE
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎新（CBDB 273572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273572&o=json
            external_identifier: CBDB:273572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m4HYJEsoe9N29gPaPihab2
        status: active
        display_name: 王鼎新
        merged_into_person_id: null
    - claim:
        id: c_ya5B4jWoLMfwzmOl1XX5Ql
        subject_person_id: p_NFdYCp33yFaFMKmadNWFKi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CeegKK7kKMEvUcM6nplWbp
          claim_id: c_ya5B4jWoLMfwzmOl1XX5Ql
          source_id: s_SHVfGpxLD6ZEfE9awn4B29
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SHVfGpxLD6ZEfE9awn4B29
            source_type: api_record
            title: 中国历代人物传记资料库：王熊（CBDB 273583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273583&o=json
            external_identifier: CBDB:273583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NFdYCp33yFaFMKmadNWFKi
        status: active
        display_name: 王熊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王盧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王盧（生于1424年），史料所见人物。本项目依据《中国历代人物传记资料库：王盧（CBDB 198449）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1424年 | accepted |
| name.primary | 王盧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fbcjmX688Gs2kLT5MbYSLr | 王伯堅 | accepted |
| ancestors | p_m4HYJEsoe9N29gPaPihab2 | 王鼎新 | accepted |
| ancestors | p_NFdYCp33yFaFMKmadNWFKi | 王熊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯堅（CBDB 273594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json)
- [中国历代人物传记资料库：王鼎新（CBDB 273572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273572&o=json)
- [中国历代人物传记资料库：王盧（CBDB 198449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198449&o=json)
- [中国历代人物传记资料库：王熊（CBDB 273583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273583&o=json)
