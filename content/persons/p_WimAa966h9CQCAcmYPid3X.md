---
schema: wang-person/v1
id: p_WimAa966h9CQCAcmYPid3X
status: active
merged_into: null
display_name: 王鼎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMDLhJUzQfH6USrePwZi6U
        subject_person_id: p_WimAa966h9CQCAcmYPid3X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_19nb8PssE33sCSxPHymi5X
          claim_id: c_AMDLhJUzQfH6USrePwZi6U
          source_id: s_hQVr1HDSxyHMEqFa65PxWh
          stance: supports
          locator: CBDB:322416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322416）
          source: &a1
            id: s_hQVr1HDSxyHMEqFa65PxWh
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 322416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json
            external_identifier: CBDB:322416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BJfeoVL7DErMyHKGwRhtnB
        subject_person_id: p_WimAa966h9CQCAcmYPid3X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。宣德五年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 322416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vUag3FaKSaSFl3B3nNu--t
          claim_id: c_BJfeoVL7DErMyHKGwRhtnB
          source_id: s_hQVr1HDSxyHMEqFa65PxWh
          stance: supports
          locator: CBDB:322416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9YYlt_JmTjN-Ch-x4OY9vl
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WimAa966h9CQCAcmYPid3X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IQcacJIF30RmDcCzO-q2qH
          claim_id: c_9YYlt_JmTjN-Ch-x4OY9vl
          source_id: s_f9hZ9u0Bhf8thKfIvgnGQJ
          stance: supports
          locator: CBDB：兄弟 王復（204673）之父／母 王曛
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼎 与 王復 为同胞（CBDB 记「兄」），王復 之父／母即 王鼎 之父／母。
          source:
            id: s_f9hZ9u0Bhf8thKfIvgnGQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 322416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json
            external_identifier: CBDB:322416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8yEkMMZhbwZ7U5KkErHEa1
        status: active
        display_name: 王曛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-jBpLhWuNHzRmwdupC1nMZ
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WimAa966h9CQCAcmYPid3X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SzzJieqr55G6SvM2r222-N
          claim_id: c_-jBpLhWuNHzRmwdupC1nMZ
          source_id: s_f9hZ9u0Bhf8thKfIvgnGQJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204673 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f9hZ9u0Bhf8thKfIvgnGQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 322416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json
            external_identifier: CBDB:322416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PgnoAWh3cGCvbB7v53hNcS
        status: active
        display_name: 王復
        merged_into_person_id: null
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。宣德五年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 322416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8yEkMMZhbwZ7U5KkErHEa1 | 王曛 | accepted |
| other | p_PgnoAWh3cGCvbB7v53hNcS | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 322416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json)
