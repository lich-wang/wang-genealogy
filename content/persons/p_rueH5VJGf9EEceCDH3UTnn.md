---
schema: wang-person/v1
id: p_rueH5VJGf9EEceCDH3UTnn
status: active
merged_into: null
display_name: 王昭
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MdA3jp3rRGjb4dQEMVR5Hy
        subject_person_id: p_rueH5VJGf9EEceCDH3UTnn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rkDGmk5PdoPoYkt7eXJhj
          claim_id: c_MdA3jp3rRGjb4dQEMVR5Hy
          source_id: s_x9xM7bdW12iPZkAifBNdyP
          stance: supports
          locator: CBDB:198949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198949）
          source: &a1
            id: s_x9xM7bdW12iPZkAifBNdyP
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 198949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198949&o=json
            external_identifier: CBDB:198949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_z9yTAwvz1iTtFFcjKx49uj
        subject_person_id: p_rueH5VJGf9EEceCDH3UTnn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J9GDEKZ2z8qXLWsCVLKBRK
          claim_id: c_z9yTAwvz1iTtFFcjKx49uj
          source_id: s_x9xM7bdW12iPZkAifBNdyP
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
        id: c_xcBFDHQDf6GEtc35udT2rG
        subject_person_id: p_rueH5VJGf9EEceCDH3UTnn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭（生于1425年），明人物。明清進士進士，籍贯遵化，入仕進士。（中国历代人物传记资料库 CBDB 198949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9vtDHhLwqwbo-VObhVU03X
          claim_id: c_xcBFDHQDf6GEtc35udT2rG
          source_id: s_x9xM7bdW12iPZkAifBNdyP
          stance: supports
          locator: CBDB:198949
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SAeamRJxRHjvWZKx6NaoHn
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rueH5VJGf9EEceCDH3UTnn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQm7KJ5iixKYLfYg5wk23s
          claim_id: c_SAeamRJxRHjvWZKx6NaoHn
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5krZFWPxL7Gb15bWQvDxeA
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 209360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209360&o=json
            external_identifier: CBDB:209360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JfYktHHWpP5gM_O8erwhFF
        subject_person_id: p_viPpL7R5p8gRoNswap98YZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rueH5VJGf9EEceCDH3UTnn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xr2D6IrERbC_k9mE9Rk3S5
          claim_id: c_JfYktHHWpP5gM_O8erwhFF
          source_id: s_z6z5pXJW9xJVdGXchJGMTn
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z6z5pXJW9xJVdGXchJGMTn
            source_type: api_record
            title: 中国历代人物传记资料库：王士能（CBDB 209338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209338&o=json
            external_identifier: CBDB:209338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_viPpL7R5p8gRoNswap98YZ
        status: active
        display_name: 王士能
        merged_into_person_id: null
    - claim:
        id: c_j8aH-L6jvIBewJzcQDKo8d
        subject_person_id: p_8R61WG1HqhQkUXiAnEs5Pk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rueH5VJGf9EEceCDH3UTnn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e6xd2dBlM3vetXoerO_gkD
          claim_id: c_j8aH-L6jvIBewJzcQDKo8d
          source_id: s_5XTyGy3raoz2f7GeuGbvHb
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5XTyGy3raoz2f7GeuGbvHb
            source_type: api_record
            title: 中国历代人物传记资料库：王八恭（CBDB 209349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209349&o=json
            external_identifier: CBDB:209349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8R61WG1HqhQkUXiAnEs5Pk
        status: active
        display_name: 王八恭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | 王昭（生于1425年），明人物。明清進士進士，籍贯遵化，入仕進士。（中国历代人物传记资料库 CBDB 198949） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LkHA7Eh6TZ3G6EVZV4TAQp | 王斌 | accepted |
| ancestors | p_viPpL7R5p8gRoNswap98YZ | 王士能 | accepted |
| ancestors | p_8R61WG1HqhQkUXiAnEs5Pk | 王八恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王八恭（CBDB 209349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209349&o=json)
- [中国历代人物传记资料库：王斌（CBDB 209360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209360&o=json)
- [中国历代人物传记资料库：王士能（CBDB 209338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209338&o=json)
- [中国历代人物传记资料库：王昭（CBDB 198949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198949&o=json)
