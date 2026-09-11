---
schema: wang-person/v1
id: p_yJ3TVQF9TZGy72FnBo91RN
status: active
merged_into: null
display_name: 王鳳竹
cbdb_id: 126794
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1mYsujeV91yhSqibZAaBEc
        subject_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳竹，明人物。中国历代人物传记资料库（CBDB）以人物编号 126794 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_AvSNgS9vmZ0NpnrBaEDHO6
          claim_id: c_1mYsujeV91yhSqibZAaBEc
          source_id: s_vGKttPDuRpSwyBigWPbTjM
          stance: supports
          locator: CBDB:126794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_vGKttPDuRpSwyBigWPbTjM
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳竹（CBDB 126794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126794&o=json
            external_identifier: CBDB:126794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XenfeV6k6E2tdJGaYDR7Rw
        subject_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳竹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bv1cQ8L4SqcDLNC8yK9jc9
          claim_id: c_XenfeV6k6E2tdJGaYDR7Rw
          source_id: s_vGKttPDuRpSwyBigWPbTjM
          stance: supports
          locator: CBDB:126794
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_vGKttPDuRpSwyBigWPbTjM
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳竹（CBDB 126794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126794&o=json
            external_identifier: CBDB:126794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dD-wp1H0DEUq4uUsRRL_LC
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlAdJWly68JAQvIm8OWHnF
          claim_id: c_dD-wp1H0DEUq4uUsRRL_LC
          source_id: s_aMJtEETsGVvLFo3gwn4sGs
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aMJtEETsGVvLFo3gwn4sGs
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 213950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213950&o=json
            external_identifier: CBDB:213950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3w6yDwcSmUtcvcpcvahG8r
        status: active
        display_name: 王都
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VSdoPw7z6B_pP4Mq_gaPIC
        subject_person_id: p_NrHJq3kKQ1Euax66KDyGDM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uDwT3BwRVW6o7GAKGovDA3
          claim_id: c_VSdoPw7z6B_pP4Mq_gaPIC
          source_id: s_zDMDQ7mriEMzR1NrNwMqP7
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zDMDQ7mriEMzR1NrNwMqP7
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 213947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213947&o=json
            external_identifier: CBDB:213947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NrHJq3kKQ1Euax66KDyGDM
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_d0TG_gDqJbx_kQdInf-_Un
        subject_person_id: p_tx1vf54sGwbm2fLRbPvpDf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vn5lw2zPiktJmK04_kPg5h
          claim_id: c_d0TG_gDqJbx_kQdInf-_Un
          source_id: s_Ncm2tmAuf5XTLSGFd9BH29
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ncm2tmAuf5XTLSGFd9BH29
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 213949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213949&o=json
            external_identifier: CBDB:213949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tx1vf54sGwbm2fLRbPvpDf
        status: active
        display_name: 王密
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鳳竹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳳竹，明人物。中国历代人物传记资料库（CBDB）以人物编号 126794 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鳳竹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w6yDwcSmUtcvcpcvahG8r | 王都 | accepted |
| ancestors | p_NrHJq3kKQ1Euax66KDyGDM | 王鎮 | accepted |
| ancestors | p_tx1vf54sGwbm2fLRbPvpDf | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 213950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213950&o=json)
- [中国历代人物传记资料库：王鳳竹（CBDB 126794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126794&o=json)
- [中国历代人物传记资料库：王密（CBDB 213949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213949&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 213947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213947&o=json)
