---
schema: wang-person/v1
id: p_LhDftPTdBSJ1CGALBq6bm6
status: active
merged_into: null
display_name: 王铭
cbdb_id: 222284
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VShyeuG9uBe5ahpNVDD4iW
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 222284）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_JfPHvqu99ymHVuxdSJBRAN
          claim_id: c_VShyeuG9uBe5ahpNVDD4iW
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
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
        - id: cs_I7E_xWPSVDG9txdigtyjpO
          claim_id: c_VShyeuG9uBe5ahpNVDD4iW
          source_id: s_4YQ9r3CVSoUk3P8YrMEEJd
          stance: supports
          locator: CBDB:222284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4YQ9r3CVSoUk3P8YrMEEJd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銘（222284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222284&o=json
            external_identifier: CBDB:222284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.059Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBRwD6mdZsDhxQtekooiVi
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NXZU9kL8MLyBbjH1xcVicN
          claim_id: c_kBRwD6mdZsDhxQtekooiVi
          source_id: s_4YQ9r3CVSoUk3P8YrMEEJd
          stance: supports
          locator: Q45580879
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_sRHaHgGdFWkYm3z8CDVd81
          claim_id: c_kBRwD6mdZsDhxQtekooiVi
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: Q45580879
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a2
        - id: cs_Aw3x8QxrrCtZhsG9e3Mvwo
          claim_id: c_bvEQCYxEwUjTp1k6jNyYSq
          source_id: s_6Q2GEGb3aqCnQFr6HmH542
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
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
      object_person:
        id: p_onvVrjmfvkdjFcgNLVKCma
        status: active
        display_name: 王棋
        merged_into_person_id: null
  children:
    - claim:
        id: c_FYkNrP5J2b6faMGQ58xi54
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2JBV3UP1jjSL1hUd6uRUK3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eq3q819QEZHT87fWJTX1Tr
          claim_id: c_FYkNrP5J2b6faMGQ58xi54
          source_id: s_AzvgXDoZLR15WaH1xj38Sy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AzvgXDoZLR15WaH1xj38Sy
            source_type: api_record
            title: 维基数据：王鸾（Q45580943）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580943
            external_identifier: Q45580943
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_DkC5M1fsfYnEmniBJp2VKg
          claim_id: c_FYkNrP5J2b6faMGQ58xi54
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_2JBV3UP1jjSL1hUd6uRUK3
        status: active
        display_name: 王鸾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_VgHYqcBvOY0ilVgBZfaeH6
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bZ12YW1VvZ8wACEDC3JXA6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8AZhR0yDWqTPw5_h_LeCW
          claim_id: c_VgHYqcBvOY0ilVgBZfaeH6
          source_id: s_4YQ9r3CVSoUk3P8YrMEEJd
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bZ12YW1VvZ8wACEDC3JXA6
        status: active
        display_name: 王佐
        merged_into_person_id: null
  other: []
---

# 王铭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铭，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 222284） | accepted |
| name.primary | 王铭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_onvVrjmfvkdjFcgNLVKCma | 王棋 | accepted |
| children | p_2JBV3UP1jjSL1hUd6uRUK3 | 王鸾 | accepted |
| descendants | p_bZ12YW1VvZ8wACEDC3JXA6 | 王佐 | accepted |

## 外部来源

- [维基数据：王鸾（Q45580943）](https://www.wikidata.org/wiki/Q45580943)
- [维基数据：王铭（Q45580879）](https://www.wikidata.org/wiki/Q45580879)
- [维基数据：王棋（Q45580815）](https://www.wikidata.org/wiki/Q45580815)
- [CBDB 中国历代人物传记资料库：王銘（222284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222284&o=json)
