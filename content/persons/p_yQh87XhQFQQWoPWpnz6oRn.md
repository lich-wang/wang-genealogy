---
schema: wang-person/v1
id: p_yQh87XhQFQQWoPWpnz6oRn
status: active
merged_into: null
display_name: 王吉霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CsDX8ojTuGHp6XUjbxn3Qj
        subject_person_id: p_yQh87XhQFQQWoPWpnz6oRn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kGHxzEwCnVu5taYrkWCA4h
          claim_id: c_CsDX8ojTuGHp6XUjbxn3Qj
          source_id: s_ZAJ1sNQQETe1hzjtgWZP2G
          stance: supports
          locator: CBDB:636494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636494）
          source: &a1
            id: s_ZAJ1sNQQETe1hzjtgWZP2G
            source_type: api_record
            title: 中国历代人物传记资料库：王吉霖（CBDB 636494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636494&o=json
            external_identifier: CBDB:636494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4CSVE235V95bYNsgu2ggC
        subject_person_id: p_yQh87XhQFQQWoPWpnz6oRn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉霖，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636494）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0ZgDwixoKG2k2PW8rQhz3z
          claim_id: c_N4CSVE235V95bYNsgu2ggC
          source_id: s_ZAJ1sNQQETe1hzjtgWZP2G
          stance: supports
          locator: CBDB:636494
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

# 王吉霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉霖 | accepted |
| bio.summary | 王吉霖，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉霖（CBDB 636494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636494&o=json)
