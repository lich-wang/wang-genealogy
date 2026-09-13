---
schema: wang-person/v1
id: p_XDd9Xr42aqw3Cvow3Z5yKw
status: active
merged_into: null
display_name: 王允仁
cbdb_id: 291909
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GT9MuDtjfaksgnTCjzzmTG
        subject_person_id: p_XDd9Xr42aqw3Cvow3Z5yKw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允仁，史料所见人物。本项目依据《中国历代人物传记资料库：王允仁（CBDB 291909）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_HAoXH8FFAjz1sWtuFrXE3-
          claim_id: c_GT9MuDtjfaksgnTCjzzmTG
          source_id: s_n27SANAJSS8EvXRn2denrV
          stance: supports
          locator: CBDB:291909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n27SANAJSS8EvXRn2denrV
            source_type: api_record
            title: 中国历代人物传记资料库：王允仁（CBDB 291909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291909&o=json
            external_identifier: CBDB:291909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YVaBAeH1M3T2uKFGZmtyZC
        subject_person_id: p_XDd9Xr42aqw3Cvow3Z5yKw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ho4r2e8Ejqwd7EMuPAyVAK
          claim_id: c_YVaBAeH1M3T2uKFGZmtyZC
          source_id: s_n27SANAJSS8EvXRn2denrV
          stance: supports
          locator: CBDB:291909
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_2yzh97-2MFwCI0FOmmnaSu
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XDd9Xr42aqw3Cvow3Z5yKw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IKKb05ReXpYWLUGvyOlEPw
          claim_id: c_2yzh97-2MFwCI0FOmmnaSu
          source_id: s_n27SANAJSS8EvXRn2denrV
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n27SANAJSS8EvXRn2denrV
            source_type: api_record
            title: 中国历代人物传记资料库：王允仁（CBDB 291909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291909&o=json
            external_identifier: CBDB:291909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王允仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允仁，史料所见人物。本项目依据《中国历代人物传记资料库：王允仁（CBDB 291909）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王允仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允仁（CBDB 291909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291909&o=json)
