---
schema: wang-person/v1
id: p_j2iruMugSZPepsD4KQYC8f
status: active
merged_into: null
display_name: 王林
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6EYYKHmapod6GCPT3JUZXb
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U2ZmAPHTAYYQWLruXbCmFD
          claim_id: c_6EYYKHmapod6GCPT3JUZXb
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: CBDB:273790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273790）
          source: &a1
            id: s_PUXA73Lg59Kk5Lk53X9HYh
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 273790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273790&o=json
            external_identifier: CBDB:273790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q58JbZ3EqodquCeaAGSdoi
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林，明人物。弘治十八年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 273790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZaZm1v8n2-D5m3BoAVYmJi
          claim_id: c_Q58JbZ3EqodquCeaAGSdoi
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: CBDB:273790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vPRQqc_wHiBK8ibxIv2ECk
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q64bGcgGwXR6qtHrStbMTc
          claim_id: c_vPRQqc_wHiBK8ibxIv2ECk
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oUoF6dRdhe6WLHeR9E6Mai
        status: active
        display_name: 王鏜
        merged_into_person_id: null
    - claim:
        id: c_1BNXE4hKAkOsIUHSdVPLvV
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1HQXEBWufASsGiebeytZc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXj-TVGhihxml78uSENehh
          claim_id: c_1BNXE4hKAkOsIUHSdVPLvV
          source_id: s_gL4eE-vcDXYUJyvIlpHZkK
          stance: supports
          locator: CBDB：兄弟 王鏜（201524）之父／母 王林
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王英 之父／母。
          source:
            id: s_gL4eE-vcDXYUJyvIlpHZkK
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 273797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json
            external_identifier: CBDB:273797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M1HQXEBWufASsGiebeytZc
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_20G5ailc1G-xZ195nmQvlO
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_au21aH3Df2zzjm3k5PEk7E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8Zdpj_O5P2YVv4OlU1W_o
          claim_id: c_20G5ailc1G-xZ195nmQvlO
          source_id: s_Y01yP6mg2xmtq__u1I-GI1
          stance: supports
          locator: CBDB：兄弟 王鏜（201524）之父／母 王林
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王鑑 之父／母。
          source:
            id: s_Y01yP6mg2xmtq__u1I-GI1
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 273796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273796&o=json
            external_identifier: CBDB:273796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_au21aH3Df2zzjm3k5PEk7E
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_YJ0Y0E2sMIBaELQKBDg2FP
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fy6sHgPB2cKx6gF75nbQZX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdLb9b3P4O3Tgvit7MfSCB
          claim_id: c_YJ0Y0E2sMIBaELQKBDg2FP
          source_id: s_npLc0tVbQs6i3wf78y0R_r
          stance: supports
          locator: CBDB：兄弟 王鏜（201524）之父／母 王林
          quotation: null
          interpretation_note: 由兄弟关系推断：王雄 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王雄 之父／母。
          source:
            id: s_npLc0tVbQs6i3wf78y0R_r
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 273793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json
            external_identifier: CBDB:273793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fy6sHgPB2cKx6gF75nbQZX
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_3jPmkrjnIl04pzme4Me2z8
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pSz1iZp7XDTDmvdPy88wp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HiQkjTU4Tds-u_zG8SghNF
          claim_id: c_3jPmkrjnIl04pzme4Me2z8
          source_id: s_xHj5nOad4yeOQ1n1ilhB-A
          stance: supports
          locator: CBDB：兄弟 王鏜（201524）之父／母 王林
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王銳 之父／母。
          source:
            id: s_xHj5nOad4yeOQ1n1ilhB-A
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 273794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273794&o=json
            external_identifier: CBDB:273794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pSz1iZp7XDTDmvdPy88wp5
        status: active
        display_name: 王銳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| bio.summary | 王林，明人物。弘治十八年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 273790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oUoF6dRdhe6WLHeR9E6Mai | 王鏜 | accepted |
| children | p_M1HQXEBWufASsGiebeytZc | 王英 | accepted |
| children | p_au21aH3Df2zzjm3k5PEk7E | 王鑑 | accepted |
| children | p_fy6sHgPB2cKx6gF75nbQZX | 王雄 | accepted |
| children | p_pSz1iZp7XDTDmvdPy88wp5 | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 273796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273796&o=json)
- [中国历代人物传记资料库：王林（CBDB 273790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273790&o=json)
- [中国历代人物传记资料库：王銳（CBDB 273794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273794&o=json)
- [中国历代人物传记资料库：王雄（CBDB 273793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json)
- [中国历代人物传记资料库：王英（CBDB 273797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json)
