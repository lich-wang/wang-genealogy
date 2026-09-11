---
schema: wang-person/v1
id: p_Ctmk5fSswnM52iN5Pe48yY
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_72uNJAKzrgkX5zLXy54hrF
        subject_person_id: p_Ctmk5fSswnM52iN5Pe48yY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h63FHyfVhzGjCAXJdjkAcA
          claim_id: c_72uNJAKzrgkX5zLXy54hrF
          source_id: s_kJuHstgBq3gG9Rt2d42L17
          stance: supports
          locator: CBDB:701088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701088）
          source: &a1
            id: s_kJuHstgBq3gG9Rt2d42L17
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 701088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701088&o=json
            external_identifier: CBDB:701088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qJEBx8gEuq4CXyREHNfDCA
        subject_person_id: p_Ctmk5fSswnM52iN5Pe48yY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，清人物。籍贯錢塘，身份为孝子/孝女，入仕州、府學生。（中国历代人物传记资料库 CBDB 701088）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jdJMpGhjYKdz8dIUtsFsIJ
          claim_id: c_qJEBx8gEuq4CXyREHNfDCA
          source_id: s_kJuHstgBq3gG9Rt2d42L17
          stance: supports
          locator: CBDB:701088
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，清人物。籍贯錢塘，身份为孝子/孝女，入仕州、府學生。（中国历代人物传记资料库 CBDB 701088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 701088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701088&o=json)
