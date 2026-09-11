---
schema: wang-person/v1
id: p_GcBvHSffABPszyHqYWBM3f
status: active
merged_into: null
display_name: 王循
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FtuPx3XTtP1o8o7kNGADby
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VP9gNnZbwQXAxkj3T9QCmS
          claim_id: c_FtuPx3XTtP1o8o7kNGADby
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: CBDB:244955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244955）
          source: &a1
            id: s_VsxZMjTKLcLm5T17FbA1Zd
            source_type: api_record
            title: 中国历代人物传记资料库：王循（CBDB 244955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json
            external_identifier: CBDB:244955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eWHDEtLwDAFXv9QMSB2SG4
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtFGW0rcMjCJJxhdKT1Xzu
          claim_id: c_eWHDEtLwDAFXv9QMSB2SG4
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: CBDB:244955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2qxJ5_C_Z0SbidN2l4S4ui
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmOrZzlVPH5VQVLExrchBs
          claim_id: c_2qxJ5_C_Z0SbidN2l4S4ui
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V4FwK3zU4QEPhCKRyGhfXG
        status: active
        display_name: 王問
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王循

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王循 | accepted |
| bio.summary | 王循，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V4FwK3zU4QEPhCKRyGhfXG | 王問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王循（CBDB 244955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json)
