---
schema: wang-person/v1
id: p_toDuVbQYQC9CXsCeNBgVPi
status: active
merged_into: null
display_name: 王本灝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGG9Bn1PsJHafVNZYaFkiL
        subject_person_id: p_toDuVbQYQC9CXsCeNBgVPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本灝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MY7P2AwSyJt7oNM1Chhmbn
          claim_id: c_LGG9Bn1PsJHafVNZYaFkiL
          source_id: s_7SDrjEWjVL2z6USgiDphot
          stance: supports
          locator: CBDB:638660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638660）
          source: &a1
            id: s_7SDrjEWjVL2z6USgiDphot
            source_type: api_record
            title: 中国历代人物传记资料库：王本灝（CBDB 638660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638660&o=json
            external_identifier: CBDB:638660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.709Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mfQDxaw7rebErnc1J6tULp
        subject_person_id: p_toDuVbQYQC9CXsCeNBgVPi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFjxQ7FuF7xhAA66xud6cC
          claim_id: c_mfQDxaw7rebErnc1J6tULp
          source_id: s_7SDrjEWjVL2z6USgiDphot
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

# 王本灝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本灝 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本灝（CBDB 638660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638660&o=json)
