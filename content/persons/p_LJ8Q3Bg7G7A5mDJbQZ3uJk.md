---
schema: wang-person/v1
id: p_LJ8Q3Bg7G7A5mDJbQZ3uJk
status: active
merged_into: null
display_name: 王質
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LF4oM6TvsJqd3wpHaoerqW
        subject_person_id: p_LJ8Q3Bg7G7A5mDJbQZ3uJk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EAyMDmuS17GoEwhZq6DJSw
          claim_id: c_LF4oM6TvsJqd3wpHaoerqW
          source_id: s_e6XxjzdQeFs17BxpfNytyJ
          stance: supports
          locator: CBDB:469206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469206）
          source: &a1
            id: s_e6XxjzdQeFs17BxpfNytyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 469206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469206&o=json
            external_identifier: CBDB:469206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aLJ26C5fGrXGAfkNcnByRj
        subject_person_id: p_LJ8Q3Bg7G7A5mDJbQZ3uJk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質，宋人物。曾任轉運使。（中国历代人物传记资料库 CBDB 469206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_05nWQe2EZu7RLZmSM_yoek
          claim_id: c_aLJ26C5fGrXGAfkNcnByRj
          source_id: s_e6XxjzdQeFs17BxpfNytyJ
          stance: supports
          locator: CBDB:469206
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

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質 | accepted |
| bio.summary | 王質，宋人物。曾任轉運使。（中国历代人物传记资料库 CBDB 469206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王質（CBDB 469206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469206&o=json)
