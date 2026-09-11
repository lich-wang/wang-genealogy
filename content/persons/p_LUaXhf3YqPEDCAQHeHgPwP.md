---
schema: wang-person/v1
id: p_LUaXhf3YqPEDCAQHeHgPwP
status: active
merged_into: null
display_name: 王翰仔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NEVx85f8GGV8eWuaXD8hZN
        subject_person_id: p_LUaXhf3YqPEDCAQHeHgPwP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰仔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MK7jfGdCJYa4zBVibCHiLy
          claim_id: c_NEVx85f8GGV8eWuaXD8hZN
          source_id: s_s13ZcmETsSrC61LhNF6iXJ
          stance: supports
          locator: CBDB:639900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639900）
          source: &a1
            id: s_s13ZcmETsSrC61LhNF6iXJ
            source_type: api_record
            title: 中国历代人物传记资料库：王翰仔（CBDB 639900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639900&o=json
            external_identifier: CBDB:639900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q8DnD7CzT6yaE5dDeg9PYH
        subject_person_id: p_LUaXhf3YqPEDCAQHeHgPwP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰仔，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ex2kzXgmak1B1PxuU4bhek
          claim_id: c_Q8DnD7CzT6yaE5dDeg9PYH
          source_id: s_s13ZcmETsSrC61LhNF6iXJ
          stance: supports
          locator: CBDB:639900
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

# 王翰仔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰仔 | accepted |
| bio.summary | 王翰仔，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰仔（CBDB 639900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639900&o=json)
