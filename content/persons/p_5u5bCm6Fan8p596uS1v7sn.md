---
schema: wang-person/v1
id: p_5u5bCm6Fan8p596uS1v7sn
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z75hHWZYr3yuSVQP36UJFN
        subject_person_id: p_5u5bCm6Fan8p596uS1v7sn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KmszJSrV7T6gM7v8vkt8Jx
          claim_id: c_z75hHWZYr3yuSVQP36UJFN
          source_id: s_9nHPC38NywQkA7zrpfGBF8
          stance: supports
          locator: CBDB:148878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148878）
          source: &a1
            id: s_9nHPC38NywQkA7zrpfGBF8
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 148878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148878&o=json
            external_identifier: CBDB:148878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2iyPBzPTfoqpoxz6L1pBfE
        subject_person_id: p_5u5bCm6Fan8p596uS1v7sn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSaHvStit2vp7zwTURiCH5
          claim_id: c_2iyPBzPTfoqpoxz6L1pBfE
          source_id: s_9nHPC38NywQkA7zrpfGBF8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ei_ecxIjDdE2i1dX36JHLh
        subject_person_id: p_5u5bCm6Fan8p596uS1v7sn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cleRDxGFKM1Q_-gpPtMmMp
          claim_id: c_Ei_ecxIjDdE2i1dX36JHLh
          source_id: s_9nHPC38NywQkA7zrpfGBF8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 37：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E8E8ihQC2SrCHhBnBQvfcv
        status: active
        display_name: 王韜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_E8E8ihQC2SrCHhBnBQvfcv | 王韜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 148878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148878&o=json)
