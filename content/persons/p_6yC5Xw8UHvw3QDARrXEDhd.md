---
schema: wang-person/v1
id: p_6yC5Xw8UHvw3QDARrXEDhd
status: active
merged_into: null
display_name: 王若訥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3xiu1FcXTW7j3pD9HiDq48
        subject_person_id: p_6yC5Xw8UHvw3QDARrXEDhd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UrjZVGjDDN8DhEpmGDKEH9
          claim_id: c_3xiu1FcXTW7j3pD9HiDq48
          source_id: s_P8fgfeJcxsTzaLA7yM3fGT
          stance: supports
          locator: CBDB:37891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37891）
          source: &a1
            id: s_P8fgfeJcxsTzaLA7yM3fGT
            source_type: api_record
            title: 中国历代人物传记资料库：王若訥（CBDB 37891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37891&o=json
            external_identifier: CBDB:37891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5xsBAJEqmxDExPgmDWuj8d
        subject_person_id: p_6yC5Xw8UHvw3QDARrXEDhd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBXxyMempoGU8t1yDaJE6H
          claim_id: c_5xsBAJEqmxDExPgmDWuj8d
          source_id: s_P8fgfeJcxsTzaLA7yM3fGT
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
  descendants:
    - claim:
        id: c_HO9hkg0JdWXlE7wuv51dx6
        subject_person_id: p_6yC5Xw8UHvw3QDARrXEDhd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XCLa5C3r2Cp73DgJP5xw8d
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dL0joohahtYKVyIa-5kN7j
          claim_id: c_HO9hkg0JdWXlE7wuv51dx6
          source_id: s_P8fgfeJcxsTzaLA7yM3fGT
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2045：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XCLa5C3r2Cp73DgJP5xw8d
        status: active
        display_name: 王龍澤
        merged_into_person_id: null
  other: []
---

# 王若訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若訥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_XCLa5C3r2Cp73DgJP5xw8d | 王龍澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若訥（CBDB 37891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37891&o=json)
