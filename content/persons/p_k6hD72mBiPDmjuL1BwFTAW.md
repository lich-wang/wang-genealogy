---
schema: wang-person/v1
id: p_k6hD72mBiPDmjuL1BwFTAW
status: active
merged_into: null
display_name: 王昕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bsv4n7gPVsZfyG11KxZb3K
        subject_person_id: p_k6hD72mBiPDmjuL1BwFTAW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37gSiQEjE42QG5KeR4xrCV
          claim_id: c_Bsv4n7gPVsZfyG11KxZb3K
          source_id: s_ojMcJMhDwxHxeGeMoYzxNz
          stance: supports
          locator: CBDB:191292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191292）
          source: &a1
            id: s_ojMcJMhDwxHxeGeMoYzxNz
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 191292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191292&o=json
            external_identifier: CBDB:191292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CFxbeBwBFtmGpACZr4Nmhz
        subject_person_id: p_k6hD72mBiPDmjuL1BwFTAW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 627年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q34gBtdXT9p8iKQyEN4LsJ
          claim_id: c_CFxbeBwBFtmGpACZr4Nmhz
          source_id: s_ojMcJMhDwxHxeGeMoYzxNz
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
        id: c_oVWgbHr27FWDgiyHGDA1Ew
        subject_person_id: p_k6hD72mBiPDmjuL1BwFTAW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕（卒于627年），唐人物。籍贯偃師。（中国历代人物传记资料库 CBDB 191292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iFnlZCc0PMGpGeQngG7NNG
          claim_id: c_oVWgbHr27FWDgiyHGDA1Ew
          source_id: s_ojMcJMhDwxHxeGeMoYzxNz
          stance: supports
          locator: CBDB:191292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TRwQVlrwxlsV4UHSgEDyOj
        subject_person_id: p_k6hD72mBiPDmjuL1BwFTAW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cAfDeDmGVLXrJWEBuPmaLA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i2uCUSd3fVsoq9CglLQmHm
          claim_id: c_TRwQVlrwxlsV4UHSgEDyOj
          source_id: s_NAarnj9zEKE2QWyBe5LmzB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NAarnj9zEKE2QWyBe5LmzB
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 191291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191291&o=json
            external_identifier: CBDB:191291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cAfDeDmGVLXrJWEBuPmaLA
        status: active
        display_name: 王顗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昕 | accepted |
| death.date | 627年 | accepted |
| bio.summary | 王昕（卒于627年），唐人物。籍贯偃師。（中国历代人物传记资料库 CBDB 191292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cAfDeDmGVLXrJWEBuPmaLA | 王顗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昕（CBDB 191292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191292&o=json)
- [中国历代人物传记资料库：王顗（CBDB 191291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191291&o=json)
