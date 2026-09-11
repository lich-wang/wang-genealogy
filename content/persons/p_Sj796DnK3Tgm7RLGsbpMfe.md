---
schema: wang-person/v1
id: p_Sj796DnK3Tgm7RLGsbpMfe
status: active
merged_into: null
display_name: 王福祚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRb8dazj5zrUifh2aKLPWk
        subject_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4VFGPhfYUvdRHMd8PfgqWz
          claim_id: c_mRb8dazj5zrUifh2aKLPWk
          source_id: s_pu1pwtetJ74SGqBpGN93hu
          stance: supports
          locator: CBDB:189498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189498）
          source: &a1
            id: s_pu1pwtetJ74SGqBpGN93hu
            source_type: api_record
            title: 中国历代人物传记资料库：王福祚（CBDB 189498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189498&o=json
            external_identifier: CBDB:189498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7TH6NkDu1Y2eyKgZusuXgT
        subject_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 685年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nLGZ5uLz9JSMpcG2J4RT2J
          claim_id: c_7TH6NkDu1Y2eyKgZusuXgT
          source_id: s_pu1pwtetJ74SGqBpGN93hu
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
        id: c_bYPXTB3x6vjFcjPFMmXDKa
        subject_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
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
        - id: cs_sW9XLCqqWRXcj8x6bE5WUr
          claim_id: c_bYPXTB3x6vjFcjPFMmXDKa
          source_id: s_pu1pwtetJ74SGqBpGN93hu
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
        id: c_ptgXqXFfT_ofn6B169Dcaa
        subject_person_id: p_ndsxKRDLoXHgQkrMFRR2ik
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AILoWcLP9DoqSXdK--nYnF
          claim_id: c_ptgXqXFfT_ofn6B169Dcaa
          source_id: s_EnTThsfgkiuVhxVY8cTxTy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EnTThsfgkiuVhxVY8cTxTy
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 189499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189499&o=json
            external_identifier: CBDB:189499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ndsxKRDLoXHgQkrMFRR2ik
        status: active
        display_name: 王通
        merged_into_person_id: null
  children:
    - claim:
        id: c_2x5o1SpTWz6D-1Mq-pt45J
        subject_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F6WkfLvaTXQtQE2urkSyas
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cv3S1p8eIOor4BzE6AyoSm
          claim_id: c_2x5o1SpTWz6D-1Mq-pt45J
          source_id: s_q951hWNHaPr7eZicACQT4m
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q951hWNHaPr7eZicACQT4m
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 189497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189497&o=json
            external_identifier: CBDB:189497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F6WkfLvaTXQtQE2urkSyas
        status: active
        display_name: 王勉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福祚 | accepted |
| death.date | 685年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ndsxKRDLoXHgQkrMFRR2ik | 王通 | accepted |
| children | p_F6WkfLvaTXQtQE2urkSyas | 王勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福祚（CBDB 189498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189498&o=json)
- [中国历代人物传记资料库：王勉（CBDB 189497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189497&o=json)
- [中国历代人物传记资料库：王通（CBDB 189499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189499&o=json)
