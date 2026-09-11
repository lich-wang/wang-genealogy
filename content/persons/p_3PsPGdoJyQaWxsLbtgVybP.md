---
schema: wang-person/v1
id: p_3PsPGdoJyQaWxsLbtgVybP
status: active
merged_into: null
display_name: 王霈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DV4Hx6M57mNX6FyMdo3U26
        subject_person_id: p_3PsPGdoJyQaWxsLbtgVybP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_swVKPqzmEH3VgkRVcCfLUm
          claim_id: c_DV4Hx6M57mNX6FyMdo3U26
          source_id: s_P242GT3PNx7RJsQ4KJH5e3
          stance: supports
          locator: CBDB:640829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640829）
          source: &a1
            id: s_P242GT3PNx7RJsQ4KJH5e3
            source_type: api_record
            title: 中国历代人物传记资料库：王霈（CBDB 640829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640829&o=json
            external_identifier: CBDB:640829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfXhfgXnDAMRb3HgfauMh6
        subject_person_id: p_3PsPGdoJyQaWxsLbtgVybP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霈，清人物。籍贯臨清直隸州直轄地方，曾任復設訓導。（中国历代人物传记资料库 CBDB 640829）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EwZX7B9c5w-AmiOsKsQWZy
          claim_id: c_VfXhfgXnDAMRb3HgfauMh6
          source_id: s_P242GT3PNx7RJsQ4KJH5e3
          stance: supports
          locator: CBDB:640829
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

# 王霈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霈 | accepted |
| bio.summary | 王霈，清人物。籍贯臨清直隸州直轄地方，曾任復設訓導。（中国历代人物传记资料库 CBDB 640829） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霈（CBDB 640829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640829&o=json)
