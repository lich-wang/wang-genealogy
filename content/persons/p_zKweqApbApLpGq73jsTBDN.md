---
schema: wang-person/v1
id: p_zKweqApbApLpGq73jsTBDN
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MBQx6dFp2gJMvmizvmsKQX
        subject_person_id: p_zKweqApbApLpGq73jsTBDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4y6PKKocRieyB7euChp3Bg
          claim_id: c_MBQx6dFp2gJMvmizvmsKQX
          source_id: s_VQ8ufxKeSvFg1Mp7RW7qQy
          stance: supports
          locator: CBDB:454541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454541）
          source: &a1
            id: s_VQ8ufxKeSvFg1Mp7RW7qQy
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 454541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454541&o=json
            external_identifier: CBDB:454541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o6C9jfMRrwM5A7Y6FgNbf8
        subject_person_id: p_zKweqApbApLpGq73jsTBDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YbmU4dyhH2iK3M6iXCH3fd
          claim_id: c_o6C9jfMRrwM5A7Y6FgNbf8
          source_id: s_VQ8ufxKeSvFg1Mp7RW7qQy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 454541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454541&o=json)
