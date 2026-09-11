---
schema: wang-person/v1
id: p_rhPMH1L1WhkkLTuAwsRNjt
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WpYcDex3LHoK8aRYBkrL1B
        subject_person_id: p_rhPMH1L1WhkkLTuAwsRNjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uncrYndTcAEzCukKd1DAAs
          claim_id: c_WpYcDex3LHoK8aRYBkrL1B
          source_id: s_LM16ejXHbJU3qXmwM6mRjR
          stance: supports
          locator: CBDB:38107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38107）
          source: &a1
            id: s_LM16ejXHbJU3qXmwM6mRjR
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 38107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38107&o=json
            external_identifier: CBDB:38107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwjenXtANC81wjgAVLZ7XE
        subject_person_id: p_rhPMH1L1WhkkLTuAwsRNjt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，宋人物。籍贯太原府，曾任兵馬都監、刺史、節度使。（中国历代人物传记资料库 CBDB 38107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sH2GBoRFPTqqLXICiOStv2
          claim_id: c_LwjenXtANC81wjgAVLZ7XE
          source_id: s_LM16ejXHbJU3qXmwM6mRjR
          stance: supports
          locator: CBDB:38107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UGEBxCrynoJPPDTeLubsG6
        subject_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rhPMH1L1WhkkLTuAwsRNjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NstWgJ7bh3S8SOJGpY5kZ-
          claim_id: c_UGEBxCrynoJPPDTeLubsG6
          source_id: s_LM16ejXHbJU3qXmwM6mRjR
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tz7BGr7hq8U8gRrDLhMUC6
        status: active
        display_name: 王承業
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，宋人物。籍贯太原府，曾任兵馬都監、刺史、節度使。（中国历代人物传记资料库 CBDB 38107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Tz7BGr7hq8U8gRrDLhMUC6 | 王承業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 38107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38107&o=json)
