---
schema: wang-person/v1
id: p_BZfwREeLegAon6cHiwc4Mp
status: active
merged_into: null
display_name: 王沈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZAth3omsnxUgr2y5Sf4G7
        subject_person_id: p_BZfwREeLegAon6cHiwc4Mp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BpUEshxVXak1AS6Jgm94C9
          claim_id: c_iZAth3omsnxUgr2y5Sf4G7
          source_id: s_z7wqZxhDwJKfGwBdWbe6Fv
          stance: supports
          locator: CBDB:92017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92017）
          source: &a1
            id: s_z7wqZxhDwJKfGwBdWbe6Fv
            source_type: api_record
            title: 中国历代人物传记资料库：王沈（CBDB 92017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92017&o=json
            external_identifier: CBDB:92017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFKR32FHnvT3FGJwq81epu
        subject_person_id: p_BZfwREeLegAon6cHiwc4Mp
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
        - id: cs_5n9fdLtb55ygpUEc2CjiF3
          claim_id: c_oFKR32FHnvT3FGJwq81epu
          source_id: s_z7wqZxhDwJKfGwBdWbe6Fv
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

# 王沈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沈 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沈（CBDB 92017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92017&o=json)
