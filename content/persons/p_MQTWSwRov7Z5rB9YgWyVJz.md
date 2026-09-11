---
schema: wang-person/v1
id: p_MQTWSwRov7Z5rB9YgWyVJz
status: active
merged_into: null
display_name: 王鐸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UsNL1xXJ7Ezjm2dP2SE81k
        subject_person_id: p_MQTWSwRov7Z5rB9YgWyVJz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gycakcK9SjCKvTeTnYNkpS
          claim_id: c_UsNL1xXJ7Ezjm2dP2SE81k
          source_id: s_dAGRseQMFTNPAQeCRzhd9d
          stance: supports
          locator: CBDB:28793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28793）
          source: &a1
            id: s_dAGRseQMFTNPAQeCRzhd9d
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 28793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28793&o=json
            external_identifier: CBDB:28793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Z951Dxj1KvetvLwS6eGzv
        subject_person_id: p_MQTWSwRov7Z5rB9YgWyVJz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，金人物。籍贯須城，入仕封贈。（中国历代人物传记资料库 CBDB 28793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_st90hT4W-tLJP5A8Nj89Bb
          claim_id: c_2Z951Dxj1KvetvLwS6eGzv
          source_id: s_dAGRseQMFTNPAQeCRzhd9d
          stance: supports
          locator: CBDB:28793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_olGJ7THLCX5pxnNmkwSiEE
        subject_person_id: p_GdyzKkAqbp36xcrSMf6iP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQTWSwRov7Z5rB9YgWyVJz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z7ACoZhIO1s7l1UaZVKGNQ
          claim_id: c_olGJ7THLCX5pxnNmkwSiEE
          source_id: s_sjXa79PEyaC3ZNbE28ZjBE
          stance: supports
          locator: CBDB 双向互证（子 王鐸 ⇄ 父 王瑀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_sjXa79PEyaC3ZNbE28ZjBE
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 28794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28794&o=json
            external_identifier: CBDB:28794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GdyzKkAqbp36xcrSMf6iP4
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  children:
    - claim:
        id: c_4fX4NVd4t7vDf_z9EKsSUZ
        subject_person_id: p_MQTWSwRov7Z5rB9YgWyVJz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7azhxqix4L7NzFdHMRSmU1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_knTnk0oY1IOty3ii1fQH5b
          claim_id: c_4fX4NVd4t7vDf_z9EKsSUZ
          source_id: s_dAGRseQMFTNPAQeCRzhd9d
          stance: supports
          locator: CBDB 双向互证（子 王公淵 ⇄ 父 王鐸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_7azhxqix4L7NzFdHMRSmU1
        status: active
        display_name: 王公淵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，金人物。籍贯須城，入仕封贈。（中国历代人物传记资料库 CBDB 28793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GdyzKkAqbp36xcrSMf6iP4 | 王瑀 | accepted |
| children | p_7azhxqix4L7NzFdHMRSmU1 | 王公淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 28793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28793&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 28794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28794&o=json)
