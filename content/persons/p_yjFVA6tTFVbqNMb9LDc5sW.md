---
schema: wang-person/v1
id: p_yjFVA6tTFVbqNMb9LDc5sW
status: active
merged_into: null
display_name: 王進忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rj3M733q3cSDDoA8f659VP
        subject_person_id: p_yjFVA6tTFVbqNMb9LDc5sW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4k9M5oq9UuGMTBM9srKH8s
          claim_id: c_rj3M733q3cSDDoA8f659VP
          source_id: s_BYEcZP1QaTshxf33MMdif3
          stance: supports
          locator: CBDB:61001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61001）
          source: &a1
            id: s_BYEcZP1QaTshxf33MMdif3
            source_type: api_record
            title: 中国历代人物传记资料库：王進忠（CBDB 61001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61001&o=json
            external_identifier: CBDB:61001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KpZespBdzTa1kYM6MfA7Ny
        subject_person_id: p_yjFVA6tTFVbqNMb9LDc5sW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進忠，清人物。入仕鄉貢舉人，曾任把總、營遊擊、遊擊。（中国历代人物传记资料库 CBDB 61001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B5cYIDevZGTBVnPiroLvx0
          claim_id: c_KpZespBdzTa1kYM6MfA7Ny
          source_id: s_BYEcZP1QaTshxf33MMdif3
          stance: supports
          locator: CBDB:61001
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

# 王進忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進忠 | accepted |
| bio.summary | 王進忠，清人物。入仕鄉貢舉人，曾任把總、營遊擊、遊擊。（中国历代人物传记资料库 CBDB 61001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進忠（CBDB 61001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61001&o=json)
