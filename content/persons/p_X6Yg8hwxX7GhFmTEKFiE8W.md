---
schema: wang-person/v1
id: p_X6Yg8hwxX7GhFmTEKFiE8W
status: active
merged_into: null
display_name: 王良貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RYsM2iiWWt2ce1oqtEM5oS
        subject_person_id: p_X6Yg8hwxX7GhFmTEKFiE8W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yHgN9AWCTG6hm3fZsh3CNr
          claim_id: c_RYsM2iiWWt2ce1oqtEM5oS
          source_id: s_anivRDTxKptuP988y5sBUJ
          stance: supports
          locator: CBDB:475661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475661）
          source: &a1
            id: s_anivRDTxKptuP988y5sBUJ
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 475661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475661&o=json
            external_identifier: CBDB:475661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNw5ERXjBmhMtL5sLzffdb
        subject_person_id: p_X6Yg8hwxX7GhFmTEKFiE8W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良貴，宋人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 475661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oE6lqh5O0g9Y1Ks_ZM8tnp
          claim_id: c_GNw5ERXjBmhMtL5sLzffdb
          source_id: s_anivRDTxKptuP988y5sBUJ
          stance: supports
          locator: CBDB:475661
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

# 王良貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良貴 | accepted |
| bio.summary | 王良貴，宋人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 475661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良貴（CBDB 475661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475661&o=json)
