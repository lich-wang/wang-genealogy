---
schema: wang-person/v1
id: p_iEHAUDfuL7tSdPpuW3tGoM
status: active
merged_into: null
display_name: 王密
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tMAqm6JYX2mrabDx3nqspo
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KSynXuhAaNxd3DNEeDLJJg
          claim_id: c_tMAqm6JYX2mrabDx3nqspo
          source_id: s_7jFNBMWfg9xzsKu5NFC8SZ
          stance: supports
          locator: CBDB:175944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175944）
          source: &a1
            id: s_7jFNBMWfg9xzsKu5NFC8SZ
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 175944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175944&o=json
            external_identifier: CBDB:175944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_48C7Ej4s194vC2pDL9UMV7
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y8f241WZSXPUPxuKRd9BHG
          claim_id: c_48C7Ej4s194vC2pDL9UMV7
          source_id: s_7jFNBMWfg9xzsKu5NFC8SZ
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
        id: c_D3iufduCMBLC49orcBExDa
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密（卒于763年），唐人物。籍贯杜陵，曾任道觀察使、州刺史。（中国历代人物传记资料库 CBDB 175944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wQtwWZG_zF5n0dYCgOt-Ve
          claim_id: c_D3iufduCMBLC49orcBExDa
          source_id: s_7jFNBMWfg9xzsKu5NFC8SZ
          stance: supports
          locator: CBDB:175944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LJBSM-0YJilw7CA7xocWJD
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gfgpFeC-3WyDtdqVrXW3AQ
          claim_id: c_LJBSM-0YJilw7CA7xocWJD
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaQHp5mjAHgZukLwRbkP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王易從（CBDB 92036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json
            external_identifier: CBDB:92036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9uzT9MsPAMdeGut41RiW3f
        status: active
        display_name: 王易從
        merged_into_person_id: null
  children:
    - claim:
        id: c_HIJ_CkDdYA3dRDQQVoX1R4
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z9eKPAK6aboLcXL2xUEuDQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LHG_WvnvMGm45d5wo6i1MN
          claim_id: c_HIJ_CkDdYA3dRDQQVoX1R4
          source_id: s_BBabBH8DimjXP2dffaFwZn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BBabBH8DimjXP2dffaFwZn
            source_type: api_record
            title: 中国历代人物传记资料库：王行古（CBDB 175945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175945&o=json
            external_identifier: CBDB:175945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Z9eKPAK6aboLcXL2xUEuDQ
        status: active
        display_name: 王行古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| death.date | 763年 | accepted |
| bio.summary | 王密（卒于763年），唐人物。籍贯杜陵，曾任道觀察使、州刺史。（中国历代人物传记资料库 CBDB 175944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9uzT9MsPAMdeGut41RiW3f | 王易從 | accepted |
| children | p_Z9eKPAK6aboLcXL2xUEuDQ | 王行古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 175944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175944&o=json)
- [中国历代人物传记资料库：王行古（CBDB 175945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175945&o=json)
- [中国历代人物传记资料库：王易從（CBDB 92036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json)
