---
schema: wang-person/v1
id: p_ENcN1JP5Ttz5sbf9M3tXox
status: active
merged_into: null
display_name: 王三壽
cbdb_id: 214406
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_si5UbMbeBipzJtUFT2jwt7
        subject_person_id: p_ENcN1JP5Ttz5sbf9M3tXox
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三壽，明人物。萬曆二年進士，籍贯安平。（中国历代人物传记资料库 CBDB 214406）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bPL7mR17dbdYqhP6nEPmOU
          claim_id: c_si5UbMbeBipzJtUFT2jwt7
          source_id: s_3JUbt7CMxfSZ6JQK6Bo62f
          stance: supports
          locator: CBDB:214406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3JUbt7CMxfSZ6JQK6Bo62f
            source_type: api_record
            title: 中国历代人物传记资料库：王三壽（CBDB 214406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json
            external_identifier: CBDB:214406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hdrRdEKktf9382V5XQbWWF
        subject_person_id: p_ENcN1JP5Ttz5sbf9M3tXox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EutwHQxqrohF9Wn1vKsrPw
          claim_id: c_hdrRdEKktf9382V5XQbWWF
          source_id: s_3JUbt7CMxfSZ6JQK6Bo62f
          stance: supports
          locator: CBDB:214406
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3hb3f5WMfdky_20erAt2G3
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ENcN1JP5Ttz5sbf9M3tXox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_afrIkAYiNFu9Mm4WF84oEv
          claim_id: c_3hb3f5WMfdky_20erAt2G3
          source_id: s_Fu_xgZE6uKlmlYUAxqVGw_
          stance: supports
          locator: CBDB：兄弟 王三餘（126452）之父／母 王遜
          quotation: null
          interpretation_note: 由兄弟关系推断：王三壽 与 王三餘 为同胞（CBDB 记「弟」），王三餘 之父／母即 王三壽 之父／母。
          source:
            id: s_Fu_xgZE6uKlmlYUAxqVGw_
            source_type: api_record
            title: 中国历代人物传记资料库：王三壽（CBDB 214406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json
            external_identifier: CBDB:214406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMZVjztWKmHmBJ3VeqqESt
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dzcmeVBeDurVEiRbqVi2YD
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ENcN1JP5Ttz5sbf9M3tXox
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tHdM0mB1RSPRRNgOfa_xlV
          claim_id: c_dzcmeVBeDurVEiRbqVi2YD
          source_id: s_Fu_xgZE6uKlmlYUAxqVGw_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126452 王三餘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fu_xgZE6uKlmlYUAxqVGw_
            source_type: api_record
            title: 中国历代人物传记资料库：王三壽（CBDB 214406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json
            external_identifier: CBDB:214406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D1pWDsHWNd5wRUwygKh8wV
        status: active
        display_name: 王三餘
        merged_into_person_id: null
---

# 王三壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三壽，明人物。萬曆二年進士，籍贯安平。（中国历代人物传记资料库 CBDB 214406） | accepted |
| name.primary | 王三壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMZVjztWKmHmBJ3VeqqESt | 王遜 | accepted |
| other | p_D1pWDsHWNd5wRUwygKh8wV | 王三餘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三壽（CBDB 214406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json)
