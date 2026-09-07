---
schema: wang-person/v1
id: p_7Xhugq74vFYEBtzssBjbpp
status: active
merged_into: null
display_name: 王元则
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d87nNQayj7Gh2gULEDnsXQ
        subject_person_id: p_7Xhugq74vFYEBtzssBjbpp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元则，宋(劉)人物。CBDB 记录其籍贯记录为江寧。中国历代人物传记资料库（CBDB）以人物编号 30878 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_91j2Czfrb4NyCJa4QBr1xh
          claim_id: c_d87nNQayj7Gh2gULEDnsXQ
          source_id: s_ceNPJJTLZc2hT2V1dCESF4
          stance: supports
          locator: null
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
        - id: cs_W8i0khLi_b2ngEuETudJeZ
          claim_id: c_d87nNQayj7Gh2gULEDnsXQ
          source_id: s_MHQiwv5XH6kGWP3rXG5Xvp
          stance: supports
          locator: CBDB:30878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EiMawEj3dLD5cYAsYA8SNU
        subject_person_id: p_7Xhugq74vFYEBtzssBjbpp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元则
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ddVMasPr5YBHPPL4owsey9
          claim_id: c_EiMawEj3dLD5cYAsYA8SNU
          source_id: s_MHQiwv5XH6kGWP3rXG5Xvp
          stance: supports
          locator: Q45418694
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_uds45mFhP2wCkJx5DBS6ax
          claim_id: c_EiMawEj3dLD5cYAsYA8SNU
          source_id: s_ceNPJJTLZc2hT2V1dCESF4
          stance: supports
          locator: Q45418694
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LcYM4Swev2ieyEVCBJSHue
        subject_person_id: p_KBiubKVUPYii69t93jaWYm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Xhugq74vFYEBtzssBjbpp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Dy7rbHCrgbyYoBZb7rroE3
          claim_id: c_LcYM4Swev2ieyEVCBJSHue
          source_id: s_ceNPJJTLZc2hT2V1dCESF4
          stance: supports
          locator: P22（父）
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
        - id: cs_R3DeEmbXPXqAMo91e2B65H
          claim_id: c_LcYM4Swev2ieyEVCBJSHue
          source_id: s_MHQiwv5XH6kGWP3rXG5Xvp
          stance: supports
          locator: 亲属关系：父
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
        - id: cs_KaEYXFcvMSid1bQXJ1KVs9
          claim_id: c_LcYM4Swev2ieyEVCBJSHue
          source_id: s_cd57EH2ED7son99M8XVLUC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cd57EH2ED7son99M8XVLUC
            source_type: api_record
            title: 维基数据：王秀（Q45418691）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418691
            external_identifier: Q45418691
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_wVzUbZmFKkHWpXSvmKLir1
          claim_id: c_LcYM4Swev2ieyEVCBJSHue
          source_id: s_Py41wfP8XNeV8C13Ld6LSQ
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Py41wfP8XNeV8C13Ld6LSQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王秀（30876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30876&o=json
            external_identifier: CBDB:30876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.553Z
            metadata_json: null
      object_person:
        id: p_KBiubKVUPYii69t93jaWYm
        status: active
        display_name: 王秀
        merged_into_person_id: null
  children:
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
        id: p_Wjb7tMM4iyXPCuB8VWQHTE
        status: active
        display_name: 王焕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元则

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元则，宋(劉)人物。CBDB 记录其籍贯记录为江寧。中国历代人物传记资料库（CBDB）以人物编号 30878 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元则 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KBiubKVUPYii69t93jaWYm | 王秀 | accepted |
| children | p_Wjb7tMM4iyXPCuB8VWQHTE | 王焕 | accepted |

## 外部来源

- [维基数据：王焕（Q45418696）](https://www.wikidata.org/wiki/Q45418696)
- [维基数据：王秀（Q45418691）](https://www.wikidata.org/wiki/Q45418691)
- [维基数据：王元则（Q45418694）](https://www.wikidata.org/wiki/Q45418694)
- [CBDB 中国历代人物传记资料库：王煥（30879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json)
- [CBDB 中国历代人物传记资料库：王秀（30876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30876&o=json)
- [CBDB 中国历代人物传记资料库：王元則（30878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30878&o=json)
