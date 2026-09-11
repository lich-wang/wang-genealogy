---
schema: wang-person/v1
id: p_v4J3fdgR2mXYe2KPhpeP5F
status: active
merged_into: null
display_name: 王壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XmW9V3fcPpMyVmMzop5HSj
        subject_person_id: p_v4J3fdgR2mXYe2KPhpeP5F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tpmrAUSRyjsYTD3huS72d4
          claim_id: c_XmW9V3fcPpMyVmMzop5HSj
          source_id: s_v74EqEC7YKcznHZEp4A8g9
          stance: supports
          locator: CBDB:480286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480286）
          source: &a1
            id: s_v74EqEC7YKcznHZEp4A8g9
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 480286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480286&o=json
            external_identifier: CBDB:480286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZQwfTMA5cmdZ6Typ7ZG5L
        subject_person_id: p_v4J3fdgR2mXYe2KPhpeP5F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 480286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6sC5ZV5HTptj-lo5N5J97D
          claim_id: c_KZQwfTMA5cmdZ6Typ7ZG5L
          source_id: s_v74EqEC7YKcznHZEp4A8g9
          stance: supports
          locator: CBDB:480286
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

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| bio.summary | 王壽，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 480286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 480286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480286&o=json)
