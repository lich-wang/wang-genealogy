---
schema: wang-person/v1
id: p_E8R8PCXPkP9eN4uAPUmfkY
status: active
merged_into: null
display_name: 王嘉言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EX36rhbzQp5vqnpMJsL6rx
        subject_person_id: p_E8R8PCXPkP9eN4uAPUmfkY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TT46zdwM2cs84SLVXx1bMj
          claim_id: c_EX36rhbzQp5vqnpMJsL6rx
          source_id: s_C9cLmmQjXiVzCxgPjKe73o
          stance: supports
          locator: CBDB:235968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235968）
          source: &a1
            id: s_C9cLmmQjXiVzCxgPjKe73o
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 235968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235968&o=json
            external_identifier: CBDB:235968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pRkNJB7DaxeZfZP2QDKps
        subject_person_id: p_E8R8PCXPkP9eN4uAPUmfkY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言，明人物。入仕進士，曾任參議。（中国历代人物传记资料库 CBDB 235968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_saTuIiJ1ErbEFyfWmnx9WD
          claim_id: c_8pRkNJB7DaxeZfZP2QDKps
          source_id: s_C9cLmmQjXiVzCxgPjKe73o
          stance: supports
          locator: CBDB:235968
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
        id: c_jv4Av7orUItFpZiAObR3gW
        subject_person_id: p_E8R8PCXPkP9eN4uAPUmfkY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e9ZscdiwNVZ4PL6Xg7RFi6
          claim_id: c_jv4Av7orUItFpZiAObR3gW
          source_id: s_C9cLmmQjXiVzCxgPjKe73o
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  other: []
---

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| bio.summary | 王嘉言，明人物。入仕進士，曾任參議。（中国历代人物传记资料库 CBDB 235968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 235968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235968&o=json)
