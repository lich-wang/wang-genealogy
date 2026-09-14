---
schema: wang-person/v1
id: p_Sg6kuXv7Vis1mLCj6EFgTh
status: active
merged_into: null
display_name: 王希元
revision: 10
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
          text: 王希元，明人物。明清進士進士，籍贯蘄水，入仕進士，曾任太常博士。（中国历代人物传记资料库 CBDB 126544）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2sKfGwNJ5rS94GhGvkK7dL
          claim_id: c_wXK27UQ3DxsCmXVkig7Nxj
          source_id: s_1Pw9ZjMpwBodaNktExHPqz
          stance: supports
          locator: CBDB:126544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_rc5NU6FWs4MitXO1rtThZx
        subject_person_id: p_5DVfpj6xtBAqfzjXBenRbn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eqZ9XTRPzajyE98QP17aKQ
          claim_id: c_rc5NU6FWs4MitXO1rtThZx
          source_id: s_MtOfumOaXCC2B-s8jr7wWw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MtOfumOaXCC2B-s8jr7wWw
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 208938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208938&o=json
            external_identifier: CBDB:208938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5DVfpj6xtBAqfzjXBenRbn
        status: active
        display_name: 王希程
        merged_into_person_id: null
    - claim:
        id: c_-fSiNQmM_p5McAT2Q8aUyc
        subject_person_id: p_6mhgF3YZN8dDieYnGS7213
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ck1eUzqdUkDTDJzrOv4d1O
          claim_id: c_-fSiNQmM_p5McAT2Q8aUyc
          source_id: s_0hcGC9GwJArYsYrRtwlcYa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0hcGC9GwJArYsYrRtwlcYa
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 208936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208936&o=json
            external_identifier: CBDB:208936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6mhgF3YZN8dDieYnGS7213
        status: active
        display_name: 王希孟
        merged_into_person_id: null
    - claim:
        id: c_V3zKLgDYPMg9NhhNndTHqD
        subject_person_id: p_PzQMN95GqE7HZfgDzsGUwc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hiYllCUXcP7SI5acmCzKST
          claim_id: c_V3zKLgDYPMg9NhhNndTHqD
          source_id: s_sbSmhV9TVtlk47M6WVjRzi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sbSmhV9TVtlk47M6WVjRzi
            source_type: api_record
            title: 中国历代人物传记资料库：王希雍（CBDB 208940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json
            external_identifier: CBDB:208940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PzQMN95GqE7HZfgDzsGUwc
        status: active
        display_name: 王希雍
        merged_into_person_id: null
    - claim:
        id: c_fKnlygaQvDsEUh_XWqAgTU
        subject_person_id: p_S5afZnx4HUbL6UmzQFmGaa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ve-AqbLPeicEZavIacqEl3
          claim_id: c_fKnlygaQvDsEUh_XWqAgTU
          source_id: s_DhEVCyfhy2FKuWdrk-Y_eg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DhEVCyfhy2FKuWdrk-Y_eg
            source_type: api_record
            title: 中国历代人物传记资料库：王希朱（CBDB 208941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208941&o=json
            external_identifier: CBDB:208941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S5afZnx4HUbL6UmzQFmGaa
        status: active
        display_name: 王希朱
        merged_into_person_id: null
    - claim:
        id: c_F030bk65u9KvZ3PXlX0p6S
        subject_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TiEDux462hPxafQMX5eEkf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JFOWFjba95nJ4m74dIbVTj
          claim_id: c_F030bk65u9KvZ3PXlX0p6S
          source_id: s_kkGzlVpoV334Clv5R4gpbk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kkGzlVpoV334Clv5R4gpbk
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 208935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208935&o=json
            external_identifier: CBDB:208935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TiEDux462hPxafQMX5eEkf
        status: active
        display_name: 王希曾
        merged_into_person_id: null
    - claim:
        id: c_HEImVl02d1e3tBR-KhCGSy
        subject_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n613FfpZSCJ7MEY987BPaM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhHxxuX3ur9plfJM5FjGYq
          claim_id: c_HEImVl02d1e3tBR-KhCGSy
          source_id: s_KJRh4rsHdyao_y3C6K1NTe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KJRh4rsHdyao_y3C6K1NTe
            source_type: api_record
            title: 中国历代人物传记资料库：王希閔（CBDB 208939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208939&o=json
            external_identifier: CBDB:208939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n613FfpZSCJ7MEY987BPaM
        status: active
        display_name: 王希閔
        merged_into_person_id: null
---

# 王希元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希元 | accepted |
| bio.summary | 王希元，明人物。明清進士進士，籍贯蘄水，入仕進士，曾任太常博士。（中国历代人物传记资料库 CBDB 126544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u7EsVBbqzhdscb4MCv8fHW | 王承芳 | accepted |
| ancestors | p_6fXNiRNwRmZQx6M9VVwPLA | 王中正 | accepted |
| ancestors | p_C9ZXgPtAuHgLERMGRthQud | 王厚 | accepted |
| other | p_5DVfpj6xtBAqfzjXBenRbn | 王希程 | accepted |
| other | p_6mhgF3YZN8dDieYnGS7213 | 王希孟 | accepted |
| other | p_PzQMN95GqE7HZfgDzsGUwc | 王希雍 | accepted |
| other | p_S5afZnx4HUbL6UmzQFmGaa | 王希朱 | accepted |
| other | p_TiEDux462hPxafQMX5eEkf | 王希曾 | accepted |
| other | p_n613FfpZSCJ7MEY987BPaM | 王希閔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承芳（CBDB 208931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json)
- [中国历代人物传记资料库：王厚（CBDB 208929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208929&o=json)
- [中国历代人物传记资料库：王希曾（CBDB 208935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208935&o=json)
- [中国历代人物传记资料库：王希程（CBDB 208938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208938&o=json)
- [中国历代人物传记资料库：王希孟（CBDB 208936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208936&o=json)
- [中国历代人物传记资料库：王希閔（CBDB 208939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208939&o=json)
- [中国历代人物传记资料库：王希雍（CBDB 208940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json)
- [中国历代人物传记资料库：王希元（CBDB 126544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126544&o=json)
- [中国历代人物传记资料库：王希朱（CBDB 208941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208941&o=json)
- [中国历代人物传记资料库：王中正（CBDB 208930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208930&o=json)
