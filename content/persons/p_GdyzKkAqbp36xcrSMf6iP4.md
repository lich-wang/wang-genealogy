---
schema: wang-person/v1
id: p_GdyzKkAqbp36xcrSMf6iP4
status: active
merged_into: null
display_name: 王瑀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7rVxEBYyN1JLEEVfLt4M8K
        subject_person_id: p_GdyzKkAqbp36xcrSMf6iP4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aSxsfxAu6BTMHtYgDggAEV
          claim_id: c_7rVxEBYyN1JLEEVfLt4M8K
          source_id: s_sjXa79PEyaC3ZNbE28ZjBE
          stance: supports
          locator: CBDB:28794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28794）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y3gbHXeAdMyVBhkMTFkNfD
        subject_person_id: p_GdyzKkAqbp36xcrSMf6iP4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，金人物。籍贯須城，入仕進士。（中国历代人物传记资料库 CBDB 28794）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GtIPrsCqJOsCrtIA3blZXV
          claim_id: c_Y3gbHXeAdMyVBhkMTFkNfD
          source_id: s_sjXa79PEyaC3ZNbE28ZjBE
          stance: supports
          locator: CBDB:28794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QbtzkFlVHV2VjnNdD6UxKQ
        subject_person_id: p_EXNiuacY5qKu9KTDWZ22XE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdyzKkAqbp36xcrSMf6iP4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEytGHC81iGgB9ze9YScYA
          claim_id: c_QbtzkFlVHV2VjnNdD6UxKQ
          source_id: s_PKiS6W5tTh4s2pHWDe8ie7
          stance: supports
          locator: CBDB 双向互证（子 王瑀 ⇄ 父 王尚智）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_PKiS6W5tTh4s2pHWDe8ie7
            source_type: api_record
            title: 中国历代人物传记资料库：王尚智（CBDB 28795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28795&o=json
            external_identifier: CBDB:28795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EXNiuacY5qKu9KTDWZ22XE
        status: active
        display_name: 王尚智
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_MQTWSwRov7Z5rB9YgWyVJz
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，金人物。籍贯須城，入仕進士。（中国历代人物传记资料库 CBDB 28794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EXNiuacY5qKu9KTDWZ22XE | 王尚智 | accepted |
| children | p_MQTWSwRov7Z5rB9YgWyVJz | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚智（CBDB 28795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28795&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 28794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28794&o=json)
