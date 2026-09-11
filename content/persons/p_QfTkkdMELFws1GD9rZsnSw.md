---
schema: wang-person/v1
id: p_QfTkkdMELFws1GD9rZsnSw
status: active
merged_into: null
display_name: 王濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3UKzHeo7euGAe1Lf5KXyyW
        subject_person_id: p_QfTkkdMELFws1GD9rZsnSw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wrBWsz4nkatM9tjzuGDzA7
          claim_id: c_3UKzHeo7euGAe1Lf5KXyyW
          source_id: s_W9GBGDBMARMbQJ1PaqAwdE
          stance: supports
          locator: CBDB:61247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61247）
          source: &a1
            id: s_W9GBGDBMARMbQJ1PaqAwdE
            source_type: api_record
            title: 中国历代人物传记资料库：王濤（CBDB 61247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61247&o=json
            external_identifier: CBDB:61247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hPCwMkVBVqMJwgv9GqjqJi
        subject_person_id: p_QfTkkdMELFws1GD9rZsnSw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤，清人物。籍贯漢軍正紅旗，曾任副將。（中国历代人物传记资料库 CBDB 61247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EZwNEONKMXpPKESF_qqdHn
          claim_id: c_hPCwMkVBVqMJwgv9GqjqJi
          source_id: s_W9GBGDBMARMbQJ1PaqAwdE
          stance: supports
          locator: CBDB:61247
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

# 王濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濤 | accepted |
| bio.summary | 王濤，清人物。籍贯漢軍正紅旗，曾任副將。（中国历代人物传记资料库 CBDB 61247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濤（CBDB 61247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61247&o=json)
