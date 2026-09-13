---
schema: wang-person/v1
id: p_uj9iEnV6pkqMeV3HS81VMA
status: active
merged_into: null
display_name: 王師丘
cbdb_id: 175801
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SR9NSkbRCARt8as1FEv1k7
        subject_person_id: p_uj9iEnV6pkqMeV3HS81VMA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師丘（卒于606年），史料所见人物。本项目依据《中国历代人物传记资料库：王師丘（CBDB 175801）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_O1i_myK2lS3xKJwBVRQOZC
          claim_id: c_SR9NSkbRCARt8as1FEv1k7
          source_id: s_LNyNNomuhHZ8KMK99JdjeG
          stance: supports
          locator: CBDB:175801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LNyNNomuhHZ8KMK99JdjeG
            source_type: api_record
            title: 中国历代人物传记资料库：王師丘（CBDB 175801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175801&o=json
            external_identifier: CBDB:175801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mjBXKtee49aR8RKnJ5nRit
        subject_person_id: p_uj9iEnV6pkqMeV3HS81VMA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 606年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0606-01-01
            latest: 0606-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cmt3d5Gi3ZpEHCv8ZEG57U
          claim_id: c_mjBXKtee49aR8RKnJ5nRit
          source_id: s_LNyNNomuhHZ8KMK99JdjeG
          stance: supports
          locator: CBDB:175801
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 606
          source:
            id: s_LNyNNomuhHZ8KMK99JdjeG
            source_type: api_record
            title: 中国历代人物传记资料库：王師丘（CBDB 175801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175801&o=json
            external_identifier: CBDB:175801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EFzfxKVARAVxF1aDKmS5FH
        subject_person_id: p_uj9iEnV6pkqMeV3HS81VMA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師丘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_moLHTFFbB22pSGckjDcz4a
          claim_id: c_EFzfxKVARAVxF1aDKmS5FH
          source_id: s_LNyNNomuhHZ8KMK99JdjeG
          stance: supports
          locator: CBDB:175801
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 606
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NUcnWoavwQq3ngR1Up7se1
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uj9iEnV6pkqMeV3HS81VMA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KwVTdzjJ4mXLOvv6J7hPSd
          claim_id: c_NUcnWoavwQq3ngR1Up7se1
          source_id: s_LNyNNomuhHZ8KMK99JdjeG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LNyNNomuhHZ8KMK99JdjeG
            source_type: api_record
            title: 中国历代人物传记资料库：王師丘（CBDB 175801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175801&o=json
            external_identifier: CBDB:175801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wg9SbiU6iuiiEMCXTr6z5i
        status: active
        display_name: 王野父
        merged_into_person_id: null
  children:
    - claim:
        id: c_6dWaijQPcdesCg1U1MLi1S
        subject_person_id: p_uj9iEnV6pkqMeV3HS81VMA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S8HLtFDDBHcXVtx11UNHQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kU7VbSV5A5-p4fLjJVutLZ
          claim_id: c_6dWaijQPcdesCg1U1MLi1S
          source_id: s_yLH4Pyma6ButAkd4rpTVtd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yLH4Pyma6ButAkd4rpTVtd
            source_type: api_record
            title: 中国历代人物传记资料库：王道質（CBDB 154278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154278&o=json
            external_identifier: CBDB:154278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_S8HLtFDDBHcXVtx11UNHQB
        status: active
        display_name: 王道質
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師丘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師丘（卒于606年），史料所见人物。本项目依据《中国历代人物传记资料库：王師丘（CBDB 175801）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 606年 | accepted |
| name.primary | 王師丘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wg9SbiU6iuiiEMCXTr6z5i | 王野父 | accepted |
| children | p_S8HLtFDDBHcXVtx11UNHQB | 王道質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道質（CBDB 154278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154278&o=json)
- [中国历代人物传记资料库：王師丘（CBDB 175801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175801&o=json)
