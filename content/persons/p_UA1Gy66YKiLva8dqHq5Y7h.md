---
schema: wang-person/v1
id: p_UA1Gy66YKiLva8dqHq5Y7h
status: active
merged_into: null
display_name: 王承顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a1n9RhLyd9hJqvHJnEQ2D2
        subject_person_id: p_UA1Gy66YKiLva8dqHq5Y7h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bS5ie37mcN2MKcZe9oTbf8
          claim_id: c_a1n9RhLyd9hJqvHJnEQ2D2
          source_id: s_G2EbimpMhFkMz4zKUvD3fg
          stance: supports
          locator: CBDB:376408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376408）
          source: &a1
            id: s_G2EbimpMhFkMz4zKUvD3fg
            source_type: api_record
            title: 中国历代人物传记资料库：王承顏（CBDB 376408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376408&o=json
            external_identifier: CBDB:376408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FRMRZ8oWHAGeKek3NXc1GA
        subject_person_id: p_UA1Gy66YKiLva8dqHq5Y7h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WhgwY9SgJsgspXAb2NWtZ9
          claim_id: c_FRMRZ8oWHAGeKek3NXc1GA
          source_id: s_G2EbimpMhFkMz4zKUvD3fg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王承顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承顏 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承顏（CBDB 376408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376408&o=json)
