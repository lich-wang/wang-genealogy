---
schema: wang-person/v1
id: p_Nn2S6vQ9sH7rewLZdm6USf
status: active
merged_into: null
display_name: 王納陳
cbdb_id: 281217
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JyeEKMVsbFyr6jHKvSZNcJ
        subject_person_id: p_Nn2S6vQ9sH7rewLZdm6USf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納陳，明人物。正德十二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 281217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OdO4EB8yNku0S-0CAlXlw_
          claim_id: c_JyeEKMVsbFyr6jHKvSZNcJ
          source_id: s_uLMaPeRZbjMoT1K3M1rEwg
          stance: supports
          locator: CBDB:281217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uLMaPeRZbjMoT1K3M1rEwg
            source_type: api_record
            title: 中国历代人物传记资料库：王納陳（CBDB 281217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281217&o=json
            external_identifier: CBDB:281217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HTs7LiZhrQ32YpJ8FC1KLr
        subject_person_id: p_Nn2S6vQ9sH7rewLZdm6USf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納陳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qK7iZ8NiuhL14tnP1a7egA
          claim_id: c_HTs7LiZhrQ32YpJ8FC1KLr
          source_id: s_uLMaPeRZbjMoT1K3M1rEwg
          stance: supports
          locator: CBDB:281217
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FPmTg8vZHXpPz9MQTNskYP
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nn2S6vQ9sH7rewLZdm6USf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNlRUCDPMHObmy8RZrAoV_
          claim_id: c_FPmTg8vZHXpPz9MQTNskYP
          source_id: s_fFVnATryxANvUfF9ygo_l7
          stance: supports
          locator: CBDB：兄弟 王納言（126659）之父／母 王隆
          quotation: null
          interpretation_note: 由兄弟关系推断：王納陳 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納陳 之父／母。
          source:
            id: s_fFVnATryxANvUfF9ygo_l7
            source_type: api_record
            title: 中国历代人物传记资料库：王納陳（CBDB 281217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281217&o=json
            external_identifier: CBDB:281217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hx9Ukkpxmi3iZhqXQH36DB
        status: active
        display_name: 王隆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TDsHB9VeTQsq8Kzd8HqRTO
        subject_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Nn2S6vQ9sH7rewLZdm6USf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGgMnjv8Fgw0lBZkf509EF
          claim_id: c_TDsHB9VeTQsq8Kzd8HqRTO
          source_id: s_fFVnATryxANvUfF9ygo_l7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126659 王納言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fFVnATryxANvUfF9ygo_l7
            source_type: api_record
            title: 中国历代人物传记资料库：王納陳（CBDB 281217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281217&o=json
            external_identifier: CBDB:281217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5RJmgKA1SKHVMCFoAzk8Ch
        status: active
        display_name: 王納言
        merged_into_person_id: null
---

# 王納陳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王納陳，明人物。正德十二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 281217） | accepted |
| name.primary | 王納陳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hx9Ukkpxmi3iZhqXQH36DB | 王隆 | accepted |
| other | p_5RJmgKA1SKHVMCFoAzk8Ch | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納陳（CBDB 281217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281217&o=json)
