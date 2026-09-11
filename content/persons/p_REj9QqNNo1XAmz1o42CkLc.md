---
schema: wang-person/v1
id: p_REj9QqNNo1XAmz1o42CkLc
status: active
merged_into: null
display_name: 王同叔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VH89yTGTvdC3yAuw35Msm4
        subject_person_id: p_REj9QqNNo1XAmz1o42CkLc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同叔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Buy9dHPXkD6tVPoDYA4TCK
          claim_id: c_VH89yTGTvdC3yAuw35Msm4
          source_id: s_CqLNsjgZ4HLNDbMcY2zDt7
          stance: supports
          locator: CBDB:544312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544312）
          source: &a1
            id: s_CqLNsjgZ4HLNDbMcY2zDt7
            source_type: api_record
            title: 中国历代人物传记资料库：王同叔（CBDB 544312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544312&o=json
            external_identifier: CBDB:544312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3inKQnrG93y6H6dkQBqjua
        subject_person_id: p_REj9QqNNo1XAmz1o42CkLc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同叔，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 544312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7qn5edEPjXyaRXXiJ3IJra
          claim_id: c_3inKQnrG93y6H6dkQBqjua
          source_id: s_CqLNsjgZ4HLNDbMcY2zDt7
          stance: supports
          locator: CBDB:544312
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

# 王同叔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同叔 | accepted |
| bio.summary | 王同叔，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 544312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同叔（CBDB 544312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544312&o=json)
