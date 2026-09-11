---
schema: wang-person/v1
id: p_CXJD2x5NgucYYDoLj39JFo
status: active
merged_into: null
display_name: 王朝元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3C65RDZ9R6rAk7zLwRgWVU
        subject_person_id: p_CXJD2x5NgucYYDoLj39JFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBQcPJRdNud1TQiHbPhD8j
          claim_id: c_3C65RDZ9R6rAk7zLwRgWVU
          source_id: s_Hz7vyoVxG17GJiwwYQGdfD
          stance: supports
          locator: CBDB:294145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294145）
          source: &a1
            id: s_Hz7vyoVxG17GJiwwYQGdfD
            source_type: api_record
            title: 中国历代人物传记资料库：王朝元（CBDB 294145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json
            external_identifier: CBDB:294145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R2bgy5t7FM6GsAJ54T73qo
        subject_person_id: p_CXJD2x5NgucYYDoLj39JFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝元，明人物。嘉靖十一年進士，籍贯太康，曾任巡檢。（中国历代人物传记资料库 CBDB 294145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_coM80LrtEmssxfk5RO_jp9
          claim_id: c_R2bgy5t7FM6GsAJ54T73qo
          source_id: s_Hz7vyoVxG17GJiwwYQGdfD
          stance: supports
          locator: CBDB:294145
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

# 王朝元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝元 | accepted |
| bio.summary | 王朝元，明人物。嘉靖十一年進士，籍贯太康，曾任巡檢。（中国历代人物传记资料库 CBDB 294145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝元（CBDB 294145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json)
