---
schema: wang-person/v1
id: p_qFsNcQEnVHGE2g4yyYaLN1
status: active
merged_into: null
display_name: 王胤祜
cbdb_id: 211339
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mfa4p2CynkfoX4Tq1vdLML
        subject_person_id: p_qFsNcQEnVHGE2g4yyYaLN1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤祜，明人物。隆慶五年進士，籍贯丹徒。（中国历代人物传记资料库 CBDB 211339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_54aVCp2RkKttfoKRVcU963
          claim_id: c_Mfa4p2CynkfoX4Tq1vdLML
          source_id: s_xAHnw4BtSzXVkQGLktgo2G
          stance: supports
          locator: CBDB:211339
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xAHnw4BtSzXVkQGLktgo2G
            source_type: api_record
            title: 中国历代人物传记资料库：王胤祜（CBDB 211339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211339&o=json
            external_identifier: CBDB:211339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EVC2Mg9ND7nUNCHkGiK78e
        subject_person_id: p_qFsNcQEnVHGE2g4yyYaLN1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤祜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W81coe3g6PGo4VNYN2Q4bT
          claim_id: c_EVC2Mg9ND7nUNCHkGiK78e
          source_id: s_xAHnw4BtSzXVkQGLktgo2G
          stance: supports
          locator: CBDB:211339
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ne-qHblWzxpSGRUe0HgDZR
        subject_person_id: p_TdCGJkaDBDD2sDaykpJqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qFsNcQEnVHGE2g4yyYaLN1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5qcAkTC5rEsW8Y4TWShtc0
          claim_id: c_ne-qHblWzxpSGRUe0HgDZR
          source_id: s_VF3qrwNZZKSm6H3-KgBZV_
          stance: supports
          locator: CBDB：兄弟 王胤祥（126623）之父／母 王枕
          quotation: null
          interpretation_note: 由兄弟关系推断：王胤祜 与 王胤祥 为同胞（CBDB 记「兄」），王胤祥 之父／母即 王胤祜 之父／母。
          source:
            id: s_VF3qrwNZZKSm6H3-KgBZV_
            source_type: api_record
            title: 中国历代人物传记资料库：王胤祜（CBDB 211339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211339&o=json
            external_identifier: CBDB:211339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdCGJkaDBDD2sDaykpJqA5
        status: active
        display_name: 王枕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l84u9gusRMZnJ4LVWoM1B1
        subject_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qFsNcQEnVHGE2g4yyYaLN1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4DMoAJ7hmVnyJ_ShGihqdl
          claim_id: c_l84u9gusRMZnJ4LVWoM1B1
          source_id: s_VF3qrwNZZKSm6H3-KgBZV_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126623 王胤祥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VF3qrwNZZKSm6H3-KgBZV_
            source_type: api_record
            title: 中国历代人物传记资料库：王胤祜（CBDB 211339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211339&o=json
            external_identifier: CBDB:211339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6HcTFXM8o7jGP9HyscW8Hm
        status: active
        display_name: 王胤祥
        merged_into_person_id: null
---

# 王胤祜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胤祜，明人物。隆慶五年進士，籍贯丹徒。（中国历代人物传记资料库 CBDB 211339） | accepted |
| name.primary | 王胤祜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TdCGJkaDBDD2sDaykpJqA5 | 王枕 | accepted |
| other | p_6HcTFXM8o7jGP9HyscW8Hm | 王胤祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王胤祜（CBDB 211339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211339&o=json)
