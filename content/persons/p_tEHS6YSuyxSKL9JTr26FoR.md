---
schema: wang-person/v1
id: p_tEHS6YSuyxSKL9JTr26FoR
status: active
merged_into: null
display_name: 王嗣美
cbdb_id: 206544
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6x3kivRFT1YWf7KSKarCMH
        subject_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣美（生于1553年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206544 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PS5mgvzwJTKA0-kK29iaF4
          claim_id: c_6x3kivRFT1YWf7KSKarCMH
          source_id: s_VdHY1DMPJ6AR19nZkNcDxj
          stance: supports
          locator: CBDB:206544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_VdHY1DMPJ6AR19nZkNcDxj
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣美（CBDB 206544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206544&o=json
            external_identifier: CBDB:206544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_32P2MFE6fsBxZNdx6Mu8bZ
        subject_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1553-01-01
            latest: 1553-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PvRY3QTHbUjoKmAdaKVqnG
          claim_id: c_32P2MFE6fsBxZNdx6Mu8bZ
          source_id: s_VdHY1DMPJ6AR19nZkNcDxj
          stance: supports
          locator: CBDB:206544
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1553
          source:
            id: s_VdHY1DMPJ6AR19nZkNcDxj
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣美（CBDB 206544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206544&o=json
            external_identifier: CBDB:206544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMkHdGHMjKcnsCob6F233b
        subject_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gtA31FUuPxRZWnxKfGfcv2
          claim_id: c_LMkHdGHMjKcnsCob6F233b
          source_id: s_VdHY1DMPJ6AR19nZkNcDxj
          stance: supports
          locator: CBDB:206544
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1553
          source:
            id: s_VdHY1DMPJ6AR19nZkNcDxj
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣美（CBDB 206544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206544&o=json
            external_identifier: CBDB:206544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xf7F92KJ52scWWVDz5ThWY
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwqcHgvnOwCf2QlbcpT_pk
          claim_id: c_xf7F92KJ52scWWVDz5ThWY
          source_id: s_Ny7BuFfUk3DwZJkUqqTWqP
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ny7BuFfUk3DwZJkUqqTWqP
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 219540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219540&o=json
            external_identifier: CBDB:219540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NF9HbHTtZ8ow78qFYfTJ3z
        status: active
        display_name: 王傳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_KYL6gXt30YidZixmukTT2P
        subject_person_id: p_9WpcStsZRmHLcorTLRGwCH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NHRBQgyQvJa96_mtOVZVeJ
          claim_id: c_KYL6gXt30YidZixmukTT2P
          source_id: s_4n3PciZWcax2vJpWHcTDra
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4n3PciZWcax2vJpWHcTDra
            source_type: api_record
            title: 中国历代人物传记资料库：王朝雍（CBDB 219537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219537&o=json
            external_identifier: CBDB:219537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9WpcStsZRmHLcorTLRGwCH
        status: active
        display_name: 王朝雍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嗣美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣美（生于1553年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206544 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1553年 | accepted |
| name.primary | 王嗣美 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NF9HbHTtZ8ow78qFYfTJ3z | 王傳 | accepted |
| ancestors | p_9WpcStsZRmHLcorTLRGwCH | 王朝雍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝雍（CBDB 219537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219537&o=json)
- [中国历代人物传记资料库：王傳（CBDB 219540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219540&o=json)
- [中国历代人物传记资料库：王嗣美（CBDB 206544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206544&o=json)
