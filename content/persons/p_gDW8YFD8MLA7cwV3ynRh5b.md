---
schema: wang-person/v1
id: p_gDW8YFD8MLA7cwV3ynRh5b
status: active
merged_into: null
display_name: 王化沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqHGAPUsReK6uvhos8eJLb
        subject_person_id: p_gDW8YFD8MLA7cwV3ynRh5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XFQCCpZCLgGR6xbbbvUEWf
          claim_id: c_qqHGAPUsReK6uvhos8eJLb
          source_id: s_ur6DWZ7Fiz53UHL3tJo1fe
          stance: supports
          locator: CBDB:636401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636401）
          source: &a1
            id: s_ur6DWZ7Fiz53UHL3tJo1fe
            source_type: api_record
            title: 中国历代人物传记资料库：王化沛（CBDB 636401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636401&o=json
            external_identifier: CBDB:636401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T8Y8Pi3B5awRxCTU2HX2kT
        subject_person_id: p_gDW8YFD8MLA7cwV3ynRh5b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化沛，清人物。籍贯高苑，曾任訓導。（中国历代人物传记资料库 CBDB 636401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g3vfgcW1y4LETcNLkkQBkq
          claim_id: c_T8Y8Pi3B5awRxCTU2HX2kT
          source_id: s_ur6DWZ7Fiz53UHL3tJo1fe
          stance: supports
          locator: CBDB:636401
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

# 王化沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化沛 | accepted |
| bio.summary | 王化沛，清人物。籍贯高苑，曾任訓導。（中国历代人物传记资料库 CBDB 636401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化沛（CBDB 636401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636401&o=json)
