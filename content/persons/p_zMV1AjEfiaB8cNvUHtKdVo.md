---
schema: wang-person/v1
id: p_zMV1AjEfiaB8cNvUHtKdVo
status: active
merged_into: null
display_name: 王順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rm6rV5tjTV9wbzrQrHcHyo
        subject_person_id: p_zMV1AjEfiaB8cNvUHtKdVo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xG42gFdmL8v5LwvyybQn1S
          claim_id: c_Rm6rV5tjTV9wbzrQrHcHyo
          source_id: s_Dg5FDhRzqLPAnq9Do8CqrP
          stance: supports
          locator: CBDB:377884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377884）
          source: &a1
            id: s_Dg5FDhRzqLPAnq9Do8CqrP
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 377884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377884&o=json
            external_identifier: CBDB:377884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ib5uXVf7BEV7sJvDgyvJVq
        subject_person_id: p_zMV1AjEfiaB8cNvUHtKdVo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HuaIH-1J15pdKN-jwZymNY
          claim_id: c_ib5uXVf7BEV7sJvDgyvJVq
          source_id: s_Dg5FDhRzqLPAnq9Do8CqrP
          stance: supports
          locator: CBDB:377884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順 | accepted |
| bio.summary | 王順，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 377884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377884&o=json)
