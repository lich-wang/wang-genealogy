---
schema: wang-person/v1
id: p_GskJKyfESLHPKGMJw9EwoT
status: active
merged_into: null
display_name: 王文凱
cbdb_id: 327379
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4kWLo39Lrw1VfSesMMs1UR
        subject_person_id: p_GskJKyfESLHPKGMJw9EwoT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文凱，明人物。嘉靖四十一年進士，曾任知縣。（中国历代人物传记资料库 CBDB 327379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QNun9g1dD4aRQm1W-pJGXH
          claim_id: c_4kWLo39Lrw1VfSesMMs1UR
          source_id: s_75nEyWVCNAvWrobeskeLTQ
          stance: supports
          locator: CBDB:327379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_75nEyWVCNAvWrobeskeLTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文凱（CBDB 327379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327379&o=json
            external_identifier: CBDB:327379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4GNaUjJzjkt46FbbfuJj6G
        subject_person_id: p_GskJKyfESLHPKGMJw9EwoT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w9MCyFKad9eAbNtp9Rm5BK
          claim_id: c_4GNaUjJzjkt46FbbfuJj6G
          source_id: s_75nEyWVCNAvWrobeskeLTQ
          stance: supports
          locator: CBDB:327379
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_rFwW74-eMPGY8XFQlNyX1X
        subject_person_id: p_GskJKyfESLHPKGMJw9EwoT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cIQJzrkRU9VwEYT_Mz9d10
          claim_id: c_rFwW74-eMPGY8XFQlNyX1X
          source_id: s_75nEyWVCNAvWrobeskeLTQ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_75nEyWVCNAvWrobeskeLTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文凱（CBDB 327379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327379&o=json
            external_identifier: CBDB:327379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
  other: []
---

# 王文凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文凱，明人物。嘉靖四十一年進士，曾任知縣。（中国历代人物传记资料库 CBDB 327379） | accepted |
| name.primary | 王文凱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文凱（CBDB 327379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327379&o=json)
