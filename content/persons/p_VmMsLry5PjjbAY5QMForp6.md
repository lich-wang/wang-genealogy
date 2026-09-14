---
schema: wang-person/v1
id: p_VmMsLry5PjjbAY5QMForp6
status: active
merged_into: null
display_name: 王章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PDzh6hdUx2KTsLqqPPD88S
        subject_person_id: p_VmMsLry5PjjbAY5QMForp6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PahLKvubiDPAqC3fx4xiLk
          claim_id: c_PDzh6hdUx2KTsLqqPPD88S
          source_id: s_WK3Pp5Aj4vUHLNRqT4rNb7
          stance: supports
          locator: CBDB:309151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309151）
          source: &a1
            id: s_WK3Pp5Aj4vUHLNRqT4rNb7
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 309151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json
            external_identifier: CBDB:309151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wyRAkY5g2R7JB3uFQviT2D
        subject_person_id: p_VmMsLry5PjjbAY5QMForp6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，明人物。天順元年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 309151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E577FmQOWXDITpBLDl1Xgc
          claim_id: c_wyRAkY5g2R7JB3uFQviT2D
          source_id: s_WK3Pp5Aj4vUHLNRqT4rNb7
          stance: supports
          locator: CBDB:309151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L9bDZudCjjvM_1P-7vubf1
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VmMsLry5PjjbAY5QMForp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_80svr7xlRCwVV8i1cHRqnZ
          claim_id: c_L9bDZudCjjvM_1P-7vubf1
          source_id: s_goAJfHodBtVZ7Eee4hWaMQ
          stance: supports
          locator: CBDB：兄弟 王雯（198731）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王雯 为同胞（CBDB 记「兄」），王雯 之父／母即 王章 之父／母。
          source:
            id: s_goAJfHodBtVZ7Eee4hWaMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 309151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json
            external_identifier: CBDB:309151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RGZcAsK4gvBLjAnNq7jieH
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
        id: c_ERMk2TbE3FpRibl95vzTlZ
        subject_person_id: p_VmMsLry5PjjbAY5QMForp6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxbg-Hb1fvP85IlqVNliNA
          claim_id: c_ERMk2TbE3FpRibl95vzTlZ
          source_id: s_goAJfHodBtVZ7Eee4hWaMQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198731 王雯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_goAJfHodBtVZ7Eee4hWaMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 309151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json
            external_identifier: CBDB:309151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qADtxjrVEChTrGk5M7bGg2
        status: active
        display_name: 王雯
        merged_into_person_id: null
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，明人物。天順元年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 309151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RGZcAsK4gvBLjAnNq7jieH | 王貴 | accepted |
| other | p_qADtxjrVEChTrGk5M7bGg2 | 王雯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 309151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json)
