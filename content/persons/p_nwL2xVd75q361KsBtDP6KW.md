---
schema: wang-person/v1
id: p_nwL2xVd75q361KsBtDP6KW
status: active
merged_into: null
display_name: 王念祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6RzSYWy3KJK7RtNaEAuH2
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLPu3Bi2UnMHdHVsA1D9v7
          claim_id: c_T6RzSYWy3KJK7RtNaEAuH2
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: CBDB:207816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207816）
          source: &a1
            id: s_n2AW5aMJMFG9qYueQ6kZsh
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 207816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207816&o=json
            external_identifier: CBDB:207816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H268Vs54Y59Jt6KyEw68nB
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1586年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1NJmHpiQEbCPJ3yG513e7
          claim_id: c_H268Vs54Y59Jt6KyEw68nB
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kkoroKv855DEzBFHy5GHbr
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2F6Z5GGZVZch97h3xgBGR
          claim_id: c_kkoroKv855DEzBFHy5GHbr
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_rZ39IXIaD5WHsvXzjaZG_f
        subject_person_id: p_D5aUgW41iFSELEpD5aeYBF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0OsEE7SS-x1BbksZrLgub
          claim_id: c_rZ39IXIaD5WHsvXzjaZG_f
          source_id: s_dzuSWy337YD48yHbbTiwsv
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dzuSWy337YD48yHbbTiwsv
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 236474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236474&o=json
            external_identifier: CBDB:236474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D5aUgW41iFSELEpD5aeYBF
        status: active
        display_name: 王松
        merged_into_person_id: null
    - claim:
        id: c_GOx_PvzjHsbUp4geuVsvgZ
        subject_person_id: p_o9Ai9ckQB4CqpHx8H7134V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slgGdp-Qs4sx-G7EYPrjMb
          claim_id: c_GOx_PvzjHsbUp4geuVsvgZ
          source_id: s_U7tVnwgeuwsLKnJ6bWDKTo
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U7tVnwgeuwsLKnJ6bWDKTo
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 236473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236473&o=json
            external_identifier: CBDB:236473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o9Ai9ckQB4CqpHx8H7134V
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王念祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念祖 | accepted |
| birth.date | 1586年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_D5aUgW41iFSELEpD5aeYBF | 王松 | accepted |
| ancestors | p_o9Ai9ckQB4CqpHx8H7134V | 王蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 236473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236473&o=json)
- [中国历代人物传记资料库：王念祖（CBDB 207816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207816&o=json)
- [中国历代人物传记资料库：王松（CBDB 236474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236474&o=json)
