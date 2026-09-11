---
schema: wang-person/v1
id: p_LLwFMPn4retyp7NMcsjq8p
status: active
merged_into: null
display_name: 王德立
cbdb_id: 54749
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mz4Q4ztCB8UFf5N2b7dnjQ
        subject_person_id: p_LLwFMPn4retyp7NMcsjq8p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德立，清人物。中国历代人物传记资料库（CBDB）以人物编号 54749 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_xACWaTbWaWuweNPjW7LSDi
          claim_id: c_Mz4Q4ztCB8UFf5N2b7dnjQ
          source_id: s_F9848kvKLkdfLNsWKh3thR
          stance: supports
          locator: CBDB:54749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_F9848kvKLkdfLNsWKh3thR
            source_type: api_record
            title: 中国历代人物传记资料库：王德立（CBDB 54749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54749&o=json
            external_identifier: CBDB:54749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sNgpKrAkq3njM42G7En6Gj
        subject_person_id: p_LLwFMPn4retyp7NMcsjq8p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yUF4sgahp9wfPo5EcsBoCp
          claim_id: c_sNgpKrAkq3njM42G7En6Gj
          source_id: s_F9848kvKLkdfLNsWKh3thR
          stance: supports
          locator: CBDB:54749
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_F9848kvKLkdfLNsWKh3thR
            source_type: api_record
            title: 中国历代人物传记资料库：王德立（CBDB 54749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54749&o=json
            external_identifier: CBDB:54749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_q0BqHyQtafgQ04-KPXYveD
        subject_person_id: p_LLwFMPn4retyp7NMcsjq8p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j4KVfKM59X7hPEBARpimxD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwOAjA-sze4NPWhkRYv2aa
          claim_id: c_q0BqHyQtafgQ04-KPXYveD
          source_id: s_mqCTpoShxvRYyc3Pk9fQHz
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #113, HuWenKai #572：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mqCTpoShxvRYyc3Pk9fQHz
            source_type: api_record
            title: 中国历代人物传记资料库：王繼閥（CBDB 54751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54751&o=json
            external_identifier: CBDB:54751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j4KVfKM59X7hPEBARpimxD
        status: active
        display_name: 王繼閥
        merged_into_person_id: null
    - claim:
        id: c_-cD5PmnMvoh3TuRLAnerAb
        subject_person_id: p_LLwFMPn4retyp7NMcsjq8p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zJWr41VknhCkLVJzXSzJaR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gg2fXJ56YXC1r0Bgv5GJY6
          claim_id: c_-cD5PmnMvoh3TuRLAnerAb
          source_id: s_41qN7x1Z5eoVtV4MgzNuSt
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #134, HuWenKai #258：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_41qN7x1Z5eoVtV4MgzNuSt
            source_type: api_record
            title: 中国历代人物传记资料库：王繼藻（CBDB 54900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54900&o=json
            external_identifier: CBDB:54900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zJWr41VknhCkLVJzXSzJaR
        status: active
        display_name: 王繼藻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mONTuTzkUUPWdjt8eAjnPh
        subject_person_id: p_LLwFMPn4retyp7NMcsjq8p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f2MHVw1AWv2NXTZ4Fdx6KG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKtuKCd6qmpgJD11AgXnwH
          claim_id: c_mONTuTzkUUPWdjt8eAjnPh
          source_id: s_qMeTvJhh1oFcVmeARhTMsT
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #113, HuWenKai #572：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qMeTvJhh1oFcVmeARhTMsT
            source_type: api_record
            title: 中国历代人物传记资料库：郭佩蘭（CBDB 54741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54741&o=json
            external_identifier: CBDB:54741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f2MHVw1AWv2NXTZ4Fdx6KG
        status: active
        display_name: 郭佩蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王德立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德立，清人物。中国历代人物传记资料库（CBDB）以人物编号 54749 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王德立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_j4KVfKM59X7hPEBARpimxD | 王繼閥 | accepted |
| children | p_zJWr41VknhCkLVJzXSzJaR | 王繼藻 | accepted |
| spouses | p_f2MHVw1AWv2NXTZ4Fdx6KG | 郭佩蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭佩蘭（CBDB 54741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54741&o=json)
- [中国历代人物传记资料库：王德立（CBDB 54749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54749&o=json)
- [中国历代人物传记资料库：王繼閥（CBDB 54751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54751&o=json)
- [中国历代人物传记资料库：王繼藻（CBDB 54900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54900&o=json)
