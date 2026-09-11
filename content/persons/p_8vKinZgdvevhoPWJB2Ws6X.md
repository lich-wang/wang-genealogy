---
schema: wang-person/v1
id: p_8vKinZgdvevhoPWJB2Ws6X
status: active
merged_into: null
display_name: 王祖庚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q582zAztTk7Gxxi2cbTVwr
        subject_person_id: p_8vKinZgdvevhoPWJB2Ws6X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YwyieaBX5NBBLXbiS4ZnBg
          claim_id: c_Q582zAztTk7Gxxi2cbTVwr
          source_id: s_352NWp9itCDEB6zpAQXvQS
          stance: supports
          locator: CBDB:71920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71920）
          source: &a1
            id: s_352NWp9itCDEB6zpAQXvQS
            source_type: api_record
            title: 中国历代人物传记资料库：王祖庚（CBDB 71920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71920&o=json
            external_identifier: CBDB:71920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5smhxqwCEArqGmtBoauJoZ
        subject_person_id: p_8vKinZgdvevhoPWJB2Ws6X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1702年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYowoJjTVNHmX9fXf5P1mg
          claim_id: c_5smhxqwCEArqGmtBoauJoZ
          source_id: s_352NWp9itCDEB6zpAQXvQS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e2qzgUSGJLRQ77fvhj7M1L
        subject_person_id: p_8vKinZgdvevhoPWJB2Ws6X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1765年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nL7r1eLx7pKQgCP7XQ79r
          claim_id: c_e2qzgUSGJLRQ77fvhj7M1L
          source_id: s_352NWp9itCDEB6zpAQXvQS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VWVUNTYse82mPoxBmL7KFi
        subject_person_id: p_8vKinZgdvevhoPWJB2Ws6X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖庚（1702年—1765年），清人物。籍贯華亭。（中国历代人物传记资料库 CBDB 71920）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3j8uiwDfThzmhQKuAx1QVj
          claim_id: c_VWVUNTYse82mPoxBmL7KFi
          source_id: s_352NWp9itCDEB6zpAQXvQS
          stance: supports
          locator: CBDB:71920
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

# 王祖庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖庚 | accepted |
| birth.date | 1702年 | accepted |
| death.date | 1765年 | accepted |
| bio.summary | 王祖庚（1702年—1765年），清人物。籍贯華亭。（中国历代人物传记资料库 CBDB 71920） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖庚（CBDB 71920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71920&o=json)
