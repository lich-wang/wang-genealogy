---
schema: wang-person/v1
id: p_6S5kjjg9BdGZZHEoHLxqFD
status: active
merged_into: null
display_name: 傅氏
revision: 1
cbdb_id: 237179
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4JgyMzhQDXsLezEH8jjFLy
        subject_person_id: p_6S5kjjg9BdGZZHEoHLxqFD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 傅氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237179）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWvDpWHuI6YeH4t3us5QbE
          claim_id: c_4JgyMzhQDXsLezEH8jjFLy
          source_id: s_MiQZVZyHt60t5rtBhFYKk0
          stance: supports
          locator: CBDB:237179
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MiQZVZyHt60t5rtBhFYKk0
            source_type: api_record
            title: 中国历代人物传记资料库：傅氏(王銳妻)（CBDB 237179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237179&o=json
            external_identifier: CBDB:237179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K53EIsrYan5q5P-osSKytT
        subject_person_id: p_6S5kjjg9BdGZZHEoHLxqFD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 傅氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BXrbtW28OikbgQth3oYs1V
          claim_id: c_K53EIsrYan5q5P-osSKytT
          source_id: s_MiQZVZyHt60t5rtBhFYKk0
          stance: supports
          locator: CBDB:237179
          quotation: null
          interpretation_note: CBDB 明确记录的王銳配偶
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
        id: c_ufELeaJEY0EcVjhRi9rDgi
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6S5kjjg9BdGZZHEoHLxqFD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0zjEUYI-ZvequN4m-dPTfM
          claim_id: c_ufELeaJEY0EcVjhRi9rDgi
          source_id: s_MiQZVZyHt60t5rtBhFYKk0
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第二十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3QkAN41TAP7FHhGsJ1CqAw
        status: active
        display_name: 王銳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 傅氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 傅氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237179） | accepted |
| name.primary | 傅氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3QkAN41TAP7FHhGsJ1CqAw | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：傅氏(王銳妻)（CBDB 237179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237179&o=json)
