---
schema: wang-person/v1
id: p_JgEf657u1LhDVLqFMVXJKS
status: active
merged_into: null
display_name: 王鏞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XgA624GXfNazu4HdmqEVhp
        subject_person_id: p_JgEf657u1LhDVLqFMVXJKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4M3RRJW1JCbHHfevEEwBQp
          claim_id: c_XgA624GXfNazu4HdmqEVhp
          source_id: s_LSbRuJvSomdc5vpHQjTLLt
          stance: supports
          locator: CBDB:270539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270539）
          source: &a1
            id: s_LSbRuJvSomdc5vpHQjTLLt
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 270539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270539&o=json
            external_identifier: CBDB:270539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gaBv9Da8Pa93mDM8MBtsbA
        subject_person_id: p_JgEf657u1LhDVLqFMVXJKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BXldxSqXHvOyVg1zKGM75d
          claim_id: c_gaBv9Da8Pa93mDM8MBtsbA
          source_id: s_LSbRuJvSomdc5vpHQjTLLt
          stance: supports
          locator: CBDB:270539
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_enrZ892bOGAQ-VwdoY53wY
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JgEf657u1LhDVLqFMVXJKS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8IKBE2hfVz6W4G_NqXQCle
          claim_id: c_enrZ892bOGAQ-VwdoY53wY
          source_id: s_hpB_36syEQrLGctw-R50NR
          stance: supports
          locator: CBDB：兄弟 王欽（198425）之父／母 王庭哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王欽 为同胞（CBDB 记「兄」），王欽 之父／母即 王鏞 之父／母。
          source:
            id: s_hpB_36syEQrLGctw-R50NR
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 270539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270539&o=json
            external_identifier: CBDB:270539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hgxi33jEZJCNUrJvtuJpZh
        status: active
        display_name: 王庭哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WVFzr93edMkR13_1iLLTgb
        subject_person_id: p_JgEf657u1LhDVLqFMVXJKS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5BA7ZUdX1DgPQf4Y8_5nC
          claim_id: c_WVFzr93edMkR13_1iLLTgb
          source_id: s_hpB_36syEQrLGctw-R50NR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198425 王欽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hpB_36syEQrLGctw-R50NR
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 270539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270539&o=json
            external_identifier: CBDB:270539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nr8RYEFav3WB5L5BxkUtUu
        status: active
        display_name: 王欽
        merged_into_person_id: null
---

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | 王鏞，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hgxi33jEZJCNUrJvtuJpZh | 王庭哲 | accepted |
| other | p_nr8RYEFav3WB5L5BxkUtUu | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 270539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270539&o=json)
