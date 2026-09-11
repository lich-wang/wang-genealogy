---
schema: wang-person/v1
id: p_oDN8zXwLEiLaLbSQ6vv12L
status: active
merged_into: null
display_name: 王朝倩
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ftxF5B3wA8MnCEwrNFqyCf
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝倩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nAPpgP4B2GpEnJmqJTbMTQ
          claim_id: c_ftxF5B3wA8MnCEwrNFqyCf
          source_id: s_XmJf7fzhBSFFVH6X19v9Ys
          stance: supports
          locator: CBDB:191740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191740）
          source: &a1
            id: s_XmJf7fzhBSFFVH6X19v9Ys
            source_type: api_record
            title: 中国历代人物传记资料库：王朝倩（CBDB 191740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191740&o=json
            external_identifier: CBDB:191740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W2FRMvvjVdms8FsKZEcmCU
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 846年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dA3Jt8AJcPamjPVGkEoCCj
          claim_id: c_W2FRMvvjVdms8FsKZEcmCU
          source_id: s_XmJf7fzhBSFFVH6X19v9Ys
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
        id: c_wGTFs6BVbGzwAAZerQ1bZn
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPJPMsNrdxKgCUohtv2njT
          claim_id: c_wGTFs6BVbGzwAAZerQ1bZn
          source_id: s_XmJf7fzhBSFFVH6X19v9Ys
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
        id: c_f6FYl4ZCHAcBfpWwEQ7DOt
        subject_person_id: p_28xJB3faHyeBYnKm1an3Ta
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M0TAVLvRdEgaWMdVYZIhSs
          claim_id: c_f6FYl4ZCHAcBfpWwEQ7DOt
          source_id: s_3avuJfU8Gt6q3wFkE6d7De
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3avuJfU8Gt6q3wFkE6d7De
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 191741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191741&o=json
            external_identifier: CBDB:191741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_28xJB3faHyeBYnKm1an3Ta
        status: active
        display_name: 王安
        merged_into_person_id: null
  children:
    - claim:
        id: c_NhlUvDxki6199yT31eyWyK
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4mfqFZAqaNrXQSde1B1tdh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hsn853mqAemf0f0D6cYGKN
          claim_id: c_NhlUvDxki6199yT31eyWyK
          source_id: s_1xMUgcy4qkABRtK5Kk7NfJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1xMUgcy4qkABRtK5Kk7NfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王公政（CBDB 146370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146370&o=json
            external_identifier: CBDB:146370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4mfqFZAqaNrXQSde1B1tdh
        status: active
        display_name: 王公政
        merged_into_person_id: null
    - claim:
        id: c_c-jypEtAA-JU0J5bcTDGy8
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8QVz9itWB7PRdTQDBqUY5F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cog_qrGYzOlo1Oz6Ynh4qU
          claim_id: c_c-jypEtAA-JU0J5bcTDGy8
          source_id: s_CFa8aNLKNE8juEBFe3rfNM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CFa8aNLKNE8juEBFe3rfNM
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 191744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191744&o=json
            external_identifier: CBDB:191744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8QVz9itWB7PRdTQDBqUY5F
        status: active
        display_name: 王公素
        merged_into_person_id: null
    - claim:
        id: c_w0zFqg9kl0PyH3Ae0NT6LC
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a43TDwPpmcL99dwcyyrP2p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUuuwrqHUqJf7899Z6-BWh
          claim_id: c_w0zFqg9kl0PyH3Ae0NT6LC
          source_id: s_AE8D6z87JtgJJKKmDRCALz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AE8D6z87JtgJJKKmDRCALz
            source_type: api_record
            title: 中国历代人物传记资料库：王公亮（CBDB 191743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191743&o=json
            external_identifier: CBDB:191743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a43TDwPpmcL99dwcyyrP2p
        status: active
        display_name: 王公亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝倩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝倩 | accepted |
| death.date | 846年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_28xJB3faHyeBYnKm1an3Ta | 王安 | accepted |
| children | p_4mfqFZAqaNrXQSde1B1tdh | 王公政 | accepted |
| children | p_8QVz9itWB7PRdTQDBqUY5F | 王公素 | accepted |
| children | p_a43TDwPpmcL99dwcyyrP2p | 王公亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 191741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191741&o=json)
- [中国历代人物传记资料库：王朝倩（CBDB 191740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191740&o=json)
- [中国历代人物传记资料库：王公亮（CBDB 191743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191743&o=json)
- [中国历代人物传记资料库：王公素（CBDB 191744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191744&o=json)
- [中国历代人物传记资料库：王公政（CBDB 146370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146370&o=json)
