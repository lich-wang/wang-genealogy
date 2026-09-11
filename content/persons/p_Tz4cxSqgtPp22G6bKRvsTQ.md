---
schema: wang-person/v1
id: p_Tz4cxSqgtPp22G6bKRvsTQ
status: active
merged_into: null
display_name: 王喆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FHuQKpEc19338gkLDouT4n
        subject_person_id: p_Tz4cxSqgtPp22G6bKRvsTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DFEhcrdEi1pVm4y4vNeYyb
          claim_id: c_FHuQKpEc19338gkLDouT4n
          source_id: s_2VQimR18SEaKg8TtRhs2W5
          stance: supports
          locator: CBDB:175939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175939）
          source: &a1
            id: s_2VQimR18SEaKg8TtRhs2W5
            source_type: api_record
            title: 中国历代人物传记资料库：王喆（CBDB 175939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175939&o=json
            external_identifier: CBDB:175939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_agLAD9DLNiM9T653crHmSp
        subject_person_id: p_Tz4cxSqgtPp22G6bKRvsTQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 664年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZsbdWK8Cvet1ov2Q53wurp
          claim_id: c_agLAD9DLNiM9T653crHmSp
          source_id: s_2VQimR18SEaKg8TtRhs2W5
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
        id: c_JD1HxzjYvUxa5qdPBCprQk
        subject_person_id: p_Tz4cxSqgtPp22G6bKRvsTQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kv8LzQjs5EP8fSPfTgAdJS
          claim_id: c_JD1HxzjYvUxa5qdPBCprQk
          source_id: s_2VQimR18SEaKg8TtRhs2W5
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
        id: c_E2-uOMKZWchWC0Ew-NmMJ0
        subject_person_id: p_baVvLFfNr767DCkDPPU1AF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tz4cxSqgtPp22G6bKRvsTQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBVmL85l-j1ASgyMvazWuL
          claim_id: c_E2-uOMKZWchWC0Ew-NmMJ0
          source_id: s_kvzDrNVczBi49TMUtmhkWx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kvzDrNVczBi49TMUtmhkWx
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 175938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175938&o=json
            external_identifier: CBDB:175938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_baVvLFfNr767DCkDPPU1AF
        status: active
        display_name: 王壽
        merged_into_person_id: null
  children:
    - claim:
        id: c_s5NQ7cBuSD_GInOsS_diI2
        subject_person_id: p_Tz4cxSqgtPp22G6bKRvsTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zBEyedU-jgQ1nHFYQ1ONY
          claim_id: c_s5NQ7cBuSD_GInOsS_diI2
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WG4LcJdg2iBTqvpZQpDp9o
        status: active
        display_name: 王慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王喆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喆 | accepted |
| death.date | 664年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_baVvLFfNr767DCkDPPU1AF | 王壽 | accepted |
| children | p_WG4LcJdg2iBTqvpZQpDp9o | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
- [中国历代人物传记资料库：王壽（CBDB 175938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175938&o=json)
- [中国历代人物传记资料库：王喆（CBDB 175939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175939&o=json)
