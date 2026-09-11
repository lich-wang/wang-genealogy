---
schema: wang-person/v1
id: p_ormZQakxXWJeHb3V8EWfyn
status: active
merged_into: null
display_name: 王世榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NZjNjs5d7ikUJPX5c2TK36
        subject_person_id: p_ormZQakxXWJeHb3V8EWfyn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MgcWeaKTWkD6hyxUPEhYQm
          claim_id: c_NZjNjs5d7ikUJPX5c2TK36
          source_id: s_w5HiG4u56vXTEbZWLK52Sg
          stance: supports
          locator: CBDB:635685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635685）
          source: &a1
            id: s_w5HiG4u56vXTEbZWLK52Sg
            source_type: api_record
            title: 中国历代人物传记资料库：王世榮（CBDB 635685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635685&o=json
            external_identifier: CBDB:635685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S37AXHx1eoU3LomCVfkmCD
        subject_person_id: p_ormZQakxXWJeHb3V8EWfyn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世榮，清人物。籍贯長沙，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635685）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0GROBe7CnLg1Y2MFmiGYNQ
          claim_id: c_S37AXHx1eoU3LomCVfkmCD
          source_id: s_w5HiG4u56vXTEbZWLK52Sg
          stance: supports
          locator: CBDB:635685
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

# 王世榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世榮 | accepted |
| bio.summary | 王世榮，清人物。籍贯長沙，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世榮（CBDB 635685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635685&o=json)
