---
schema: wang-person/v1
id: p_mfgWLUC9ZAj2pT3iJWmyPL
status: active
merged_into: null
display_name: 王洲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDdXqHXgMmQAnfHnaYqNMT
        subject_person_id: p_mfgWLUC9ZAj2pT3iJWmyPL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DTBwv8SE36PwuwMaEP7UnB
          claim_id: c_HDdXqHXgMmQAnfHnaYqNMT
          source_id: s_v5uKz1wq6uAqMxRQ1U6uyQ
          stance: supports
          locator: CBDB:100151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100151）
          source: &a1
            id: s_v5uKz1wq6uAqMxRQ1U6uyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王洲（CBDB 100151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100151&o=json
            external_identifier: CBDB:100151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wjaKQ4uTGyFp3HJffRDoY8
        subject_person_id: p_mfgWLUC9ZAj2pT3iJWmyPL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iN3MQQdRVnVbJ7ArQBLo7v
          claim_id: c_wjaKQ4uTGyFp3HJffRDoY8
          source_id: s_v5uKz1wq6uAqMxRQ1U6uyQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HLxxTAYVksPT1xNwx4Ef5t
        subject_person_id: p_mfgWLUC9ZAj2pT3iJWmyPL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WmHFXsM1DhtyESqgPq432g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abxf9f01ckBzd25ckPjV1g
          claim_id: c_HLxxTAYVksPT1xNwx4Ef5t
          source_id: s_U42Y8CPwHd8idAuT7r_ooM
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1838, HuWenKai #733：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U42Y8CPwHd8idAuT7r_ooM
            source_type: api_record
            title: 中国历代人物传记资料库：蔣佩玉（CBDB 100150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100150&o=json
            external_identifier: CBDB:100150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WmHFXsM1DhtyESqgPq432g
        status: active
        display_name: 蔣佩玉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王洲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WmHFXsM1DhtyESqgPq432g | 蔣佩玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔣佩玉（CBDB 100150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100150&o=json)
- [中国历代人物传记资料库：王洲（CBDB 100151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100151&o=json)
