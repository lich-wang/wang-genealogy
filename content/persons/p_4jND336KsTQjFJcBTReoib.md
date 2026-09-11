---
schema: wang-person/v1
id: p_4jND336KsTQjFJcBTReoib
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XjbpJaMbuJMrN6wxk6Bdq
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VCq1MMsuj9RnTLbDDs29e2
          claim_id: c_4XjbpJaMbuJMrN6wxk6Bdq
          source_id: s_inZkojFBAoF4MMfshXhVU4
          stance: supports
          locator: CBDB:287977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287977）
          source: &a1
            id: s_inZkojFBAoF4MMfshXhVU4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 287977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287977&o=json
            external_identifier: CBDB:287977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMe1mD2x6uGjJAWt2LxEWw
        subject_person_id: p_4jND336KsTQjFJcBTReoib
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
        - id: cs_BgnvC6Sz3FNL1tjJFx5JRx
          claim_id: c_NMe1mD2x6uGjJAWt2LxEWw
          source_id: s_inZkojFBAoF4MMfshXhVU4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_X1S3tBzMEuQmuVpgGlzdSl
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jf0nGw9jcW64AUseOzo6xi
          claim_id: c_X1S3tBzMEuQmuVpgGlzdSl
          source_id: s_inZkojFBAoF4MMfshXhVU4
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tz8uWFvWRBpp9FN5sbMR5o
        status: active
        display_name: 王希文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tz8uWFvWRBpp9FN5sbMR5o | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 287977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287977&o=json)
