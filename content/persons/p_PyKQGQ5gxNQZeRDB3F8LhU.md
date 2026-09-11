---
schema: wang-person/v1
id: p_PyKQGQ5gxNQZeRDB3F8LhU
status: active
merged_into: null
display_name: 王翼經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XxwjCvJeG4DZtKh7N13Wkb
        subject_person_id: p_PyKQGQ5gxNQZeRDB3F8LhU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZkbFbwT8oZBfvDuJ18UP3h
          claim_id: c_XxwjCvJeG4DZtKh7N13Wkb
          source_id: s_ULBRNFDmaNUWV68K8EdfAy
          stance: supports
          locator: CBDB:639909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639909）
          source: &a1
            id: s_ULBRNFDmaNUWV68K8EdfAy
            source_type: api_record
            title: 中国历代人物传记资料库：王翼經（CBDB 639909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639909&o=json
            external_identifier: CBDB:639909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LregK2WW7ftgG5dWZ8bVjq
        subject_person_id: p_PyKQGQ5gxNQZeRDB3F8LhU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼經，清人物。籍贯項城，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639909）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WWrs-S64Ev33oq_WsZNhQL
          claim_id: c_LregK2WW7ftgG5dWZ8bVjq
          source_id: s_ULBRNFDmaNUWV68K8EdfAy
          stance: supports
          locator: CBDB:639909
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

# 王翼經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翼經 | accepted |
| bio.summary | 王翼經，清人物。籍贯項城，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639909） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翼經（CBDB 639909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639909&o=json)
