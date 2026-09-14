---
schema: wang-person/v1
id: p_o5UKvHECYKG2228iAHWXcr
status: active
merged_into: null
display_name: 王鱗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R36E4MKg3LcKoAWN9fUorN
        subject_person_id: p_o5UKvHECYKG2228iAHWXcr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鱗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ft5bEdCCYxDZMxAsrPkcJ7
          claim_id: c_R36E4MKg3LcKoAWN9fUorN
          source_id: s_CTawYaJPKft9aj84dT1bmn
          stance: supports
          locator: CBDB:252491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252491）
          source: &a1
            id: s_CTawYaJPKft9aj84dT1bmn
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 252491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json
            external_identifier: CBDB:252491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uP6Q5mjjuCz7mnoDKFHDAf
        subject_person_id: p_o5UKvHECYKG2228iAHWXcr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鱗，明人物。成化十四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 252491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YWkzvGEQzWHcfEOz6cT9HL
          claim_id: c_uP6Q5mjjuCz7mnoDKFHDAf
          source_id: s_CTawYaJPKft9aj84dT1bmn
          stance: supports
          locator: CBDB:252491
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ccqbuY6-a2_9C6wF0g74h
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5UKvHECYKG2228iAHWXcr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WH2eoTwj8-ziNG-a7Nk00O
          claim_id: c_8ccqbuY6-a2_9C6wF0g74h
          source_id: s_QYxjR8-05IZ8eF37md49Aw
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鱗 与 王鯨 为同胞（CBDB 记「兄」），王鯨 之父／母即 王鱗 之父／母。
          source:
            id: s_QYxjR8-05IZ8eF37md49Aw
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 252491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json
            external_identifier: CBDB:252491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4H62vCdFCPfwbu588ZF5Rs
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_itirK3g16tOPXWWDQJWxqp
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o5UKvHECYKG2228iAHWXcr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJPWG19Ua02uhkINpbpAD3
          claim_id: c_itirK3g16tOPXWWDQJWxqp
          source_id: s_QYxjR8-05IZ8eF37md49Aw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QYxjR8-05IZ8eF37md49Aw
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 252491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json
            external_identifier: CBDB:252491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5841EMmKzggT2c8As9ptEU
        status: active
        display_name: 王鯨
        merged_into_person_id: null
---

# 王鱗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鱗 | accepted |
| bio.summary | 王鱗，明人物。成化十四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 252491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H62vCdFCPfwbu588ZF5Rs | 王紀 | accepted |
| other | p_5841EMmKzggT2c8As9ptEU | 王鯨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鱗（CBDB 252491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json)
