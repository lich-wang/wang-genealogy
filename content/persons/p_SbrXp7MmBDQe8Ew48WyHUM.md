---
schema: wang-person/v1
id: p_SbrXp7MmBDQe8Ew48WyHUM
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtSYCZASvWceMDpytyQbd8
        subject_person_id: p_SbrXp7MmBDQe8Ew48WyHUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZG2T6vZB83WDM579uDrVXq
          claim_id: c_XtSYCZASvWceMDpytyQbd8
          source_id: s_m21docN3irQGPH5tihRQvg
          stance: supports
          locator: CBDB:274560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274560）
          source: &a1
            id: s_m21docN3irQGPH5tihRQvg
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 274560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274560&o=json
            external_identifier: CBDB:274560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5DKx6huf8iRZ3Xf9BxzbUf
        subject_person_id: p_SbrXp7MmBDQe8Ew48WyHUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8fX5lNQOzi6DsAZ-jkPY-6
          claim_id: c_5DKx6huf8iRZ3Xf9BxzbUf
          source_id: s_m21docN3irQGPH5tihRQvg
          stance: supports
          locator: CBDB:274560
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
        id: c_lzmTaT4dPxxBYWb0pCx03K
        subject_person_id: p_SbrXp7MmBDQe8Ew48WyHUM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCL72tBj6tofvSVsLY2voQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDvR7NE5qmHPAK95HumIDC
          claim_id: c_lzmTaT4dPxxBYWb0pCx03K
          source_id: s_m21docN3irQGPH5tihRQvg
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第九十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RCL72tBj6tofvSVsLY2voQ
        status: active
        display_name: 王希孟
        merged_into_person_id: null
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RCL72tBj6tofvSVsLY2voQ | 王希孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 274560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274560&o=json)
