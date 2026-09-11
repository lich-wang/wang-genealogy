---
schema: wang-person/v1
id: p_dH993M7mqQgLEoYCPRUqM5
status: active
merged_into: null
display_name: 朱氏
revision: 1
cbdb_id: 164875
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ot2xWpwIMsxuk6C6SEd-Ni
        subject_person_id: p_dH993M7mqQgLEoYCPRUqM5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__8ZYOg5PLuiz6qAeC_mTjT
          claim_id: c_ot2xWpwIMsxuk6C6SEd-Ni
          source_id: s_QzgjFLagWWJBman26sBn5i
          stance: supports
          locator: CBDB:164875
          quotation: null
          interpretation_note: CBDB 明确记录的王守節配偶
          source: &a1
            id: s_QzgjFLagWWJBman26sBn5i
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王守節妻)（CBDB 164875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164875&o=json
            external_identifier: CBDB:164875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fD1WQEgjQug0a9EdphNonJ
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dH993M7mqQgLEoYCPRUqM5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypyQ0uRuboCD-8-8AwN8CT
          claim_id: c_fD1WQEgjQug0a9EdphNonJ
          source_id: s_QzgjFLagWWJBman26sBn5i
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao87：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bupKiVr68PqXVERhZYa1QZ
        status: active
        display_name: 王守節
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bupKiVr68PqXVERhZYa1QZ | 王守節 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱氏(王守節妻)（CBDB 164875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164875&o=json)
