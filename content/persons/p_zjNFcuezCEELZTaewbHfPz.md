---
schema: wang-person/v1
id: p_zjNFcuezCEELZTaewbHfPz
status: active
merged_into: null
display_name: 王炬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qer7VzSu5uzUcaMw4r5U5M
        subject_person_id: p_zjNFcuezCEELZTaewbHfPz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8YTopFfUFsDQSCWFHLHAjy
          claim_id: c_qer7VzSu5uzUcaMw4r5U5M
          source_id: s_ZQjwie2MhAosE9735DRe9o
          stance: supports
          locator: CBDB:562081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562081）
          source: &a1
            id: s_ZQjwie2MhAosE9735DRe9o
            source_type: api_record
            title: 中国历代人物传记资料库：王炬（CBDB 562081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562081&o=json
            external_identifier: CBDB:562081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G2dA2M4utYgwzekR3VujwK
        subject_person_id: p_zjNFcuezCEELZTaewbHfPz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炬，明人物。籍贯南昌，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 562081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AQ2M1-_t83FIgUYzSmD-ge
          claim_id: c_G2dA2M4utYgwzekR3VujwK
          source_id: s_ZQjwie2MhAosE9735DRe9o
          stance: supports
          locator: CBDB:562081
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

# 王炬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炬 | accepted |
| bio.summary | 王炬，明人物。籍贯南昌，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 562081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炬（CBDB 562081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562081&o=json)
