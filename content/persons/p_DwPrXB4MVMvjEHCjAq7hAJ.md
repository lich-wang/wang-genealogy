---
schema: wang-person/v1
id: p_DwPrXB4MVMvjEHCjAq7hAJ
status: active
merged_into: null
display_name: 姜氏
revision: 1
cbdb_id: 699841
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jf7MMqjr0UEOQQVV6McTqq
        subject_person_id: p_DwPrXB4MVMvjEHCjAq7hAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Z5sfVZr6I-jHov7-ITt4C
          claim_id: c_Jf7MMqjr0UEOQQVV6McTqq
          source_id: s_1sYuKAaiGztiU4zO8it-MK
          stance: supports
          locator: CBDB:699841
          quotation: null
          interpretation_note: CBDB 明确记录的王章配偶
          source: &a1
            id: s_1sYuKAaiGztiU4zO8it-MK
            source_type: api_record
            title: 中国历代人物传记资料库：姜氏(王章妻)（CBDB 699841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699841&o=json
            external_identifier: CBDB:699841
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
        id: c_E4Spk3KLCYJ2BnZuzVnaui
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DwPrXB4MVMvjEHCjAq7hAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sucd8aieRNwgJu3dUko6GY
          claim_id: c_E4Spk3KLCYJ2BnZuzVnaui
          source_id: s_1sYuKAaiGztiU4zO8it-MK
          stance: supports
          locator: 武進陽湖縣志，lgid=152489：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5zJGY1xRx85XhFi5qyGy8X
        status: active
        display_name: 王章
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姜氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 姜氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5zJGY1xRx85XhFi5qyGy8X | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：姜氏(王章妻)（CBDB 699841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699841&o=json)
