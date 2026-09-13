---
schema: wang-person/v1
id: p_g1bs6h5k4Pu2preBv8KZPd
status: active
merged_into: null
display_name: 王仲智
cbdb_id: 264035
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7VsSYL21dyR3GLNDUjMt7T
        subject_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲智，明人物。弘治六年進士，曾任吏部尚書、太子太保。（中国历代人物传记资料库 CBDB 264035）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_mr9eCfZKHN114rDX9zV5jm
          claim_id: c_7VsSYL21dyR3GLNDUjMt7T
          source_id: s_9dkGLEpEw7GwYQHS3ahk8F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_9dkGLEpEw7GwYQHS3ahk8F
            source_type: api_record
            title: 维基数据：王仲智（Q45545364）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545364
            external_identifier: Q45545364
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
        - id: cs_e1Q2MNv2esZJSmLJLh0sJU
          claim_id: c_7VsSYL21dyR3GLNDUjMt7T
          source_id: s_9hCwipbjeHnRvE4dGhG2AH
          stance: supports
          locator: CBDB:264035
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9hCwipbjeHnRvE4dGhG2AH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲智（264035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264035&o=json
            external_identifier: CBDB:264035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:19.293Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c2KZgEtPLrkHCEy498oc9q
        subject_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲智
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SA5Qx8vNQ3zK97eXjtCjmY
          claim_id: c_c2KZgEtPLrkHCEy498oc9q
          source_id: s_9hCwipbjeHnRvE4dGhG2AH
          stance: supports
          locator: Q45545364
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hhrN61qvQK8QNDD1Nr4y9N
          claim_id: c_c2KZgEtPLrkHCEy498oc9q
          source_id: s_9dkGLEpEw7GwYQHS3ahk8F
          stance: supports
          locator: Q45545364
          quotation: null
          interpretation_note: null
          source:
            id: s_9dkGLEpEw7GwYQHS3ahk8F
            source_type: api_record
            title: 维基数据：王仲智（Q45545364）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545364
            external_identifier: Q45545364
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hbfdQRdQ8NzbqLUdCDnore
        subject_person_id: p_tcWDCYEjZBxpgXVNCyJD9U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ga47EcPhadrxG7t7FQk55
          claim_id: c_hbfdQRdQ8NzbqLUdCDnore
          source_id: s_1v9UzTC8dx9CeYK9vQYTPM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1v9UzTC8dx9CeYK9vQYTPM
            source_type: api_record
            title: 维基数据：王惟直（Q45545302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545302
            external_identifier: Q45545302
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_ES3Z8H5v6hKo2JT61BzexF
          claim_id: c_hbfdQRdQ8NzbqLUdCDnore
          source_id: s_9dkGLEpEw7GwYQHS3ahk8F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_tcWDCYEjZBxpgXVNCyJD9U
        status: active
        display_name: 王惟直
        merged_into_person_id: null
  children:
    - claim:
        id: c_UHpSThAmhjAgvLTLriv9mV
        subject_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLBwCR2GVoDmj97sEa96gF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mQsH3enY4xAApmqsZ8NMKW
          claim_id: c_UHpSThAmhjAgvLTLriv9mV
          source_id: s_jtfaEuPXv7uhbwkyMkx8ng
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jtfaEuPXv7uhbwkyMkx8ng
            source_type: api_record
            title: 维基数据：王恕（Q45545428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545428
            external_identifier: Q45545428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_hrw9D9J7FJcDiFqyH2H9Ls
          claim_id: c_UHpSThAmhjAgvLTLriv9mV
          source_id: s_9dkGLEpEw7GwYQHS3ahk8F
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_mLBwCR2GVoDmj97sEa96gF
        status: active
        display_name: 王恕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_9Rflp-BBJRdjs7XTJPMdgF
        subject_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAeAH8g3lm4iH3VnyAvnXm
          claim_id: c_9Rflp-BBJRdjs7XTJPMdgF
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第二十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KwAAbYEBjQwNhkLyALJnCV
            source_type: api_record
            title: 中国历代人物传记资料库：王承裕（CBDB 67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j4RsuRBKFYJbK5j9md2YXD
        status: active
        display_name: 王承裕
        merged_into_person_id: null
  other: []
---

# 王仲智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲智，明人物。弘治六年進士，曾任吏部尚書、太子太保。（中国历代人物传记资料库 CBDB 264035） | accepted |
| name.primary | 王仲智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tcWDCYEjZBxpgXVNCyJD9U | 王惟直 | accepted |
| children | p_mLBwCR2GVoDmj97sEa96gF | 王恕 | accepted |
| descendants | p_j4RsuRBKFYJbK5j9md2YXD | 王承裕 | accepted |

## 外部来源

- [维基数据：王恕（Q45545428）](https://www.wikidata.org/wiki/Q45545428)
- [维基数据：王惟直（Q45545302）](https://www.wikidata.org/wiki/Q45545302)
- [维基数据：王仲智（Q45545364）](https://www.wikidata.org/wiki/Q45545364)
- [中国历代人物传记资料库：王承裕（CBDB 67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
- [CBDB 中国历代人物传记资料库：王仲智（264035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264035&o=json)
