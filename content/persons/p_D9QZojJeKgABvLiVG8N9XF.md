---
schema: wang-person/v1
id: p_D9QZojJeKgABvLiVG8N9XF
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uBp7bhNCgCm16Kr9p9ADzx
        subject_person_id: p_D9QZojJeKgABvLiVG8N9XF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NAGdQ7ouPK4iH4L3wjXpAj
          claim_id: c_uBp7bhNCgCm16Kr9p9ADzx
          source_id: s_hKtVQhbCTU3jteifLfkWkT
          stance: supports
          locator: CBDB:71166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71166）
          source: &a1
            id: s_hKtVQhbCTU3jteifLfkWkT
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 71166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71166&o=json
            external_identifier: CBDB:71166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2JUv9W8CgPcBYbNmSXs9yr
        subject_person_id: p_D9QZojJeKgABvLiVG8N9XF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1592年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YLjC4JSBYErXnc7pHwzbUE
          claim_id: c_2JUv9W8CgPcBYbNmSXs9yr
          source_id: s_hKtVQhbCTU3jteifLfkWkT
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
        id: c_hTTFyVoECPS11zYLDZ9qKF
        subject_person_id: p_D9QZojJeKgABvLiVG8N9XF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1652年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15ba8AP8oSnPutQX9mFm2J
          claim_id: c_hTTFyVoECPS11zYLDZ9qKF
          source_id: s_hKtVQhbCTU3jteifLfkWkT
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
        id: c_CaPjCZ4k5FnVddc9ybB1aM
        subject_person_id: p_D9QZojJeKgABvLiVG8N9XF
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
        - id: cs_jVU4cJEkWMg9Lj6MGG9Nbf
          claim_id: c_CaPjCZ4k5FnVddc9ybB1aM
          source_id: s_hKtVQhbCTU3jteifLfkWkT
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| birth.date | 1592年 | accepted |
| death.date | 1652年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 71166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71166&o=json)
