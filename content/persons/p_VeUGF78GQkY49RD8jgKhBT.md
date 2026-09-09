---
schema: wang-person/v1
id: p_VeUGF78GQkY49RD8jgKhBT
status: active
merged_into: null
display_name: 王緝祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zVwhkLDrKU5Jzni9k5r71Z
        subject_person_id: p_VeUGF78GQkY49RD8jgKhBT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mjBgKC91uBALM27Vs9Gjkv
          claim_id: c_zVwhkLDrKU5Jzni9k5r71Z
          source_id: s_K5AT4xBjSsTToD5QrFTBwL
          stance: supports
          locator: CBDB:72098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72098）
          source: &a1
            id: s_K5AT4xBjSsTToD5QrFTBwL
            source_type: api_record
            title: 中国历代人物传记资料库：王緝祖（CBDB 72098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72098&o=json
            external_identifier: CBDB:72098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PwD8qjZJgMCqNVjEmbgEa3
        subject_person_id: p_VeUGF78GQkY49RD8jgKhBT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1700年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lg7g53bcz9LGDhju878LeC
          claim_id: c_PwD8qjZJgMCqNVjEmbgEa3
          source_id: s_K5AT4xBjSsTToD5QrFTBwL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t6cznpxXBFamBgJBe5J4nb
        subject_person_id: p_VeUGF78GQkY49RD8jgKhBT
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
        - id: cs_NYTYJxx3YQNutz5D63xW7J
          claim_id: c_t6cznpxXBFamBgJBe5J4nb
          source_id: s_K5AT4xBjSsTToD5QrFTBwL
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
  descendants: []
  other: []
---

# 王緝祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝祖 | accepted |
| birth.date | 1700年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緝祖（CBDB 72098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72098&o=json)
