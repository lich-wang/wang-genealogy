---
schema: wang-person/v1
id: p_atfBE8SW3zcBDXScoRSUhL
status: active
merged_into: null
display_name: 王緒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJvQZWzoA7YDe1aec5Ncxr
        subject_person_id: p_atfBE8SW3zcBDXScoRSUhL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c1N1DXN7Dqxianx9Pi8hT7
          claim_id: c_QJvQZWzoA7YDe1aec5Ncxr
          source_id: s_jmvUbg68ezKf1dtjEKyknd
          stance: supports
          locator: CBDB:288742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288742）
          source: &a1
            id: s_jmvUbg68ezKf1dtjEKyknd
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 288742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json
            external_identifier: CBDB:288742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M7nMfzAx3ME5oKKzAQMAz3
        subject_person_id: p_atfBE8SW3zcBDXScoRSUhL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JjQnCvUEi4USwVLg89Jt2F
          claim_id: c_M7nMfzAx3ME5oKKzAQMAz3
          source_id: s_jmvUbg68ezKf1dtjEKyknd
          stance: supports
          locator: CBDB:288742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z-KGkoOac60iP3ikHA9_kk
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_atfBE8SW3zcBDXScoRSUhL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5Xip57YP-8xGp7HXlA9Tk
          claim_id: c_z-KGkoOac60iP3ikHA9_kk
          source_id: s_Tp7-DuHPcuSKYN1PN_1VYF
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王紳 为同胞（CBDB 记「兄」），王紳 之父／母即 王緒 之父／母。
          source:
            id: s_Tp7-DuHPcuSKYN1PN_1VYF
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 288742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json
            external_identifier: CBDB:288742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQX7wZ6kGeHGXVBXr7RepL
        status: active
        display_name: 王國寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vbY-FmR7GcyI0gVu5HKzEb
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_atfBE8SW3zcBDXScoRSUhL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1uLjGcUkiZ3vHhE_k-aoKA
          claim_id: c_vbY-FmR7GcyI0gVu5HKzEb
          source_id: s_Tp7-DuHPcuSKYN1PN_1VYF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tp7-DuHPcuSKYN1PN_1VYF
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 288742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json
            external_identifier: CBDB:288742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
---

# 王緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緒 | accepted |
| bio.summary | 王緒，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQX7wZ6kGeHGXVBXr7RepL | 王國寧 | accepted |
| other | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緒（CBDB 288742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json)
