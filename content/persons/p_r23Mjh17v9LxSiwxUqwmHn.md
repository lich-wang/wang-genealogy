---
schema: wang-person/v1
id: p_r23Mjh17v9LxSiwxUqwmHn
status: active
merged_into: null
display_name: 王垍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_orFqtCBmrb8XnHWG5iPGGD
        subject_person_id: p_r23Mjh17v9LxSiwxUqwmHn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4bAGgNqR6jV5svaZS7DuP
          claim_id: c_orFqtCBmrb8XnHWG5iPGGD
          source_id: s_VKy9QTDkP8u4QRDMKh5dhz
          stance: supports
          locator: CBDB:573318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573318）
          source: &a1
            id: s_VKy9QTDkP8u4QRDMKh5dhz
            source_type: api_record
            title: 中国历代人物传记资料库：王垍（CBDB 573318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573318&o=json
            external_identifier: CBDB:573318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H8kxB7xbBsNjW7jQUdheje
        subject_person_id: p_r23Mjh17v9LxSiwxUqwmHn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垍，宋人物。身份为宗室女夫，曾任承節郎。（中国历代人物传记资料库 CBDB 573318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1sjtfpdBJxRtWsjk8RI6y0
          claim_id: c_H8kxB7xbBsNjW7jQUdheje
          source_id: s_VKy9QTDkP8u4QRDMKh5dhz
          stance: supports
          locator: CBDB:573318
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qtn_5yFFWWZ0PkvR9Y5mfE
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r23Mjh17v9LxSiwxUqwmHn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zE1ORa-cvPwU9vaNjRIGJL
          claim_id: c_qtn_5yFFWWZ0PkvR9Y5mfE
          source_id: s_VKy9QTDkP8u4QRDMKh5dhz
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oBg2fph2HQeUi63Z2hsgrx
        status: active
        display_name: 王壽卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ehWrXOCAaRHOUsDJQlrhiF
        subject_person_id: p_r23Mjh17v9LxSiwxUqwmHn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZXXiewLw8oZKLWXyLV7kmf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KLX0CUMZUAMjZnrdXw7hFx
          claim_id: c_ehWrXOCAaRHOUsDJQlrhiF
          source_id: s_YsgCJoLa7C4cCFBliko74V
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YsgCJoLa7C4cCFBliko74V
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王垍妻)（CBDB 573319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573319&o=json
            external_identifier: CBDB:573319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZXXiewLw8oZKLWXyLV7kmf
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王垍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垍 | accepted |
| bio.summary | 王垍，宋人物。身份为宗室女夫，曾任承節郎。（中国历代人物传记资料库 CBDB 573318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oBg2fph2HQeUi63Z2hsgrx | 王壽卿 | accepted |
| spouses | p_ZXXiewLw8oZKLWXyLV7kmf | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垍（CBDB 573318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573318&o=json)
- [中国历代人物传记资料库：趙氏(王垍妻)（CBDB 573319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573319&o=json)
