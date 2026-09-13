---
schema: wang-person/v1
id: p_SHe13yjmVoW5sTUP3iaJYy
status: active
merged_into: null
display_name: 王公操
cbdb_id: 143642
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H7y2njER7fncqXXv8t15c6
        subject_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公操（卒于878年），史料所见人物。本项目依据《中国历代人物传记资料库：王公操（CBDB 143642）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_h2Y10VezEfN6XhRtGsnKF4
          claim_id: c_H7y2njER7fncqXXv8t15c6
          source_id: s_1U9tXUzeWB34Sj6qaUeCBN
          stance: supports
          locator: CBDB:143642
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1U9tXUzeWB34Sj6qaUeCBN
            source_type: api_record
            title: 中国历代人物传记资料库：王公操（CBDB 143642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143642&o=json
            external_identifier: CBDB:143642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CP1oiWQLYF3gfDp8gmTAe6
        subject_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0878-01-01
            latest: 0878-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GUq71TdBQ4Y3SzG1AHK5Y5
          claim_id: c_CP1oiWQLYF3gfDp8gmTAe6
          source_id: s_1U9tXUzeWB34Sj6qaUeCBN
          stance: supports
          locator: CBDB:143642
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 878
          source:
            id: s_1U9tXUzeWB34Sj6qaUeCBN
            source_type: api_record
            title: 中国历代人物传记资料库：王公操（CBDB 143642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143642&o=json
            external_identifier: CBDB:143642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e2Pz1SsaqB9veZ7tcDTXNx
        subject_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公操
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VwFz1KU8JfMZumDGRv34Wn
          claim_id: c_e2Pz1SsaqB9veZ7tcDTXNx
          source_id: s_1U9tXUzeWB34Sj6qaUeCBN
          stance: supports
          locator: CBDB:143642
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 878
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WjQX3zqMw9m9-R7AcAE6_6
        subject_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NhJEuRkw8RUmufbhCLgHKX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZ-O18EVdjpaHtPA06AmBU
          claim_id: c_WjQX3zqMw9m9-R7AcAE6_6
          source_id: s_4f9ZNVrVDKa6EuGDgqZWF8
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu22：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4f9ZNVrVDKa6EuGDgqZWF8
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 168658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168658&o=json
            external_identifier: CBDB:168658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NhJEuRkw8RUmufbhCLgHKX
        status: active
        display_name: 王存禮
        merged_into_person_id: null
    - claim:
        id: c_sK48WgHAZIHiWApxtUKiT4
        subject_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LyJ9tobZ2fr5fW49xrucMa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AowIz8BJvFbiHMEkJubPWo
          claim_id: c_sK48WgHAZIHiWApxtUKiT4
          source_id: s_5mxcwtGEk1E4QrPGXgSWws
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu22：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5mxcwtGEk1E4QrPGXgSWws
            source_type: api_record
            title: 中国历代人物传记资料库：王可度（CBDB 168659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168659&o=json
            external_identifier: CBDB:168659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LyJ9tobZ2fr5fW49xrucMa
        status: active
        display_name: 王可度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_G0a6TM1TV3B2TTajJUXOrV
        subject_person_id: p_DPUzPRH4C7z282uoi5MQ6a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SHe13yjmVoW5sTUP3iaJYy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_broVPDAtfzzvM-QUX0ZacQ
          claim_id: c_G0a6TM1TV3B2TTajJUXOrV
          source_id: s_1U9tXUzeWB34Sj6qaUeCBN
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu22：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1U9tXUzeWB34Sj6qaUeCBN
            source_type: api_record
            title: 中国历代人物传记资料库：王公操（CBDB 143642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143642&o=json
            external_identifier: CBDB:143642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DPUzPRH4C7z282uoi5MQ6a
        status: active
        display_name: 王志用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王公操

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公操（卒于878年），史料所见人物。本项目依据《中国历代人物传记资料库：王公操（CBDB 143642）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 878年 | accepted |
| name.primary | 王公操 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NhJEuRkw8RUmufbhCLgHKX | 王存禮 | accepted |
| children | p_LyJ9tobZ2fr5fW49xrucMa | 王可度 | accepted |
| ancestors | p_DPUzPRH4C7z282uoi5MQ6a | 王志用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 168658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168658&o=json)
- [中国历代人物传记资料库：王公操（CBDB 143642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143642&o=json)
- [中国历代人物传记资料库：王可度（CBDB 168659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168659&o=json)
