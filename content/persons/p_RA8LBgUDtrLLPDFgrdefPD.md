---
schema: wang-person/v1
id: p_RA8LBgUDtrLLPDFgrdefPD
status: active
merged_into: null
display_name: 王時敘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1czoVM8s3ep2LqN3cnMW2q
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y6aZZK7CWPVZBNAVQ91GmN
          claim_id: c_1czoVM8s3ep2LqN3cnMW2q
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
          stance: supports
          locator: CBDB:25588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25588）
          source: &a1
            id: s_ZDm7j2szGiAv4Wx6S6C5W8
            source_type: api_record
            title: 中国历代人物传记资料库：王時敘（CBDB 25588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25588&o=json
            external_identifier: CBDB:25588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YWCxdnxDcG7MR2RBAvADv6
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5sPkhGD1LAXJkrLpj6Rzc
          claim_id: c_YWCxdnxDcG7MR2RBAvADv6
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
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
        id: c_fAykGbF7ZHCDgqL-AvWcRk
        subject_person_id: p_nKZwYzWgUs8QGgRPRMV4gH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VfzoXiE6e819qZZ0Zk65sy
          claim_id: c_fAykGbF7ZHCDgqL-AvWcRk
          source_id: s_e9N33YJs4MW9w7szEXRyHK
          stance: supports
          locator: CBDB 双向互证（子 王時敘 ⇄ 父 王中立）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_e9N33YJs4MW9w7szEXRyHK
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 25591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25591&o=json
            external_identifier: CBDB:25591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nKZwYzWgUs8QGgRPRMV4gH
        status: active
        display_name: 王中立
        merged_into_person_id: null
  children:
    - claim:
        id: c_4dNu22nXX-Wk2izdZF31s5
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDQ8CKn5Bsja1AL34KVg9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eF-t9bePUF_ibsVTgIx9l8
          claim_id: c_4dNu22nXX-Wk2izdZF31s5
          source_id: s_yBPQ4hXrd688WJKgwpU8KS
          stance: supports
          locator: CBDB 双向互证（父 王時敘 ⇄ 子 王宗道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_yBPQ4hXrd688WJKgwpU8KS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 25592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25592&o=json
            external_identifier: CBDB:25592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bDQ8CKn5Bsja1AL34KVg9T
        status: active
        display_name: 王宗道
        merged_into_person_id: null
    - claim:
        id: c_PkLTHEvMNfOrZPGTO4bfp0
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P4oAEcF78neAuvnwQBF9EK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6R4Emv_Nbve5mf15pwKqX
          claim_id: c_PkLTHEvMNfOrZPGTO4bfp0
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
          stance: supports
          locator: CBDB 双向互证（子 王文貫 ⇄ 父 王時敘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_P4oAEcF78neAuvnwQBF9EK
        status: active
        display_name: 王文貫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fKGBBXYQe94UpGCaZhwM2q
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ffKBXMTZthLyDPHTW4nPZ2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMr1Wxu_zwhFE64lxv2zDf
          claim_id: c_fKGBBXYQe94UpGCaZhwM2q
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
          stance: supports
          locator: CBDB 双向互证（孫 王與直 ⇄ 祖父 王時敘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ffKBXMTZthLyDPHTW4nPZ2
        status: active
        display_name: 王與直
        merged_into_person_id: null
  other: []
---

# 王時敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時敘 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nKZwYzWgUs8QGgRPRMV4gH | 王中立 | accepted |
| children | p_bDQ8CKn5Bsja1AL34KVg9T | 王宗道 | accepted |
| children | p_P4oAEcF78neAuvnwQBF9EK | 王文貫 | accepted |
| descendants | p_ffKBXMTZthLyDPHTW4nPZ2 | 王與直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時敘（CBDB 25588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25588&o=json)
- [中国历代人物传记资料库：王中立（CBDB 25591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25591&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 25592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25592&o=json)
