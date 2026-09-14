---
schema: wang-person/v1
id: p_XgL2sfSoL9QfrcNrDCpzew
status: active
merged_into: null
display_name: 王學曾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4bJuaDH3LaWadJoutCDJai
        subject_person_id: p_XgL2sfSoL9QfrcNrDCpzew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qhPHAQNeBXLVetWG79C6DU
          claim_id: c_4bJuaDH3LaWadJoutCDJai
          source_id: s_vrhexrYyBQP9HmkQ7v45Gt
          stance: supports
          locator: CBDB:303185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303185）
          source: &a1
            id: s_vrhexrYyBQP9HmkQ7v45Gt
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 303185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json
            external_identifier: CBDB:303185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MG75a5g5MrmXr3b2ZmUFiY
        subject_person_id: p_XgL2sfSoL9QfrcNrDCpzew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303185）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wYIY6DkQPhxcX_nhfTLZEL
          claim_id: c_MG75a5g5MrmXr3b2ZmUFiY
          source_id: s_vrhexrYyBQP9HmkQ7v45Gt
          stance: supports
          locator: CBDB:303185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OmpatZC4uR2O-fnsVkGy_k
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XgL2sfSoL9QfrcNrDCpzew
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OgNhHWnWUlZoYw9AVvWuyp
          claim_id: c_OmpatZC4uR2O-fnsVkGy_k
          source_id: s_zyNSUOPhscSQdINM7953E_
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學曾 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學曾 之父／母。
          source:
            id: s_zyNSUOPhscSQdINM7953E_
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 303185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json
            external_identifier: CBDB:303185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xnVNk7Yn6e863HGsnbGHpw
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JR0Ad-iyWcAzUkhxsNUCKX
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XgL2sfSoL9QfrcNrDCpzew
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78gI1tKvw7tWp4wX399XmM
          claim_id: c_JR0Ad-iyWcAzUkhxsNUCKX
          source_id: s_zyNSUOPhscSQdINM7953E_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zyNSUOPhscSQdINM7953E_
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 303185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json
            external_identifier: CBDB:303185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7JNj2nXJh2KN7f9tg3Czd
        status: active
        display_name: 王學柳
        merged_into_person_id: null
---

# 王學曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學曾 | accepted |
| bio.summary | 王學曾，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnVNk7Yn6e863HGsnbGHpw | 王相 | accepted |
| other | p_U7JNj2nXJh2KN7f9tg3Czd | 王學柳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學曾（CBDB 303185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json)
