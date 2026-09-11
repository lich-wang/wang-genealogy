---
schema: wang-person/v1
id: p_FJN2yNGU1Fx3KDxpZc9j7m
status: active
merged_into: null
display_name: 周綺
revision: 1
cbdb_id: 83206
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BqjyzwZpjfQKNtdOzpziGy
        subject_person_id: p_FJN2yNGU1Fx3KDxpZc9j7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周綺
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZ1_nx6-sEgrPAUEYqo8IB
          claim_id: c_BqjyzwZpjfQKNtdOzpziGy
          source_id: s_e7al6T8HGXAuq8keGPovDN
          stance: supports
          locator: CBDB:83206
          quotation: null
          interpretation_note: CBDB 明确记录的王希濂配偶
          source: &a1
            id: s_e7al6T8HGXAuq8keGPovDN
            source_type: api_record
            title: 中国历代人物传记资料库：周綺（CBDB 83206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=83206&o=json
            external_identifier: CBDB:83206
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
        id: c_tuyVNFl6ykHiIvdKrcbqIU
        subject_person_id: p_UpuHAUk7xqL6Pf3zmdwvxE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FJN2yNGU1Fx3KDxpZc9j7m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_caQ4EhVkQO3L5UXZE3PZf5
          claim_id: c_tuyVNFl6ykHiIvdKrcbqIU
          source_id: s_e7al6T8HGXAuq8keGPovDN
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3681, HuWenKai #383：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UpuHAUk7xqL6Pf3zmdwvxE
        status: active
        display_name: 王希濂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周綺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周綺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_UpuHAUk7xqL6Pf3zmdwvxE | 王希濂 | accepted |

## 外部来源

- [中国历代人物传记资料库：周綺（CBDB 83206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=83206&o=json)
