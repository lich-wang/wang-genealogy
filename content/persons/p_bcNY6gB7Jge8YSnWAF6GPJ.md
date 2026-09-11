---
schema: wang-person/v1
id: p_bcNY6gB7Jge8YSnWAF6GPJ
status: active
merged_into: null
display_name: 王劭曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CDFoFADDChgzLbdTVEnCrG
        subject_person_id: p_bcNY6gB7Jge8YSnWAF6GPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ipqyB6moRGGPGG81x3RG1
          claim_id: c_CDFoFADDChgzLbdTVEnCrG
          source_id: s_31YYE3ehpGS5wjYj91qfi9
          stance: supports
          locator: CBDB:636374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636374）
          source: &a1
            id: s_31YYE3ehpGS5wjYj91qfi9
            source_type: api_record
            title: 中国历代人物传记资料库：王劭曾（CBDB 636374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636374&o=json
            external_identifier: CBDB:636374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2c4iuFVWuLvvAuHFSAh4f
        subject_person_id: p_bcNY6gB7Jge8YSnWAF6GPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭曾，清人物。籍贯同州府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s83-F9xYA7qB4TchDg6Ucr
          claim_id: c_w2c4iuFVWuLvvAuHFSAh4f
          source_id: s_31YYE3ehpGS5wjYj91qfi9
          stance: supports
          locator: CBDB:636374
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

# 王劭曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王劭曾 | accepted |
| bio.summary | 王劭曾，清人物。籍贯同州府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王劭曾（CBDB 636374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636374&o=json)
