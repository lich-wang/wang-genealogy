---
schema: wang-person/v1
id: p_AuJmgt4saGi3BkLa8FEBBY
status: active
merged_into: null
display_name: 王晏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d34NY5R8HFhzRPa9YdK8pd
        subject_person_id: p_AuJmgt4saGi3BkLa8FEBBY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBKzCt8Mb5Ro4GyGpxNpv9
          claim_id: c_d34NY5R8HFhzRPa9YdK8pd
          source_id: s_soiCw2veVrB729jeaeg5mq
          stance: supports
          locator: CBDB:474220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474220）
          source: &a1
            id: s_soiCw2veVrB729jeaeg5mq
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 474220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474220&o=json
            external_identifier: CBDB:474220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H7CMqs6pwVtRLjq9MY5tAJ
        subject_person_id: p_AuJmgt4saGi3BkLa8FEBBY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏，清人物。曾任把總。（中国历代人物传记资料库 CBDB 474220）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-90ll3pcXZTzZFwHCDvPO4
          claim_id: c_H7CMqs6pwVtRLjq9MY5tAJ
          source_id: s_soiCw2veVrB729jeaeg5mq
          stance: supports
          locator: CBDB:474220
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

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| bio.summary | 王晏，清人物。曾任把總。（中国历代人物传记资料库 CBDB 474220） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏（CBDB 474220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474220&o=json)
