---
schema: wang-person/v1
id: p_kU75Tgj2NtA92NT2JvWnXi
status: active
merged_into: null
display_name: 王殿華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JtUSctpiRG5LgAQH9UN2x5
        subject_person_id: p_kU75Tgj2NtA92NT2JvWnXi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t7pvz4LTUogZ5Cd7gWJsMT
          claim_id: c_JtUSctpiRG5LgAQH9UN2x5
          source_id: s_CT15jxg1yLjJM1R91KVh2q
          stance: supports
          locator: CBDB:638938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638938）
          source: &a1
            id: s_CT15jxg1yLjJM1R91KVh2q
            source_type: api_record
            title: 中国历代人物传记资料库：王殿華（CBDB 638938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638938&o=json
            external_identifier: CBDB:638938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VsEiBiBEuD5K6QSHy18GG9
        subject_person_id: p_kU75Tgj2NtA92NT2JvWnXi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿華，清人物。籍贯商河，入仕恩蔭、蔭補，曾任中軍守備。（中国历代人物传记资料库 CBDB 638938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SPebiV1PgIVjx6OoEzc2II
          claim_id: c_VsEiBiBEuD5K6QSHy18GG9
          source_id: s_CT15jxg1yLjJM1R91KVh2q
          stance: supports
          locator: CBDB:638938
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

# 王殿華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿華 | accepted |
| bio.summary | 王殿華，清人物。籍贯商河，入仕恩蔭、蔭補，曾任中軍守備。（中国历代人物传记资料库 CBDB 638938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿華（CBDB 638938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638938&o=json)
