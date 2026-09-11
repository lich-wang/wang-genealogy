---
schema: wang-person/v1
id: p_ktzsdQcN7DvcCwMj98SiKT
status: active
merged_into: null
display_name: 王文淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MeytL6Tan8mjSMvQfgDpSs
        subject_person_id: p_ktzsdQcN7DvcCwMj98SiKT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J3t6zKJf5KciBsgRyitaMj
          claim_id: c_MeytL6Tan8mjSMvQfgDpSs
          source_id: s_i6JEjrbTCtXCoXk3iyAKyD
          stance: supports
          locator: CBDB:568680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568680）
          source: &a1
            id: s_i6JEjrbTCtXCoXk3iyAKyD
            source_type: api_record
            title: 中国历代人物传记资料库：王文淑（CBDB 568680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568680&o=json
            external_identifier: CBDB:568680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R7E3AGkgvTGhM2zRu5PJvq
        subject_person_id: p_ktzsdQcN7DvcCwMj98SiKT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文淑，清人物。籍贯開泰。（中国历代人物传记资料库 CBDB 568680）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8AmoSNBA5hr1WrlReFDf2w
          claim_id: c_R7E3AGkgvTGhM2zRu5PJvq
          source_id: s_i6JEjrbTCtXCoXk3iyAKyD
          stance: supports
          locator: CBDB:568680
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

# 王文淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文淑 | accepted |
| bio.summary | 王文淑，清人物。籍贯開泰。（中国历代人物传记资料库 CBDB 568680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文淑（CBDB 568680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568680&o=json)
