---
schema: wang-person/v1
id: p_KADXczJu2XoRuXfmpoNaHr
status: active
merged_into: null
display_name: 王愫
cbdb_id: 55970
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aC1UFio9BMDFmDgSTMQCEc
        subject_person_id: p_KADXczJu2XoRuXfmpoNaHr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愫，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 55970）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_A3vX3NNzBBEQJYdZIPcsJg
          claim_id: c_aC1UFio9BMDFmDgSTMQCEc
          source_id: s_YoEjeYRoTtKR4XkYQBtFW6
          stance: supports
          locator: CBDB:55970
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YoEjeYRoTtKR4XkYQBtFW6
            source_type: api_record
            title: 中国历代人物传记资料库：王愫（CBDB 55970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55970&o=json
            external_identifier: CBDB:55970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rCgzyZvXwmac59QER67K3L
        subject_person_id: p_KADXczJu2XoRuXfmpoNaHr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pqLJuwxzMiiBKs2RxnFjpt
          claim_id: c_rCgzyZvXwmac59QER67K3L
          source_id: s_YoEjeYRoTtKR4XkYQBtFW6
          stance: supports
          locator: CBDB:55970
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_cTtm4KoWH2f99flbs3mujO
        subject_person_id: p_KADXczJu2XoRuXfmpoNaHr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_evVdcBpUzMAW5sr3HdN41u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sabOkF2JDuiODO4Hr6eWwq
          claim_id: c_cTtm4KoWH2f99flbs3mujO
          source_id: s_aikCGrc5m9jvWcA-8y0TpI
          stance: supports
          locator: CBDB 双向互证（妻子 毛秀惠）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aikCGrc5m9jvWcA-8y0TpI
            source_type: api_record
            title: 中国历代人物传记资料库：毛秀惠（CBDB 55969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55969&o=json
            external_identifier: CBDB:55969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_evVdcBpUzMAW5sr3HdN41u
        status: active
        display_name: 毛秀惠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王愫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愫，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 55970） | accepted |
| name.primary | 王愫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_evVdcBpUzMAW5sr3HdN41u | 毛秀惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：毛秀惠（CBDB 55969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55969&o=json)
- [中国历代人物传记资料库：王愫（CBDB 55970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55970&o=json)
