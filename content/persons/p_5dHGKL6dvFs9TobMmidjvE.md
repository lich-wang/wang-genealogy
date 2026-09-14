---
schema: wang-person/v1
id: p_5dHGKL6dvFs9TobMmidjvE
status: active
merged_into: null
display_name: 王應昇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kh1z3MyssUX8DoLZeezob
        subject_person_id: p_5dHGKL6dvFs9TobMmidjvE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KMLFwPt4oQQGLhk9kaKQjA
          claim_id: c_3kh1z3MyssUX8DoLZeezob
          source_id: s_t49EMDbWMjE67rUJxQPfkA
          stance: supports
          locator: CBDB:208839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208839）
          source: &a1
            id: s_t49EMDbWMjE67rUJxQPfkA
            source_type: api_record
            title: 中国历代人物传记资料库：王應昇（CBDB 208839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208839&o=json
            external_identifier: CBDB:208839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zb6pK6QYFCKJVZ49iwYdpK
        subject_person_id: p_5dHGKL6dvFs9TobMmidjvE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應昇，明人物。隆慶五年進士，籍贯東流。（中国历代人物传记资料库 CBDB 208839）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iC8voNcQptLcRt7wLz0xkn
          claim_id: c_zb6pK6QYFCKJVZ49iwYdpK
          source_id: s_t49EMDbWMjE67rUJxQPfkA
          stance: supports
          locator: CBDB:208839
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jpO37TSsu2VufCwaHZ4dcC
        subject_person_id: p_9wJmZu8ZKLBaT7U97D7E3V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5dHGKL6dvFs9TobMmidjvE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7VGDMh8QXZpHZ3WvEn6lh
          claim_id: c_jpO37TSsu2VufCwaHZ4dcC
          source_id: s_QWaO4R4YU5KSBKct-J8hpM
          stance: supports
          locator: CBDB：兄弟 王應乾（205803）之父／母 王文錦
          quotation: null
          interpretation_note: 由兄弟关系推断：王應昇 与 王應乾 为同胞（CBDB 记「兄」），王應乾 之父／母即 王應昇 之父／母。
          source:
            id: s_QWaO4R4YU5KSBKct-J8hpM
            source_type: api_record
            title: 中国历代人物传记资料库：王應昇（CBDB 208839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208839&o=json
            external_identifier: CBDB:208839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9wJmZu8ZKLBaT7U97D7E3V
        status: active
        display_name: 王文錦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T0yhSBgYgd9bT5Fjzk-iVE
        subject_person_id: p_5dHGKL6dvFs9TobMmidjvE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zio1NsYW8nh8tpfzoJzjYJ
          claim_id: c_T0yhSBgYgd9bT5Fjzk-iVE
          source_id: s_QWaO4R4YU5KSBKct-J8hpM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205803 王應乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QWaO4R4YU5KSBKct-J8hpM
            source_type: api_record
            title: 中国历代人物传记资料库：王應昇（CBDB 208839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208839&o=json
            external_identifier: CBDB:208839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_svtNF7GBN4DZNA4eqhmCDp
        status: active
        display_name: 王應乾
        merged_into_person_id: null
---

# 王應昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應昇 | accepted |
| bio.summary | 王應昇，明人物。隆慶五年進士，籍贯東流。（中国历代人物传记资料库 CBDB 208839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wJmZu8ZKLBaT7U97D7E3V | 王文錦 | accepted |
| other | p_svtNF7GBN4DZNA4eqhmCDp | 王應乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應昇（CBDB 208839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208839&o=json)
