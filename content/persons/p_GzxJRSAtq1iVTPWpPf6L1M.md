---
schema: wang-person/v1
id: p_GzxJRSAtq1iVTPWpPf6L1M
status: active
merged_into: null
display_name: 王適
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fnFLsN564Arr7JPWFXu752
        subject_person_id: p_GzxJRSAtq1iVTPWpPf6L1M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W2sTWQQMFA1M24ZAHCBwu2
          claim_id: c_fnFLsN564Arr7JPWFXu752
          source_id: s_Zj8SexjSsMgn6HaG5QCSxu
          stance: supports
          locator: CBDB:229852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229852）
          source: &a1
            id: s_Zj8SexjSsMgn6HaG5QCSxu
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 229852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229852&o=json
            external_identifier: CBDB:229852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5A94BFJ8vqLy8fL7EXg9me
        subject_person_id: p_GzxJRSAtq1iVTPWpPf6L1M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ygJRKgJNVpJKTSo6hcXy_Y
          claim_id: c_5A94BFJ8vqLy8fL7EXg9me
          source_id: s_Zj8SexjSsMgn6HaG5QCSxu
          stance: supports
          locator: CBDB:229852
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

# 王適

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王適 | accepted |
| bio.summary | 王適，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王適（CBDB 229852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229852&o=json)
