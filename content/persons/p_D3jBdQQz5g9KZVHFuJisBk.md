---
schema: wang-person/v1
id: p_D3jBdQQz5g9KZVHFuJisBk
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 274249
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oP9XJO9su4gZ4xI35KjP4q
        subject_person_id: p_D3jBdQQz5g9KZVHFuJisBk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VOgnAf8LFhJhEfNSIt8vaC
          claim_id: c_oP9XJO9su4gZ4xI35KjP4q
          source_id: s_HMIUbj1KjqFbhCY-k1jnSO
          stance: supports
          locator: CBDB:274249
          quotation: null
          interpretation_note: CBDB 明确记录的王栻配偶
          source: &a1
            id: s_HMIUbj1KjqFbhCY-k1jnSO
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王栻妻)（CBDB 274249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274249&o=json
            external_identifier: CBDB:274249
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
        id: c_k8n39VbT32JIjP0plBV1eq
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D3jBdQQz5g9KZVHFuJisBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xmprNgOIQ09j2Mb6WFYtm-
          claim_id: c_k8n39VbT32JIjP0plBV1eq
          source_id: s_HMIUbj1KjqFbhCY-k1jnSO
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王栻妻)（CBDB 274249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274249&o=json)
