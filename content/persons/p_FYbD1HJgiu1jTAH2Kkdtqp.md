---
schema: wang-person/v1
id: p_FYbD1HJgiu1jTAH2Kkdtqp
status: active
merged_into: null
display_name: 王其緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ps1YLWmVjWHN7LHFgj7vv5
        subject_person_id: p_FYbD1HJgiu1jTAH2Kkdtqp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S2eFBfc2t2arQ9qCsGTB7Q
          claim_id: c_Ps1YLWmVjWHN7LHFgj7vv5
          source_id: s_GEi9szrwGbrQQ78k2vAM2x
          stance: supports
          locator: CBDB:636336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636336）
          source: &a1
            id: s_GEi9szrwGbrQQ78k2vAM2x
            source_type: api_record
            title: 中国历代人物传记资料库：王其緒（CBDB 636336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636336&o=json
            external_identifier: CBDB:636336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nof1WTZw2rGiFMA4F4G81M
        subject_person_id: p_FYbD1HJgiu1jTAH2Kkdtqp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其緒，清人物。籍贯惠安，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6CMMqWVmUqNBDZm8RXdvLl
          claim_id: c_Nof1WTZw2rGiFMA4F4G81M
          source_id: s_GEi9szrwGbrQQ78k2vAM2x
          stance: supports
          locator: CBDB:636336
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

# 王其緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其緒 | accepted |
| bio.summary | 王其緒，清人物。籍贯惠安，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其緒（CBDB 636336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636336&o=json)
