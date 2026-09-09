---
schema: wang-person/v1
id: p_yC94aBA85uRoMMF4GZ8UNQ
status: active
merged_into: null
display_name: 王希曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W79p2k67zcJUqQQFSZDXqZ
        subject_person_id: p_yC94aBA85uRoMMF4GZ8UNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aR746d1XaCPxTBEn5t5bGS
          claim_id: c_W79p2k67zcJUqQQFSZDXqZ
          source_id: s_1wHK4EsFAzaohwpH1wqAvA
          stance: supports
          locator: CBDB:501935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501935）
          source: &a1
            id: s_1wHK4EsFAzaohwpH1wqAvA
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 501935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501935&o=json
            external_identifier: CBDB:501935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yyYFHoCyJgzrbPdZh6gcLf
        subject_person_id: p_yC94aBA85uRoMMF4GZ8UNQ
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
        - id: cs_Eqcp6KRsRCzUPX1Qz2WUqh
          claim_id: c_yyYFHoCyJgzrbPdZh6gcLf
          source_id: s_1wHK4EsFAzaohwpH1wqAvA
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

# 王希曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希曾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希曾（CBDB 501935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501935&o=json)
