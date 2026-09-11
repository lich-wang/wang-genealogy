---
schema: wang-person/v1
id: p_Ws6vwZFsXZUpBYjSrkcdGJ
status: active
merged_into: null
display_name: 王言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9teLf3QJGXy5N7dSEX2nRQ
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQh2WKPpPRDAFTUATcQ4T3
          claim_id: c_9teLf3QJGXy5N7dSEX2nRQ
          source_id: s_15mCF5pxy37CCM49cEA2hD
          stance: supports
          locator: CBDB:282499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282499）
          source: &a1
            id: s_15mCF5pxy37CCM49cEA2hD
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 282499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282499&o=json
            external_identifier: CBDB:282499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zzv22s9DAW2AQ1JM2Sj6Wi
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
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
        - id: cs_vNAX1FfGCwQPAP4NAWZUkS
          claim_id: c_Zzv22s9DAW2AQ1JM2Sj6Wi
          source_id: s_15mCF5pxy37CCM49cEA2hD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__oyCQu0QcnbomUMzz6GJPD
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEh4RHPQAaFC5WzQy7Qebi
          claim_id: c__oyCQu0QcnbomUMzz6GJPD
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Yy8BuZ9UTECH2SA99gjmDH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 126752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json
            external_identifier: CBDB:126752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 126752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json)
- [中国历代人物传记资料库：王言（CBDB 282499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282499&o=json)
