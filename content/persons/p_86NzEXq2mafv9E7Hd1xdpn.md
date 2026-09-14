---
schema: wang-person/v1
id: p_86NzEXq2mafv9E7Hd1xdpn
status: active
merged_into: null
display_name: 王玕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7xw23HkMbdB9KyMupYM1T
        subject_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8vBCye9RGw2ZuEyE19oAfK
          claim_id: c_P7xw23HkMbdB9KyMupYM1T
          source_id: s_VZq9E4EVaw4pMwQ62ABhKP
          stance: supports
          locator: CBDB:284307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284307）
          source: &a1
            id: s_VZq9E4EVaw4pMwQ62ABhKP
            source_type: api_record
            title: 中国历代人物传记资料库：王玕（CBDB 284307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json
            external_identifier: CBDB:284307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1A43diQ9bGvkx7LE4WK6LY
        subject_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玕，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284307）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U3H1GaXwLeShARen_JAu6r
          claim_id: c_1A43diQ9bGvkx7LE4WK6LY
          source_id: s_VZq9E4EVaw4pMwQ62ABhKP
          stance: supports
          locator: CBDB:284307
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4b7Mxw0B7_1ZHz3i3LtPJV
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pbrFvrFAfd9EAmscj1TZvn
          claim_id: c_4b7Mxw0B7_1ZHz3i3LtPJV
          source_id: s_E3pznG4p8ospBVsx_n5--B
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王玕 与 王密 为同胞（CBDB 记「兄」），王密 之父／母即 王玕 之父／母。
          source:
            id: s_E3pznG4p8ospBVsx_n5--B
            source_type: api_record
            title: 中国历代人物传记资料库：王玕（CBDB 284307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json
            external_identifier: CBDB:284307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CN2jDLgCox9JFiLJPyx2Za
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Qxb9cM_uLnrO1uXW4a73NN
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KzC0XOfbZV-peP0Csd3cs
          claim_id: c_Qxb9cM_uLnrO1uXW4a73NN
          source_id: s_E3pznG4p8ospBVsx_n5--B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E3pznG4p8ospBVsx_n5--B
            source_type: api_record
            title: 中国历代人物传记资料库：王玕（CBDB 284307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json
            external_identifier: CBDB:284307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
---

# 王玕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玕 | accepted |
| bio.summary | 王玕，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CN2jDLgCox9JFiLJPyx2Za | 王鎮 | accepted |
| other | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玕（CBDB 284307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json)
