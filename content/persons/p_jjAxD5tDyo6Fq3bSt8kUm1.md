---
schema: wang-person/v1
id: p_jjAxD5tDyo6Fq3bSt8kUm1
status: active
merged_into: null
display_name: 王師尹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jzc92XQPNkY358dqZZ4w6F
        subject_person_id: p_jjAxD5tDyo6Fq3bSt8kUm1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師尹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o1JaZw91yH43smX3fh9Mq8
          claim_id: c_Jzc92XQPNkY358dqZZ4w6F
          source_id: s_mFqGi5ATUUCd8sxDrr99Cw
          stance: supports
          locator: CBDB:38028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38028）
          source: &a1
            id: s_mFqGi5ATUUCd8sxDrr99Cw
            source_type: api_record
            title: 中国历代人物传记资料库：王師尹（CBDB 38028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38028&o=json
            external_identifier: CBDB:38028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pMTRL4Pfj4TUMmv44JVdi1
        subject_person_id: p_jjAxD5tDyo6Fq3bSt8kUm1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XuiYYH3AoxzMcDHuNqVyKd
          claim_id: c_pMTRL4Pfj4TUMmv44JVdi1
          source_id: s_mFqGi5ATUUCd8sxDrr99Cw
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
  ancestors: []
  descendants: []
  other: []
---

# 王師尹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師尹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師尹（CBDB 38028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38028&o=json)
