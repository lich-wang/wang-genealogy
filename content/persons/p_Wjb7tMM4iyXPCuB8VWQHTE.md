---
schema: wang-person/v1
id: p_Wjb7tMM4iyXPCuB8VWQHTE
status: active
merged_into: null
display_name: 王焕
cbdb_id: 30879
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQMo3M8yUC27RoxfxJRDLU
        subject_person_id: p_Wjb7tMM4iyXPCuB8VWQHTE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焕，宋(劉)人物。籍贯江寧。（中国历代人物传记资料库 CBDB 30879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_k66ZPkgaBbWdHGi9PMNQsF
          claim_id: c_DQMo3M8yUC27RoxfxJRDLU
          source_id: s_uQJ2Mh9aV985iBGR2hfxB7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uQJ2Mh9aV985iBGR2hfxB7
            source_type: api_record
            title: 维基数据：王焕（Q45418696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418696
            external_identifier: Q45418696
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:37.944Z
            metadata_json: null
        - id: cs_KQGdqvLC0XmjHLiqbjELTC
          claim_id: c_DQMo3M8yUC27RoxfxJRDLU
          source_id: s_C5wSoXVFQ9PrMDgyj1bP5T
          stance: supports
          locator: CBDB:30879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C5wSoXVFQ9PrMDgyj1bP5T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王煥（30879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json
            external_identifier: CBDB:30879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:38.104Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JVKiNCop37ECmqNkARxprC
        subject_person_id: p_Wjb7tMM4iyXPCuB8VWQHTE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HRs9e6c321sJcm8NxcKFHE
          claim_id: c_JVKiNCop37ECmqNkARxprC
          source_id: s_uQJ2Mh9aV985iBGR2hfxB7
          stance: supports
          locator: Q45418696
          quotation: null
          interpretation_note: null
          source:
            id: s_uQJ2Mh9aV985iBGR2hfxB7
            source_type: api_record
            title: 维基数据：王焕（Q45418696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418696
            external_identifier: Q45418696
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:37.944Z
            metadata_json: null
        - id: cs_ZZhJvqkCb5Q3JHYNMoVQV1
          claim_id: c_JVKiNCop37ECmqNkARxprC
          source_id: s_C5wSoXVFQ9PrMDgyj1bP5T
          stance: supports
          locator: Q45418696
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ztp1J1PN7ZuRFCKsWFgkKL
        subject_person_id: p_7Xhugq74vFYEBtzssBjbpp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wjb7tMM4iyXPCuB8VWQHTE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2vCZ8zNPpsdxxJJEgbRLEj
          claim_id: c_ztp1J1PN7ZuRFCKsWFgkKL
          source_id: s_C5wSoXVFQ9PrMDgyj1bP5T
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_C5wSoXVFQ9PrMDgyj1bP5T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王煥（30879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json
            external_identifier: CBDB:30879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:38.104Z
            metadata_json: null
        - id: cs_xMkXXHtUCjuYZrfx2HuLgp
          claim_id: c_ztp1J1PN7ZuRFCKsWFgkKL
          source_id: s_uQJ2Mh9aV985iBGR2hfxB7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uQJ2Mh9aV985iBGR2hfxB7
            source_type: api_record
            title: 维基数据：王焕（Q45418696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418696
            external_identifier: Q45418696
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:37.944Z
            metadata_json: null
        - id: cs_aZy4kBGK8jGe37U4mPtGgX
          claim_id: c_ztp1J1PN7ZuRFCKsWFgkKL
          source_id: s_ceNPJJTLZc2hT2V1dCESF4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ceNPJJTLZc2hT2V1dCESF4
            source_type: api_record
            title: 维基数据：王元则（Q45418694）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418694
            external_identifier: Q45418694
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:58.758Z
            metadata_json: null
        - id: cs_dSNaMKZNM3G2roGKvHwUsD
          claim_id: c_ztp1J1PN7ZuRFCKsWFgkKL
          source_id: s_MHQiwv5XH6kGWP3rXG5Xvp
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_MHQiwv5XH6kGWP3rXG5Xvp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王元則（30878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30878&o=json
            external_identifier: CBDB:30878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:58.906Z
            metadata_json: null
      object_person:
        id: p_7Xhugq74vFYEBtzssBjbpp
        status: active
        display_name: 王元则
        merged_into_person_id: null
  children:
    - claim:
        id: c_L3BrBSuN1ZCPCPXEMP8xUY
        subject_person_id: p_Wjb7tMM4iyXPCuB8VWQHTE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yFJog2yKuoKNiTQkPT3iJy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bCUAvxpa8zDgBRHGE5Dwhg
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_pPSLE9eiZCjFfyCAitCm2m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pPSLE9eiZCjFfyCAitCm2m
            source_type: api_record
            title: 维基数据：王虬（Q45418697）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418697
            external_identifier: Q45418697
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:13.139Z
            metadata_json: null
        - id: cs_zaatN7mSbPmVj4xUJMRAy4
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_8FbBfK3SQDN1cvWES2GHek
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_8FbBfK3SQDN1cvWES2GHek
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王虯（30880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json
            external_identifier: CBDB:30880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:13.294Z
            metadata_json: null
        - id: cs_Xm2EGL7EnE75nxxFJHgrFA
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_uQJ2Mh9aV985iBGR2hfxB7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uQJ2Mh9aV985iBGR2hfxB7
            source_type: api_record
            title: 维基数据：王焕（Q45418696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418696
            external_identifier: Q45418696
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:37.944Z
            metadata_json: null
        - id: cs_aZkWEha5ENyWL8BSdb2PhD
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_C5wSoXVFQ9PrMDgyj1bP5T
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_C5wSoXVFQ9PrMDgyj1bP5T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王煥（30879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json
            external_identifier: CBDB:30879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:38.104Z
            metadata_json: null
      object_person:
        id: p_yFJog2yKuoKNiTQkPT3iJy
        status: active
        display_name: 王虬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王焕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王焕，宋(劉)人物。籍贯江寧。（中国历代人物传记资料库 CBDB 30879） | accepted |
| name.primary | 王焕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Xhugq74vFYEBtzssBjbpp | 王元则 | accepted |
| children | p_yFJog2yKuoKNiTQkPT3iJy | 王虬 | accepted |

## 外部来源

- [维基数据：王焕（Q45418696）](https://www.wikidata.org/wiki/Q45418696)
- [维基数据：王虬（Q45418697）](https://www.wikidata.org/wiki/Q45418697)
- [维基数据：王元则（Q45418694）](https://www.wikidata.org/wiki/Q45418694)
- [CBDB 中国历代人物传记资料库：王煥（30879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json)
- [CBDB 中国历代人物传记资料库：王虯（30880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json)
- [CBDB 中国历代人物传记资料库：王元則（30878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30878&o=json)
