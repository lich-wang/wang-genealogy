---
schema: wang-person/v1
id: p_rnJFD66CMv5ozbD1npW8J5
status: active
merged_into: null
display_name: 王嘉譔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XSwoK9tLb83LaVtBtrMrdS
        subject_person_id: p_rnJFD66CMv5ozbD1npW8J5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉譔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oSvhpZoi7uBXdmv3qp6vCf
          claim_id: c_XSwoK9tLb83LaVtBtrMrdS
          source_id: s_SvWEPE5pWhkTb9VDtHSjtt
          stance: supports
          locator: CBDB:550656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550656）
          source: &a1
            id: s_SvWEPE5pWhkTb9VDtHSjtt
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉譔（CBDB 550656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json
            external_identifier: CBDB:550656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iyEN27xL82p9ETKPtnM7jS
        subject_person_id: p_rnJFD66CMv5ozbD1npW8J5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉譔，明人物。籍贯鄒平。（中国历代人物传记资料库 CBDB 550656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OvUznluoLNpAlc11a4B2hN
          claim_id: c_iyEN27xL82p9ETKPtnM7jS
          source_id: s_SvWEPE5pWhkTb9VDtHSjtt
          stance: supports
          locator: CBDB:550656
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9fPfN4vl4srd50Flny7S-o
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rnJFD66CMv5ozbD1npW8J5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13cEuk5CWBDsl_KyM4gTiG
          claim_id: c_9fPfN4vl4srd50Flny7S-o
          source_id: s_IU3U9X-7Y-NNiVNHI56hUL
          stance: supports
          locator: CBDB：兄弟 王嘉謨（207214）之父／母 王應祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉譔 与 王嘉謨 为同胞（CBDB 记「兄」），王嘉謨 之父／母即 王嘉譔 之父／母。
          source:
            id: s_IU3U9X-7Y-NNiVNHI56hUL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉譔（CBDB 550656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json
            external_identifier: CBDB:550656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L8XuaB9Bf7x5KGQmxdXQcj
        status: active
        display_name: 王應祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9Lyt8Lzge04_Qs9_VHMDNe
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnJFD66CMv5ozbD1npW8J5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqwS0bvObTF4JPa8OdA_ec
          claim_id: c_9Lyt8Lzge04_Qs9_VHMDNe
          source_id: s_IU3U9X-7Y-NNiVNHI56hUL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207214 王嘉謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IU3U9X-7Y-NNiVNHI56hUL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉譔（CBDB 550656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json
            external_identifier: CBDB:550656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
---

# 王嘉譔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉譔 | accepted |
| bio.summary | 王嘉譔，明人物。籍贯鄒平。（中国历代人物传记资料库 CBDB 550656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L8XuaB9Bf7x5KGQmxdXQcj | 王應祥 | accepted |
| other | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉譔（CBDB 550656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json)
