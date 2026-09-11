---
schema: wang-person/v1
id: p_FH9C8mxwiAGa9bxNfZxCHb
status: active
merged_into: null
display_name: 王卓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RXEJJkeepbMpckUkZYXtsc
        subject_person_id: p_FH9C8mxwiAGa9bxNfZxCHb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wFUtSYjHPAHG1CXNZpbWZd
          claim_id: c_RXEJJkeepbMpckUkZYXtsc
          source_id: s_H4muimvHhZ2vAhtEwQvFEC
          stance: supports
          locator: CBDB:557912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557912）
          source: &a1
            id: s_H4muimvHhZ2vAhtEwQvFEC
            source_type: api_record
            title: 中国历代人物传记资料库：王卓（CBDB 557912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557912&o=json
            external_identifier: CBDB:557912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MRgbCqAdLcNsLwUGG1axaf
        subject_person_id: p_FH9C8mxwiAGa9bxNfZxCHb
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
        - id: cs_GmcomFKoCa8JrJ1B6xV6NH
          claim_id: c_MRgbCqAdLcNsLwUGG1axaf
          source_id: s_H4muimvHhZ2vAhtEwQvFEC
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
  spouses:
    - claim:
        id: c_9QyQvffLOv0qxJYecM8lna
        subject_person_id: p_FH9C8mxwiAGa9bxNfZxCHb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XN94nAd1rNe3RJxnMCtCCw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3ji8hCtzAzvO-h2dEJpzH
          claim_id: c_9QyQvffLOv0qxJYecM8lna
          source_id: s_bLE84bfPNfIxUgEba3cDkL
          stance: supports
          locator: 南陽府志，lgid=878796：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bLE84bfPNfIxUgEba3cDkL
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王卓妻)（CBDB 557913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557913&o=json
            external_identifier: CBDB:557913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XN94nAd1rNe3RJxnMCtCCw
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王卓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_XN94nAd1rNe3RJxnMCtCCw | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王卓妻)（CBDB 557913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557913&o=json)
- [中国历代人物传记资料库：王卓（CBDB 557912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557912&o=json)
