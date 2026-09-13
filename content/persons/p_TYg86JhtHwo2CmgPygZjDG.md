---
schema: wang-person/v1
id: p_TYg86JhtHwo2CmgPygZjDG
status: active
merged_into: null
display_name: 王瑴
cbdb_id: 39176
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDegbsTJKoCqyYHbL3rxNz
        subject_person_id: p_TYg86JhtHwo2CmgPygZjDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑴，宋人物。曾任朝散大夫、尚書省刑部刑部司郎中、大理寺正。（中国历代人物传记资料库 CBDB 39176）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Uwrg0bJd9qwcOQFdKoBmh5
          claim_id: c_CDegbsTJKoCqyYHbL3rxNz
          source_id: s_86B2gEjvgmPLEwnXMjcD8e
          stance: supports
          locator: CBDB:39176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_86B2gEjvgmPLEwnXMjcD8e
            source_type: api_record
            title: 中国历代人物传记资料库：王瑴（CBDB 39176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39176&o=json
            external_identifier: CBDB:39176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SfKCnFqeEqgFfE62wuGN2j
        subject_person_id: p_TYg86JhtHwo2CmgPygZjDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ew5oRAR29yErqe5j9ifS7a
          claim_id: c_SfKCnFqeEqgFfE62wuGN2j
          source_id: s_86B2gEjvgmPLEwnXMjcD8e
          stance: supports
          locator: CBDB:39176
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
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

# 王瑴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑴，宋人物。曾任朝散大夫、尚書省刑部刑部司郎中、大理寺正。（中国历代人物传记资料库 CBDB 39176） | accepted |
| name.primary | 王瑴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑴（CBDB 39176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39176&o=json)
