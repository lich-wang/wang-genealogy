---
schema: wang-person/v1
id: p_EETbNGoZ1s7Hbx4qgSJhE5
status: active
merged_into: null
display_name: 王學懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7HPsbw4zEACE98jRP6KzmH
        subject_person_id: p_EETbNGoZ1s7Hbx4qgSJhE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B5T8Ev6s7ebivtviVXEeyz
          claim_id: c_7HPsbw4zEACE98jRP6KzmH
          source_id: s_h8Y8qNSfeKcS4KTcpqLAQ4
          stance: supports
          locator: CBDB:637034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637034）
          source: &a1
            id: s_h8Y8qNSfeKcS4KTcpqLAQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王學懋（CBDB 637034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637034&o=json
            external_identifier: CBDB:637034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sT4V1qQ1BMvs7PPSyHPGM2
        subject_person_id: p_EETbNGoZ1s7Hbx4qgSJhE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學懋，清人物。籍贯安徽省，入仕廩生，曾任知縣。（中国历代人物传记资料库 CBDB 637034）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oqirhk5lIb_YryNeOjOcMK
          claim_id: c_sT4V1qQ1BMvs7PPSyHPGM2
          source_id: s_h8Y8qNSfeKcS4KTcpqLAQ4
          stance: supports
          locator: CBDB:637034
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

# 王學懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學懋 | accepted |
| bio.summary | 王學懋，清人物。籍贯安徽省，入仕廩生，曾任知縣。（中国历代人物传记资料库 CBDB 637034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學懋（CBDB 637034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637034&o=json)
