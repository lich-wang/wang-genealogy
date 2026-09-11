---
schema: wang-person/v1
id: p_1rMKMgmHRPEBfLv4UG994w
status: active
merged_into: null
display_name: 王騫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nxB6S155tTXK8vrzT7GyX5
        subject_person_id: p_1rMKMgmHRPEBfLv4UG994w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5sSEV9LtuLLNYK36JZsvH4
          claim_id: c_nxB6S155tTXK8vrzT7GyX5
          source_id: s_8aC9va1Vf4icncKYRQbaZF
          stance: supports
          locator: CBDB:513483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（513483）
          source: &a1
            id: s_8aC9va1Vf4icncKYRQbaZF
            source_type: api_record
            title: 中国历代人物传记资料库：王騫（CBDB 513483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513483&o=json
            external_identifier: CBDB:513483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y65FiEBZQ2SQcQuVVHXqaR
        subject_person_id: p_1rMKMgmHRPEBfLv4UG994w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMJTL3J3f5C76VCPK5d9hH
          claim_id: c_y65FiEBZQ2SQcQuVVHXqaR
          source_id: s_8aC9va1Vf4icncKYRQbaZF
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
        id: c_ou98lCH6mGeKl3KkcUut0m
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rMKMgmHRPEBfLv4UG994w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YE7AXeQCwRHOSb8CmmRpoO
          claim_id: c_ou98lCH6mGeKl3KkcUut0m
          source_id: s_8aC9va1Vf4icncKYRQbaZF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6sBCzo4EktCjTb4NiwWGko
        status: active
        display_name: 王傑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王騫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6sBCzo4EktCjTb4NiwWGko | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王騫（CBDB 513483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513483&o=json)
