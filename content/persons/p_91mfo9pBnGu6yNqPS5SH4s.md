---
schema: wang-person/v1
id: p_91mfo9pBnGu6yNqPS5SH4s
status: active
merged_into: null
display_name: 王養正
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qvTUHNM4mKwpkCSryxfxS
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MQuNyJpx3A79kPY6mPfXLo
          claim_id: c_9qvTUHNM4mKwpkCSryxfxS
          source_id: s_TmLXC1JyBH633vv4fYfj4S
          stance: supports
          locator: CBDB:202427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202427）
          source: &a1
            id: s_TmLXC1JyBH633vv4fYfj4S
            source_type: api_record
            title: 中国历代人物传记资料库：王養正（CBDB 202427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202427&o=json
            external_identifier: CBDB:202427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wZ8ktuoEr5qA7dr77EvMkG
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_izw44mPyRWiGW5xD61NW4L
          claim_id: c_wZ8ktuoEr5qA7dr77EvMkG
          source_id: s_TmLXC1JyBH633vv4fYfj4S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PXt97JieQnWCUmVQ6bX8mQ
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養正（生于1495年），明人物。明清進士進士，籍贯南充，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 202427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CjRZLNpvLY8WUzN6O6u04y
          claim_id: c_PXt97JieQnWCUmVQ6bX8mQ
          source_id: s_TmLXC1JyBH633vv4fYfj4S
          stance: supports
          locator: CBDB:202427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4hbEssPjs64LhUZjkg7MP
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N11h--bLGKedzQiUeI-5WQ
          claim_id: c_W4hbEssPjs64LhUZjkg7MP
          source_id: s_i1uZY6NhK22gAokU3QjXqb
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i1uZY6NhK22gAokU3QjXqb
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 287959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287959&o=json
            external_identifier: CBDB:287959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_L25AA1dbPLFD1pLw6NiMqz
        status: active
        display_name: 王璠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aqu0U1nTGaWk3KOLlFnHBL
        subject_person_id: p_8gmNnD67pPk4Jcgg1oaCvd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7tMf1GNZHItnvd0Q7DEiLI
          claim_id: c_aqu0U1nTGaWk3KOLlFnHBL
          source_id: s_ruU7HRY239s3HmDCn8SH4K
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ruU7HRY239s3HmDCn8SH4K
            source_type: api_record
            title: 中国历代人物传记资料库：王邑（CBDB 287958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287958&o=json
            external_identifier: CBDB:287958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8gmNnD67pPk4Jcgg1oaCvd
        status: active
        display_name: 王邑
        merged_into_person_id: null
    - claim:
        id: c_j1Pymzw9893_99AeEO_swZ
        subject_person_id: p_hEFhwUEzH2dB433RHJ2LCZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUhdvmVNR_nDJbwsjV3hD8
          claim_id: c_j1Pymzw9893_99AeEO_swZ
          source_id: s_JTisP1mQ81sz17so9U7PCf
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JTisP1mQ81sz17so9U7PCf
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 287957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287957&o=json
            external_identifier: CBDB:287957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hEFhwUEzH2dB433RHJ2LCZ
        status: active
        display_name: 王進
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_zfXykmUncToKH78buadJV3
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2IeLAvJX-QZ9KnCTaj_lv
          claim_id: c_zfXykmUncToKH78buadJV3
          source_id: s_RU2dRo9SUK4OIkrKaFJWfX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202427 王養正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RU2dRo9SUK4OIkrKaFJWfX
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fj2FWE18U3HUHwm4FacqQR
        status: active
        display_name: 王養素
        merged_into_person_id: null
    - claim:
        id: c_Fz-9J36PFDeWN2YLG8_45Q
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u458xMHFN5Z27VY2fzxC4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IVVVlMmpnRloa_5OitgyeM
          claim_id: c_Fz-9J36PFDeWN2YLG8_45Q
          source_id: s_VfHDru5s9GGnrB_-KF0RkC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202427 王養正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VfHDru5s9GGnrB_-KF0RkC
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u458xMHFN5Z27VY2fzxC4e
        status: active
        display_name: 王養賢
        merged_into_person_id: null
---

# 王養正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養正 | accepted |
| birth.date | 1495年 | accepted |
| bio.summary | 王養正（生于1495年），明人物。明清進士進士，籍贯南充，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 202427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L25AA1dbPLFD1pLw6NiMqz | 王璠 | accepted |
| ancestors | p_8gmNnD67pPk4Jcgg1oaCvd | 王邑 | accepted |
| ancestors | p_hEFhwUEzH2dB433RHJ2LCZ | 王進 | accepted |
| other | p_Fj2FWE18U3HUHwm4FacqQR | 王養素 | accepted |
| other | p_u458xMHFN5Z27VY2fzxC4e | 王養賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 287959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287959&o=json)
- [中国历代人物传记资料库：王進（CBDB 287957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287957&o=json)
- [中国历代人物传记资料库：王養素（CBDB 287965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json)
- [中国历代人物传记资料库：王養賢（CBDB 287963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json)
- [中国历代人物传记资料库：王養正（CBDB 202427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202427&o=json)
- [中国历代人物传记资料库：王邑（CBDB 287958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287958&o=json)
