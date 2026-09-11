---
schema: wang-person/v1
id: p_QoJPmnH2p3TN2WeA18wP8z
status: active
merged_into: null
display_name: 王凱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kanM2H6K5mMhgsZCHzyvWy
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j1Q6j154PpFNhjgZ34Az27
          claim_id: c_kanM2H6K5mMhgsZCHzyvWy
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: CBDB:7379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7379）
          source: &a1
            id: s_1Zsci6iF4Arcot2TKBLMBo
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 7379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json
            external_identifier: CBDB:7379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hZcS13c2DqTPxXTsHnJFUm
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AHYXQiu9RNhpwHpW576XMF
          claim_id: c_hZcS13c2DqTPxXTsHnJFUm
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4-9vs1F09CnFWVfwO1sMDz
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TG677A2uqsLQn3jRYXYFJs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGfpDglShaumpv0a_PMlTM
          claim_id: c_4-9vs1F09CnFWVfwO1sMDz
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，987：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TG677A2uqsLQn3jRYXYFJs
        status: active
        display_name: 王彭
        merged_into_person_id: null
    - claim:
        id: c_aRbB3owAHsMJd_Hx_ppPHv
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wDnLRYYNiPRiBw5GV82Djd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QEZTzu3oOwq-0qBpmRThQV
          claim_id: c_aRbB3owAHsMJd_Hx_ppPHv
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 范太史集，卷四八《右監門衛大將軍妻孝感縣君王氏墓志銘》：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wDnLRYYNiPRiBw5GV82Djd
        status: active
        display_name: 王大方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lw7PReM5HO93hBLAfMM1e-
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUG2eBeyqcbUj4YJkrdtUI
          claim_id: c_lw7PReM5HO93hBLAfMM1e-
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g1Zwm5njGBgG9tiNz4CK8m
        status: active
        display_name: 王全斌
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_jGVjjHq3a5Copwy-L40Jmz
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_te7PsQUmMv5ookHDsggpFw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aVlPmQYrQ2J60Jdb8o-gtO
          claim_id: c_jGVjjHq3a5Copwy-L40Jmz
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1040：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_te7PsQUmMv5ookHDsggpFw
        status: active
        display_name: 王詵
        merged_into_person_id: null
  other: []
---

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TG677A2uqsLQn3jRYXYFJs | 王彭 | accepted |
| children | p_wDnLRYYNiPRiBw5GV82Djd | 王大方 | accepted |
| ancestors | p_g1Zwm5njGBgG9tiNz4CK8m | 王全斌 | accepted |
| descendants | p_te7PsQUmMv5ookHDsggpFw | 王詵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 7379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json)
