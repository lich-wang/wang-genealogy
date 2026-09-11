---
schema: wang-person/v1
id: p_7LHYDsrMwx1GzovQ8Jkcai
status: active
merged_into: null
display_name: 王源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FknpWiKnvLezvY8HubCgXX
        subject_person_id: p_7LHYDsrMwx1GzovQ8Jkcai
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mF4Mum9qR5YvKJYtfNN6YW
          claim_id: c_FknpWiKnvLezvY8HubCgXX
          source_id: s_S9JqsGozN2bgbKaj5i93E2
          stance: supports
          locator: CBDB:688427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688427）
          source: &a1
            id: s_S9JqsGozN2bgbKaj5i93E2
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 688427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688427&o=json
            external_identifier: CBDB:688427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dHzGqU7Xi3J85C32wHLvtU
        subject_person_id: p_7LHYDsrMwx1GzovQ8Jkcai
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源，宋人物。籍贯雅州，入仕進士。（中国历代人物传记资料库 CBDB 688427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YygelEb3xD1LTyTOV5qDvr
          claim_id: c_dHzGqU7Xi3J85C32wHLvtU
          source_id: s_S9JqsGozN2bgbKaj5i93E2
          stance: supports
          locator: CBDB:688427
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

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| bio.summary | 王源，宋人物。籍贯雅州，入仕進士。（中国历代人物传记资料库 CBDB 688427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 688427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688427&o=json)
