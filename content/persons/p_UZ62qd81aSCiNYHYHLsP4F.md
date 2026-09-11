---
schema: wang-person/v1
id: p_UZ62qd81aSCiNYHYHLsP4F
status: active
merged_into: null
display_name: 王坑
cbdb_id: 21271
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hrm3GizzTk4Gko6XgGzU3E
        subject_person_id: p_UZ62qd81aSCiNYHYHLsP4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坑，五代人物。中国历代人物传记资料库（CBDB）以人物编号 21271 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_0q_Kdcgh1E4wnhX3reZOAZ
          claim_id: c_hrm3GizzTk4Gko6XgGzU3E
          source_id: s_rrQsrEuFqs1NvFTxwsdM8j
          stance: supports
          locator: CBDB:21271
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_rrQsrEuFqs1NvFTxwsdM8j
            source_type: api_record
            title: 中国历代人物传记资料库：王坑（CBDB 21271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21271&o=json
            external_identifier: CBDB:21271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1XDnVk9CEfjDgdRpuoJ6t3
        subject_person_id: p_UZ62qd81aSCiNYHYHLsP4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dN3EnSNa4vs4GSf4GYEvRN
          claim_id: c_1XDnVk9CEfjDgdRpuoJ6t3
          source_id: s_rrQsrEuFqs1NvFTxwsdM8j
          stance: supports
          locator: CBDB:21271
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 五代
          source:
            id: s_rrQsrEuFqs1NvFTxwsdM8j
            source_type: api_record
            title: 中国历代人物传记资料库：王坑（CBDB 21271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21271&o=json
            external_identifier: CBDB:21271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_d5Yx461mVryRVS2MMlmP9p
        subject_person_id: p_UZ62qd81aSCiNYHYHLsP4F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3nkdRNwXhSrvEF75CZoPMw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAMn8TcP2CtRB_elLA3Q_V
          claim_id: c_d5Yx461mVryRVS2MMlmP9p
          source_id: s_oUY55k1UJtMUGpWGGzFsAz
          stance: supports
          locator: CBDB 双向互证（父 王坑 ⇄ 子 王演）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oUY55k1UJtMUGpWGGzFsAz
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 21272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21272&o=json
            external_identifier: CBDB:21272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3nkdRNwXhSrvEF75CZoPMw
        status: active
        display_name: 王演
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王坑，五代人物。中国历代人物传记资料库（CBDB）以人物编号 21271 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王坑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3nkdRNwXhSrvEF75CZoPMw | 王演 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坑（CBDB 21271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21271&o=json)
- [中国历代人物传记资料库：王演（CBDB 21272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21272&o=json)
