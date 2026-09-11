---
schema: wang-person/v1
id: p_TdY8PeNMMQnspsGSLcC9h4
status: active
merged_into: null
display_name: 王思
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SxhmHAhWTNf69UE2116cfX
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FiLKhfGLTjKXz1gMFiSP7w
          claim_id: c_SxhmHAhWTNf69UE2116cfX
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
          stance: supports
          locator: CBDB:68065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68065）
          source: &a1
            id: s_13bLqZr3bWKRDKJ3R5NeYd
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 68065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68065&o=json
            external_identifier: CBDB:68065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tWWVns8w8agJ7DiPZpzG3z
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvTtAMhMx5UrRrBCsrgAec
          claim_id: c_tWWVns8w8agJ7DiPZpzG3z
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
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
        id: c_akx57MccMm7YWNJk1myc61
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xvKfE6dq74ZJhGhG67rfJU
          claim_id: c_akx57MccMm7YWNJk1myc61
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
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
        id: c_jGnSKyBj4D7nPCLugXNJMu
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思（1481年—1524年），明人物。明清進士進士，籍贯泰和，身份为理學家 — 陽明學派，入仕進士。（中国历代人物传记资料库 CBDB 68065）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zR4T8b2JvL5av2lLuoUEAM
          claim_id: c_jGnSKyBj4D7nPCLugXNJMu
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
          stance: supports
          locator: CBDB:68065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G4CiOrIEltCcaHxOgKmxBx
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RoNELI8BfzcRcjuFjAlHtP
          claim_id: c_G4CiOrIEltCcaHxOgKmxBx
          source_id: s_EQJRyvPMAxNA3cYQXqTYJo
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EQJRyvPMAxNA3cYQXqTYJo
            source_type: api_record
            title: 中国历代人物传记资料库：王俅（CBDB 276674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276674&o=json
            external_identifier: CBDB:276674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xxLayHX5L9RnRbPwYHogx1
        status: active
        display_name: 王俅
        merged_into_person_id: null
  children:
    - claim:
        id: c_4NpPJv7Viz5P3QHKUd_kjF
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BfTcsezxUjkjWXrta7fNsQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqLska1rBsxlnB_Vv0LgIL
          claim_id: c_4NpPJv7Viz5P3QHKUd_kjF
          source_id: s_wELpt2EBp4Qnnr56eLuAnn
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11715：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wELpt2EBp4Qnnr56eLuAnn
            source_type: api_record
            title: 中国历代人物传记资料库：王束（CBDB 525762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525762&o=json
            external_identifier: CBDB:525762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BfTcsezxUjkjWXrta7fNsQ
        status: active
        display_name: 王束
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7KyRu5FkfLHTHBl4P7dlWu
        subject_person_id: p_df3D1hnAYfz6QUPt2SDfRN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYa3YD6mE9NyvHv1hpUWnW
          claim_id: c_7KyRu5FkfLHTHBl4P7dlWu
          source_id: s_HgLi9Re5QRQw8ap38CvaCA
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HgLi9Re5QRQw8ap38CvaCA
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 276672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276672&o=json
            external_identifier: CBDB:276672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_df3D1hnAYfz6QUPt2SDfRN
        status: active
        display_name: 王直
        merged_into_person_id: null
    - claim:
        id: c_Kg-nOVSWIWgRF_zmtza7hW
        subject_person_id: p_EwYTzmDgseqeuVk6USGALi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5liPY5LRSZX2PhZ_h-XAkn
          claim_id: c_Kg-nOVSWIWgRF_zmtza7hW
          source_id: s_cpSim1pPYRgWcQLBYKtJaB
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cpSim1pPYRgWcQLBYKtJaB
            source_type: api_record
            title: 中国历代人物传记资料库：王稹（CBDB 276673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276673&o=json
            external_identifier: CBDB:276673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EwYTzmDgseqeuVk6USGALi
        status: active
        display_name: 王稹
        merged_into_person_id: null
    - claim:
        id: c_2NHZBI9KOWV70wKEUB9ppc
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Xt6padwXei5MwKzsHvU0C
          claim_id: c_2NHZBI9KOWV70wKEUB9ppc
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: 江西通志，Igid=1197552-1197553：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_in1hTPavZdVJQK4k8xNZm1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 34493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json
            external_identifier: CBDB:34493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PgGP8n81XBb5kcs7D54q73
        status: active
        display_name: 王直
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思 | accepted |
| birth.date | 1481年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | 王思（1481年—1524年），明人物。明清進士進士，籍贯泰和，身份为理學家 — 陽明學派，入仕進士。（中国历代人物传记资料库 CBDB 68065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xxLayHX5L9RnRbPwYHogx1 | 王俅 | accepted |
| children | p_BfTcsezxUjkjWXrta7fNsQ | 王束 | accepted |
| ancestors | p_df3D1hnAYfz6QUPt2SDfRN | 王直 | accepted |
| ancestors | p_EwYTzmDgseqeuVk6USGALi | 王稹 | accepted |
| ancestors | p_PgGP8n81XBb5kcs7D54q73 | 王直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俅（CBDB 276674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276674&o=json)
- [中国历代人物传记资料库：王束（CBDB 525762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525762&o=json)
- [中国历代人物传记资料库：王思（CBDB 68065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68065&o=json)
- [中国历代人物传记资料库：王稹（CBDB 276673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276673&o=json)
- [中国历代人物传记资料库：王直（CBDB 276672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276672&o=json)
- [中国历代人物传记资料库：王直（CBDB 34493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json)
