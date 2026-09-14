---
schema: wang-person/v1
id: p_hoiR5qTnipsgRQf7sFqbiX
status: active
merged_into: null
display_name: 王永慶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BD9ERP7sDAQDg15KrKiaik
        subject_person_id: p_hoiR5qTnipsgRQf7sFqbiX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2DQaiYASXVSJTY232BL8BL
          claim_id: c_BD9ERP7sDAQDg15KrKiaik
          source_id: s_iVBXQ2a7yDDasR6Ufe9emm
          stance: supports
          locator: CBDB:221622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221622）
          source: &a1
            id: s_iVBXQ2a7yDDasR6Ufe9emm
            source_type: api_record
            title: 中国历代人物传记资料库：王永慶（CBDB 221622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221622&o=json
            external_identifier: CBDB:221622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nXZ26QrWvUnzULoi71wn1g
        subject_person_id: p_hoiR5qTnipsgRQf7sFqbiX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永慶，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221622）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-ne9SfuvRZfnxrt-O1lAjF
          claim_id: c_nXZ26QrWvUnzULoi71wn1g
          source_id: s_iVBXQ2a7yDDasR6Ufe9emm
          stance: supports
          locator: CBDB:221622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f5EIPiPAMFNF9zhYh904i3
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hoiR5qTnipsgRQf7sFqbiX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSp-k4XYKMElIxHaJB_IEo
          claim_id: c_f5EIPiPAMFNF9zhYh904i3
          source_id: s_9-qLG7RIez77JGvYA_kGQg
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永慶 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永慶 之父／母。
          source:
            id: s_9-qLG7RIez77JGvYA_kGQg
            source_type: api_record
            title: 中国历代人物传记资料库：王永慶（CBDB 221622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221622&o=json
            external_identifier: CBDB:221622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syn7L23qcdCnWJH3gNVxhk
        status: active
        display_name: 王國柱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WQwVQQeCnDXK96F7HaDEzW
        subject_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hoiR5qTnipsgRQf7sFqbiX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ENA-FC6GRpDrcs1j1NNbY
          claim_id: c_WQwVQQeCnDXK96F7HaDEzW
          source_id: s_9-qLG7RIez77JGvYA_kGQg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206689 王永寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9-qLG7RIez77JGvYA_kGQg
            source_type: api_record
            title: 中国历代人物传记资料库：王永慶（CBDB 221622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221622&o=json
            external_identifier: CBDB:221622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
---

# 王永慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永慶 | accepted |
| bio.summary | 王永慶，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Syn7L23qcdCnWJH3gNVxhk | 王國柱 | accepted |
| other | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永慶（CBDB 221622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221622&o=json)
