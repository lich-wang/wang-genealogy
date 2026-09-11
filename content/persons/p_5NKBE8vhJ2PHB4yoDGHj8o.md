---
schema: wang-person/v1
id: p_5NKBE8vhJ2PHB4yoDGHj8o
status: active
merged_into: null
display_name: 王謐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C7G1Fwq8pdY4wiF4nvKqB7
        subject_person_id: p_5NKBE8vhJ2PHB4yoDGHj8o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZU3vKDGint2ynw63KscRz5
          claim_id: c_C7G1Fwq8pdY4wiF4nvKqB7
          source_id: s_rxZ3g3mEDZCAecpTi5ZbmS
          stance: supports
          locator: CBDB:478692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478692）
          source: &a1
            id: s_rxZ3g3mEDZCAecpTi5ZbmS
            source_type: api_record
            title: 中国历代人物传记资料库：王謐（CBDB 478692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478692&o=json
            external_identifier: CBDB:478692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Z9DAEMbhF2vASCc9pnC5A
        subject_person_id: p_5NKBE8vhJ2PHB4yoDGHj8o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐，明人物。曾任學正。（中国历代人物传记资料库 CBDB 478692）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_USVKbnVkf4Er8nDji7xS9o
          claim_id: c_1Z9DAEMbhF2vASCc9pnC5A
          source_id: s_rxZ3g3mEDZCAecpTi5ZbmS
          stance: supports
          locator: CBDB:478692
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

# 王謐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謐 | accepted |
| bio.summary | 王謐，明人物。曾任學正。（中国历代人物传记资料库 CBDB 478692） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謐（CBDB 478692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478692&o=json)
