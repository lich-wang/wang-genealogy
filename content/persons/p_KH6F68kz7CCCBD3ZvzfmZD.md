---
schema: wang-person/v1
id: p_KH6F68kz7CCCBD3ZvzfmZD
status: active
merged_into: null
display_name: 紀松實
revision: 1
cbdb_id: 120442
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y_8ljQLuGsh1q1HIEiBiAI
        subject_person_id: p_KH6F68kz7CCCBD3ZvzfmZD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 紀松實
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHzXor5-oJ7PaDCEyaduQB
          claim_id: c_Y_8ljQLuGsh1q1HIEiBiAI
          source_id: s_CfqV0tTian-6S8xMhQjRoj
          stance: supports
          locator: CBDB:120442
          quotation: null
          interpretation_note: CBDB 明确记录的王易配偶
          source: &a1
            id: s_CfqV0tTian-6S8xMhQjRoj
            source_type: api_record
            title: 中国历代人物传记资料库：紀松實（CBDB 120442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120442&o=json
            external_identifier: CBDB:120442
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
        id: c_3qo8R2FDkhcV228kf9mOyC
        subject_person_id: p_AY3xifYdmNBg9U9FhKmfzk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KH6F68kz7CCCBD3ZvzfmZD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5tA-lnLr4aKzq50icMWa-
          claim_id: c_3qo8R2FDkhcV228kf9mOyC
          source_id: s_CfqV0tTian-6S8xMhQjRoj
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3546, HuWenKai #439：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AY3xifYdmNBg9U9FhKmfzk
        status: active
        display_name: 王易
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 紀松實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 紀松實 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AY3xifYdmNBg9U9FhKmfzk | 王易 | accepted |

## 外部来源

- [中国历代人物传记资料库：紀松實（CBDB 120442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120442&o=json)
