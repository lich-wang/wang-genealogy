---
schema: wang-person/v1
id: p_eK7BmxmwBKQ83huTyGiRu6
status: active
merged_into: null
display_name: 王從吉
cbdb_id: 119736
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BCwHcNCN7o4KR1oDV1SY3d
        subject_person_id: p_eK7BmxmwBKQ83huTyGiRu6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從吉，宋人物。曾任內殿崇班。（中国历代人物传记资料库 CBDB 119736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_L2xtQ2t7X895epJONZicef
          claim_id: c_BCwHcNCN7o4KR1oDV1SY3d
          source_id: s_AD4GWS6qmi9VBJoFtXawVw
          stance: supports
          locator: CBDB:119736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AD4GWS6qmi9VBJoFtXawVw
            source_type: api_record
            title: 中国历代人物传记资料库：王從吉（CBDB 119736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119736&o=json
            external_identifier: CBDB:119736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7QSJ5EodL94od1TKAiw2NW
        subject_person_id: p_eK7BmxmwBKQ83huTyGiRu6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cWtHF3oF7YAfQPgLEzSgEE
          claim_id: c_7QSJ5EodL94od1TKAiw2NW
          source_id: s_AD4GWS6qmi9VBJoFtXawVw
          stance: supports
          locator: CBDB:119736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V504xtDkvPAB7hcJojAsxW
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eK7BmxmwBKQ83huTyGiRu6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wIJPkpkhnZ9Y-toOS03MSe
          claim_id: c_V504xtDkvPAB7hcJojAsxW
          source_id: s_AD4GWS6qmi9VBJoFtXawVw
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AD4GWS6qmi9VBJoFtXawVw
            source_type: api_record
            title: 中国历代人物传记资料库：王從吉（CBDB 119736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119736&o=json
            external_identifier: CBDB:119736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_pLswWqSBPoyLmU6amLYFt3
        status: active
        display_name: 王漢忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王從吉，宋人物。曾任內殿崇班。（中国历代人物传记资料库 CBDB 119736） | accepted |
| name.primary | 王從吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pLswWqSBPoyLmU6amLYFt3 | 王漢忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從吉（CBDB 119736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119736&o=json)
