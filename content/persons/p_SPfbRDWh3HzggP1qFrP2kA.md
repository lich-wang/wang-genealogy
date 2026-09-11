---
schema: wang-person/v1
id: p_SPfbRDWh3HzggP1qFrP2kA
status: active
merged_into: null
display_name: 王榮槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VgAhfAhL8pFhB9hkvJZjYy
        subject_person_id: p_SPfbRDWh3HzggP1qFrP2kA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NSB5z87GZNrzKLKoGZxc74
          claim_id: c_VgAhfAhL8pFhB9hkvJZjYy
          source_id: s_YV3ojkiWvzV1eqLYqDGD88
          stance: supports
          locator: CBDB:638802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638802）
          source: &a1
            id: s_YV3ojkiWvzV1eqLYqDGD88
            source_type: api_record
            title: 中国历代人物传记资料库：王榮槐（CBDB 638802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638802&o=json
            external_identifier: CBDB:638802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjnJPpE8py5a582XAHXW1B
        subject_person_id: p_SPfbRDWh3HzggP1qFrP2kA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮槐，清人物。籍贯平越直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 638802）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PgSMEjSTQvgk8FRVbS-oAc
          claim_id: c_SjnJPpE8py5a582XAHXW1B
          source_id: s_YV3ojkiWvzV1eqLYqDGD88
          stance: supports
          locator: CBDB:638802
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

# 王榮槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮槐 | accepted |
| bio.summary | 王榮槐，清人物。籍贯平越直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 638802） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮槐（CBDB 638802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638802&o=json)
