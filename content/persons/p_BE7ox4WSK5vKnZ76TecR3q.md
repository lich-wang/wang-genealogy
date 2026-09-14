---
schema: wang-person/v1
id: p_BE7ox4WSK5vKnZ76TecR3q
status: active
merged_into: null
display_name: 王裳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nhzbwziSUB6KQpXemGyR55
        subject_person_id: p_BE7ox4WSK5vKnZ76TecR3q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FCBXShTA52Gu6uQHvxXybR
          claim_id: c_nhzbwziSUB6KQpXemGyR55
          source_id: s_qhiJqEVMn8GEj4UxvFk82k
          stance: supports
          locator: CBDB:22139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22139）
          source: &a1
            id: s_qhiJqEVMn8GEj4UxvFk82k
            source_type: api_record
            title: 中国历代人物传记资料库：王裳（CBDB 22139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22139&o=json
            external_identifier: CBDB:22139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xz1s5QDvntCTZDbau6nFYd
        subject_person_id: p_BE7ox4WSK5vKnZ76TecR3q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裳，宋人物。籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 22139）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L9rD8RhtddYjRW7d6yhPIl
          claim_id: c_xz1s5QDvntCTZDbau6nFYd
          source_id: s_qhiJqEVMn8GEj4UxvFk82k
          stance: supports
          locator: CBDB:22139
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OsTyQxqLV0xvYh82URCome
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BE7ox4WSK5vKnZ76TecR3q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j7LZ9rNhVn1fOjqvngUqbu
          claim_id: c_OsTyQxqLV0xvYh82URCome
          source_id: s_t3sBzL3hY007ajRvpQPQxO
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22137）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_t3sBzL3hY007ajRvpQPQxO
            source_type: api_record
            title: 中国历代人物传记资料库：王裳（CBDB 22139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22139&o=json
            external_identifier: CBDB:22139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R8GNfiAEFUGPFE7VBAqAUP
        status: active
        display_name: 王繹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王裳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裳 | accepted |
| bio.summary | 王裳，宋人物。籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 22139） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R8GNfiAEFUGPFE7VBAqAUP | 王繹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王裳（CBDB 22139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22139&o=json)
