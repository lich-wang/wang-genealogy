---
schema: wang-person/v1
id: p_sszQgtJbvH2fNQJN3Kq15V
status: active
merged_into: null
display_name: 王震
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApNtTtwu5mnS9z63fQzdMn
        subject_person_id: p_sszQgtJbvH2fNQJN3Kq15V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G8kevgBNRzFeBSznfErxdQ
          claim_id: c_ApNtTtwu5mnS9z63fQzdMn
          source_id: s_qDd6Btg4kiZQkGp22hpWxe
          stance: supports
          locator: CBDB:215751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215751）
          source: &a1
            id: s_qDd6Btg4kiZQkGp22hpWxe
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 215751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json
            external_identifier: CBDB:215751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2d9PVyTkMN92gKefqbwyvP
        subject_person_id: p_sszQgtJbvH2fNQJN3Kq15V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215751）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_laeY_aTtV7BGRA_qKAqpA2
          claim_id: c_2d9PVyTkMN92gKefqbwyvP
          source_id: s_qDd6Btg4kiZQkGp22hpWxe
          stance: supports
          locator: CBDB:215751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_quSFllqdwvma3e8edIo9as
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sszQgtJbvH2fNQJN3Kq15V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fldHiSXds24-B3Lev4UD5
          claim_id: c_quSFllqdwvma3e8edIo9as
          source_id: s_no9ta3BPmtd_JbMD1yOl4X
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王震 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王震 之父／母。
          source:
            id: s_no9ta3BPmtd_JbMD1yOl4X
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 215751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json
            external_identifier: CBDB:215751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X44YhNxEhhrLSWmgtLLBJw
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aCK8bL3vmaJ-eMNg9Lrx9q
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sszQgtJbvH2fNQJN3Kq15V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wkl6VGaYy09FZirx5jfH23
          claim_id: c_aCK8bL3vmaJ-eMNg9Lrx9q
          source_id: s_no9ta3BPmtd_JbMD1yOl4X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_no9ta3BPmtd_JbMD1yOl4X
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 215751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json
            external_identifier: CBDB:215751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dJSjDNjDHVG2RbXzuMWW8y
        status: active
        display_name: 王豫
        merged_into_person_id: null
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | 王震，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X44YhNxEhhrLSWmgtLLBJw | 王來聘 | accepted |
| other | p_dJSjDNjDHVG2RbXzuMWW8y | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 215751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json)
