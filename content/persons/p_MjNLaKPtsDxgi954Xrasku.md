---
schema: wang-person/v1
id: p_MjNLaKPtsDxgi954Xrasku
status: active
merged_into: null
display_name: 王傳約
cbdb_id: 17797
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GArvBmusq7pg5HMXRRKPSX
        subject_person_id: p_MjNLaKPtsDxgi954Xrasku
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳約，宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 17797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ndpci0ev3Kx6uUPQnk897g
          claim_id: c_GArvBmusq7pg5HMXRRKPSX
          source_id: s_A3sENLN4fjr4HqzZdA2W2Y
          stance: supports
          locator: CBDB:17797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A3sENLN4fjr4HqzZdA2W2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王傳約（CBDB 17797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17797&o=json
            external_identifier: CBDB:17797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2id24V8DkLWV55V9LTJTuP
        subject_person_id: p_MjNLaKPtsDxgi954Xrasku
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JVKxfZ5BvMW85Yi4PvrZST
          claim_id: c_2id24V8DkLWV55V9LTJTuP
          source_id: s_A3sENLN4fjr4HqzZdA2W2Y
          stance: supports
          locator: CBDB:17797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0ApDBhFxc3AH9XzqNK8B0W
        subject_person_id: p_JSCcx9nvR4fcq9DRADJkRg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MjNLaKPtsDxgi954Xrasku
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F-aibCjrtyBLU_PCm1IZkA
          claim_id: c_0ApDBhFxc3AH9XzqNK8B0W
          source_id: s_A3sENLN4fjr4HqzZdA2W2Y
          stance: supports
          locator: CBDB 双向互证（父 王克臣 ⇄ 子 王傳約）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_A3sENLN4fjr4HqzZdA2W2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王傳約（CBDB 17797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17797&o=json
            external_identifier: CBDB:17797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JSCcx9nvR4fcq9DRADJkRg
        status: active
        display_name: 王克臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傳約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傳約，宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 17797） | accepted |
| name.primary | 王傳約 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JSCcx9nvR4fcq9DRADJkRg | 王克臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳約（CBDB 17797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17797&o=json)
