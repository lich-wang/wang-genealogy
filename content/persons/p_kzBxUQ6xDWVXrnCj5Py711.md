---
schema: wang-person/v1
id: p_kzBxUQ6xDWVXrnCj5Py711
status: active
merged_into: null
display_name: 王方
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_889Tcec1ZDryZgHvSPfu9V
        subject_person_id: p_kzBxUQ6xDWVXrnCj5Py711
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dh4CTKC1WWGZ7Ft4oaZKR3
          claim_id: c_889Tcec1ZDryZgHvSPfu9V
          source_id: s_dTqqi4nTJKpjiE7CD6GTC9
          stance: supports
          locator: CBDB:304535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304535）
          source: &a1
            id: s_dTqqi4nTJKpjiE7CD6GTC9
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 304535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304535&o=json
            external_identifier: CBDB:304535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eWKeXP5UK6S9pLxM8BErED
        subject_person_id: p_kzBxUQ6xDWVXrnCj5Py711
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方，明人物。嘉靖二十年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 304535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WeHSS4y_y5pxGcKnRZIX8N
          claim_id: c_eWKeXP5UK6S9pLxM8BErED
          source_id: s_dTqqi4nTJKpjiE7CD6GTC9
          stance: supports
          locator: CBDB:304535
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

# 王方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方 | accepted |
| bio.summary | 王方，明人物。嘉靖二十年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 304535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方（CBDB 304535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304535&o=json)
