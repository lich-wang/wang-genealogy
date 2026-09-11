---
schema: wang-person/v1
id: p_9QxV9p7c8Uuf6bPUYN1Z8z
status: active
merged_into: null
display_name: 王新楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Apz9Bqw2qGWL53htQcFTHu
        subject_person_id: p_9QxV9p7c8Uuf6bPUYN1Z8z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GJ1HiGj7mgrok3dYPVYLsQ
          claim_id: c_Apz9Bqw2qGWL53htQcFTHu
          source_id: s_QT2oaLQq5Aten6xpavH8eG
          stance: supports
          locator: CBDB:638306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638306）
          source: &a1
            id: s_QT2oaLQq5Aten6xpavH8eG
            source_type: api_record
            title: 中国历代人物传记资料库：王新楷（CBDB 638306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638306&o=json
            external_identifier: CBDB:638306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4q3jh9ShrTbtvvX68JLTvp
        subject_person_id: p_9QxV9p7c8Uuf6bPUYN1Z8z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新楷，清人物。籍贯汾州府，入仕鄉貢舉人，曾任教諭、學正。（中国历代人物传记资料库 CBDB 638306）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3b3W4RGiOzhZ0tTeksUtCM
          claim_id: c_4q3jh9ShrTbtvvX68JLTvp
          source_id: s_QT2oaLQq5Aten6xpavH8eG
          stance: supports
          locator: CBDB:638306
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

# 王新楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新楷 | accepted |
| bio.summary | 王新楷，清人物。籍贯汾州府，入仕鄉貢舉人，曾任教諭、學正。（中国历代人物传记资料库 CBDB 638306） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新楷（CBDB 638306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638306&o=json)
