---
schema: wang-person/v1
id: p_1HLRDPP5GEjvYAj6jfrJ31
status: merged
merged_into: p_6BymFd7sw6j7GAmg7erqPj
display_name: 王智興
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P5V8BRHV53X5qJSVXSphT6
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ypPJk2N8jRAiZJJuqQ2cEc
          claim_id: c_P5V8BRHV53X5qJSVXSphT6
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
          stance: supports
          locator: CBDB:184939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184939）
          source: &a1
            id: s_JMh7LD5fhnyT5XkRyPPbDx
            source_type: api_record
            title: 中国历代人物传记资料库：王智興（CBDB 184939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184939&o=json
            external_identifier: CBDB:184939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1UwcDPQukDBunvkivD2tMY
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 757年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPag6EHQfvo4fUK1i6E7gw
          claim_id: c_1UwcDPQukDBunvkivD2tMY
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Bdq5J6QSsCyJau7LE6HKks
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZvYcuevy2io2PHrtWXLvi
          claim_id: c_Bdq5J6QSsCyJau7LE6HKks
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vis2t9oh5u1LurMGGzEjkk
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智興（757年—836年），唐人物。身份为詩人，曾任節度使、州刺史。（中国历代人物传记资料库 CBDB 184939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5VUH0z-LB-oQw6WCvjZ_Wy
          claim_id: c_Vis2t9oh5u1LurMGGzEjkk
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
          stance: supports
          locator: CBDB:184939
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CD7lsOXb4RJjAl-9R-Ll3A
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NFQFQxzo2TzfSa8GFRgZBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1XkSpu28hzxx_J-Jc3P-j8
          claim_id: c_CD7lsOXb4RJjAl-9R-Ll3A
          source_id: s_QAkFsA6T3CMGyKCZronZDy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QAkFsA6T3CMGyKCZronZDy
            source_type: api_record
            title: 中国历代人物传记资料库：王晏平（CBDB 184940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184940&o=json
            external_identifier: CBDB:184940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NFQFQxzo2TzfSa8GFRgZBu
        status: active
        display_name: 王晏平
        merged_into_person_id: null
    - claim:
        id: c__ZEOlhOmvN-ZXY0CWq_6Xl
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Drssue4KRkK7sPyMEaQ5G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EeOecscSVUChBY1ORZ6N6N
          claim_id: c__ZEOlhOmvN-ZXY0CWq_6Xl
          source_id: s_4ffXZKo2rsDFCKcVzmJdjv
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4ffXZKo2rsDFCKcVzmJdjv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏臯（184942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184942&o=json
            external_identifier: CBDB:184942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:40.713Z
            metadata_json: null
      object_person:
        id: p_5Drssue4KRkK7sPyMEaQ5G
        status: active
        display_name: 王晏皋
        merged_into_person_id: null
    - claim:
        id: c_GkcgvCQ0PXj9zNosyL1pD1
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ptoyYXrGsuZM3gms5pv3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j3AhWCzeZ4DV-xBQ6wCrI5
          claim_id: c_GkcgvCQ0PXj9zNosyL1pD1
          source_id: s_NYMjdDVfpX6mLtfbAivLCx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NYMjdDVfpX6mLtfbAivLCx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏深（184946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184946&o=json
            external_identifier: CBDB:184946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:42.533Z
            metadata_json: null
      object_person:
        id: p_8ptoyYXrGsuZM3gms5pv3F
        status: active
        display_name: 王晏深
        merged_into_person_id: null
    - claim:
        id: c_-XFWu6QVtXZUU3lzyuHlGw
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgVy44kEGbjeLMZt16FcbN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VVJulk8oLwKHhodDoBYrxt
          claim_id: c_-XFWu6QVtXZUU3lzyuHlGw
          source_id: s_ZaXVtLHqz8ogG1a42ZfcBb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZaXVtLHqz8ogG1a42ZfcBb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏宰（184941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184941&o=json
            external_identifier: CBDB:184941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:22.607Z
            metadata_json: null
      object_person:
        id: p_HgVy44kEGbjeLMZt16FcbN
        status: active
        display_name: 王宰
        merged_into_person_id: null
    - claim:
        id: c_QC-Gi0YUSl53ky-ppZfxCz
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hrNsSN4wVj9jcL4eC2GhRW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dstls2576v4_mODXg0jPV9
          claim_id: c_QC-Gi0YUSl53ky-ppZfxCz
          source_id: s_RR2hojuNLEJtH66Nm4RzL4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RR2hojuNLEJtH66Nm4RzL4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏斌（184947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184947&o=json
            external_identifier: CBDB:184947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:42.531Z
            metadata_json: null
      object_person:
        id: p_hrNsSN4wVj9jcL4eC2GhRW
        status: active
        display_name: 王晏斌
        merged_into_person_id: null
    - claim:
        id: c_jH78Cz-PM1h3u3ZSHxZAA_
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iVXKWi9f5gNuEVGc79EzBF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8-_7zl8Oao9DtIc6DymMJ3
          claim_id: c_jH78Cz-PM1h3u3ZSHxZAA_
          source_id: s_yNY1NrAj3295GrzhL3CDMT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yNY1NrAj3295GrzhL3CDMT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏寶（184943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184943&o=json
            external_identifier: CBDB:184943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:40.709Z
            metadata_json: null
      object_person:
        id: p_iVXKWi9f5gNuEVGc79EzBF
        status: active
        display_name: 王晏宝
        merged_into_person_id: null
    - claim:
        id: c_odKkpoJZ1HBSgPrFTSu7pg
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L9wgabBW76ENxwGEnK8E56
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gFn4oreaEfCklA8MOxlH-0
          claim_id: c_odKkpoJZ1HBSgPrFTSu7pg
          source_id: s_8aD7uS49eEWfUkcg57nGWT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8aD7uS49eEWfUkcg57nGWT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏恭（184944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184944&o=json
            external_identifier: CBDB:184944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:42.543Z
            metadata_json: null
      object_person:
        id: p_L9wgabBW76ENxwGEnK8E56
        status: active
        display_name: 王晏恭
        merged_into_person_id: null
    - claim:
        id: c_3pw-abB7Frkpu2nRyyin-w
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o59djP1edkTV42VCk3GSN1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ah8qU7EymuwkNcGLKFKsY
          claim_id: c_3pw-abB7Frkpu2nRyyin-w
          source_id: s_t7rH94kPxF24nJQR59tdtj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t7rH94kPxF24nJQR59tdtj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏逸（184945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184945&o=json
            external_identifier: CBDB:184945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:42.516Z
            metadata_json: null
      object_person:
        id: p_o59djP1edkTV42VCk3GSN1
        status: active
        display_name: 王晏逸
        merged_into_person_id: null
    - claim:
        id: c_IU3O5kBHbvkdf2aBCrBg8c
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Un1qCeghV1uPA98yeCmoYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__QB8FyXoyY8JqQQ3j5mqaL
          claim_id: c_IU3O5kBHbvkdf2aBCrBg8c
          source_id: s_MvAwH3DZtx2NLsULJaZ2hc
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MvAwH3DZtx2NLsULJaZ2hc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏韜（184948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184948&o=json
            external_identifier: CBDB:184948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:44.493Z
            metadata_json: null
      object_person:
        id: p_Un1qCeghV1uPA98yeCmoYH
        status: active
        display_name: 王晏韬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智興 | accepted |
| birth.date | 757年 | accepted |
| death.date | 836年 | accepted |
| bio.summary | 王智興（757年—836年），唐人物。身份为詩人，曾任節度使、州刺史。（中国历代人物传记资料库 CBDB 184939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NFQFQxzo2TzfSa8GFRgZBu | 王晏平 | accepted |
| children | p_5Drssue4KRkK7sPyMEaQ5G | 王晏皋 | accepted |
| children | p_8ptoyYXrGsuZM3gms5pv3F | 王晏深 | accepted |
| children | p_HgVy44kEGbjeLMZt16FcbN | 王宰 | accepted |
| children | p_hrNsSN4wVj9jcL4eC2GhRW | 王晏斌 | accepted |
| children | p_iVXKWi9f5gNuEVGc79EzBF | 王晏宝 | accepted |
| children | p_L9wgabBW76ENxwGEnK8E56 | 王晏恭 | accepted |
| children | p_o59djP1edkTV42VCk3GSN1 | 王晏逸 | accepted |
| children | p_Un1qCeghV1uPA98yeCmoYH | 王晏韬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晏平（CBDB 184940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184940&o=json)
- [中国历代人物传记资料库：王智興（CBDB 184939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184939&o=json)
- [CBDB 中国历代人物传记资料库：王晏寶（184943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184943&o=json)
- [CBDB 中国历代人物传记资料库：王晏斌（184947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184947&o=json)
- [CBDB 中国历代人物传记资料库：王晏臯（184942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184942&o=json)
- [CBDB 中国历代人物传记资料库：王晏恭（184944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184944&o=json)
- [CBDB 中国历代人物传记资料库：王晏深（184946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184946&o=json)
- [CBDB 中国历代人物传记资料库：王晏韜（184948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184948&o=json)
- [CBDB 中国历代人物传记资料库：王晏逸（184945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184945&o=json)
- [CBDB 中国历代人物传记资料库：王晏宰（184941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184941&o=json)
