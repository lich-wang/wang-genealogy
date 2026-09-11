---
schema: wang-person/v1
id: p_HLgfvAMYCFyV5oug5f3uL9
status: active
merged_into: null
display_name: 王銘閣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2tcENzSmQWdDAt8PeVFjKr
        subject_person_id: p_HLgfvAMYCFyV5oug5f3uL9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘閣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zFE1CaYJbykqJNbJNmgsmQ
          claim_id: c_2tcENzSmQWdDAt8PeVFjKr
          source_id: s_s5NfZT6sGDHXLWZLSwGHYU
          stance: supports
          locator: CBDB:640565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640565）
          source: &a1
            id: s_s5NfZT6sGDHXLWZLSwGHYU
            source_type: api_record
            title: 中国历代人物传记资料库：王銘閣（CBDB 640565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640565&o=json
            external_identifier: CBDB:640565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7tYEG7vnM6Q561wC4qLQTq
        subject_person_id: p_HLgfvAMYCFyV5oug5f3uL9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘閣，清人物。籍贯長葛，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 640565）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_diceO8IpZwKuA9W1TMViIe
          claim_id: c_7tYEG7vnM6Q561wC4qLQTq
          source_id: s_s5NfZT6sGDHXLWZLSwGHYU
          stance: supports
          locator: CBDB:640565
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

# 王銘閣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘閣 | accepted |
| bio.summary | 王銘閣，清人物。籍贯長葛，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 640565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘閣（CBDB 640565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640565&o=json)
