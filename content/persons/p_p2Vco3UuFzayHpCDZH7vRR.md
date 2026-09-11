---
schema: wang-person/v1
id: p_p2Vco3UuFzayHpCDZH7vRR
status: active
merged_into: null
display_name: 王至順
cbdb_id: 522152
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5B54HEh4Xk9WK4JeZiXzKP
        subject_person_id: p_p2Vco3UuFzayHpCDZH7vRR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至順，清人物。中国历代人物传记资料库（CBDB）以人物编号 522152 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mTuEB4mJMhK991vuxZfVFG
          claim_id: c_5B54HEh4Xk9WK4JeZiXzKP
          source_id: s_TTdGbJ5qpdF7fU2qPfqfNv
          stance: supports
          locator: CBDB:522152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TTdGbJ5qpdF7fU2qPfqfNv
            source_type: api_record
            title: 中国历代人物传记资料库：王至順（CBDB 522152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522152&o=json
            external_identifier: CBDB:522152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HhbCeUdptepGrsKeWmrSi3
        subject_person_id: p_p2Vco3UuFzayHpCDZH7vRR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HYoS8AugoSCb83zGW77Cmh
          claim_id: c_HhbCeUdptepGrsKeWmrSi3
          source_id: s_TTdGbJ5qpdF7fU2qPfqfNv
          stance: supports
          locator: CBDB:522152
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_TTdGbJ5qpdF7fU2qPfqfNv
            source_type: api_record
            title: 中国历代人物传记资料库：王至順（CBDB 522152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522152&o=json
            external_identifier: CBDB:522152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_r6ie_47kQgDvOrdJ_tBpv0
        subject_person_id: p_p2Vco3UuFzayHpCDZH7vRR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gz7GQXBMKSZCnPJr5rqi7r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0RVAe4y3W-SqMzMTDhCDnw
          claim_id: c_r6ie_47kQgDvOrdJ_tBpv0
          source_id: s_TTdGbJ5qpdF7fU2qPfqfNv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9180：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gz7GQXBMKSZCnPJr5rqi7r
        status: active
        display_name: 李塨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王至順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王至順，清人物。中国历代人物传记资料库（CBDB）以人物编号 522152 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王至順 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gz7GQXBMKSZCnPJr5rqi7r | 李塨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王至順（CBDB 522152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522152&o=json)
