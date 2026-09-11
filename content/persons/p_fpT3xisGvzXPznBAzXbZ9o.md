---
schema: wang-person/v1
id: p_fpT3xisGvzXPznBAzXbZ9o
status: active
merged_into: null
display_name: 林氏
revision: 1
cbdb_id: 245778
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pwb7d99hf2QhYNOXTziXo6
        subject_person_id: p_fpT3xisGvzXPznBAzXbZ9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHqQvsR7YmHxqOM0XkF6VK
          claim_id: c_Pwb7d99hf2QhYNOXTziXo6
          source_id: s_QNwmsiKk4_hsYFd57ZyJku
          stance: supports
          locator: CBDB:245778
          quotation: null
          interpretation_note: CBDB 明确记录的王祿配偶
          source: &a1
            id: s_QNwmsiKk4_hsYFd57ZyJku
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(王祿妻)（CBDB 245778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245778&o=json
            external_identifier: CBDB:245778
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
        id: c_56XjOHdGXEnnGmvYC48n7u
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fpT3xisGvzXPznBAzXbZ9o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkCuo50Ln1vTwm3Zh7b0KU
          claim_id: c_56XjOHdGXEnnGmvYC48n7u
          source_id: s_QNwmsiKk4_hsYFd57ZyJku
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5CduZYd3M32UzBRfFgkTNy
        status: active
        display_name: 王祿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 林氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5CduZYd3M32UzBRfFgkTNy | 王祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(王祿妻)（CBDB 245778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245778&o=json)
