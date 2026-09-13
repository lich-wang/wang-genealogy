---
schema: wang-person/v1
id: p_989vxjzpGFfKGuLPd7EXx4
status: active
merged_into: null
display_name: 王闡
cbdb_id: 175808
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BiVYBXgProoG6CyehNKbe2
        subject_person_id: p_989vxjzpGFfKGuLPd7EXx4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闡（卒于785年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7T573k_YsEWNN3xPbM_0xm
          claim_id: c_BiVYBXgProoG6CyehNKbe2
          source_id: s_LvUsreDtvDhmtq31JjYJcV
          stance: supports
          locator: CBDB:175808
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LvUsreDtvDhmtq31JjYJcV
            source_type: api_record
            title: 中国历代人物传记资料库：王闡（CBDB 175808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175808&o=json
            external_identifier: CBDB:175808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ztZy6BU1J8NERYchuuJ2x8
        subject_person_id: p_989vxjzpGFfKGuLPd7EXx4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 785年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0785-01-01
            latest: 0785-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rukDj3L98W2AQ1GWFziBzr
          claim_id: c_ztZy6BU1J8NERYchuuJ2x8
          source_id: s_LvUsreDtvDhmtq31JjYJcV
          stance: supports
          locator: CBDB:175808
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 785
          source:
            id: s_LvUsreDtvDhmtq31JjYJcV
            source_type: api_record
            title: 中国历代人物传记资料库：王闡（CBDB 175808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175808&o=json
            external_identifier: CBDB:175808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XfPuDLnqogZT3PNKvsDRuN
        subject_person_id: p_989vxjzpGFfKGuLPd7EXx4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bnUfLLRL7wb8He6EdfPHKb
          claim_id: c_XfPuDLnqogZT3PNKvsDRuN
          source_id: s_LvUsreDtvDhmtq31JjYJcV
          stance: supports
          locator: CBDB:175808
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 785
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8CW7mAbXF5UsZ903W30vbL
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_989vxjzpGFfKGuLPd7EXx4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0uljC7gdJWNpuHsRZC1ard
          claim_id: c_8CW7mAbXF5UsZ903W30vbL
          source_id: s_LvUsreDtvDhmtq31JjYJcV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LvUsreDtvDhmtq31JjYJcV
            source_type: api_record
            title: 中国历代人物传记资料库：王闡（CBDB 175808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175808&o=json
            external_identifier: CBDB:175808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XkASXMtAcYaJTsp7v8xTAK
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王闡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王闡（卒于785年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175808） | accepted |
| death.date | 785年 | accepted |
| name.primary | 王闡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XkASXMtAcYaJTsp7v8xTAK | 王釗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闡（CBDB 175808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175808&o=json)
