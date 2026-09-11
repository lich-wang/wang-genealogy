---
schema: wang-person/v1
id: p_UAAM7FSBX715etFhfpCdS4
status: active
merged_into: null
display_name: 王同海
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wi2nc9utkkc6CuLjnJ8VNz
        subject_person_id: p_UAAM7FSBX715etFhfpCdS4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1n5XtahZYxQMva3c2vnzUo
          claim_id: c_wi2nc9utkkc6CuLjnJ8VNz
          source_id: s_yiuo1uLDuWPY14t5i3Yvc1
          stance: supports
          locator: CBDB:636508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636508）
          source: &a1
            id: s_yiuo1uLDuWPY14t5i3Yvc1
            source_type: api_record
            title: 中国历代人物传记资料库：王同海（CBDB 636508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636508&o=json
            external_identifier: CBDB:636508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_44dLSDjxWbdfsWfdffkd6D
        subject_person_id: p_UAAM7FSBX715etFhfpCdS4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同海，清人物。籍贯諸城，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636508）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QGWXJr98ltbZl54gHLIMiM
          claim_id: c_44dLSDjxWbdfsWfdffkd6D
          source_id: s_yiuo1uLDuWPY14t5i3Yvc1
          stance: supports
          locator: CBDB:636508
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

# 王同海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同海 | accepted |
| bio.summary | 王同海，清人物。籍贯諸城，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636508） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同海（CBDB 636508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636508&o=json)
