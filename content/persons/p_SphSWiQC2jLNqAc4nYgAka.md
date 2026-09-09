---
schema: wang-person/v1
id: p_SphSWiQC2jLNqAc4nYgAka
status: active
merged_into: null
display_name: 王亮棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FF1VDA5vDcrvN75yWfm6pd
        subject_person_id: p_SphSWiQC2jLNqAc4nYgAka
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XGrrRF1TPJ47cMMoMub6b2
          claim_id: c_FF1VDA5vDcrvN75yWfm6pd
          source_id: s_niJ5QWDffGME2Q3qYbnQVh
          stance: supports
          locator: CBDB:635866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635866）
          source: &a1
            id: s_niJ5QWDffGME2Q3qYbnQVh
            source_type: api_record
            title: 中国历代人物传记资料库：王亮棟（CBDB 635866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635866&o=json
            external_identifier: CBDB:635866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6XawtM1s7HeTakTLdfrGzb
        subject_person_id: p_SphSWiQC2jLNqAc4nYgAka
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
        - id: cs_CMjfR96zFvMhWhxsr6tHP2
          claim_id: c_6XawtM1s7HeTakTLdfrGzb
          source_id: s_niJ5QWDffGME2Q3qYbnQVh
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

# 王亮棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮棟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮棟（CBDB 635866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635866&o=json)
