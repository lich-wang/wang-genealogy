---
schema: wang-person/v1
id: p_UE1q4HTiHr6dP2UxKLMoFA
status: active
merged_into: null
display_name: 王元泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dUApeC8PoMHMDdQ4asgj3S
        subject_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REBacsbGSLMP7SbNyZwTNB
          claim_id: c_dUApeC8PoMHMDdQ4asgj3S
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: CBDB:140931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140931）
          source: &a1
            id: s_5ZZNZR6VKb5bbwhoTrqg8B
            source_type: api_record
            title: 中国历代人物传记资料库：王元泰（CBDB 140931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140931&o=json
            external_identifier: CBDB:140931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LGXjcyTtD6kDuXaxqMvX1S
        subject_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bgmdtqpP9e7RcDqiJy9oaU
          claim_id: c_LGXjcyTtD6kDuXaxqMvX1S
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9k94a3NKHjHj3P7fZmJ2eR
        subject_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bnH68S9YYS2Xn2srhc5gZ
          claim_id: c_9k94a3NKHjHj3P7fZmJ2eR
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fbxsbbw8ntPjMJFXwLXbU6
        subject_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
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
        - id: cs_uxqUj43y9tfbqiaeVS7MGn
          claim_id: c_Fbxsbbw8ntPjMJFXwLXbU6
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jX0Wb4XDmsvrvF4ZGwpvA9
        subject_person_id: p_VbTv9jyE8TE8W3rehz6ZA8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSw3eW5-EjuAImL2yb31-G
          claim_id: c_jX0Wb4XDmsvrvF4ZGwpvA9
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 127：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VbTv9jyE8TE8W3rehz6ZA8
        status: active
        display_name: 王義
        merged_into_person_id: null
  children:
    - claim:
        id: c_KAJIYkl01XQ0A1OqBWIChY
        subject_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8sgyq9bT5PQJxoEiFi2tPf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lcChoxcB7IB7yQO5snZePc
          claim_id: c_KAJIYkl01XQ0A1OqBWIChY
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 127：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8sgyq9bT5PQJxoEiFi2tPf
        status: active
        display_name: 王庭誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元泰 | accepted |
| birth.date | 676年 | accepted |
| death.date | 748年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VbTv9jyE8TE8W3rehz6ZA8 | 王義 | accepted |
| children | p_8sgyq9bT5PQJxoEiFi2tPf | 王庭誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元泰（CBDB 140931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140931&o=json)
