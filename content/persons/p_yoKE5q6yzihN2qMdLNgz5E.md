---
schema: wang-person/v1
id: p_yoKE5q6yzihN2qMdLNgz5E
status: active
merged_into: null
display_name: 王廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XYjr8X2SjJD58gSJuR7TM1
        subject_person_id: p_yoKE5q6yzihN2qMdLNgz5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rkRVNjpSUkRDk3m8XgZmG
          claim_id: c_XYjr8X2SjJD58gSJuR7TM1
          source_id: s_qk3L8vkp6WeFqjKkZmnoCP
          stance: supports
          locator: CBDB:100854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100854）
          source: &a1
            id: s_qk3L8vkp6WeFqjKkZmnoCP
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 100854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100854&o=json
            external_identifier: CBDB:100854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6y66f1Bdf3SQbVGvH8qzGE
        subject_person_id: p_yoKE5q6yzihN2qMdLNgz5E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uhwXz1xEq2RhTUY8EYfv7d
          claim_id: c_6y66f1Bdf3SQbVGvH8qzGE
          source_id: s_qk3L8vkp6WeFqjKkZmnoCP
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

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 100854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100854&o=json)
