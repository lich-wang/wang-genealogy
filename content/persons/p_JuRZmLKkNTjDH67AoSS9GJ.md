---
schema: wang-person/v1
id: p_JuRZmLKkNTjDH67AoSS9GJ
status: active
merged_into: null
display_name: 王善櫛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iXQJE64y3XxGRPpVo9cvqZ
        subject_person_id: p_JuRZmLKkNTjDH67AoSS9GJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善櫛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U9gcG2ofsYvWwzj7oNsjeE
          claim_id: c_iXQJE64y3XxGRPpVo9cvqZ
          source_id: s_N36RxAQrhmNXiCRk8gLkGW
          stance: supports
          locator: CBDB:636577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636577）
          source: &a1
            id: s_N36RxAQrhmNXiCRk8gLkGW
            source_type: api_record
            title: 中国历代人物传记资料库：王善櫛（CBDB 636577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636577&o=json
            external_identifier: CBDB:636577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TdyK9RSBuNCZUCS6nC1uTG
        subject_person_id: p_JuRZmLKkNTjDH67AoSS9GJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善櫛，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wwqtt6TPVp9YIoC2N19O7R
          claim_id: c_TdyK9RSBuNCZUCS6nC1uTG
          source_id: s_N36RxAQrhmNXiCRk8gLkGW
          stance: supports
          locator: CBDB:636577
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

# 王善櫛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善櫛 | accepted |
| bio.summary | 王善櫛，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善櫛（CBDB 636577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636577&o=json)
