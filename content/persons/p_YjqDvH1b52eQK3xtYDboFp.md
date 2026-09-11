---
schema: wang-person/v1
id: p_YjqDvH1b52eQK3xtYDboFp
status: active
merged_into: null
display_name: 王科
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8jgUVTm2G7yWfHcMvJ8L9h
        subject_person_id: p_YjqDvH1b52eQK3xtYDboFp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TwjeY437vEJTS2aBJEvyuU
          claim_id: c_8jgUVTm2G7yWfHcMvJ8L9h
          source_id: s_4DArw5g9H5o4uEPdDou3Tr
          stance: supports
          locator: CBDB:68373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68373）
          source: &a1
            id: s_4DArw5g9H5o4uEPdDou3Tr
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 68373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68373&o=json
            external_identifier: CBDB:68373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oXXMYxyDyAwyZVrMoxiKtN
        subject_person_id: p_YjqDvH1b52eQK3xtYDboFp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科，明人物。明清進士進士，籍贯涉縣，身份为削籍官員，入仕進士。（中国历代人物传记资料库 CBDB 68373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ocHkaZk6vxiXf64rEzg0N-
          claim_id: c_oXXMYxyDyAwyZVrMoxiKtN
          source_id: s_4DArw5g9H5o4uEPdDou3Tr
          stance: supports
          locator: CBDB:68373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TKayduU3hJtsrIJRHfN6dh
        subject_person_id: p_pJdaVPhyGhcWDbCJM3HLms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YjqDvH1b52eQK3xtYDboFp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Nhj3LspgWVmfxIJvkTchP
          claim_id: c_TKayduU3hJtsrIJRHfN6dh
          source_id: s_81XYPdLeRQGCauyxr4aCEo
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_81XYPdLeRQGCauyxr4aCEo
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 284473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284473&o=json
            external_identifier: CBDB:284473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pJdaVPhyGhcWDbCJM3HLms
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0ZCmTqdcvP2ekaJM1_cT4L
        subject_person_id: p_EADPb3doLai6mBZfVsfNr5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YjqDvH1b52eQK3xtYDboFp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pPSFtLj_X_24ltiKdGN2N7
          claim_id: c_0ZCmTqdcvP2ekaJM1_cT4L
          source_id: s_mvMFK3AZAhxKMC7T9JAFTx
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mvMFK3AZAhxKMC7T9JAFTx
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 284472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284472&o=json
            external_identifier: CBDB:284472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EADPb3doLai6mBZfVsfNr5
        status: active
        display_name: 王禮
        merged_into_person_id: null
    - claim:
        id: c_D4gX7ONxqOe3c34CmKFT3w
        subject_person_id: p_LBHdZZg7BA63gTaZ2cB2PE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YjqDvH1b52eQK3xtYDboFp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tLgjrCC2owo9nbJ3iTBABh
          claim_id: c_D4gX7ONxqOe3c34CmKFT3w
          source_id: s_GLajdCzwi57RRwPC3niXhw
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GLajdCzwi57RRwPC3niXhw
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 284471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284471&o=json
            external_identifier: CBDB:284471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LBHdZZg7BA63gTaZ2cB2PE
        status: active
        display_name: 王源
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王科 | accepted |
| bio.summary | 王科，明人物。明清進士進士，籍贯涉縣，身份为削籍官員，入仕進士。（中国历代人物传记资料库 CBDB 68373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pJdaVPhyGhcWDbCJM3HLms | 王澍 | accepted |
| ancestors | p_EADPb3doLai6mBZfVsfNr5 | 王禮 | accepted |
| ancestors | p_LBHdZZg7BA63gTaZ2cB2PE | 王源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王科（CBDB 68373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68373&o=json)
- [中国历代人物传记资料库：王禮（CBDB 284472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284472&o=json)
- [中国历代人物传记资料库：王澍（CBDB 284473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284473&o=json)
- [中国历代人物传记资料库：王源（CBDB 284471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284471&o=json)
