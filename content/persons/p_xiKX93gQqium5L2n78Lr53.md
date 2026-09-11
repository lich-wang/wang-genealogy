---
schema: wang-person/v1
id: p_xiKX93gQqium5L2n78Lr53
status: active
merged_into: null
display_name: 王友
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qn19ThE92YsiHdp6NkMRB5
        subject_person_id: p_xiKX93gQqium5L2n78Lr53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hh9deDNi3ExLqY3PQDrMFm
          claim_id: c_Qn19ThE92YsiHdp6NkMRB5
          source_id: s_c9Bd5HJM5Mt5KcA2aX5yX4
          stance: supports
          locator: CBDB:240142
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240142）
          source: &a1
            id: s_c9Bd5HJM5Mt5KcA2aX5yX4
            source_type: api_record
            title: 中国历代人物传记资料库：王友（CBDB 240142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240142&o=json
            external_identifier: CBDB:240142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8xFb4hzHL2a7ELhXc5gsf
        subject_person_id: p_xiKX93gQqium5L2n78Lr53
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
        - id: cs_R7ACBT8tkx2sXQCxnLjAeo
          claim_id: c_F8xFb4hzHL2a7ELhXc5gsf
          source_id: s_c9Bd5HJM5Mt5KcA2aX5yX4
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
  descendants:
    - claim:
        id: c_6-0-UGTa0TxA0ZUYsoIB6t
        subject_person_id: p_xiKX93gQqium5L2n78Lr53
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFoXSebhT1SXkiSB1tfk5H
          claim_id: c_6-0-UGTa0TxA0ZUYsoIB6t
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_whVVwFfuq3kv612rh95dCN
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 199167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199167&o=json
            external_identifier: CBDB:199167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hx7iGJRJAsCsAgYtQcK5NG
        status: active
        display_name: 王昶
        merged_into_person_id: null
  other: []
---

# 王友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hx7iGJRJAsCsAgYtQcK5NG | 王昶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 199167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199167&o=json)
- [中国历代人物传记资料库：王友（CBDB 240142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240142&o=json)
