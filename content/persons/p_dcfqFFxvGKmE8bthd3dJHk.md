---
schema: wang-person/v1
id: p_dcfqFFxvGKmE8bthd3dJHk
status: active
merged_into: null
display_name: 王祀祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GVXLKfogE9r6u2bsXuE8KC
        subject_person_id: p_dcfqFFxvGKmE8bthd3dJHk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祀祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FxTCeE2xaMuXkmcnTf6HmP
          claim_id: c_GVXLKfogE9r6u2bsXuE8KC
          source_id: s_Bf5oBeQDgz71Emz4J95tkZ
          stance: supports
          locator: CBDB:639562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639562）
          source: &a1
            id: s_Bf5oBeQDgz71Emz4J95tkZ
            source_type: api_record
            title: 中国历代人物传记资料库：王祀祥（CBDB 639562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639562&o=json
            external_identifier: CBDB:639562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5dsPYaLHwSv3DWetncWQMv
        subject_person_id: p_dcfqFFxvGKmE8bthd3dJHk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祀祥，清人物。籍贯沂州，曾任訓導。（中国历代人物传记资料库 CBDB 639562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MW8gm6Nuv65Wu_Q8h54KGl
          claim_id: c_5dsPYaLHwSv3DWetncWQMv
          source_id: s_Bf5oBeQDgz71Emz4J95tkZ
          stance: supports
          locator: CBDB:639562
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

# 王祀祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祀祥 | accepted |
| bio.summary | 王祀祥，清人物。籍贯沂州，曾任訓導。（中国历代人物传记资料库 CBDB 639562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祀祥（CBDB 639562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639562&o=json)
