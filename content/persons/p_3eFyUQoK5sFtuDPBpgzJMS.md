---
schema: wang-person/v1
id: p_3eFyUQoK5sFtuDPBpgzJMS
status: active
merged_into: null
display_name: 王天佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wnUyriqiV21Q8KiYPsUWJY
        subject_person_id: p_3eFyUQoK5sFtuDPBpgzJMS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oT1NhfyXFfXhvTXaut3gpD
          claim_id: c_wnUyriqiV21Q8KiYPsUWJY
          source_id: s_RzHTGLopHGdgPMQtEZbqA9
          stance: supports
          locator: CBDB:636925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636925）
          source: &a1
            id: s_RzHTGLopHGdgPMQtEZbqA9
            source_type: api_record
            title: 中国历代人物传记资料库：王天佑（CBDB 636925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636925&o=json
            external_identifier: CBDB:636925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HoPMetrHYt99trh7rE9gmN
        subject_person_id: p_3eFyUQoK5sFtuDPBpgzJMS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天佑，清人物。籍贯廣平，曾任訓導。（中国历代人物传记资料库 CBDB 636925）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PbtwCUT1llltp8FDOUO7nD
          claim_id: c_HoPMetrHYt99trh7rE9gmN
          source_id: s_RzHTGLopHGdgPMQtEZbqA9
          stance: supports
          locator: CBDB:636925
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

# 王天佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天佑 | accepted |
| bio.summary | 王天佑，清人物。籍贯廣平，曾任訓導。（中国历代人物传记资料库 CBDB 636925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天佑（CBDB 636925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636925&o=json)
