---
schema: wang-person/v1
id: p_oEEcQRCAqs4YewibUGGkH9
status: active
merged_into: null
display_name: 王介
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fgNQB1XzZZNsNwyKP1AqAT
        subject_person_id: p_oEEcQRCAqs4YewibUGGkH9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QE77aJcusLEsvEQJio76rN
          claim_id: c_fgNQB1XzZZNsNwyKP1AqAT
          source_id: s_keHWagGQUbChuUNVPwYHia
          stance: supports
          locator: CBDB:201700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201700）
          source: &a1
            id: s_keHWagGQUbChuUNVPwYHia
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 201700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201700&o=json
            external_identifier: CBDB:201700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nkWf4nB4jbH72zn96o19nH
        subject_person_id: p_oEEcQRCAqs4YewibUGGkH9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1472年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shrAbmfnwNtZ4x5ZXdU8tm
          claim_id: c_nkWf4nB4jbH72zn96o19nH
          source_id: s_keHWagGQUbChuUNVPwYHia
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
        id: c_Uw1tbuVzKN9BYNHiYmsVAD
        subject_person_id: p_oEEcQRCAqs4YewibUGGkH9
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
        - id: cs_SYAseL3BQi328aiXzLo9p9
          claim_id: c_Uw1tbuVzKN9BYNHiYmsVAD
          source_id: s_keHWagGQUbChuUNVPwYHia
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
        id: c_sLlTc5Cad6JziQDa8JTJug
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__zOlaItlbRK17m5_nIN5T5
          claim_id: c_sLlTc5Cad6JziQDa8JTJug
          source_id: s_iNxykTShcu6BtovxLF8rS5
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iNxykTShcu6BtovxLF8rS5
            source_type: api_record
            title: 中国历代人物传记资料库：王惟德（CBDB 276665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276665&o=json
            external_identifier: CBDB:276665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oATKFKdRvk6K28ajcm7R48
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HcSu6bz6s28MbFQbVM0Fe2
        subject_person_id: p_jAUr1gqDf74TptH2BLM942
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tDZ1BR3LERWcKnfLnyR8lC
          claim_id: c_HcSu6bz6s28MbFQbVM0Fe2
          source_id: s_PQBreZZKsTsXYM3A8ULMHH
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第八十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PQBreZZKsTsXYM3A8ULMHH
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 276662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276662&o=json
            external_identifier: CBDB:276662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jAUr1gqDf74TptH2BLM942
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_FyKKM_Eny_fk3TazKzFqx_
        subject_person_id: p_v3csMHVQyKS6tcGrThkKWy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWNvdQm2pnvXJLlqi7hEoS
          claim_id: c_FyKKM_Eny_fk3TazKzFqx_
          source_id: s_D7kNkQ47edSEHzS43Bs4qZ
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D7kNkQ47edSEHzS43Bs4qZ
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 276663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276663&o=json
            external_identifier: CBDB:276663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v3csMHVQyKS6tcGrThkKWy
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| birth.date | 1472年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oATKFKdRvk6K28ajcm7R48 | 王惟德 | accepted |
| ancestors | p_jAUr1gqDf74TptH2BLM942 | 王禎 | accepted |
| ancestors | p_v3csMHVQyKS6tcGrThkKWy | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 201700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201700&o=json)
- [中国历代人物传记资料库：王敬（CBDB 276663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276663&o=json)
- [中国历代人物传记资料库：王惟德（CBDB 276665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276665&o=json)
- [中国历代人物传记资料库：王禎（CBDB 276662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276662&o=json)
