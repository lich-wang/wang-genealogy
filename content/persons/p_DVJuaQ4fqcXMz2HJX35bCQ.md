---
schema: wang-person/v1
id: p_DVJuaQ4fqcXMz2HJX35bCQ
status: active
merged_into: null
display_name: 王一魁
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9wkrVhd7P7kweJ6cTk1oYd
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BLuy754HzGpf6ETE6b5AVf
          claim_id: c_9wkrVhd7P7kweJ6cTk1oYd
          source_id: s_4H1eGnKMCeuRiiTPgajk5D
          stance: supports
          locator: CBDB:207258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207258）
          source: &a1
            id: s_4H1eGnKMCeuRiiTPgajk5D
            source_type: api_record
            title: 中国历代人物传记资料库：王一魁（CBDB 207258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207258&o=json
            external_identifier: CBDB:207258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5Wt4TD1LFpBdz1dGkgZXDj
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1563年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZaCZ8Ve82MRu9ddv9AzQFb
          claim_id: c_5Wt4TD1LFpBdz1dGkgZXDj
          source_id: s_4H1eGnKMCeuRiiTPgajk5D
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
        id: c_EhFqV8fsGjx25fEVVoJHtL
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHfc3KBM3ddk2n4TAPKiLJ
          claim_id: c_EhFqV8fsGjx25fEVVoJHtL
          source_id: s_4H1eGnKMCeuRiiTPgajk5D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w-Sw4gbmn9_dVeJwnb5IY2
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0Gl44RcQXWlzbgZ0Th3Hy
          claim_id: c_w-Sw4gbmn9_dVeJwnb5IY2
          source_id: s_8E5TNk5RBn555WSQkebp2d
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8E5TNk5RBn555WSQkebp2d
            source_type: api_record
            title: 中国历代人物传记资料库：王承光（CBDB 230377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230377&o=json
            external_identifier: CBDB:230377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Yn1HjpWop229REQ9NGBi2
        status: active
        display_name: 王承光
        merged_into_person_id: null
  children:
    - claim:
        id: c_096mqSnThmtttQyMA8yWsm
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HAPwpvZBVPzcnguyVmhnBB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ga-Y8tNCSICpAEK5RNZbpJ
          claim_id: c_096mqSnThmtttQyMA8yWsm
          source_id: s_9CLe71bU3D5XsLxq893Jv4
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9CLe71bU3D5XsLxq893Jv4
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 230386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230386&o=json
            external_identifier: CBDB:230386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HAPwpvZBVPzcnguyVmhnBB
        status: active
        display_name: 王夢熊
        merged_into_person_id: null
    - claim:
        id: c_v6BBqrr2w7MRYAldWAHf6-
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u1wp8xocy2jBFDuqxm11QW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_22p3kKxBPwyK4eELhmPbb2
          claim_id: c_v6BBqrr2w7MRYAldWAHf6-
          source_id: s_pLkctrqmr8msH8i455HrdA
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pLkctrqmr8msH8i455HrdA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢虺（CBDB 230387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230387&o=json
            external_identifier: CBDB:230387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_u1wp8xocy2jBFDuqxm11QW
        status: active
        display_name: 王夢虺
        merged_into_person_id: null
    - claim:
        id: c_Y8BV4_EpC8eXsM6apC5wXE
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zoahTUYcVqJSaNXiMaBJLj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JtwDIexF62X_9gSNNWSvsT
          claim_id: c_Y8BV4_EpC8eXsM6apC5wXE
          source_id: s_mqZS5tc3CxoWVrRUKTUsTA
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mqZS5tc3CxoWVrRUKTUsTA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢蟾（CBDB 230384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230384&o=json
            external_identifier: CBDB:230384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zoahTUYcVqJSaNXiMaBJLj
        status: active
        display_name: 王夢蟾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8U8YoT1tQAIRFiN4IgVZFn
        subject_person_id: p_JYdYtadGp7FCR1QziP7DkZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kboA1JoHwYs2qxhbf5KF6d
          claim_id: c_8U8YoT1tQAIRFiN4IgVZFn
          source_id: s_5T2YLe3LJARuNTqTr7Y5QU
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5T2YLe3LJARuNTqTr7Y5QU
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 230376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230376&o=json
            external_identifier: CBDB:230376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JYdYtadGp7FCR1QziP7DkZ
        status: active
        display_name: 王平
        merged_into_person_id: null
    - claim:
        id: c_Kzuo40AusUC2V2FBtGPEcN
        subject_person_id: p_Rs4iVjw5c4LdbvYywk1bLT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Vmpu-nNY9T0aPrbU9AyQg
          claim_id: c_Kzuo40AusUC2V2FBtGPEcN
          source_id: s_61oG8RsMzKRxPF3nTy582F
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_61oG8RsMzKRxPF3nTy582F
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 230375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230375&o=json
            external_identifier: CBDB:230375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rs4iVjw5c4LdbvYywk1bLT
        status: active
        display_name: 王瓘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一魁 | accepted |
| birth.date | 1563年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Yn1HjpWop229REQ9NGBi2 | 王承光 | accepted |
| children | p_HAPwpvZBVPzcnguyVmhnBB | 王夢熊 | accepted |
| children | p_u1wp8xocy2jBFDuqxm11QW | 王夢虺 | accepted |
| children | p_zoahTUYcVqJSaNXiMaBJLj | 王夢蟾 | accepted |
| ancestors | p_JYdYtadGp7FCR1QziP7DkZ | 王平 | accepted |
| ancestors | p_Rs4iVjw5c4LdbvYywk1bLT | 王瓘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承光（CBDB 230377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230377&o=json)
- [中国历代人物传记资料库：王瓘（CBDB 230375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230375&o=json)
- [中国历代人物传记资料库：王夢蟾（CBDB 230384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230384&o=json)
- [中国历代人物传记资料库：王夢虺（CBDB 230387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230387&o=json)
- [中国历代人物传记资料库：王夢熊（CBDB 230386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230386&o=json)
- [中国历代人物传记资料库：王平（CBDB 230376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230376&o=json)
- [中国历代人物传记资料库：王一魁（CBDB 207258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207258&o=json)
