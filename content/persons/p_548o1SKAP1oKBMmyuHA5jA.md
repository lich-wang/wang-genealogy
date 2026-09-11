---
schema: wang-person/v1
id: p_548o1SKAP1oKBMmyuHA5jA
status: active
merged_into: null
display_name: 王崇義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oDXXg6d9R7h4Z5sRcMnm1i
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZQW5oAMi3jxY8a6L6CwGH
          claim_id: c_oDXXg6d9R7h4Z5sRcMnm1i
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: CBDB:208868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208868）
          source: &a1
            id: s_YiHzg9Jkj4EwDSKii8VwE5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 208868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json
            external_identifier: CBDB:208868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AP3qypn5xPySKbbc6dnf8g
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
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
        - id: cs_kGSnSdpGwX2UeW1A443x8M
          claim_id: c_AP3qypn5xPySKbbc6dnf8g
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ROaGXefZkS9O1kYT9zjdLM
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3qc8_OqSfoBkr7BbQHoBc
          claim_id: c_ROaGXefZkS9O1kYT9zjdLM
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 208868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json)
