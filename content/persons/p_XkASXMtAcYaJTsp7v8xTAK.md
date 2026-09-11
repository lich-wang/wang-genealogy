---
schema: wang-person/v1
id: p_XkASXMtAcYaJTsp7v8xTAK
status: active
merged_into: null
display_name: 王釗
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u6BHnjS8KHpSfcvF4KVbGE
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UWZj4aCHi5LtdpYaxWKHzE
          claim_id: c_u6BHnjS8KHpSfcvF4KVbGE
          source_id: s_xGTuLS1F1DZns6GWqSroHG
          stance: supports
          locator: CBDB:175806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175806）
          source: &a1
            id: s_xGTuLS1F1DZns6GWqSroHG
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 175806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175806&o=json
            external_identifier: CBDB:175806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TG1SLJ6fL6aW2E5LL7mEAm
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KA8vCPJxuu4ECibBgv1UZG
          claim_id: c_TG1SLJ6fL6aW2E5LL7mEAm
          source_id: s_xGTuLS1F1DZns6GWqSroHG
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
        id: c_3YPTb3c21mSvzSv36nK8BM
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
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
        - id: cs_N2cp6sufMCeh81M1uHMDio
          claim_id: c_3YPTb3c21mSvzSv36nK8BM
          source_id: s_xGTuLS1F1DZns6GWqSroHG
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
        id: c_uSCId3gVF_5kvXSTXbgNUR
        subject_person_id: p_1DrQjoCaBy8kCLHN3o7pc1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyo0GoZaN2-U8A97EaReve
          claim_id: c_uSCId3gVF_5kvXSTXbgNUR
          source_id: s_euKJkUcKyKvg5zCCtgzZRF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8211：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_euKJkUcKyKvg5zCCtgzZRF
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 175804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175804&o=json
            external_identifier: CBDB:175804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1DrQjoCaBy8kCLHN3o7pc1
        status: active
        display_name: 王頊
        merged_into_person_id: null
  children:
    - claim:
        id: c_a1S4oWtcHvp2zdJrLKq5rR
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9QRchByBPwUZfBCV7KN6rH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ka88kPPHuAk5D4GwEUCpCB
          claim_id: c_a1S4oWtcHvp2zdJrLKq5rR
          source_id: s_CuBQKUXdELTb5UeQXbCYDz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CuBQKUXdELTb5UeQXbCYDz
            source_type: api_record
            title: 中国历代人物传记资料库：王闢（CBDB 175807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175807&o=json
            external_identifier: CBDB:175807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9QRchByBPwUZfBCV7KN6rH
        status: active
        display_name: 王闢
        merged_into_person_id: null
    - claim:
        id: c_8CW7mAbXF5UsZ903W30vbL
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_989vxjzpGFfKGuLPd7EXx4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0uljC7gdJWNpuHsRZC1ard
          claim_id: c_8CW7mAbXF5UsZ903W30vbL
          source_id: s_LvUsreDtvDhmtq31JjYJcV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LvUsreDtvDhmtq31JjYJcV
            source_type: api_record
            title: 中国历代人物传记资料库：王闡（CBDB 175808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175808&o=json
            external_identifier: CBDB:175808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_989vxjzpGFfKGuLPd7EXx4
        status: active
        display_name: 王闡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| death.date | 748年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1DrQjoCaBy8kCLHN3o7pc1 | 王頊 | accepted |
| children | p_9QRchByBPwUZfBCV7KN6rH | 王闢 | accepted |
| children | p_989vxjzpGFfKGuLPd7EXx4 | 王闡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闡（CBDB 175808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175808&o=json)
- [中国历代人物传记资料库：王闢（CBDB 175807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175807&o=json)
- [中国历代人物传记资料库：王頊（CBDB 175804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175804&o=json)
- [中国历代人物传记资料库：王釗（CBDB 175806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175806&o=json)
