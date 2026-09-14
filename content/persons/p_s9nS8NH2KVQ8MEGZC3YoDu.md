---
schema: wang-person/v1
id: p_s9nS8NH2KVQ8MEGZC3YoDu
status: active
merged_into: null
display_name: 王應臨
cbdb_id: 208836
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFWXQiTXFn44ZX3R1H7Bw4
        subject_person_id: p_s9nS8NH2KVQ8MEGZC3YoDu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應臨，明人物。隆慶五年進士，籍贯東流。（中国历代人物传记资料库 CBDB 208836）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8s60u5KpFkWaikWIVMeej2
          claim_id: c_TFWXQiTXFn44ZX3R1H7Bw4
          source_id: s_35R872KZmtoonPDaE1qHNN
          stance: supports
          locator: CBDB:208836
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_35R872KZmtoonPDaE1qHNN
            source_type: api_record
            title: 中国历代人物传记资料库：王應臨（CBDB 208836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208836&o=json
            external_identifier: CBDB:208836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_24LwSqCSPAdTTfJZFAbRFt
        subject_person_id: p_s9nS8NH2KVQ8MEGZC3YoDu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WhxwLQFskxCaPG5uBxjRx3
          claim_id: c_24LwSqCSPAdTTfJZFAbRFt
          source_id: s_35R872KZmtoonPDaE1qHNN
          stance: supports
          locator: CBDB:208836
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cXKNjYyYz7Pq1GI76j8_-f
        subject_person_id: p_9wJmZu8ZKLBaT7U97D7E3V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s9nS8NH2KVQ8MEGZC3YoDu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g_QqyuiXan3D_haxOTArFb
          claim_id: c_cXKNjYyYz7Pq1GI76j8_-f
          source_id: s_jRqIqL7WCkLPaqFsb3Z93Y
          stance: supports
          locator: CBDB：兄弟 王應乾（205803）之父／母 王文錦
          quotation: null
          interpretation_note: 由兄弟关系推断：王應臨 与 王應乾 为同胞（CBDB 记「兄」），王應乾 之父／母即 王應臨 之父／母。
          source:
            id: s_jRqIqL7WCkLPaqFsb3Z93Y
            source_type: api_record
            title: 中国历代人物传记资料库：王應臨（CBDB 208836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208836&o=json
            external_identifier: CBDB:208836
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
        id: c_fo098lndEpMW8z6gXCBac4
        subject_person_id: p_s9nS8NH2KVQ8MEGZC3YoDu
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
        - id: cs_SToXYx8whF4ggQY0HWEl9B
          claim_id: c_fo098lndEpMW8z6gXCBac4
          source_id: s_jRqIqL7WCkLPaqFsb3Z93Y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205803 王應乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jRqIqL7WCkLPaqFsb3Z93Y
            source_type: api_record
            title: 中国历代人物传记资料库：王應臨（CBDB 208836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208836&o=json
            external_identifier: CBDB:208836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_svtNF7GBN4DZNA4eqhmCDp
        status: active
        display_name: 王應乾
        merged_into_person_id: null
---

# 王應臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應臨，明人物。隆慶五年進士，籍贯東流。（中国历代人物传记资料库 CBDB 208836） | accepted |
| name.primary | 王應臨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wJmZu8ZKLBaT7U97D7E3V | 王文錦 | accepted |
| other | p_svtNF7GBN4DZNA4eqhmCDp | 王應乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應臨（CBDB 208836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208836&o=json)
