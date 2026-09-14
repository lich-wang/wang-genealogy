---
schema: wang-person/v1
id: p_yTQMLPnTPSKXeZ2t1boCym
status: active
merged_into: null
display_name: 王實
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dKQ46zGX46MmZLKaRji8f
        subject_person_id: p_yTQMLPnTPSKXeZ2t1boCym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7P6GJ3JN3Wyde31LrHkPpr
          claim_id: c_5dKQ46zGX46MmZLKaRji8f
          source_id: s_xR5KYH8QzY3hfn8oGdh8Nr
          stance: supports
          locator: CBDB:251904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251904）
          source: &a1
            id: s_xR5KYH8QzY3hfn8oGdh8Nr
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 251904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json
            external_identifier: CBDB:251904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oUpjNtV1KXgKE8MKKmenJn
        subject_person_id: p_yTQMLPnTPSKXeZ2t1boCym
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251904）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NW8DPwxAngMxqav74xPGNx
          claim_id: c_oUpjNtV1KXgKE8MKKmenJn
          source_id: s_xR5KYH8QzY3hfn8oGdh8Nr
          stance: supports
          locator: CBDB:251904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xbKdbI7B7c2e915xmbsRAg
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yTQMLPnTPSKXeZ2t1boCym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFQcy6DETPKktsh82zzt5x
          claim_id: c_xbKdbI7B7c2e915xmbsRAg
          source_id: s_713wVrtzQKjz3WqoJeN0nu
          stance: supports
          locator: CBDB：兄弟 王宏（199956）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宏 为同胞（CBDB 记「兄」），王宏 之父／母即 王實 之父／母。
          source:
            id: s_713wVrtzQKjz3WqoJeN0nu
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 251904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json
            external_identifier: CBDB:251904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6NqQVpARahg4TYnj77m3i2
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0MTW1qFGxwWG1Kc10gDzfX
        subject_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yTQMLPnTPSKXeZ2t1boCym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jvcaXyo_u0YOmkR2O-I0iG
          claim_id: c_0MTW1qFGxwWG1Kc10gDzfX
          source_id: s_713wVrtzQKjz3WqoJeN0nu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199956 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_713wVrtzQKjz3WqoJeN0nu
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 251904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json
            external_identifier: CBDB:251904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cnN8Qwq9XduFw216Ep1U5h
        status: active
        display_name: 王宏
        merged_into_person_id: null
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | 王實，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6NqQVpARahg4TYnj77m3i2 | 王貴 | accepted |
| other | p_cnN8Qwq9XduFw216Ep1U5h | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 251904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json)
