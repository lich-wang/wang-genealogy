---
schema: wang-person/v1
id: p_qpYjs58xCf6rGyH3FU2c1P
status: active
merged_into: null
display_name: 王嵩
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEPLkyvGyeXfitLGHjeoxU
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKJCLxZoXH4PDJ1dnkKcow
          claim_id: c_eEPLkyvGyeXfitLGHjeoxU
          source_id: s_YjxS9HgytL9RpKuh7PACJG
          stance: supports
          locator: CBDB:142903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142903）
          source: &a1
            id: s_YjxS9HgytL9RpKuh7PACJG
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 142903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142903&o=json
            external_identifier: CBDB:142903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xekXQf42FPhen8mnRWeVc2
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EATTRKCwp6yhcAosHe8jmp
          claim_id: c_xekXQf42FPhen8mnRWeVc2
          source_id: s_YjxS9HgytL9RpKuh7PACJG
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
        id: c_DMPBPSFTt2BGt8thHurd28
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 726年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inGAALbnUT8okHMNrko8uU
          claim_id: c_DMPBPSFTt2BGt8thHurd28
          source_id: s_YjxS9HgytL9RpKuh7PACJG
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
        id: c_6RTZzMbbgZDddLbNbtMoF5
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩（672年—726年），史料所见人物。本项目依据《中国历代人物传记资料库：王嵩（CBDB 142903）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aFwjDq_64t9jbVOTnJnF56
          claim_id: c_6RTZzMbbgZDddLbNbtMoF5
          source_id: s_YjxS9HgytL9RpKuh7PACJG
          stance: supports
          locator: CBDB:142903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3FuAQ4Ozm9QskgGd5wHHOA
        subject_person_id: p_LC2saNjRn8AHVBESWoqV7j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5opZ539izGOm6RETIsOGM
          claim_id: c_3FuAQ4Ozm9QskgGd5wHHOA
          source_id: s_43T8pGhp4N4JPDUnjVb9tq
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan74：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_43T8pGhp4N4JPDUnjVb9tq
            source_type: api_record
            title: 中国历代人物传记资料库：王師順（CBDB 163970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163970&o=json
            external_identifier: CBDB:163970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LC2saNjRn8AHVBESWoqV7j
        status: active
        display_name: 王師順
        merged_into_person_id: null
  children:
    - claim:
        id: c_AlWF6cZleKexBeCc5ZWpBn
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iayukSb6DC2UXHDGUyskLZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FVIvGXayo4t9QHBl7-VxQW
          claim_id: c_AlWF6cZleKexBeCc5ZWpBn
          source_id: s_nBt2ozdBmdsqQsAtHa3Ziz
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan74：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nBt2ozdBmdsqQsAtHa3Ziz
            source_type: api_record
            title: 中国历代人物传记资料库：王澹（CBDB 163971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163971&o=json
            external_identifier: CBDB:163971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iayukSb6DC2UXHDGUyskLZ
        status: active
        display_name: 王澹
        merged_into_person_id: null
    - claim:
        id: c__fefjgO5S0Z7Aoy-tflFxd
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jhmTi4r4WfRpFK4vF1pzQj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nac328z1a147hcRgmqBni
          claim_id: c__fefjgO5S0Z7Aoy-tflFxd
          source_id: s_YKMrbCtwToeb7Tq4LbvqBN
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan74：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YKMrbCtwToeb7Tq4LbvqBN
            source_type: api_record
            title: 中国历代人物传记资料库：王濺（CBDB 163972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163972&o=json
            external_identifier: CBDB:163972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jhmTi4r4WfRpFK4vF1pzQj
        status: active
        display_name: 王濺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| birth.date | 672年 | accepted |
| death.date | 726年 | accepted |
| bio.summary | 王嵩（672年—726年），史料所见人物。本项目依据《中国历代人物传记资料库：王嵩（CBDB 142903）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LC2saNjRn8AHVBESWoqV7j | 王師順 | accepted |
| children | p_iayukSb6DC2UXHDGUyskLZ | 王澹 | accepted |
| children | p_jhmTi4r4WfRpFK4vF1pzQj | 王濺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澹（CBDB 163971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163971&o=json)
- [中国历代人物传记资料库：王濺（CBDB 163972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163972&o=json)
- [中国历代人物传记资料库：王師順（CBDB 163970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163970&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 142903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142903&o=json)
