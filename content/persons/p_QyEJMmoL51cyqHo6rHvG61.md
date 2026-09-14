---
schema: wang-person/v1
id: p_QyEJMmoL51cyqHo6rHvG61
status: active
merged_into: null
display_name: 王大邦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sek3VYi8WHXFoHHffuKqLT
        subject_person_id: p_QyEJMmoL51cyqHo6rHvG61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KBFrU3bEBzYC4X7pEaDcNz
          claim_id: c_sek3VYi8WHXFoHHffuKqLT
          source_id: s_LdNhrnSqUCSBN3ZhD4bM6R
          stance: supports
          locator: CBDB:220574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220574）
          source: &a1
            id: s_LdNhrnSqUCSBN3ZhD4bM6R
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 220574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220574&o=json
            external_identifier: CBDB:220574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_77MheyyEc67DyXWpqUi9BY
        subject_person_id: p_QyEJMmoL51cyqHo6rHvG61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大邦，明人物。萬曆八年進士，籍贯廣濟。（中国历代人物传记资料库 CBDB 220574）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tDVOEdi46CdFjp1nKd3c9a
          claim_id: c_77MheyyEc67DyXWpqUi9BY
          source_id: s_LdNhrnSqUCSBN3ZhD4bM6R
          stance: supports
          locator: CBDB:220574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nnh-g9hpqv5gq8ZYllS6jc
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QyEJMmoL51cyqHo6rHvG61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4IPSB5sIxPJTF2GCeHVRQ_
          claim_id: c_nnh-g9hpqv5gq8ZYllS6jc
          source_id: s_Q2PlmVvep8GNp4qZhEO2L8
          stance: supports
          locator: CBDB：兄弟 王大謨（206615）之父／母 王照
          quotation: null
          interpretation_note: 由兄弟关系推断：王大邦 与 王大謨 为同胞（CBDB 记「弟」），王大謨 之父／母即 王大邦 之父／母。
          source:
            id: s_Q2PlmVvep8GNp4qZhEO2L8
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 220574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220574&o=json
            external_identifier: CBDB:220574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CZQQ91VfnuK7NuqpB8hoXK
        status: active
        display_name: 王照
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NBqPbD2jb3G5psCM91aNAP
        subject_person_id: p_QyEJMmoL51cyqHo6rHvG61
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lWT70vvZBjmh4BtMrHAN_q
          claim_id: c_NBqPbD2jb3G5psCM91aNAP
          source_id: s_Q2PlmVvep8GNp4qZhEO2L8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206615 王大謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q2PlmVvep8GNp4qZhEO2L8
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 220574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220574&o=json
            external_identifier: CBDB:220574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TxvCUWCPj6wVBqyLV556YD
        status: active
        display_name: 王大謨
        merged_into_person_id: null
---

# 王大邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大邦 | accepted |
| bio.summary | 王大邦，明人物。萬曆八年進士，籍贯廣濟。（中国历代人物传记资料库 CBDB 220574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CZQQ91VfnuK7NuqpB8hoXK | 王照 | accepted |
| other | p_TxvCUWCPj6wVBqyLV556YD | 王大謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大邦（CBDB 220574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220574&o=json)
