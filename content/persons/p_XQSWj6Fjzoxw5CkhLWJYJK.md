---
schema: wang-person/v1
id: p_XQSWj6Fjzoxw5CkhLWJYJK
status: active
merged_into: null
display_name: 王頂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CMaGuzq2rKC3qJKSuDuweQ
        subject_person_id: p_XQSWj6Fjzoxw5CkhLWJYJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EuNxwXC5kSP8NTwdCzxus3
          claim_id: c_CMaGuzq2rKC3qJKSuDuweQ
          source_id: s_wU8GvPA4Px2HixFLEvJ11H
          stance: supports
          locator: CBDB:227707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227707）
          source: &a1
            id: s_wU8GvPA4Px2HixFLEvJ11H
            source_type: api_record
            title: 中国历代人物传记资料库：王頂（CBDB 227707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227707&o=json
            external_identifier: CBDB:227707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_foS53vLQt87Es2DE8S3Csn
        subject_person_id: p_XQSWj6Fjzoxw5CkhLWJYJK
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
        - id: cs_Ffw8m6KW3K2LGbCjL2SwCo
          claim_id: c_foS53vLQt87Es2DE8S3Csn
          source_id: s_wU8GvPA4Px2HixFLEvJ11H
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

# 王頂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頂（CBDB 227707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227707&o=json)
