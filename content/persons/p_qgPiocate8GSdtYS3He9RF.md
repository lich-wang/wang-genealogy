---
schema: wang-person/v1
id: p_qgPiocate8GSdtYS3He9RF
status: active
merged_into: null
display_name: 阮亨
revision: 1
cbdb_id: 29677
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ClWBG7oDtrRCZJOcdY6ToF
        subject_person_id: p_qgPiocate8GSdtYS3He9RF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 阮亨
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__0Sadx8eDVX_6xSiYuwGKa
          claim_id: c_ClWBG7oDtrRCZJOcdY6ToF
          source_id: s_dJ_K-PtDjuI_oxzGwF050-
          stance: supports
          locator: CBDB:29677
          quotation: null
          interpretation_note: CBDB 明确记录的王燕生配偶
          source: &a1
            id: s_dJ_K-PtDjuI_oxzGwF050-
            source_type: api_record
            title: 中国历代人物传记资料库：阮亨（CBDB 29677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29677&o=json
            external_identifier: CBDB:29677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OWHA8MqJ9JCFnOQdk3C44K
        subject_person_id: p_aDicdh4Kzgpcso6t2DJLxJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qgPiocate8GSdtYS3He9RF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KV77lqPhQINpiQf39Nh6v
          claim_id: c_OWHA8MqJ9JCFnOQdk3C44K
          source_id: s_dJ_K-PtDjuI_oxzGwF050-
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1760：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aDicdh4Kzgpcso6t2DJLxJ
        status: active
        display_name: 王燕生
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 阮亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 阮亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aDicdh4Kzgpcso6t2DJLxJ | 王燕生 | accepted |

## 外部来源

- [中国历代人物传记资料库：阮亨（CBDB 29677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29677&o=json)
