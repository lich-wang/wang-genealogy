---
schema: wang-person/v1
id: p_nUv6oMb5Etbo5Wv6ccYBHK
status: active
merged_into: null
display_name: 王子岱
cbdb_id: 523971
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n1yPf8gEtwaag58cSZG9w1
        subject_person_id: p_nUv6oMb5Etbo5Wv6ccYBHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子岱，史料所见人物。本项目依据《中国历代人物传记资料库：王子岱（CBDB 523971）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_1RDokitOHDI1pGZWD_lKS1
          claim_id: c_n1yPf8gEtwaag58cSZG9w1
          source_id: s_iUENdNnFKF14FE4L6PVFcy
          stance: supports
          locator: CBDB:523971
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iUENdNnFKF14FE4L6PVFcy
            source_type: api_record
            title: 中国历代人物传记资料库：王子岱（CBDB 523971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=523971&o=json
            external_identifier: CBDB:523971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bk6jLSts3KvYY8HqnQEEs3
        subject_person_id: p_nUv6oMb5Etbo5Wv6ccYBHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yAEwhR1uWgHpn2rxFDEzyU
          claim_id: c_Bk6jLSts3KvYY8HqnQEEs3
          source_id: s_iUENdNnFKF14FE4L6PVFcy
          stance: supports
          locator: CBDB:523971
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4Ocj5RMpv2PR-WmkJy28T6
        subject_person_id: p_nUv6oMb5Etbo5Wv6ccYBHK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bMGwWQFb7a3S9AsNFQHq5w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8yJgSMUciV0J9TalQdl0Vf
          claim_id: c_4Ocj5RMpv2PR-WmkJy28T6
          source_id: s_15qce7SRcTSEB2Pj7cqFoF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10444：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_15qce7SRcTSEB2Pj7cqFoF
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 66848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66848&o=json
            external_identifier: CBDB:66848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bMGwWQFb7a3S9AsNFQHq5w
        status: active
        display_name: 王英
        merged_into_person_id: null
  other: []
---

# 王子岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子岱，史料所见人物。本项目依据《中国历代人物传记资料库：王子岱（CBDB 523971）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王子岱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bMGwWQFb7a3S9AsNFQHq5w | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 66848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66848&o=json)
- [中国历代人物传记资料库：王子岱（CBDB 523971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=523971&o=json)
