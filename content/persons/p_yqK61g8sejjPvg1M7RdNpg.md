---
schema: wang-person/v1
id: p_yqK61g8sejjPvg1M7RdNpg
status: active
merged_into: null
display_name: 王振名
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_krgNu9HnEuonNGL6mKVD9w
        subject_person_id: p_yqK61g8sejjPvg1M7RdNpg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MPJTAVKHVnqrfW91DPUm2T
          claim_id: c_krgNu9HnEuonNGL6mKVD9w
          source_id: s_zvKT9D79bhY9m59VzMDU7k
          stance: supports
          locator: CBDB:638120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638120）
          source: &a1
            id: s_zvKT9D79bhY9m59VzMDU7k
            source_type: api_record
            title: 中国历代人物传记资料库：王振名（CBDB 638120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638120&o=json
            external_identifier: CBDB:638120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fh8FvuFyaNRoQsGDD6jxcj
        subject_person_id: p_yqK61g8sejjPvg1M7RdNpg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振名，清人物。籍贯遵化州，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638120）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2wBGUB5jBVC52McGXfTq0c
          claim_id: c_Fh8FvuFyaNRoQsGDD6jxcj
          source_id: s_zvKT9D79bhY9m59VzMDU7k
          stance: supports
          locator: CBDB:638120
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

# 王振名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振名 | accepted |
| bio.summary | 王振名，清人物。籍贯遵化州，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振名（CBDB 638120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638120&o=json)
