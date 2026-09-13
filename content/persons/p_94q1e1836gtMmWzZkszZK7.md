---
schema: wang-person/v1
id: p_94q1e1836gtMmWzZkszZK7
status: merged
merged_into: p_TCJasuo9M43ytz26ea5oSn
display_name: 王益
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XLff7ffMzZKdntHWk1KLaR
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_znuC9mm5QEceoVHE9178w9
          claim_id: c_XLff7ffMzZKdntHWk1KLaR
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: CBDB:7082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7082）
          source: &a1
            id: s_KzVUwTYqbZ1sLD6i43Wwnw
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R1keHywZ8bP1dD6rAwjvww
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 993年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_71H3Xk55Mq62LdEnAmT45M
          claim_id: c_R1keHywZ8bP1dD6rAwjvww
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YnWwLpCjetZDUHpM1g38FT
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76H8QjDJDfZZ2w7vykimvP
          claim_id: c_YnWwLpCjetZDUHpM1g38FT
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ecbHyeNBcFLzFRCZWi1cp
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益（993年—1038年），宋人物。籍贯臨川，入仕進士，曾任殿中省丞、國公、殿中省尚衣奉御。（中国历代人物传记资料库 CBDB 7082）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MJvUgh-8ECxZq8j-c-CCt0
          claim_id: c_9ecbHyeNBcFLzFRCZWi1cp
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: CBDB:7082
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

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| birth.date | 993年 | accepted |
| death.date | 1038年 | accepted |
| bio.summary | 王益（993年—1038年），宋人物。籍贯臨川，入仕進士，曾任殿中省丞、國公、殿中省尚衣奉御。（中国历代人物传记资料库 CBDB 7082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
