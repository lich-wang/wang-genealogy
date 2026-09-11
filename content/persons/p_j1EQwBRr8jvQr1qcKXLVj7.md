---
schema: wang-person/v1
id: p_j1EQwBRr8jvQr1qcKXLVj7
status: active
merged_into: null
display_name: 王弘寂
cbdb_id: 160795
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NY15J8vA4kTmciSpKowBMx
        subject_person_id: p_j1EQwBRr8jvQr1qcKXLVj7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘寂，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160795 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mihv5vE3h7Ch5NQP5rdoFm
          claim_id: c_NY15J8vA4kTmciSpKowBMx
          source_id: s_hSJ6LBk8ozfimzTR2m2wwb
          stance: supports
          locator: CBDB:160795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hSJ6LBk8ozfimzTR2m2wwb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘寂（CBDB 160795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160795&o=json
            external_identifier: CBDB:160795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ymRM6dwfB79YWaD7MRsde
        subject_person_id: p_j1EQwBRr8jvQr1qcKXLVj7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘寂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EWN3dTJ35h7t8ur43UUT2r
          claim_id: c_1ymRM6dwfB79YWaD7MRsde
          source_id: s_hSJ6LBk8ozfimzTR2m2wwb
          stance: supports
          locator: CBDB:160795
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_hSJ6LBk8ozfimzTR2m2wwb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘寂（CBDB 160795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160795&o=json
            external_identifier: CBDB:160795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q0Pi1RXfIKlLyuVTGgXzBU
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j1EQwBRr8jvQr1qcKXLVj7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3sfDDZXis3LfgqGCY-f2yZ
          claim_id: c_Q0Pi1RXfIKlLyuVTGgXzBU
          source_id: s_hSJ6LBk8ozfimzTR2m2wwb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X3KgUwftEJuFzG5Sp9xV61
        status: active
        display_name: 王公晟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘寂，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160795 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弘寂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X3KgUwftEJuFzG5Sp9xV61 | 王公晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘寂（CBDB 160795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160795&o=json)
