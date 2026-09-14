---
schema: wang-person/v1
id: p_ZEHF2Z9HLeYrfnNXDKL7sN
status: active
merged_into: null
display_name: 王原
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5wPbwMmuDppopQEEK6orkV
        subject_person_id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4b4TGmY7aKUna3KuXDm5in
          claim_id: c_5wPbwMmuDppopQEEK6orkV
          source_id: s_vQq9zsfwXMaZnxuNhNAfUN
          stance: supports
          locator: CBDB:238514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238514）
          source: &a1
            id: s_vQq9zsfwXMaZnxuNhNAfUN
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 238514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json
            external_identifier: CBDB:238514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VxyMNp9h8RS4EcfU3P2h9v
        subject_person_id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原，明人物。正统七年進士，籍贯慶都。（中国历代人物传记资料库 CBDB 238514）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x21UbD-LmfPg12bgmQyKWM
          claim_id: c_VxyMNp9h8RS4EcfU3P2h9v
          source_id: s_vQq9zsfwXMaZnxuNhNAfUN
          stance: supports
          locator: CBDB:238514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Eaw_SAOF4jLDj7pkFyKuYo
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZJiwuzc7-3T-Y74B88b3S
          claim_id: c_Eaw_SAOF4jLDj7pkFyKuYo
          source_id: s__BBXafZC4A0YJ7KVgpqJzU
          stance: supports
          locator: CBDB：兄弟 王凱（207962）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王原 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王原 之父／母。
          source:
            id: s__BBXafZC4A0YJ7KVgpqJzU
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 238514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json
            external_identifier: CBDB:238514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dMddXN9MM9RH4e355Y4XBH
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iVSG5d48hgfAjkml-63AIQ
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M0G3Qf4aPxbzhqPck7aVsm
          claim_id: c_iVSG5d48hgfAjkml-63AIQ
          source_id: s__BBXafZC4A0YJ7KVgpqJzU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207962 王凱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__BBXafZC4A0YJ7KVgpqJzU
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 238514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json
            external_identifier: CBDB:238514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LpMHYjMg2BhRe212CnJZY9
        status: active
        display_name: 王凱
        merged_into_person_id: null
---

# 王原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原 | accepted |
| bio.summary | 王原，明人物。正统七年進士，籍贯慶都。（中国历代人物传记资料库 CBDB 238514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dMddXN9MM9RH4e355Y4XBH | 王俊 | accepted |
| other | p_LpMHYjMg2BhRe212CnJZY9 | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王原（CBDB 238514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json)
