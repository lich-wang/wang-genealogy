---
schema: wang-person/v1
id: p_AAEunTGc2Xx1V7kCw5JAru
status: active
merged_into: null
display_name: 王麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hkyq5Xfj1pfx3xcFQijtQt
        subject_person_id: p_AAEunTGc2Xx1V7kCw5JAru
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_81R6W1Ufm6W5M2jocVzqxE
          claim_id: c_Hkyq5Xfj1pfx3xcFQijtQt
          source_id: s_AV3aHyQPsLEFyXZ5dvE61G
          stance: supports
          locator: CBDB:688705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688705）
          source: &a1
            id: s_AV3aHyQPsLEFyXZ5dvE61G
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 688705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688705&o=json
            external_identifier: CBDB:688705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MpCb9viZg5DjJLgUoqT2xC
        subject_person_id: p_AAEunTGc2Xx1V7kCw5JAru
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，宋人物。籍贯深澤，入仕進士。（中国历代人物传记资料库 CBDB 688705）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dWaKWMbu77RIEr5Sf6lYvm
          claim_id: c_MpCb9viZg5DjJLgUoqT2xC
          source_id: s_AV3aHyQPsLEFyXZ5dvE61G
          stance: supports
          locator: CBDB:688705
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

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，宋人物。籍贯深澤，入仕進士。（中国历代人物传记资料库 CBDB 688705） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 688705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688705&o=json)
