---
schema: wang-person/v1
id: p_jicut8vbxiaoQ3gqBaLjUk
status: active
merged_into: null
display_name: 王命岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_33Lvg1RMwkW5eMEEU1gHh6
        subject_person_id: p_jicut8vbxiaoQ3gqBaLjUk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mVyad5oTW8fYnNt1dUj3zj
          claim_id: c_33Lvg1RMwkW5eMEEU1gHh6
          source_id: s_dEguZH5tcsCEytbWLhS7Jz
          stance: supports
          locator: CBDB:71785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71785）
          source: &a1
            id: s_dEguZH5tcsCEytbWLhS7Jz
            source_type: api_record
            title: 中国历代人物传记资料库：王命岳（CBDB 71785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71785&o=json
            external_identifier: CBDB:71785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LixKcUdQ1FokcLrppRc1uX
        subject_person_id: p_jicut8vbxiaoQ3gqBaLjUk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8NH6SQ6fhw287fKiYPs1a
          claim_id: c_LixKcUdQ1FokcLrppRc1uX
          source_id: s_dEguZH5tcsCEytbWLhS7Jz
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
        id: c_FB1LZUTEt6Rf2ooCiSEpY9
        subject_person_id: p_jicut8vbxiaoQ3gqBaLjUk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命岳（生于1626年），清人物。籍贯晉江。（中国历代人物传记资料库 CBDB 71785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bwF2Oh-fPmt4LZCWsobt_7
          claim_id: c_FB1LZUTEt6Rf2ooCiSEpY9
          source_id: s_dEguZH5tcsCEytbWLhS7Jz
          stance: supports
          locator: CBDB:71785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王命岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王命岳 | accepted |
| birth.date | 1626年 | accepted |
| bio.summary | 王命岳（生于1626年），清人物。籍贯晉江。（中国历代人物传记资料库 CBDB 71785） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王命岳（CBDB 71785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71785&o=json)
