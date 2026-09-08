---
schema: wang-person/v1
id: p_KBiubKVUPYii69t93jaWYm
status: active
merged_into: null
display_name: 王秀
cbdb_id: 30876
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VTo9EPuhDE3cG1td3hDDGb
        subject_person_id: p_KBiubKVUPYii69t93jaWYm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀，東晉人物。CBDB 记录其籍贯记录为江寧，身份包括士人。中国历代人物传记资料库（CBDB）以人物编号 30876 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QSKwbQ2f8DZWL5iwUW28X1
          claim_id: c_VTo9EPuhDE3cG1td3hDDGb
          source_id: s_cd57EH2ED7son99M8XVLUC
          stance: supports
          locator: null
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
        - id: cs_egVD7kG3CZLX05a1mRChLk
          claim_id: c_VTo9EPuhDE3cG1td3hDDGb
          source_id: s_Py41wfP8XNeV8C13Ld6LSQ
          stance: supports
          locator: CBDB:30876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EGzadu2gt2aCAzyrfKw5RC
        subject_person_id: p_KBiubKVUPYii69t93jaWYm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YKZBfTE5kEbWLTNbhbHCgh
          claim_id: c_EGzadu2gt2aCAzyrfKw5RC
          source_id: s_cd57EH2ED7son99M8XVLUC
          stance: supports
          locator: Q45418691
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
        - id: cs_ceyQru9RUJbAU7U7j1w5to
          claim_id: c_EGzadu2gt2aCAzyrfKw5RC
          source_id: s_Py41wfP8XNeV8C13Ld6LSQ
          stance: supports
          locator: Q45418691
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_epFpz3sVDPgoa5Hq93iAew
        subject_person_id: p_cfc3VQ6S7FLhbGyGSqaBz6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KBiubKVUPYii69t93jaWYm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GDQCD6DLpmP8v4dk46HYmf
          claim_id: c_epFpz3sVDPgoa5Hq93iAew
          source_id: s_cd57EH2ED7son99M8XVLUC
          stance: supports
          locator: P22（父）
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
        - id: cs_vvmsj9c29m1Zhw5KVbAU84
          claim_id: c_epFpz3sVDPgoa5Hq93iAew
          source_id: s_Py41wfP8XNeV8C13Ld6LSQ
          stance: supports
          locator: 亲属关系：父
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
        - id: cs_hQnnveqhEstS7kT8grcqC7
          claim_id: c_epFpz3sVDPgoa5Hq93iAew
          source_id: s_CJB5NYcUSoXtsEJ3UCDTib
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CJB5NYcUSoXtsEJ3UCDTib
            source_type: api_record
            title: 维基数据：王罕（Q45418688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418688
            external_identifier: Q45418688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.577Z
            metadata_json: null
        - id: cs_oJYJpqUAAtcaVvdfJJW6DG
          claim_id: c_epFpz3sVDPgoa5Hq93iAew
          source_id: s_bvVk6fidXiLa3A2pzp3qwT
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bvVk6fidXiLa3A2pzp3qwT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（30875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30875&o=json
            external_identifier: CBDB:30875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.913Z
            metadata_json: null
      object_person:
        id: p_cfc3VQ6S7FLhbGyGSqaBz6
        status: active
        display_name: 王罕
        merged_into_person_id: null
  children:
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
        id: p_7Xhugq74vFYEBtzssBjbpp
        status: active
        display_name: 王元则
        merged_into_person_id: null
    - claim:
        id: c_nvCpQJCQ32QQBCCsTgHc4i
        subject_person_id: p_KBiubKVUPYii69t93jaWYm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MAonttaP1LZ7p4PDTQTuBz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m8GaYVamgi8Nf23gXZaQuK
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_Py41wfP8XNeV8C13Ld6LSQ
          stance: supports
          locator: 亲属关系：長子
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
        - id: cs_njoHGsdagn3zqUFMwwT48E
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
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
        - id: cs_n8Uw4zw2hDLTTQpfNLoDJz
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_B5sqPUeXPn3J6QUr4RnzNA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_B5sqPUeXPn3J6QUr4RnzNA
            source_type: api_record
            title: 维基数据：王元谟（Q45418692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418692
            external_identifier: Q45418692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.577Z
            metadata_json: null
        - id: cs_uSKb65H2sDp8F831qmCNBk
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_iMGkYnrqt9HsJNDJuPGU5U
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_iMGkYnrqt9HsJNDJuPGU5U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王元謨（30877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30877&o=json
            external_identifier: CBDB:30877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.903Z
            metadata_json: null
      object_person:
        id: p_MAonttaP1LZ7p4PDTQTuBz
        status: active
        display_name: 王元谟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秀，東晉人物。CBDB 记录其籍贯记录为江寧，身份包括士人。中国历代人物传记资料库（CBDB）以人物编号 30876 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cfc3VQ6S7FLhbGyGSqaBz6 | 王罕 | accepted |
| children | p_7Xhugq74vFYEBtzssBjbpp | 王元则 | accepted |
| children | p_MAonttaP1LZ7p4PDTQTuBz | 王元谟 | accepted |

## 外部来源

- [维基数据：王罕（Q45418688）](https://www.wikidata.org/wiki/Q45418688)
- [维基数据：王秀（Q45418691）](https://www.wikidata.org/wiki/Q45418691)
- [维基数据：王元谟（Q45418692）](https://www.wikidata.org/wiki/Q45418692)
- [维基数据：王元则（Q45418694）](https://www.wikidata.org/wiki/Q45418694)
- [CBDB 中国历代人物传记资料库：王罕（30875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30875&o=json)
- [CBDB 中国历代人物传记资料库：王秀（30876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30876&o=json)
- [CBDB 中国历代人物传记资料库：王元謨（30877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30877&o=json)
- [CBDB 中国历代人物传记资料库：王元則（30878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30878&o=json)
