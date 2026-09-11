---
schema: wang-person/v1
id: p_en59K3fagj8VJPQw7ris7d
status: active
merged_into: null
display_name: 王崇術
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sJpPLsPf2APoN4NjSmPTTe
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇術
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39yDV8zECY5v5XWk1V7o9y
          claim_id: c_sJpPLsPf2APoN4NjSmPTTe
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
          stance: supports
          locator: CBDB:145041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145041）
          source: &a1
            id: s_eJ52n3w5zzgSTpQ5eDCkT9
            source_type: api_record
            title: 中国历代人物传记资料库：王崇術（CBDB 145041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145041&o=json
            external_identifier: CBDB:145041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_92wuQL6jG8Ey388GGVaiXQ
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNAKxvUcKEGARmhj7C2KFV
          claim_id: c_92wuQL6jG8Ey388GGVaiXQ
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
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
        id: c_nhQD6wPCC2UFoYKjPkAH9K
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 749年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYVfCLJkNnC1LXdZEpNFqN
          claim_id: c_nhQD6wPCC2UFoYKjPkAH9K
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
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
        id: c_3dpTRdAmDN4oA5HVWZN6ZE
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇術（678年—749年），唐人物。籍贯濮陽，曾任縣令、左散騎常侍。（中国历代人物传记资料库 CBDB 145041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2l8UkLEYV2kAOAK7On3MGg
          claim_id: c_3dpTRdAmDN4oA5HVWZN6ZE
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
          stance: supports
          locator: CBDB:145041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xakxZz2tZkofq2VQ9k58ed
        subject_person_id: p_BDS4TbTFZhcBaJhksQ7i7v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_en59K3fagj8VJPQw7ris7d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cMZ59BpC2XURKlVWkbDXME
          claim_id: c_xakxZz2tZkofq2VQ9k58ed
          source_id: s_72vbHX3h4b4vBiPhHGxSyi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_72vbHX3h4b4vBiPhHGxSyi
            source_type: api_record
            title: 中国历代人物传记资料库：王弘效（CBDB 194718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194718&o=json
            external_identifier: CBDB:194718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BDS4TbTFZhcBaJhksQ7i7v
        status: active
        display_name: 王弘效
        merged_into_person_id: null
  children:
    - claim:
        id: c_PJk-U4a3eVwNCPsnA0V_PB
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1D7RB15BHLuwCjT8rR8VHQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dgfElDRlTkhPGac8nEIFzX
          claim_id: c_PJk-U4a3eVwNCPsnA0V_PB
          source_id: s_rJJEf6XoNiYcXwHwXx9wiG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 35684：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rJJEf6XoNiYcXwHwXx9wiG
            source_type: api_record
            title: 中国历代人物传记资料库：王奇哲（CBDB 194722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194722&o=json
            external_identifier: CBDB:194722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1D7RB15BHLuwCjT8rR8VHQ
        status: active
        display_name: 王奇哲
        merged_into_person_id: null
    - claim:
        id: c_TOK-Q0GNXA8kVjSoH5zO2b
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8BAXAmN3c1qU7v7x4QBzHT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ASAy9GuCVjK05GGKwTohyy
          claim_id: c_TOK-Q0GNXA8kVjSoH5zO2b
          source_id: s_r75FDHPqKxdm57SekgvidP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r75FDHPqKxdm57SekgvidP
            source_type: api_record
            title: 中国历代人物传记资料库：王棲榮（CBDB 194723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194723&o=json
            external_identifier: CBDB:194723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8BAXAmN3c1qU7v7x4QBzHT
        status: active
        display_name: 王棲榮
        merged_into_person_id: null
    - claim:
        id: c_SwS5fkkTXunuF0kPOw7lNq
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRzLk4PXOBnA9j_LAiRjaj
          claim_id: c_SwS5fkkTXunuF0kPOw7lNq
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1W8yD5PetNe6Lxk4RYza7
            source_type: api_record
            title: 中国历代人物传记资料库：王栖曜（CBDB 189585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189585&o=json
            external_identifier: CBDB:189585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LVQYZ3GtoMeNLNRiLNfrkK
        status: active
        display_name: 王栖曜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇術

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇術 | accepted |
| birth.date | 678年 | accepted |
| death.date | 749年 | accepted |
| bio.summary | 王崇術（678年—749年），唐人物。籍贯濮陽，曾任縣令、左散騎常侍。（中国历代人物传记资料库 CBDB 145041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BDS4TbTFZhcBaJhksQ7i7v | 王弘效 | accepted |
| children | p_1D7RB15BHLuwCjT8rR8VHQ | 王奇哲 | accepted |
| children | p_8BAXAmN3c1qU7v7x4QBzHT | 王棲榮 | accepted |
| children | p_LVQYZ3GtoMeNLNRiLNfrkK | 王栖曜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇術（CBDB 145041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145041&o=json)
- [中国历代人物传记资料库：王弘效（CBDB 194718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194718&o=json)
- [中国历代人物传记资料库：王栖曜（CBDB 189585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189585&o=json)
- [中国历代人物传记资料库：王棲榮（CBDB 194723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194723&o=json)
- [中国历代人物传记资料库：王奇哲（CBDB 194722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194722&o=json)
