---
schema: wang-person/v1
id: p_WfqvT7GG42fj9cjwnb4MYo
status: active
merged_into: null
display_name: 王龍山
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suX8G51y1NQqs8kVxwKrkD
        subject_person_id: p_WfqvT7GG42fj9cjwnb4MYo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VJYEtjasoP1fUbCpJhVQxT
          claim_id: c_suX8G51y1NQqs8kVxwKrkD
          source_id: s_KoBqseYBWHQ6mQRVBU8w9E
          stance: supports
          locator: CBDB:577017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577017）
          source: &a1
            id: s_KoBqseYBWHQ6mQRVBU8w9E
            source_type: api_record
            title: 中国历代人物传记资料库：王龍山（CBDB 577017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577017&o=json
            external_identifier: CBDB:577017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yo73SrHyr2muXWDQS2EzNQ
        subject_person_id: p_WfqvT7GG42fj9cjwnb4MYo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HwC2CsAJ8DhfFM7eCxbHAw
          claim_id: c_Yo73SrHyr2muXWDQS2EzNQ
          source_id: s_KoBqseYBWHQ6mQRVBU8w9E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_99X_3urRizlIccsLmtt-6s
        subject_person_id: p_WfqvT7GG42fj9cjwnb4MYo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2xx94qCKtvAJwRfCf9kETN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NCmZKP9TklWgCX6hfXExMa
          claim_id: c_99X_3urRizlIccsLmtt-6s
          source_id: s_21wnqbJZb2NGFGT5Xa6MPX
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163687：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_21wnqbJZb2NGFGT5Xa6MPX
            source_type: api_record
            title: 中国历代人物传记资料库：王貫一（CBDB 577018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577018&o=json
            external_identifier: CBDB:577018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xx94qCKtvAJwRfCf9kETN
        status: active
        display_name: 王貫一
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_-e0QgZhFQ5greS0Zc-hYWH
        subject_person_id: p_WfqvT7GG42fj9cjwnb4MYo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtGgmLPxnDEsDc_1_mpit1
          claim_id: c_-e0QgZhFQ5greS0Zc-hYWH
          source_id: s_KoBqseYBWHQ6mQRVBU8w9E
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163687：孫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GWmCnmdFGoQr7AymHY2XmC
        status: active
        display_name: 王煒
        merged_into_person_id: null
  other: []
---

# 王龍山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍山 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2xx94qCKtvAJwRfCf9kETN | 王貫一 | accepted |
| descendants | p_GWmCnmdFGoQr7AymHY2XmC | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貫一（CBDB 577018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577018&o=json)
- [中国历代人物传记资料库：王龍山（CBDB 577017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577017&o=json)
