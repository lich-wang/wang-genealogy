---
schema: wang-person/v1
id: p_stGiUXVW6miq6T6SGJqSJh
status: active
merged_into: null
display_name: 王國琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RmJX558EEpupWFEF5w9DJy
        subject_person_id: p_stGiUXVW6miq6T6SGJqSJh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5uENXoHLCu7XmPo6FRZzwr
          claim_id: c_RmJX558EEpupWFEF5w9DJy
          source_id: s_Mm18jw8oCJ9jSizdHPBKAc
          stance: supports
          locator: CBDB:636664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636664）
          source: &a1
            id: s_Mm18jw8oCJ9jSizdHPBKAc
            source_type: api_record
            title: 中国历代人物传记资料库：王國琦（CBDB 636664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636664&o=json
            external_identifier: CBDB:636664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7vJY4Fdp8PDgbREGMUzkJU
        subject_person_id: p_stGiUXVW6miq6T6SGJqSJh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國琦，清人物。籍贯慈利，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636664）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wlaqBvcZ4FLK5B-TSmS9Wp
          claim_id: c_7vJY4Fdp8PDgbREGMUzkJU
          source_id: s_Mm18jw8oCJ9jSizdHPBKAc
          stance: supports
          locator: CBDB:636664
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

# 王國琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國琦 | accepted |
| bio.summary | 王國琦，清人物。籍贯慈利，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國琦（CBDB 636664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636664&o=json)
