---
schema: wang-person/v1
id: p_WS94tW4F37e3Dry7ZkTKW3
status: active
merged_into: null
display_name: 王俊
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xbP3mFZgQBeLMnMLBN2FUU
        subject_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L81DFnvp1XHa2THc5UaRF7
          claim_id: c_xbP3mFZgQBeLMnMLBN2FUU
          source_id: s_14BRQ1aE51dCEaovM73CBq
          stance: supports
          locator: CBDB:246425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246425）
          source: &a1
            id: s_14BRQ1aE51dCEaovM73CBq
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 246425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json
            external_identifier: CBDB:246425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zbi33GVSqH3DKC1Vb3y7Wq
        subject_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。成化八年進士，籍贯夏津。（中国历代人物传记资料库 CBDB 246425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yAwyOEIf8O4He6V_P6iNgx
          claim_id: c_Zbi33GVSqH3DKC1Vb3y7Wq
          source_id: s_14BRQ1aE51dCEaovM73CBq
          stance: supports
          locator: CBDB:246425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_URhB5fdyXvHSsQ27ISp-g7
        subject_person_id: p_vLt7CbNRRVMBtGsA8iSfNw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d3P-Xb3Ucyv1oVcwF2HnO4
          claim_id: c_URhB5fdyXvHSsQ27ISp-g7
          source_id: s_0y4A1uKZoWsfTWL0sqzQOz
          stance: supports
          locator: CBDB：兄弟 王雄（199540）之父／母 王恕
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王雄 为同胞（CBDB 记「兄」），王雄 之父／母即 王俊 之父／母。
          source:
            id: s_0y4A1uKZoWsfTWL0sqzQOz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 246425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json
            external_identifier: CBDB:246425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vLt7CbNRRVMBtGsA8iSfNw
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_JJ89peSTBHoNPERWACJxke
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JsHsGZFnNZaEBdbNLaydtM
          claim_id: c_JJ89peSTBHoNPERWACJxke
          source_id: s_0y4A1uKZoWsfTWL0sqzQOz
          stance: supports
          locator: CBDB：兄弟 王雄（201736）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王雄 为同胞（CBDB 记「兄」），王雄 之父／母即 王俊 之父／母。
          source:
            id: s_0y4A1uKZoWsfTWL0sqzQOz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 246425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json
            external_identifier: CBDB:246425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sr256MBGaAqYqzJEV6SSHK
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_C6Lbo1nb3rLwe4Vu5YyYdQ
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78U0W1WS5DKH8LQQIU4zXE
          claim_id: c_C6Lbo1nb3rLwe4Vu5YyYdQ
          source_id: s_0y4A1uKZoWsfTWL0sqzQOz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199540 王雄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0y4A1uKZoWsfTWL0sqzQOz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 246425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json
            external_identifier: CBDB:246425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_46qxZEY1wVCATMP4bSgASc
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_AL0qpvMa6eQrsrlRALPn_2
        subject_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6De6xe_lXv9feHApBZ1rC
          claim_id: c_AL0qpvMa6eQrsrlRALPn_2
          source_id: s_0y4A1uKZoWsfTWL0sqzQOz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201736 王雄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0y4A1uKZoWsfTWL0sqzQOz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 246425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json
            external_identifier: CBDB:246425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDsTSNKuQNDdLuyN146sBf
        status: active
        display_name: 王雄
        merged_into_person_id: null
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。成化八年進士，籍贯夏津。（中国历代人物传记资料库 CBDB 246425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vLt7CbNRRVMBtGsA8iSfNw | 王恕 | accepted |
| parents | p_sr256MBGaAqYqzJEV6SSHK | 王綱 | accepted |
| other | p_46qxZEY1wVCATMP4bSgASc | 王雄 | accepted |
| other | p_dDsTSNKuQNDdLuyN146sBf | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 246425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json)
