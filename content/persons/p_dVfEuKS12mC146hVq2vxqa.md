---
schema: wang-person/v1
id: p_dVfEuKS12mC146hVq2vxqa
status: active
merged_into: null
display_name: 王才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3sQQEjYyShqfSZG5oGF8j7
        subject_person_id: p_dVfEuKS12mC146hVq2vxqa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qPUPHYRPD2i7dh6LZx79KL
          claim_id: c_3sQQEjYyShqfSZG5oGF8j7
          source_id: s_5JZ4hnTm9SttcCz1GqMdYx
          stance: supports
          locator: CBDB:568639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568639）
          source: &a1
            id: s_5JZ4hnTm9SttcCz1GqMdYx
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 568639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568639&o=json
            external_identifier: CBDB:568639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2fZfoqV1CgAwPPNx1HCJpk
        subject_person_id: p_dVfEuKS12mC146hVq2vxqa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才，清人物。籍贯上海。（中国历代人物传记资料库 CBDB 568639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__4TzyJaFduJwBdM78GRB2v
          claim_id: c_2fZfoqV1CgAwPPNx1HCJpk
          source_id: s_5JZ4hnTm9SttcCz1GqMdYx
          stance: supports
          locator: CBDB:568639
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

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| bio.summary | 王才，清人物。籍贯上海。（中国历代人物传记资料库 CBDB 568639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 568639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568639&o=json)
