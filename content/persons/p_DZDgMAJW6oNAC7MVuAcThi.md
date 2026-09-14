---
schema: wang-person/v1
id: p_DZDgMAJW6oNAC7MVuAcThi
status: active
merged_into: null
display_name: 王都
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdpzjNvAGPUP1vSVXAwXoh
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P18zsiE1MyLfcmL3H6CBci
          claim_id: c_xdpzjNvAGPUP1vSVXAwXoh
          source_id: s_35E6xFgK6BZA6GzBnHdK7E
          stance: supports
          locator: CBDB:333534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333534）
          source: &a1
            id: s_35E6xFgK6BZA6GzBnHdK7E
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 333534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333534&o=json
            external_identifier: CBDB:333534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mXbRbRfrsKQgJHNiZzRV2M
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都，明人物。嘉靖四十四年進士，籍贯掖縣，曾任府同知。（中国历代人物传记资料库 CBDB 333534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2edhcF6csNEiLN0ycZRhLW
          claim_id: c_mXbRbRfrsKQgJHNiZzRV2M
          source_id: s_35E6xFgK6BZA6GzBnHdK7E
          stance: supports
          locator: CBDB:333534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oTPX1GMTidRCJKwYNUvLqU
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OvrjHLPw-ZqAaRsBbqMLmJ
          claim_id: c_oTPX1GMTidRCJKwYNUvLqU
          source_id: s_35E6xFgK6BZA6GzBnHdK7E
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U6AM1nUKLfQ5njnQVtaNYH
        status: active
        display_name: 王肇林
        merged_into_person_id: null
    - claim:
        id: c_9zJH0COKaWLn86uUdjrBXA
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BZjpMTM6bqEHaPLLDNWSEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHJG78kax9pHN2fAmxXHAf
          claim_id: c_9zJH0COKaWLn86uUdjrBXA
          source_id: s_phcw18a_9CjXRa9SgUnV6j
          stance: supports
          locator: CBDB：兄弟 王肇林（205462）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒林 与 王肇林 为同胞（CBDB 记「弟」），王肇林 之父／母即 王儒林 之父／母。
          source:
            id: s_phcw18a_9CjXRa9SgUnV6j
            source_type: api_record
            title: 中国历代人物传记资料库：王儒林（CBDB 333540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json
            external_identifier: CBDB:333540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BZjpMTM6bqEHaPLLDNWSEG
        status: active
        display_name: 王儒林
        merged_into_person_id: null
    - claim:
        id: c_CsbIskbGk1pa7msn0jjVYd
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hniauc3XNXBtTW3DuxaoQT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWMRWqrbfGwlOHXkAQQTyB
          claim_id: c_CsbIskbGk1pa7msn0jjVYd
          source_id: s_7lgCW3yI0z6jjdxhtiMULm
          stance: supports
          locator: CBDB：兄弟 王肇林（205462）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王文林 与 王肇林 为同胞（CBDB 记「弟」），王肇林 之父／母即 王文林 之父／母。
          source:
            id: s_7lgCW3yI0z6jjdxhtiMULm
            source_type: api_record
            title: 中国历代人物传记资料库：王文林（CBDB 333539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333539&o=json
            external_identifier: CBDB:333539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hniauc3XNXBtTW3DuxaoQT
        status: active
        display_name: 王文林
        merged_into_person_id: null
    - claim:
        id: c_1D71P1AQuN7GCmfxs5oCp-
        subject_person_id: p_DZDgMAJW6oNAC7MVuAcThi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xMWcKhAdocE2ePvPUisLBH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YL9o156kYqyUtNhIA2LHa3
          claim_id: c_1D71P1AQuN7GCmfxs5oCp-
          source_id: s_25acYVJ7-NUwN0XwQSDjHz
          stance: supports
          locator: CBDB：兄弟 王肇林（205462）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王上林 与 王肇林 为同胞（CBDB 记「弟」），王肇林 之父／母即 王上林 之父／母。
          source:
            id: s_25acYVJ7-NUwN0XwQSDjHz
            source_type: api_record
            title: 中国历代人物传记资料库：王上林（CBDB 333538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333538&o=json
            external_identifier: CBDB:333538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xMWcKhAdocE2ePvPUisLBH
        status: active
        display_name: 王上林
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| bio.summary | 王都，明人物。嘉靖四十四年進士，籍贯掖縣，曾任府同知。（中国历代人物传记资料库 CBDB 333534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_U6AM1nUKLfQ5njnQVtaNYH | 王肇林 | accepted |
| children | p_BZjpMTM6bqEHaPLLDNWSEG | 王儒林 | accepted |
| children | p_Hniauc3XNXBtTW3DuxaoQT | 王文林 | accepted |
| children | p_xMWcKhAdocE2ePvPUisLBH | 王上林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 333534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333534&o=json)
- [中国历代人物传记资料库：王儒林（CBDB 333540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333540&o=json)
- [中国历代人物传记资料库：王上林（CBDB 333538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333538&o=json)
- [中国历代人物传记资料库：王文林（CBDB 333539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333539&o=json)
