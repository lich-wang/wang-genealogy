---
schema: wang-person/v1
id: p_jJ6uwzEZ3GiRCVSQcjzESL
status: active
merged_into: null
display_name: 王來檄
cbdb_id: 335620
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J3WBDhGtmjaDH3KaGH1RPg
        subject_person_id: p_jJ6uwzEZ3GiRCVSQcjzESL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來檄，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VAcqRgk3PETs5nQ6-zfITX
          claim_id: c_J3WBDhGtmjaDH3KaGH1RPg
          source_id: s_NgkhVALokRkUeQMA4S9c1A
          stance: supports
          locator: CBDB:335620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NgkhVALokRkUeQMA4S9c1A
            source_type: api_record
            title: 中国历代人物传记资料库：王來檄（CBDB 335620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335620&o=json
            external_identifier: CBDB:335620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_T42Y5jY6csBSHcdfaEtiTA
        subject_person_id: p_jJ6uwzEZ3GiRCVSQcjzESL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來檄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JdAKULCAe227UyDgQtqzjq
          claim_id: c_T42Y5jY6csBSHcdfaEtiTA
          source_id: s_NgkhVALokRkUeQMA4S9c1A
          stance: supports
          locator: CBDB:335620
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qMUyAyxE3970b_48LrHcve
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jJ6uwzEZ3GiRCVSQcjzESL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jW_gxnheHCz8rZAbiJZz9n
          claim_id: c_qMUyAyxE3970b_48LrHcve
          source_id: s_XKLcSwyj8iZt2QGFclx7tZ
          stance: supports
          locator: CBDB：兄弟 王來召（205587）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王來檄 与 王來召 为同胞（CBDB 记「弟」），王來召 之父／母即 王來檄 之父／母。
          source:
            id: s_XKLcSwyj8iZt2QGFclx7tZ
            source_type: api_record
            title: 中国历代人物传记资料库：王來檄（CBDB 335620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335620&o=json
            external_identifier: CBDB:335620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hZ7fSswDmKyd393yXgK7dU
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YM8dLUDHhV6HWSm2HmpcPi
        subject_person_id: p_jJ6uwzEZ3GiRCVSQcjzESL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ldE4nnIDbw0IBHqupl9na5
          claim_id: c_YM8dLUDHhV6HWSm2HmpcPi
          source_id: s_XKLcSwyj8iZt2QGFclx7tZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205587 王來召）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XKLcSwyj8iZt2QGFclx7tZ
            source_type: api_record
            title: 中国历代人物传记资料库：王來檄（CBDB 335620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335620&o=json
            external_identifier: CBDB:335620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mJFG2VmWYuWZQLFEyB56Dh
        status: active
        display_name: 王來召
        merged_into_person_id: null
---

# 王來檄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來檄，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335620） | accepted |
| name.primary | 王來檄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hZ7fSswDmKyd393yXgK7dU | 王俊民 | accepted |
| other | p_mJFG2VmWYuWZQLFEyB56Dh | 王來召 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來檄（CBDB 335620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335620&o=json)
