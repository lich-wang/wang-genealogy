---
schema: wang-person/v1
id: p_mtDbYdJQGkt7ZvJxs5MTcS
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s3GNSucBBvvCDmbdTAzEMY
        subject_person_id: p_mtDbYdJQGkt7ZvJxs5MTcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FtDZNchpa6DoUVqJXd3rRb
          claim_id: c_s3GNSucBBvvCDmbdTAzEMY
          source_id: s_5XeANYJpPoKh5CzcvkDznr
          stance: supports
          locator: CBDB:92023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92023）
          source: &a1
            id: s_5XeANYJpPoKh5CzcvkDznr
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 92023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92023&o=json
            external_identifier: CBDB:92023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yusgEuPdGRwg6AKuYrBiN4
        subject_person_id: p_mtDbYdJQGkt7ZvJxs5MTcS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，唐人物。身份为詩人，曾任大理司直、縣令。（中国历代人物传记资料库 CBDB 92023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BJPNq-fzlWfmyf42gTDQlP
          claim_id: c_yusgEuPdGRwg6AKuYrBiN4
          source_id: s_5XeANYJpPoKh5CzcvkDznr
          stance: supports
          locator: CBDB:92023
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，唐人物。身份为詩人，曾任大理司直、縣令。（中国历代人物传记资料库 CBDB 92023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 92023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92023&o=json)
