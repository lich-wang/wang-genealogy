---
schema: wang-person/v1
id: p_DpEobFjKd54GHfy3ud2iAJ
status: active
merged_into: null
display_name: 任氏
revision: 1
cbdb_id: 558247
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QLgBnXcHBiT0e--hvkmOom
        subject_person_id: p_DpEobFjKd54GHfy3ud2iAJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jJSjPelevv7Ht4DM51Ir-f
          claim_id: c_QLgBnXcHBiT0e--hvkmOom
          source_id: s_louaBRhpi8FHmc3AkXAoPL
          stance: supports
          locator: CBDB:558247
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_louaBRhpi8FHmc3AkXAoPL
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王重妻)（CBDB 558247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558247&o=json
            external_identifier: CBDB:558247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yahQgS2ngXHH3JmPwZx-Ja
        subject_person_id: p_DpEobFjKd54GHfy3ud2iAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_COvF1CzTD6-5tMysJZRSqi
          claim_id: c_yahQgS2ngXHH3JmPwZx-Ja
          source_id: s_louaBRhpi8FHmc3AkXAoPL
          stance: supports
          locator: CBDB:558247
          quotation: null
          interpretation_note: CBDB 明确记录的王重配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__Cpnle3jaHqhs8qbwU2q7y
        subject_person_id: p_L9dzbHQjDKY6RB765GdXrR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DpEobFjKd54GHfy3ud2iAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5TXksS8U-9HUfwE0q9xZn
          claim_id: c__Cpnle3jaHqhs8qbwU2q7y
          source_id: s_louaBRhpi8FHmc3AkXAoPL
          stance: supports
          locator: (乾隆)信陽州志，lgid=868523：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L9dzbHQjDKY6RB765GdXrR
        status: active
        display_name: 王重
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 任氏，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558247） | accepted |
| name.primary | 任氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_L9dzbHQjDKY6RB765GdXrR | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王重妻)（CBDB 558247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558247&o=json)
