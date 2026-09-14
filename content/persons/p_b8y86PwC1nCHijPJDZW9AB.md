---
schema: wang-person/v1
id: p_b8y86PwC1nCHijPJDZW9AB
status: active
merged_into: null
display_name: 王廷籌
cbdb_id: 328858
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YJC21CJ8Dg2Ed8rsBGECSN
        subject_person_id: p_b8y86PwC1nCHijPJDZW9AB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷籌，明人物。嘉靖四十一年進士，籍贯邛州。（中国历代人物传记资料库 CBDB 328858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ti7_qHUERxC4lGJ3kv4GFf
          claim_id: c_YJC21CJ8Dg2Ed8rsBGECSN
          source_id: s_kdd5UzUDy2b4BEun7UodXj
          stance: supports
          locator: CBDB:328858
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kdd5UzUDy2b4BEun7UodXj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷籌（CBDB 328858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328858&o=json
            external_identifier: CBDB:328858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g29eekxDnG9KSe1tQc2AQA
        subject_person_id: p_b8y86PwC1nCHijPJDZW9AB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷籌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZaDJD7Nd9GXaSXUF5Tb7pG
          claim_id: c_g29eekxDnG9KSe1tQc2AQA
          source_id: s_kdd5UzUDy2b4BEun7UodXj
          stance: supports
          locator: CBDB:328858
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DbJHdgBOqHmqTATWD1pp3f
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b8y86PwC1nCHijPJDZW9AB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S_UHrHhuW0r-iT-gJtg0tQ
          claim_id: c_DbJHdgBOqHmqTATWD1pp3f
          source_id: s_JDAVL8EFuNPkELZO04Fd3u
          stance: supports
          locator: CBDB：兄弟 王廷簡（205141）之父／母 王聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷籌 与 王廷簡 为同胞（CBDB 记「兄」），王廷簡 之父／母即 王廷籌 之父／母。
          source:
            id: s_JDAVL8EFuNPkELZO04Fd3u
            source_type: api_record
            title: 中国历代人物传记资料库：王廷籌（CBDB 328858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328858&o=json
            external_identifier: CBDB:328858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HR4AmT7nnCGAtrL186TArG
        status: active
        display_name: 王聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4JCWnJxOmFsCW5ru0HsuCX
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b8y86PwC1nCHijPJDZW9AB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJQ6ayPO6vS_J1p3lzwm3c
          claim_id: c_4JCWnJxOmFsCW5ru0HsuCX
          source_id: s_JDAVL8EFuNPkELZO04Fd3u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205141 王廷簡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JDAVL8EFuNPkELZO04Fd3u
            source_type: api_record
            title: 中国历代人物传记资料库：王廷籌（CBDB 328858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328858&o=json
            external_identifier: CBDB:328858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4DFuV6CGsBNLfJsdyJ3xiy
        status: active
        display_name: 王廷簡
        merged_into_person_id: null
---

# 王廷籌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷籌，明人物。嘉靖四十一年進士，籍贯邛州。（中国历代人物传记资料库 CBDB 328858） | accepted |
| name.primary | 王廷籌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HR4AmT7nnCGAtrL186TArG | 王聘 | accepted |
| other | p_4DFuV6CGsBNLfJsdyJ3xiy | 王廷簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷籌（CBDB 328858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328858&o=json)
