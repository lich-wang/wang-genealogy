---
schema: wang-person/v1
id: p_Sg6kuXv7Vis1mLCj6EFgTh
status: active
merged_into: null
display_name: 王希元
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5M5EVPFHzGUbjehBgQLjkb
        subject_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Am9FyZhr7yZCrHgS4jtUcB
          claim_id: c_5M5EVPFHzGUbjehBgQLjkb
          source_id: s_1Pw9ZjMpwBodaNktExHPqz
          stance: supports
          locator: CBDB:126544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126544）
          source: &a1
            id: s_1Pw9ZjMpwBodaNktExHPqz
            source_type: api_record
            title: 中国历代人物传记资料库：王希元（CBDB 126544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126544&o=json
            external_identifier: CBDB:126544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wXK27UQ3DxsCmXVkig7Nxj
        subject_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
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
        - id: cs_JEHNfhPk71mjvRRuMM33vv
          claim_id: c_wXK27UQ3DxsCmXVkig7Nxj
          source_id: s_1Pw9ZjMpwBodaNktExHPqz
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
        id: c_FS-KHpRJ0IXVOEfWGY9Kg3
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8_y4pKR3EEHrMytFsa9WJ
          claim_id: c_FS-KHpRJ0IXVOEfWGY9Kg3
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LHgMBTSrtVrvKx74zVjc4S
            source_type: api_record
            title: 中国历代人物传记资料库：王承芳（CBDB 208931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json
            external_identifier: CBDB:208931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_u7EsVBbqzhdscb4MCv8fHW
        status: active
        display_name: 王承芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hsk_Ox9giJeWNBXhH3hXlm
        subject_person_id: p_6fXNiRNwRmZQx6M9VVwPLA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGIqO7w_jsmazo5ZDilC8d
          claim_id: c_hsk_Ox9giJeWNBXhH3hXlm
          source_id: s_FYyj3Up2prwknpFJQLpcD6
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FYyj3Up2prwknpFJQLpcD6
            source_type: api_record
            title: 中国历代人物传记资料库：王中正（CBDB 208930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208930&o=json
            external_identifier: CBDB:208930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6fXNiRNwRmZQx6M9VVwPLA
        status: active
        display_name: 王中正
        merged_into_person_id: null
    - claim:
        id: c_PvLRZeMVaVADj_Y9_VzR6O
        subject_person_id: p_C9ZXgPtAuHgLERMGRthQud
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IL7zOfKftIoI8XT3VIFwyl
          claim_id: c_PvLRZeMVaVADj_Y9_VzR6O
          source_id: s_1jKNswFHoR2o7cq5mEuHm2
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1jKNswFHoR2o7cq5mEuHm2
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 208929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208929&o=json
            external_identifier: CBDB:208929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C9ZXgPtAuHgLERMGRthQud
        status: active
        display_name: 王厚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希元 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u7EsVBbqzhdscb4MCv8fHW | 王承芳 | accepted |
| ancestors | p_6fXNiRNwRmZQx6M9VVwPLA | 王中正 | accepted |
| ancestors | p_C9ZXgPtAuHgLERMGRthQud | 王厚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承芳（CBDB 208931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json)
- [中国历代人物传记资料库：王厚（CBDB 208929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208929&o=json)
- [中国历代人物传记资料库：王希元（CBDB 126544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126544&o=json)
- [中国历代人物传记资料库：王中正（CBDB 208930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208930&o=json)
