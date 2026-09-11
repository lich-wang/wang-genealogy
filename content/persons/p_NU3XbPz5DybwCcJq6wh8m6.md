---
schema: wang-person/v1
id: p_NU3XbPz5DybwCcJq6wh8m6
status: active
merged_into: null
display_name: 王憲曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_39h12FBqQAPuWJSKKqcpce
        subject_person_id: p_NU3XbPz5DybwCcJq6wh8m6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JxENaqsjK2giVLj4EvLm41
          claim_id: c_39h12FBqQAPuWJSKKqcpce
          source_id: s_7HFmAH1PHqTdiqgJAe6Tu9
          stance: supports
          locator: CBDB:235973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235973）
          source: &a1
            id: s_7HFmAH1PHqTdiqgJAe6Tu9
            source_type: api_record
            title: 中国历代人物传记资料库：王憲曾（CBDB 235973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235973&o=json
            external_identifier: CBDB:235973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9zoDz1FNVdEtMKvYkg3xjs
        subject_person_id: p_NU3XbPz5DybwCcJq6wh8m6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲曾，明人物。籍贯江陰，入仕庠生。（中国历代人物传记资料库 CBDB 235973）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ixavGJWbedIUMUwb6vxwVh
          claim_id: c_9zoDz1FNVdEtMKvYkg3xjs
          source_id: s_7HFmAH1PHqTdiqgJAe6Tu9
          stance: supports
          locator: CBDB:235973
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

# 王憲曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲曾 | accepted |
| bio.summary | 王憲曾，明人物。籍贯江陰，入仕庠生。（中国历代人物传记资料库 CBDB 235973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲曾（CBDB 235973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235973&o=json)
