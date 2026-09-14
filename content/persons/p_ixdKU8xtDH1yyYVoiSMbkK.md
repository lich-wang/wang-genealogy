---
schema: wang-person/v1
id: p_ixdKU8xtDH1yyYVoiSMbkK
status: active
merged_into: null
display_name: 王軫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EsFNowF4wSzPfwPokBjCCW
        subject_person_id: p_ixdKU8xtDH1yyYVoiSMbkK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XHX3PEtwA7NBbEWX9U5KuG
          claim_id: c_EsFNowF4wSzPfwPokBjCCW
          source_id: s_WWLCBNPKevz3QhYa7ZVDhY
          stance: supports
          locator: CBDB:261848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261848）
          source: &a1
            id: s_WWLCBNPKevz3QhYa7ZVDhY
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 261848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261848&o=json
            external_identifier: CBDB:261848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J93t21M4BR4w41vjQ1cxaW
        subject_person_id: p_ixdKU8xtDH1yyYVoiSMbkK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_axb6X-dzQ94NpzYWAYOqlT
          claim_id: c_J93t21M4BR4w41vjQ1cxaW
          source_id: s_WWLCBNPKevz3QhYa7ZVDhY
          stance: supports
          locator: CBDB:261848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PWiIAtQM3W5JAn1lh2HTNN
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ixdKU8xtDH1yyYVoiSMbkK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hAzrEoUrXgGHL8LQxciazD
          claim_id: c_PWiIAtQM3W5JAn1lh2HTNN
          source_id: s_CzNJGCCw-K-GxNOf2QTOME
          stance: supports
          locator: CBDB：兄弟 王奎（200714）之父／母 王乾溥
          quotation: null
          interpretation_note: 由兄弟关系推断：王軫 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王軫 之父／母。
          source:
            id: s_CzNJGCCw-K-GxNOf2QTOME
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 261848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261848&o=json
            external_identifier: CBDB:261848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g6tTV8xspEG83C3EPVzpm7
        status: active
        display_name: 王乾溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_H2kvQyJHN1216x8ua2r44c
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ixdKU8xtDH1yyYVoiSMbkK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x63TjfSq-MCK-96wfVSZVz
          claim_id: c_H2kvQyJHN1216x8ua2r44c
          source_id: s_CzNJGCCw-K-GxNOf2QTOME
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200714 王奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CzNJGCCw-K-GxNOf2QTOME
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 261848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261848&o=json
            external_identifier: CBDB:261848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JhT8MPbcy6fqyD8xKqm8c7
        status: active
        display_name: 王奎
        merged_into_person_id: null
---

# 王軫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軫 | accepted |
| bio.summary | 王軫，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g6tTV8xspEG83C3EPVzpm7 | 王乾溥 | accepted |
| other | p_JhT8MPbcy6fqyD8xKqm8c7 | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軫（CBDB 261848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261848&o=json)
