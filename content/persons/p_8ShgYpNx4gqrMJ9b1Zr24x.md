---
schema: wang-person/v1
id: p_8ShgYpNx4gqrMJ9b1Zr24x
status: active
merged_into: null
display_name: 王容言
cbdb_id: 317021
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_72HVX8JsA9MHYng9fGBAkX
        subject_person_id: p_8ShgYpNx4gqrMJ9b1Zr24x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容言，明人物。嘉靖三十二年進士，籍贯馬邑，入仕監生。（中国历代人物传记资料库 CBDB 317021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lASTk5KKWHJPZuBSg83RYr
          claim_id: c_72HVX8JsA9MHYng9fGBAkX
          source_id: s_Kqie82xigebKNErztegpMA
          stance: supports
          locator: CBDB:317021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Kqie82xigebKNErztegpMA
            source_type: api_record
            title: 中国历代人物传记资料库：王容言（CBDB 317021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317021&o=json
            external_identifier: CBDB:317021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_etjNJ6cuLxPghDe7wLjg13
        subject_person_id: p_8ShgYpNx4gqrMJ9b1Zr24x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BNKGjvGtFXGJAXmGv45F8U
          claim_id: c_etjNJ6cuLxPghDe7wLjg13
          source_id: s_Kqie82xigebKNErztegpMA
          stance: supports
          locator: CBDB:317021
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T8oNoF9tEl8rGq-SNh9he9
        subject_person_id: p_SrQ4q1BgrQiRVKwrVN4Lqb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ShgYpNx4gqrMJ9b1Zr24x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3FKBTuS0nN1UFEKMVIOiY
          claim_id: c_T8oNoF9tEl8rGq-SNh9he9
          source_id: s__W05XqVSBFO4kDxbHDsbCG
          stance: supports
          locator: CBDB：兄弟 王察言（204284）之父／母 王應
          quotation: null
          interpretation_note: 由兄弟关系推断：王容言 与 王察言 为同胞（CBDB 记「兄」），王察言 之父／母即 王容言 之父／母。
          source:
            id: s__W05XqVSBFO4kDxbHDsbCG
            source_type: api_record
            title: 中国历代人物传记资料库：王容言（CBDB 317021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317021&o=json
            external_identifier: CBDB:317021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SrQ4q1BgrQiRVKwrVN4Lqb
        status: active
        display_name: 王應
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3WZ6g62YhSqvjkmWsyqZT7
        subject_person_id: p_8ShgYpNx4gqrMJ9b1Zr24x
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_waicV9Fo2q7nkgGJNdNMWK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bWIlFZ9H3Pr9-jsNH39b5L
          claim_id: c_3WZ6g62YhSqvjkmWsyqZT7
          source_id: s__W05XqVSBFO4kDxbHDsbCG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204284 王察言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__W05XqVSBFO4kDxbHDsbCG
            source_type: api_record
            title: 中国历代人物传记资料库：王容言（CBDB 317021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317021&o=json
            external_identifier: CBDB:317021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_waicV9Fo2q7nkgGJNdNMWK
        status: active
        display_name: 王察言
        merged_into_person_id: null
---

# 王容言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王容言，明人物。嘉靖三十二年進士，籍贯馬邑，入仕監生。（中国历代人物传记资料库 CBDB 317021） | accepted |
| name.primary | 王容言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SrQ4q1BgrQiRVKwrVN4Lqb | 王應 | accepted |
| other | p_waicV9Fo2q7nkgGJNdNMWK | 王察言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王容言（CBDB 317021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317021&o=json)
