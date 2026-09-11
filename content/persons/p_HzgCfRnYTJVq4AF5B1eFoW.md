---
schema: wang-person/v1
id: p_HzgCfRnYTJVq4AF5B1eFoW
status: active
merged_into: null
display_name: 王任
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T3VXU6HZakXfeh6Pxm5r2c
        subject_person_id: p_HzgCfRnYTJVq4AF5B1eFoW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZvuT34YyCjR586qu29mEwW
          claim_id: c_T3VXU6HZakXfeh6Pxm5r2c
          source_id: s_nVJ6d7qAYGA6Y63jEUxQbr
          stance: supports
          locator: CBDB:475976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475976）
          source: &a1
            id: s_nVJ6d7qAYGA6Y63jEUxQbr
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 475976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475976&o=json
            external_identifier: CBDB:475976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_psqGmbgRstKc7vCBxcu5HD
        subject_person_id: p_HzgCfRnYTJVq4AF5B1eFoW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任，明人物。入仕進士，曾任副使。（中国历代人物传记资料库 CBDB 475976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_85B9zCL8CJc6QYjmmuLiNx
          claim_id: c_psqGmbgRstKc7vCBxcu5HD
          source_id: s_nVJ6d7qAYGA6Y63jEUxQbr
          stance: supports
          locator: CBDB:475976
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

# 王任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任 | accepted |
| bio.summary | 王任，明人物。入仕進士，曾任副使。（中国历代人物传记资料库 CBDB 475976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王任（CBDB 475976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475976&o=json)
