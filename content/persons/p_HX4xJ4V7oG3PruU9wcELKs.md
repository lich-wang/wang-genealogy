---
schema: wang-person/v1
id: p_HX4xJ4V7oG3PruU9wcELKs
status: active
merged_into: null
display_name: 盧德儀
revision: 1
cbdb_id: 73027
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ckrgq0F6SNjDvLZkQksncd
        subject_person_id: p_HX4xJ4V7oG3PruU9wcELKs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧德儀（1820—1865），清人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 73027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Jq9VoWYb_Lmk7V_sXMAox
          claim_id: c_ckrgq0F6SNjDvLZkQksncd
          source_id: s_WleXy9BKbraVKtJu40SQwh
          stance: supports
          locator: CBDB:73027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WleXy9BKbraVKtJu40SQwh
            source_type: api_record
            title: 中国历代人物传记资料库：盧德儀（CBDB 73027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=73027&o=json
            external_identifier: CBDB:73027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7XPYkPRQypaUcBwiy9u6PP
        subject_person_id: p_HX4xJ4V7oG3PruU9wcELKs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧德儀
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KFIiRqx082zX3Ey_s2j0j2
          claim_id: c_7XPYkPRQypaUcBwiy9u6PP
          source_id: s_WleXy9BKbraVKtJu40SQwh
          stance: supports
          locator: CBDB:73027
          quotation: null
          interpretation_note: CBDB 明确记录的王維齡配偶
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
        id: c_FccgdJqTNHUMd-oHTcj554
        subject_person_id: p_Ae2AyaTpa1d36ySH3SZ7t7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HX4xJ4V7oG3PruU9wcELKs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zWVlGkplMGcE3RAhQ4MFWl
          claim_id: c_FccgdJqTNHUMd-oHTcj554
          source_id: s_WleXy9BKbraVKtJu40SQwh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3923, HuWenKai #748：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ae2AyaTpa1d36ySH3SZ7t7
        status: active
        display_name: 王維齡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盧德儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盧德儀（1820—1865），清人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 73027） | accepted |
| name.primary | 盧德儀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ae2AyaTpa1d36ySH3SZ7t7 | 王維齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧德儀（CBDB 73027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=73027&o=json)
