---
schema: wang-person/v1
id: p_4Uxjrthw52hnqawrYtUy6r
status: active
merged_into: null
display_name: 王卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8BBKPAhQpdJmRoYFhZg7qP
        subject_person_id: p_4Uxjrthw52hnqawrYtUy6r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hDFNbTLFhb6jECGATyfFtG
          claim_id: c_8BBKPAhQpdJmRoYFhZg7qP
          source_id: s_yqRSVnjJGKe5ZNji3fLUWS
          stance: supports
          locator: CBDB:260243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260243）
          source: &a1
            id: s_yqRSVnjJGKe5ZNji3fLUWS
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 260243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json
            external_identifier: CBDB:260243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rrh8tqJwRDWahrXKZFT3uv
        subject_person_id: p_4Uxjrthw52hnqawrYtUy6r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260243）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NhNx9CFrG3ef2SHZBmQWaW
          claim_id: c_rrh8tqJwRDWahrXKZFT3uv
          source_id: s_yqRSVnjJGKe5ZNji3fLUWS
          stance: supports
          locator: CBDB:260243
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uvkpGsaD2_DH96HpakzILq
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Uxjrthw52hnqawrYtUy6r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwt4ZeSCXpBwkjhFmeyGKh
          claim_id: c_uvkpGsaD2_DH96HpakzILq
          source_id: s_9M-AUN2uqtVohOcPSkJkth
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王卿 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王卿 之父／母。
          source:
            id: s_9M-AUN2uqtVohOcPSkJkth
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 260243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json
            external_identifier: CBDB:260243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y9VpT5a4bHRsBrje4LpbfA
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XAYiIENy29na7v_JfIzLN1
        subject_person_id: p_4Uxjrthw52hnqawrYtUy6r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BFvaMKCO-qp2AaoWkpbAwf
          claim_id: c_XAYiIENy29na7v_JfIzLN1
          source_id: s_9M-AUN2uqtVohOcPSkJkth
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9M-AUN2uqtVohOcPSkJkth
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 260243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json
            external_identifier: CBDB:260243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿 | accepted |
| bio.summary | 王卿，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260243） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y9VpT5a4bHRsBrje4LpbfA | 王豫 | accepted |
| other | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 260243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json)
