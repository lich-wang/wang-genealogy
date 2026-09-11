---
schema: wang-person/v1
id: p_LRXuyQYgphwofuM383zBNg
status: active
merged_into: null
display_name: 王昕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rLPg1s7737e9VZebvsnPpa
        subject_person_id: p_LRXuyQYgphwofuM383zBNg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3HSVWuVGFeKY3jRqeX3Wt3
          claim_id: c_rLPg1s7737e9VZebvsnPpa
          source_id: s_Qfyw2LaJPQ21S3S5sRY758
          stance: supports
          locator: CBDB:301174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301174）
          source: &a1
            id: s_Qfyw2LaJPQ21S3S5sRY758
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 301174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301174&o=json
            external_identifier: CBDB:301174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sw4zJdrUZKmrJSF8uV5KG5
        subject_person_id: p_LRXuyQYgphwofuM383zBNg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WEsWcT1MAZk3sVicGd-g9h
          claim_id: c_sw4zJdrUZKmrJSF8uV5KG5
          source_id: s_Qfyw2LaJPQ21S3S5sRY758
          stance: supports
          locator: CBDB:301174
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
  descendants:
    - claim:
        id: c_QfP_71pfFgVKJTKypG8HOV
        subject_person_id: p_LRXuyQYgphwofuM383zBNg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZG9ps5aSpX-09Sm0Svvg3-
          claim_id: c_QfP_71pfFgVKJTKypG8HOV
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n2Bush7TsNx4ZZ5zuJLHqz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚學（CBDB 126576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json
            external_identifier: CBDB:126576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4Zy974Lzqz8TpZW2QVpmsw
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  other: []
---

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昕 | accepted |
| bio.summary | 王昕，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301174） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4Zy974Lzqz8TpZW2QVpmsw | 王尚學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚學（CBDB 126576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json)
- [中国历代人物传记资料库：王昕（CBDB 301174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301174&o=json)
