---
schema: wang-person/v1
id: p_tNvdP123bDbFgE6LHR9Qrp
status: active
merged_into: null
display_name: 王盛言
cbdb_id: 515677
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eRNQ7wKih2ByM3evEBtPRo
        subject_person_id: p_tNvdP123bDbFgE6LHR9Qrp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛言，史料所见人物。本项目依据《中国历代人物传记资料库：王盛言（CBDB 515677）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Fcx1zUhtF5tlr5N6Tisunt
          claim_id: c_eRNQ7wKih2ByM3evEBtPRo
          source_id: s_KgUQYf35EtPRVrn5Pnwx1w
          stance: supports
          locator: CBDB:515677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KgUQYf35EtPRVrn5Pnwx1w
            source_type: api_record
            title: 中国历代人物传记资料库：王盛言（CBDB 515677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515677&o=json
            external_identifier: CBDB:515677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YcfpE4K9EHQgCbf23iQhQB
        subject_person_id: p_tNvdP123bDbFgE6LHR9Qrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T1MWBeBy2veHRkvq6vv2Su
          claim_id: c_YcfpE4K9EHQgCbf23iQhQB
          source_id: s_KgUQYf35EtPRVrn5Pnwx1w
          stance: supports
          locator: CBDB:515677
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
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
        id: c_Z2VKfE8P0nPVO1DL97nlDt
        subject_person_id: p_tNvdP123bDbFgE6LHR9Qrp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MbQaN6sLNicuc7FmMieJd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DmgTw04cvtdB14VxsApzvo
          claim_id: c_Z2VKfE8P0nPVO1DL97nlDt
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gcATuP6CQr39pk8hp1ieE8
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 57810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json
            external_identifier: CBDB:57810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5MbQaN6sLNicuc7FmMieJd
        status: active
        display_name: 王文錦
        merged_into_person_id: null
  other: []
---

# 王盛言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王盛言，史料所见人物。本项目依据《中国历代人物传记资料库：王盛言（CBDB 515677）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王盛言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5MbQaN6sLNicuc7FmMieJd | 王文錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王盛言（CBDB 515677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515677&o=json)
- [中国历代人物传记资料库：王文錦（CBDB 57810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json)
