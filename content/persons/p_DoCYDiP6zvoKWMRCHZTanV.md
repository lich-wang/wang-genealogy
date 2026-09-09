---
schema: wang-person/v1
id: p_DoCYDiP6zvoKWMRCHZTanV
status: active
merged_into: null
display_name: 王光照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h8SvnM3hnNBRMB5CSC8ayD
        subject_person_id: p_DoCYDiP6zvoKWMRCHZTanV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zT2buyCQzmBaZ4NAuk7rRE
          claim_id: c_h8SvnM3hnNBRMB5CSC8ayD
          source_id: s_hTq4D4HS6RrU58NtujDEHz
          stance: supports
          locator: CBDB:636263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636263）
          source: &a1
            id: s_hTq4D4HS6RrU58NtujDEHz
            source_type: api_record
            title: 中国历代人物传记资料库：王光照（CBDB 636263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636263&o=json
            external_identifier: CBDB:636263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fV38Vnxaj446nJt6CF6s1G
        subject_person_id: p_DoCYDiP6zvoKWMRCHZTanV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pc3Ecpd3VSgu684KWLNx7f
          claim_id: c_fV38Vnxaj446nJt6CF6s1G
          source_id: s_hTq4D4HS6RrU58NtujDEHz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王光照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光照 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光照（CBDB 636263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636263&o=json)
