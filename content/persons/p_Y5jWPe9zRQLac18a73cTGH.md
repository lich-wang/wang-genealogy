---
schema: wang-person/v1
id: p_Y5jWPe9zRQLac18a73cTGH
status: active
merged_into: null
display_name: 王務本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ENpyeUpvRePFBLbxsru4e3
        subject_person_id: p_Y5jWPe9zRQLac18a73cTGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王務本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ov3Hgc9mfFAVWK8sk8oupP
          claim_id: c_ENpyeUpvRePFBLbxsru4e3
          source_id: s_r9m6Ui2hsNAenLrwjuj6Ln
          stance: supports
          locator: CBDB:685055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685055）
          source: &a1
            id: s_r9m6Ui2hsNAenLrwjuj6Ln
            source_type: api_record
            title: 中国历代人物传记资料库：王務本（CBDB 685055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685055&o=json
            external_identifier: CBDB:685055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E8voQwu8vjvR9L2CUGtVo9
        subject_person_id: p_Y5jWPe9zRQLac18a73cTGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王務本，宋人物。籍贯廬陵，入仕進士。（中国历代人物传记资料库 CBDB 685055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PYwpdb-sr5Jo7wCXsyAR7H
          claim_id: c_E8voQwu8vjvR9L2CUGtVo9
          source_id: s_r9m6Ui2hsNAenLrwjuj6Ln
          stance: supports
          locator: CBDB:685055
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

# 王務本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王務本 | accepted |
| bio.summary | 王務本，宋人物。籍贯廬陵，入仕進士。（中国历代人物传记资料库 CBDB 685055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王務本（CBDB 685055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685055&o=json)
