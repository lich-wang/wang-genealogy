---
schema: wang-person/v1
id: p_2xx94qCKtvAJwRfCf9kETN
status: active
merged_into: null
display_name: 王貫一
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTVifKRXruRfBa4pee7d3V
        subject_person_id: p_2xx94qCKtvAJwRfCf9kETN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tunpU8LLiF1pCNDejBFiv2
          claim_id: c_pTVifKRXruRfBa4pee7d3V
          source_id: s_21wnqbJZb2NGFGT5Xa6MPX
          stance: supports
          locator: CBDB:577018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577018）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_51kia9YGGG8QDEHqSdLYVM
        subject_person_id: p_2xx94qCKtvAJwRfCf9kETN
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
        - id: cs_ZXo814qEMZ3Fp5UP5FZmHo
          claim_id: c_51kia9YGGG8QDEHqSdLYVM
          source_id: s_21wnqbJZb2NGFGT5Xa6MPX
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
          source: *a1
      object_person:
        id: p_WfqvT7GG42fj9cjwnb4MYo
        status: active
        display_name: 王龍山
        merged_into_person_id: null
  children:
    - claim:
        id: c_6x0LkIa1-J5jXVqEllL1Sv
        subject_person_id: p_2xx94qCKtvAJwRfCf9kETN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0kq5np8RUglwlm-ieXp2F1
          claim_id: c_6x0LkIa1-J5jXVqEllL1Sv
          source_id: s_21wnqbJZb2NGFGT5Xa6MPX
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163687：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GWmCnmdFGoQr7AymHY2XmC
        status: active
        display_name: 王煒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貫一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫一 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WfqvT7GG42fj9cjwnb4MYo | 王龍山 | accepted |
| children | p_GWmCnmdFGoQr7AymHY2XmC | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貫一（CBDB 577018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577018&o=json)
