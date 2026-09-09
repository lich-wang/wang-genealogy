---
schema: wang-person/v1
id: p_pQCGSHD27ba8dQ5sq75t2M
status: active
merged_into: null
display_name: 王暐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1yZKkcqZBG6WEzUa5YTCep
        subject_person_id: p_pQCGSHD27ba8dQ5sq75t2M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R68iThN6E9Rfkkq38qnoPA
          claim_id: c_1yZKkcqZBG6WEzUa5YTCep
          source_id: s_Axpc2EuHTZd6f8xqQvs4w3
          stance: supports
          locator: CBDB:377630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377630）
          source: &a1
            id: s_Axpc2EuHTZd6f8xqQvs4w3
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 377630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377630&o=json
            external_identifier: CBDB:377630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YuBnjKQ4WgbJNCEPegC5R1
        subject_person_id: p_pQCGSHD27ba8dQ5sq75t2M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjDo5k3bF5Qa1f7eJuaBJr
          claim_id: c_YuBnjKQ4WgbJNCEPegC5R1
          source_id: s_Axpc2EuHTZd6f8xqQvs4w3
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

# 王暐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暐 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暐（CBDB 377630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377630&o=json)
