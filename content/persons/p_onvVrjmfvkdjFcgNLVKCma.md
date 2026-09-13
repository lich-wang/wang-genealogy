---
schema: wang-person/v1
id: p_onvVrjmfvkdjFcgNLVKCma
status: active
merged_into: null
display_name: 王棋
cbdb_id: 222283
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SPckJHV8D9EHR15q1oXC9W
        subject_person_id: p_onvVrjmfvkdjFcgNLVKCma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4qEZHFfRNyLFm4H1xXc8zA
          claim_id: c_SPckJHV8D9EHR15q1oXC9W
          source_id: s_6Q2GEGb3aqCnQFr6HmH542
          stance: supports
          locator: Q45580815
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_6Q2GEGb3aqCnQFr6HmH542
            source_type: api_record
            title: 维基数据：王棋（Q45580815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580815
            external_identifier: Q45580815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_dXKK4m3j8mpDUYkeRAUGtu
          claim_id: c_SPckJHV8D9EHR15q1oXC9W
          source_id: s_BgtjiioWMxd6kDi9yjCApu
          stance: supports
          locator: CBDB:222283
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_BgtjiioWMxd6kDi9yjCApu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棋（222283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222283&o=json
            external_identifier: CBDB:222283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_if9YAFPKqaMaAjZJsEB8YZ
        subject_person_id: p_onvVrjmfvkdjFcgNLVKCma
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棋，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 222283）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zc6RQwnogsBHUbs7e6oHQp
          claim_id: c_if9YAFPKqaMaAjZJsEB8YZ
          source_id: s_6Q2GEGb3aqCnQFr6HmH542
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_5mxp2x6CsT8O1wfZk--zyz
          claim_id: c_if9YAFPKqaMaAjZJsEB8YZ
          source_id: s_BgtjiioWMxd6kDi9yjCApu
          stance: supports
          locator: CBDB:222283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bvEQCYxEwUjTp1k6jNyYSq
        subject_person_id: p_onvVrjmfvkdjFcgNLVKCma
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ktF1Vr235z8a1DWFKBtnq2
          claim_id: c_bvEQCYxEwUjTp1k6jNyYSq
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F9Mri2PURAb1LHFviet2Zn
            source_type: api_record
            title: 维基数据：王铭（Q45580879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580879
            external_identifier: Q45580879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_Aw3x8QxrrCtZhsG9e3Mvwo
          claim_id: c_bvEQCYxEwUjTp1k6jNyYSq
          source_id: s_6Q2GEGb3aqCnQFr6HmH542
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_LhDftPTdBSJ1CGALBq6bm6
        status: active
        display_name: 王铭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_nS6VYsTgAQK6aB7Cwelkhj
        subject_person_id: p_onvVrjmfvkdjFcgNLVKCma
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bZ12YW1VvZ8wACEDC3JXA6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ouKNX2ujm9YGnwMX0CO8C8
          claim_id: c_nS6VYsTgAQK6aB7Cwelkhj
          source_id: s_BgtjiioWMxd6kDi9yjCApu
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_bZ12YW1VvZ8wACEDC3JXA6
        status: active
        display_name: 王佐
        merged_into_person_id: null
  other: []
---

# 王棋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棋 | accepted |
| bio.summary | 王棋，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 222283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LhDftPTdBSJ1CGALBq6bm6 | 王铭 | accepted |
| descendants | p_bZ12YW1VvZ8wACEDC3JXA6 | 王佐 | accepted |

## 外部来源

- [维基数据：王铭（Q45580879）](https://www.wikidata.org/wiki/Q45580879)
- [维基数据：王棋（Q45580815）](https://www.wikidata.org/wiki/Q45580815)
- [CBDB 中国历代人物传记资料库：王棋（222283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222283&o=json)
