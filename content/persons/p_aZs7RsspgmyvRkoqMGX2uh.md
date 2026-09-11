---
schema: wang-person/v1
id: p_aZs7RsspgmyvRkoqMGX2uh
status: active
merged_into: null
display_name: 王賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vMsP6QWo8CFdeaNZEW6Cms
        subject_person_id: p_aZs7RsspgmyvRkoqMGX2uh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WXD3Q9HcJEpoKHLMjHA4sb
          claim_id: c_vMsP6QWo8CFdeaNZEW6Cms
          source_id: s_jzUeXJcwtBWDMLGmqCFspt
          stance: supports
          locator: CBDB:321150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321150）
          source: &a1
            id: s_jzUeXJcwtBWDMLGmqCFspt
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 321150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321150&o=json
            external_identifier: CBDB:321150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dN3ZYhZAYL4sCut4ENBh13
        subject_person_id: p_aZs7RsspgmyvRkoqMGX2uh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。嘉靖三十五年進士，曾任訓導。（中国历代人物传记资料库 CBDB 321150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n3C412rt_y1nz3ETBqCh7J
          claim_id: c_dN3ZYhZAYL4sCut4ENBh13
          source_id: s_jzUeXJcwtBWDMLGmqCFspt
          stance: supports
          locator: CBDB:321150
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
  descendants:
    - claim:
        id: c_H9hZGJm7LDE849A-DE2QqI
        subject_person_id: p_aZs7RsspgmyvRkoqMGX2uh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1lMebgUBExp3AOKH7MBlWl
          claim_id: c_H9hZGJm7LDE849A-DE2QqI
          source_id: s_jzUeXJcwtBWDMLGmqCFspt
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
  other: []
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。嘉靖三十五年進士，曾任訓導。（中国历代人物传记资料库 CBDB 321150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 321150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321150&o=json)
