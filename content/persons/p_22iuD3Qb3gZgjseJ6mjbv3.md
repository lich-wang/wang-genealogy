---
schema: wang-person/v1
id: p_22iuD3Qb3gZgjseJ6mjbv3
status: active
merged_into: null
display_name: 王紹衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_58yo5WcUuD7KHBp5tXodFD
        subject_person_id: p_22iuD3Qb3gZgjseJ6mjbv3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y2gEm3SWTnVQAoAk5pezad
          claim_id: c_58yo5WcUuD7KHBp5tXodFD
          source_id: s_NXGjyz29yDmJPEF8LTesjq
          stance: supports
          locator: CBDB:639778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639778）
          source: &a1
            id: s_NXGjyz29yDmJPEF8LTesjq
            source_type: api_record
            title: 中国历代人物传记资料库：王紹衡（CBDB 639778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639778&o=json
            external_identifier: CBDB:639778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TA8uJdj25YDDKoqdk7METf
        subject_person_id: p_22iuD3Qb3gZgjseJ6mjbv3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹衡，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UTI_9tYOTWYOwsukv5pbgT
          claim_id: c_TA8uJdj25YDDKoqdk7METf
          source_id: s_NXGjyz29yDmJPEF8LTesjq
          stance: supports
          locator: CBDB:639778
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

# 王紹衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹衡 | accepted |
| bio.summary | 王紹衡，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹衡（CBDB 639778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639778&o=json)
