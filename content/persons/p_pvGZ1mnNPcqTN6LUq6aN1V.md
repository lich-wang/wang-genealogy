---
schema: wang-person/v1
id: p_pvGZ1mnNPcqTN6LUq6aN1V
status: active
merged_into: null
display_name: 王如惺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6WmztyEiRTExRSQBoap65f
        subject_person_id: p_pvGZ1mnNPcqTN6LUq6aN1V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如惺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MDwXk44aPyLKz6xbFYQkB8
          claim_id: c_6WmztyEiRTExRSQBoap65f
          source_id: s_9qY7tvnu29HWAJqENamKYS
          stance: supports
          locator: CBDB:636967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636967）
          source: &a1
            id: s_9qY7tvnu29HWAJqENamKYS
            source_type: api_record
            title: 中国历代人物传记资料库：王如惺（CBDB 636967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636967&o=json
            external_identifier: CBDB:636967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7d17hRQgBgRv7MYtf37Fxy
        subject_person_id: p_pvGZ1mnNPcqTN6LUq6aN1V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王如惺，清人物。籍贯諸城，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 636967）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p1OSWwkfKbHb0GrLAg4bX2
          claim_id: c_7d17hRQgBgRv7MYtf37Fxy
          source_id: s_9qY7tvnu29HWAJqENamKYS
          stance: supports
          locator: CBDB:636967
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

# 王如惺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如惺 | accepted |
| bio.summary | 王如惺，清人物。籍贯諸城，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 636967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如惺（CBDB 636967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636967&o=json)
