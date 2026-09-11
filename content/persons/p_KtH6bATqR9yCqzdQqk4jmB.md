---
schema: wang-person/v1
id: p_KtH6bATqR9yCqzdQqk4jmB
status: active
merged_into: null
display_name: 王用霑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j95DfLwjsDncdDdP3HHx2C
        subject_person_id: p_KtH6bATqR9yCqzdQqk4jmB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用霑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kki8ML2Zi5tVqWK5aFFAmu
          claim_id: c_j95DfLwjsDncdDdP3HHx2C
          source_id: s_BigWp7o5m4LDLhDfhNbExn
          stance: supports
          locator: CBDB:494572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494572）
          source: &a1
            id: s_BigWp7o5m4LDLhDfhNbExn
            source_type: api_record
            title: 中国历代人物传记资料库：王用霑（CBDB 494572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494572&o=json
            external_identifier: CBDB:494572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kLCXBe8KbB3WTm4AfGYjxF
        subject_person_id: p_KtH6bATqR9yCqzdQqk4jmB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用霑，清人物。曾任典史。（中国历代人物传记资料库 CBDB 494572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q1Z5rzXZnxFkrAS08mB4in
          claim_id: c_kLCXBe8KbB3WTm4AfGYjxF
          source_id: s_BigWp7o5m4LDLhDfhNbExn
          stance: supports
          locator: CBDB:494572
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

# 王用霑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用霑 | accepted |
| bio.summary | 王用霑，清人物。曾任典史。（中国历代人物传记资料库 CBDB 494572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用霑（CBDB 494572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494572&o=json)
