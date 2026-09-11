---
schema: wang-person/v1
id: p_QxMGLN8wV6w9gSPxNPZF7z
status: active
merged_into: null
display_name: 王時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Dc5bg2DcLhfZQ7dQAcvnb
        subject_person_id: p_QxMGLN8wV6w9gSPxNPZF7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_setia668AVU2ZAPXkWppNf
          claim_id: c_1Dc5bg2DcLhfZQ7dQAcvnb
          source_id: s_aue2MaEwXf8WN3atvFuvGD
          stance: supports
          locator: CBDB:487991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487991）
          source: &a1
            id: s_aue2MaEwXf8WN3atvFuvGD
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 487991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487991&o=json
            external_identifier: CBDB:487991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F4A8yjGM8HhTMM4pLRXfGf
        subject_person_id: p_QxMGLN8wV6w9gSPxNPZF7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時，明人物。入仕鄉貢舉人，曾任典史。（中国历代人物传记资料库 CBDB 487991）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R6fRxFTUev_b_Lpu-XY1cZ
          claim_id: c_F4A8yjGM8HhTMM4pLRXfGf
          source_id: s_aue2MaEwXf8WN3atvFuvGD
          stance: supports
          locator: CBDB:487991
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
  descendants: []
  other: []
---

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | 王時，明人物。入仕鄉貢舉人，曾任典史。（中国历代人物传记资料库 CBDB 487991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 487991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487991&o=json)
