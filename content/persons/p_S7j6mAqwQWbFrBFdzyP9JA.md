---
schema: wang-person/v1
id: p_S7j6mAqwQWbFrBFdzyP9JA
status: active
merged_into: null
display_name: 王忞
cbdb_id: 262694
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2c59k6aq8B4DivKzBuaYTH
        subject_person_id: p_S7j6mAqwQWbFrBFdzyP9JA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忞，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262694）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xUI6w_RbvTrFCwXfyDFT3l
          claim_id: c_2c59k6aq8B4DivKzBuaYTH
          source_id: s_wnQ35ESPzZF2aWq4UuZvbK
          stance: supports
          locator: CBDB:262694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wnQ35ESPzZF2aWq4UuZvbK
            source_type: api_record
            title: 中国历代人物传记资料库：王忞（CBDB 262694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json
            external_identifier: CBDB:262694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VutU7FJGL7k1g6X86CWYzE
        subject_person_id: p_S7j6mAqwQWbFrBFdzyP9JA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MCWb8DfYB54BtMUfkvmvMi
          claim_id: c_VutU7FJGL7k1g6X86CWYzE
          source_id: s_wnQ35ESPzZF2aWq4UuZvbK
          stance: supports
          locator: CBDB:262694
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ehRyn3JkGab45JAUc1qNTd
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S7j6mAqwQWbFrBFdzyP9JA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FxTn2OxW3B6JSdKFZ91asn
          claim_id: c_ehRyn3JkGab45JAUc1qNTd
          source_id: s_-uWAgf0CoJN6wAnDRfYqVS
          stance: supports
          locator: CBDB：兄弟 王憲（68238）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王忞 与 王憲 为同胞（CBDB 记「兄」），王憲 之父／母即 王忞 之父／母。
          source:
            id: s_-uWAgf0CoJN6wAnDRfYqVS
            source_type: api_record
            title: 中国历代人物传记资料库：王忞（CBDB 262694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json
            external_identifier: CBDB:262694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rR2pkPMo5WGEMnvA2UogPQ
        status: active
        display_name: 王智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KqCpk1pv3GfAm-KlqCUE8V
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S7j6mAqwQWbFrBFdzyP9JA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uvyD8XwggdPfBK9sJpt4Hi
          claim_id: c_KqCpk1pv3GfAm-KlqCUE8V
          source_id: s_-uWAgf0CoJN6wAnDRfYqVS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68238 王憲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-uWAgf0CoJN6wAnDRfYqVS
            source_type: api_record
            title: 中国历代人物传记资料库：王忞（CBDB 262694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json
            external_identifier: CBDB:262694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
---

# 王忞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忞，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262694） | accepted |
| name.primary | 王忞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rR2pkPMo5WGEMnvA2UogPQ | 王智 | accepted |
| other | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忞（CBDB 262694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json)
