---
schema: wang-person/v1
id: p_KKZvLds578GDQHNKEGJXPU
status: active
merged_into: null
display_name: 王元鑑
cbdb_id: 235477
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tPc4cVW6DRPAQmVK2rXR1e
        subject_person_id: p_KKZvLds578GDQHNKEGJXPU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元鑑，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235477）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hV_Oj4mC77_VrZUqyv8SNL
          claim_id: c_tPc4cVW6DRPAQmVK2rXR1e
          source_id: s_hv67qM2cKuLRoeZZ1RFGPP
          stance: supports
          locator: CBDB:235477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hv67qM2cKuLRoeZZ1RFGPP
            source_type: api_record
            title: 中国历代人物传记资料库：王元鑑（CBDB 235477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json
            external_identifier: CBDB:235477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTvyRk1pHuHnkoVHP2gX3J
        subject_person_id: p_KKZvLds578GDQHNKEGJXPU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_a3kyB8LsHkFDXvG6btQHVA
          claim_id: c_mTvyRk1pHuHnkoVHP2gX3J
          source_id: s_hv67qM2cKuLRoeZZ1RFGPP
          stance: supports
          locator: CBDB:235477
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Up_fVgdwrWwJJjR6WV1OSM
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KKZvLds578GDQHNKEGJXPU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-5UgIkA6ohxZeZio99Y_O
          claim_id: c_Up_fVgdwrWwJJjR6WV1OSM
          source_id: s_7A3ytk5sYImJfOWYO_WSjT
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元鑑 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元鑑 之父／母。
          source:
            id: s_7A3ytk5sYImJfOWYO_WSjT
            source_type: api_record
            title: 中国历代人物传记资料库：王元鑑（CBDB 235477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json
            external_identifier: CBDB:235477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GoCZ6LMqwnyLpJJPbTAtp
        status: active
        display_name: 王溉槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_faw1c_Kn2acPAQSYaEwblw
        subject_person_id: p_KKZvLds578GDQHNKEGJXPU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-dpkbx1Gf8ZCEvLsn2d7ho
          claim_id: c_faw1c_Kn2acPAQSYaEwblw
          source_id: s_7A3ytk5sYImJfOWYO_WSjT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7A3ytk5sYImJfOWYO_WSjT
            source_type: api_record
            title: 中国历代人物传记资料库：王元鑑（CBDB 235477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json
            external_identifier: CBDB:235477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
---

# 王元鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元鑑，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235477） | accepted |
| name.primary | 王元鑑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GoCZ6LMqwnyLpJJPbTAtp | 王溉槐 | accepted |
| other | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元鑑（CBDB 235477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json)
