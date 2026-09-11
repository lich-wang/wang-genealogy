---
schema: wang-person/v1
id: p_bb4uNBnkCDpyeNa35JCd9T
status: active
merged_into: null
display_name: 王譚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8EFT6GY6tFR1iTgYXQUri6
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvnJy6sk5HP4u6yd8AcXQr
          claim_id: c_8EFT6GY6tFR1iTgYXQUri6
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: CBDB:144955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144955）
          source: &a1
            id: s_qoTa2nNznviLxzB6AzpSw8
            source_type: api_record
            title: 中国历代人物传记资料库：王譚（CBDB 144955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144955&o=json
            external_identifier: CBDB:144955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JT3oSCtaAy46rLseTsXfN9
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 813年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89T72ifwjF4HA81yQ6p9jG
          claim_id: c_JT3oSCtaAy46rLseTsXfN9
          source_id: s_qoTa2nNznviLxzB6AzpSw8
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
        id: c_1ckFvy3Bas3QrfLJ1Sbtob
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 864年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CFZryGnENFSjdNtrJQAxUN
          claim_id: c_1ckFvy3Bas3QrfLJ1Sbtob
          source_id: s_qoTa2nNznviLxzB6AzpSw8
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
        id: c_KXhqF1uJB7sA6Q21JSUoBQ
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譚（813年—864年），唐人物。籍贯河南，曾任大理評事、都團練判官。（中国历代人物传记资料库 CBDB 144955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cnwYp7N_NVyiu2DEjQRXQD
          claim_id: c_KXhqF1uJB7sA6Q21JSUoBQ
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: CBDB:144955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v8xZxLDc1po8wYXLyfJ9jY
        subject_person_id: p_kW6BHpFnPbBsA8JbJBRAGy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YoNL87JC8EOHSpW7nt3f_j
          claim_id: c_v8xZxLDc1po8wYXLyfJ9jY
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kW6BHpFnPbBsA8JbJBRAGy
        status: active
        display_name: 王師正
        merged_into_person_id: null
  children:
    - claim:
        id: c_BJzGULhPJgEePDOejTsseH
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6qw3gxcA4PdQgH62zkXbMj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G-d4gh0xSH1kAzpdRD2ouf
          claim_id: c_BJzGULhPJgEePDOejTsseH
          source_id: s_QMbakgCHtQzMq6JntTg3Qs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QMbakgCHtQzMq6JntTg3Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王敬嗣（CBDB 192945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192945&o=json
            external_identifier: CBDB:192945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6qw3gxcA4PdQgH62zkXbMj
        status: active
        display_name: 王敬嗣
        merged_into_person_id: null
    - claim:
        id: c_85_aKHSnNbEi32MjcYFvSC
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YgtEA54FYWURjLpXmEA7A5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__RrGNQwPFjQ4260ZnOB9b0
          claim_id: c_85_aKHSnNbEi32MjcYFvSC
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YgtEA54FYWURjLpXmEA7A5
        status: active
        display_name: 王敬貽
        merged_into_person_id: null
    - claim:
        id: c_Hmh_Y4wkBGFTdlxXg-V8gt
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XDUjr73JTZKoFCAP2MQV6T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lHfMZ79V9bo9ufOUearu4P
          claim_id: c_Hmh_Y4wkBGFTdlxXg-V8gt
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XDUjr73JTZKoFCAP2MQV6T
        status: active
        display_name: 王敬休
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王譚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譚 | accepted |
| birth.date | 813年 | accepted |
| death.date | 864年 | accepted |
| bio.summary | 王譚（813年—864年），唐人物。籍贯河南，曾任大理評事、都團練判官。（中国历代人物传记资料库 CBDB 144955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kW6BHpFnPbBsA8JbJBRAGy | 王師正 | accepted |
| children | p_6qw3gxcA4PdQgH62zkXbMj | 王敬嗣 | accepted |
| children | p_YgtEA54FYWURjLpXmEA7A5 | 王敬貽 | accepted |
| children | p_XDUjr73JTZKoFCAP2MQV6T | 王敬休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬嗣（CBDB 192945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192945&o=json)
- [中国历代人物传记资料库：王譚（CBDB 144955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144955&o=json)
