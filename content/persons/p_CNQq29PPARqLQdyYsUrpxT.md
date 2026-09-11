---
schema: wang-person/v1
id: p_CNQq29PPARqLQdyYsUrpxT
status: active
merged_into: null
display_name: 王辯
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BB1RUaYMV5YobC9PYTYoVw
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z2EFBbJm2ZeEUHc3yQ23fh
          claim_id: c_BB1RUaYMV5YobC9PYTYoVw
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: CBDB:700887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700887）
          source: &a1
            id: s_F9s62EoXN9pasHwFnDDFVS
            source_type: api_record
            title: 中国历代人物传记资料库：王辯（CBDB 700887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700887&o=json
            external_identifier: CBDB:700887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xQA7o7CViXQqYH7aE6eneD
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1019年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRVtXjycQj3yGxYB72Ydpp
          claim_id: c_xQA7o7CViXQqYH7aE6eneD
          source_id: s_F9s62EoXN9pasHwFnDDFVS
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
        id: c_R3684BEk967PZYoBrLCeFV
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1064年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqcJZFYtFm2V17fJMNbJ3e
          claim_id: c_R3684BEk967PZYoBrLCeFV
          source_id: s_F9s62EoXN9pasHwFnDDFVS
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
        id: c_29uRdESpRKq2XZ5XdwB8AB
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AKE1bBEz2bE1eaJ33y1Ppm
          claim_id: c_29uRdESpRKq2XZ5XdwB8AB
          source_id: s_F9s62EoXN9pasHwFnDDFVS
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
        id: c_4YsjIe1qWSuqJWTKAMdvif
        subject_person_id: p_RhDAKgtQcF6Z8oKs1zuCaK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CNQq29PPARqLQdyYsUrpxT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBXvnEN8G-v7gg3Fn1SlJu
          claim_id: c_4YsjIe1qWSuqJWTKAMdvif
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhDAKgtQcF6Z8oKs1zuCaK
        status: active
        display_name: 王文紀
        merged_into_person_id: null
  children:
    - claim:
        id: c_T6mIY6rLeeRuxk87DuVtM3
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a6iBVSH4AvDbFzM1nurSan
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZT-bJIExWkyUWRlaYs7Mtq
          claim_id: c_T6mIY6rLeeRuxk87DuVtM3
          source_id: s_LAuk3F1kbacfyKXtVc6fuu
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAuk3F1kbacfyKXtVc6fuu
            source_type: api_record
            title: 中国历代人物传记资料库：王真卿（CBDB 700901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700901&o=json
            external_identifier: CBDB:700901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a6iBVSH4AvDbFzM1nurSan
        status: active
        display_name: 王真卿
        merged_into_person_id: null
    - claim:
        id: c_ljXvK4T_bdoNDABlpeCAdp
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_az3PoNHrQPcMf7JchdnEpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7mOTOdD9n1uOWpRVZgd8u
          claim_id: c_ljXvK4T_bdoNDABlpeCAdp
          source_id: s_LhSsfjK1uFx5mrYYxBWNwK
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LhSsfjK1uFx5mrYYxBWNwK
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 700900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700900&o=json
            external_identifier: CBDB:700900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_az3PoNHrQPcMf7JchdnEpq
        status: active
        display_name: 王伯清
        merged_into_person_id: null
    - claim:
        id: c_5xDYS_0aXHmH_Eqxs9r7wy
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D7d4NRSbDa42wt9zYGD7Et
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzfW5pxkRXfaQW8i2z3TGO
          claim_id: c_5xDYS_0aXHmH_Eqxs9r7wy
          source_id: s_CCnQhdUEGq75V5XWWj9TxH
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CCnQhdUEGq75V5XWWj9TxH
            source_type: api_record
            title: 中国历代人物传记资料库：王元之（CBDB 700899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700899&o=json
            external_identifier: CBDB:700899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D7d4NRSbDa42wt9zYGD7Et
        status: active
        display_name: 王元之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DT2SxR_2OZrxqucCqYxD8E
        subject_person_id: p_EAKGvrLB7qJXthZERUG6pi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CNQq29PPARqLQdyYsUrpxT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8i84EfpEjyEOog3Zyb9iG
          claim_id: c_DT2SxR_2OZrxqucCqYxD8E
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EAKGvrLB7qJXthZERUG6pi
        status: active
        display_name: 王崇謙
        merged_into_person_id: null
    - claim:
        id: c_2uimw_Yu3K6WbsuSPruNgW
        subject_person_id: p_x9sCiMBHHPYfMF5fv5uEG1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CNQq29PPARqLQdyYsUrpxT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgpIsK1ruD-65SsdT3diJz
          claim_id: c_2uimw_Yu3K6WbsuSPruNgW
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x9sCiMBHHPYfMF5fv5uEG1
        status: active
        display_name: 王允正
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王辯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辯 | accepted |
| birth.date | 1019年 | accepted |
| death.date | 1064年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhDAKgtQcF6Z8oKs1zuCaK | 王文紀 | accepted |
| children | p_a6iBVSH4AvDbFzM1nurSan | 王真卿 | accepted |
| children | p_az3PoNHrQPcMf7JchdnEpq | 王伯清 | accepted |
| children | p_D7d4NRSbDa42wt9zYGD7Et | 王元之 | accepted |
| ancestors | p_EAKGvrLB7qJXthZERUG6pi | 王崇謙 | accepted |
| ancestors | p_x9sCiMBHHPYfMF5fv5uEG1 | 王允正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王辯（CBDB 700887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700887&o=json)
- [中国历代人物传记资料库：王伯清（CBDB 700900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700900&o=json)
- [中国历代人物传记资料库：王元之（CBDB 700899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700899&o=json)
- [中国历代人物传记资料库：王真卿（CBDB 700901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700901&o=json)
