---
schema: wang-person/v1
id: p_DFDnFD9a9ajzL3PdjCwAyP
status: active
merged_into: null
display_name: 王永聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZjswbftEHVYdBxjVi2Hthq
        subject_person_id: p_DFDnFD9a9ajzL3PdjCwAyP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R4EAj79w8NJdY8WEED2EA4
          claim_id: c_ZjswbftEHVYdBxjVi2Hthq
          source_id: s_34sTeiJrgU2ZAzAkpzGCZ8
          stance: supports
          locator: CBDB:638993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638993）
          source: &a1
            id: s_34sTeiJrgU2ZAzAkpzGCZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王永聰（CBDB 638993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638993&o=json
            external_identifier: CBDB:638993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a2FAZvF2ArWsjL5AJdJM3T
        subject_person_id: p_DFDnFD9a9ajzL3PdjCwAyP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永聰，清人物。籍贯湖北省，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 638993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YRGKsnMJHh5KP0_G9trAV2
          claim_id: c_a2FAZvF2ArWsjL5AJdJM3T
          source_id: s_34sTeiJrgU2ZAzAkpzGCZ8
          stance: supports
          locator: CBDB:638993
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

# 王永聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永聰 | accepted |
| bio.summary | 王永聰，清人物。籍贯湖北省，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 638993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永聰（CBDB 638993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638993&o=json)
