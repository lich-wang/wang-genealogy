---
schema: wang-person/v1
id: p_sbZ1nWy1V8E8BLBFn1HSjN
status: active
merged_into: null
display_name: 王商林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Y6HW9cbQeE7KBJGHjkMCg
        subject_person_id: p_sbZ1nWy1V8E8BLBFn1HSjN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王商林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r347wXpiRXGAjpK2CZ6B5z
          claim_id: c_1Y6HW9cbQeE7KBJGHjkMCg
          source_id: s_SD2BJoyR6pGuLjNNP85Qx6
          stance: supports
          locator: CBDB:636540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636540）
          source: &a1
            id: s_SD2BJoyR6pGuLjNNP85Qx6
            source_type: api_record
            title: 中国历代人物传记资料库：王商林（CBDB 636540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636540&o=json
            external_identifier: CBDB:636540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gEBJsKfy5k3R8weCyJNoNH
        subject_person_id: p_sbZ1nWy1V8E8BLBFn1HSjN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王商林，清人物。籍贯晉江，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 636540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5_8gW_7ZkZAxN0IGGj3-7Y
          claim_id: c_gEBJsKfy5k3R8weCyJNoNH
          source_id: s_SD2BJoyR6pGuLjNNP85Qx6
          stance: supports
          locator: CBDB:636540
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

# 王商林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王商林 | accepted |
| bio.summary | 王商林，清人物。籍贯晉江，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 636540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王商林（CBDB 636540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636540&o=json)
