---
schema: wang-person/v1
id: p_4noku3Dwag1rHuxXVe2bHv
status: active
merged_into: null
display_name: 王鶴齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66Mf4bdP8jssTzH9m6L3Z1
        subject_person_id: p_4noku3Dwag1rHuxXVe2bHv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtDgn4KHNHt4pBqecuFqES
          claim_id: c_66Mf4bdP8jssTzH9m6L3Z1
          source_id: s_taDw7ME4A8var2N9jHHLod
          stance: supports
          locator: CBDB:641022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641022）
          source: &a1
            id: s_taDw7ME4A8var2N9jHHLod
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴齡（CBDB 641022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641022&o=json
            external_identifier: CBDB:641022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_brEeZuK6bqPTC3A2262ezn
        subject_person_id: p_4noku3Dwag1rHuxXVe2bHv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴齡，清人物。籍贯正定，入仕鄉貢舉人，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 641022）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PEzr-NjWW_W8tY6YNvMDTA
          claim_id: c_brEeZuK6bqPTC3A2262ezn
          source_id: s_taDw7ME4A8var2N9jHHLod
          stance: supports
          locator: CBDB:641022
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

# 王鶴齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴齡 | accepted |
| bio.summary | 王鶴齡，清人物。籍贯正定，入仕鄉貢舉人，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 641022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶴齡（CBDB 641022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641022&o=json)
