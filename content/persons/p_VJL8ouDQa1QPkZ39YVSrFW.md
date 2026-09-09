---
schema: wang-person/v1
id: p_VJL8ouDQa1QPkZ39YVSrFW
status: active
merged_into: null
display_name: 王堯臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fuYctfUJen2irHatPsPTTA
        subject_person_id: p_VJL8ouDQa1QPkZ39YVSrFW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TB3zfegfxL9Fk34nQF65LG
          claim_id: c_fuYctfUJen2irHatPsPTTA
          source_id: s_PiNvjEXG66eC7t8yo2PuNd
          stance: supports
          locator: CBDB:297189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297189）
          source: &a1
            id: s_PiNvjEXG66eC7t8yo2PuNd
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 297189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297189&o=json
            external_identifier: CBDB:297189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ETYYkMKmiY8QeFyTp8RFFr
        subject_person_id: p_VJL8ouDQa1QPkZ39YVSrFW
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
        - id: cs_AHwgF2KZna9y8oqbw1bLNE
          claim_id: c_ETYYkMKmiY8QeFyTp8RFFr
          source_id: s_PiNvjEXG66eC7t8yo2PuNd
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

# 王堯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯臣（CBDB 297189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297189&o=json)
