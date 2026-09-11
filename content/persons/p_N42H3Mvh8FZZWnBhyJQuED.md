---
schema: wang-person/v1
id: p_N42H3Mvh8FZZWnBhyJQuED
status: active
merged_into: null
display_name: 王公袞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_75PxpK8hFa2VF7vQsTyWgo
        subject_person_id: p_N42H3Mvh8FZZWnBhyJQuED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gj6YMEwEQQje5s8LaB4iZj
          claim_id: c_75PxpK8hFa2VF7vQsTyWgo
          source_id: s_EsNSAvpwp3LCo6mQrd5v4F
          stance: supports
          locator: CBDB:22224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22224）
          source: &a1
            id: s_EsNSAvpwp3LCo6mQrd5v4F
            source_type: api_record
            title: 中国历代人物传记资料库：王公袞（CBDB 22224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22224&o=json
            external_identifier: CBDB:22224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M6a4snt6sjRCypMvKUz8No
        subject_person_id: p_N42H3Mvh8FZZWnBhyJQuED
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nVxsWDzeHHbvyLeUa45yv
          claim_id: c_M6a4snt6sjRCypMvKUz8No
          source_id: s_EsNSAvpwp3LCo6mQrd5v4F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KZ0vML8kAZNFkg66D1xjDi
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N42H3Mvh8FZZWnBhyJQuED
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XGbbejsGM4bYu5BEv1oos
          claim_id: c_KZ0vML8kAZNFkg66D1xjDi
          source_id: s_EsNSAvpwp3LCo6mQrd5v4F
          stance: supports
          locator: CBDB 双向互证（父 王俊彥 ⇄ 子 王公袞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_S91UDmLopWwoam8e6F89Jc
        status: active
        display_name: 王俊彥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公袞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S91UDmLopWwoam8e6F89Jc | 王俊彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公袞（CBDB 22224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22224&o=json)
