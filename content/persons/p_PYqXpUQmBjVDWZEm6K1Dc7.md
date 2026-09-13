---
schema: wang-person/v1
id: p_PYqXpUQmBjVDWZEm6K1Dc7
status: active
merged_into: null
display_name: 王福坤
cbdb_id: 517415
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QhdsA82X1n1gAiCQBCd4s4
        subject_person_id: p_PYqXpUQmBjVDWZEm6K1Dc7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福坤，史料所见人物。本项目依据《中国历代人物传记资料库：王福坤（CBDB 517415）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_pMXuScVowOgOP_TXySGVN0
          claim_id: c_QhdsA82X1n1gAiCQBCd4s4
          source_id: s_YpSgwi4AMob9Cay4sBMpGh
          stance: supports
          locator: CBDB:517415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YpSgwi4AMob9Cay4sBMpGh
            source_type: api_record
            title: 中国历代人物传记资料库：王福坤（CBDB 517415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517415&o=json
            external_identifier: CBDB:517415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oGhqrGzhtJpBaASVY25YSa
        subject_person_id: p_PYqXpUQmBjVDWZEm6K1Dc7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gj3d2BB1C2jN99q9ALMVcr
          claim_id: c_oGhqrGzhtJpBaASVY25YSa
          source_id: s_YpSgwi4AMob9Cay4sBMpGh
          stance: supports
          locator: CBDB:517415
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
  ancestors:
    - claim:
        id: c_sM6H7wtNqphStegb8dNGUK
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PYqXpUQmBjVDWZEm6K1Dc7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_peVDqKtd7vLL2Uck5mOEmJ
          claim_id: c_sM6H7wtNqphStegb8dNGUK
          source_id: s_T4sVkDCK5AUrnaEQCPiBp4
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1876：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T4sVkDCK5AUrnaEQCPiBp4
            source_type: api_record
            title: 中国历代人物传记资料库：王懿榮（CBDB 35049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35049&o=json
            external_identifier: CBDB:35049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uHrCvB41gMR5178qTvwuSd
        status: active
        display_name: 王懿榮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王福坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王福坤，史料所见人物。本项目依据《中国历代人物传记资料库：王福坤（CBDB 517415）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王福坤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_uHrCvB41gMR5178qTvwuSd | 王懿榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福坤（CBDB 517415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517415&o=json)
- [中国历代人物传记资料库：王懿榮（CBDB 35049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35049&o=json)
