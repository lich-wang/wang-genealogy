---
schema: wang-person/v1
id: p_Mm9Q1z5hqMLq3zsdACinK7
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_prCG8LMVJ8o3qYsf3hHpkb
        subject_person_id: p_Mm9Q1z5hqMLq3zsdACinK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GXyFFUXDT1dLJUumXaWqQB
          claim_id: c_prCG8LMVJ8o3qYsf3hHpkb
          source_id: s_eFxhiYSiuSTvh2A5mkFNS2
          stance: supports
          locator: CBDB:275660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275660）
          source: &a1
            id: s_eFxhiYSiuSTvh2A5mkFNS2
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 275660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275660&o=json
            external_identifier: CBDB:275660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V9T9LZhF5fP8h3wBY2KSpf
        subject_person_id: p_Mm9Q1z5hqMLq3zsdACinK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。弘治十八年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 275660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5q4hErc0Ep0QuMI4Tyd298
          claim_id: c_V9T9LZhF5fP8h3wBY2KSpf
          source_id: s_eFxhiYSiuSTvh2A5mkFNS2
          stance: supports
          locator: CBDB:275660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_IsEd5bosZgkDm3URNc5lUD
        subject_person_id: p_Mm9Q1z5hqMLq3zsdACinK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYZ8goCMY1FtSoQRoKjYJn
          claim_id: c_IsEd5bosZgkDm3URNc5lUD
          source_id: s_eFxhiYSiuSTvh2A5mkFNS2
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LvB1BmafWakeZPFiqa6trK
        status: active
        display_name: 王偉
        merged_into_person_id: null
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。弘治十八年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 275660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LvB1BmafWakeZPFiqa6trK | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 275660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275660&o=json)
