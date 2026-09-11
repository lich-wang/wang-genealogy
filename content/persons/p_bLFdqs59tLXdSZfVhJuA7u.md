---
schema: wang-person/v1
id: p_bLFdqs59tLXdSZfVhJuA7u
status: active
merged_into: null
display_name: 王文浦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_42FgT9XntWddgjvRsmDzPZ
        subject_person_id: p_bLFdqs59tLXdSZfVhJuA7u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文浦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_apaA6Samync1u4CGPB2XoB
          claim_id: c_42FgT9XntWddgjvRsmDzPZ
          source_id: s_4LeYyhqfYhbSNNPdmWPaT4
          stance: supports
          locator: CBDB:638240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638240）
          source: &a1
            id: s_4LeYyhqfYhbSNNPdmWPaT4
            source_type: api_record
            title: 中国历代人物传记资料库：王文浦（CBDB 638240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638240&o=json
            external_identifier: CBDB:638240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2gPheohagReu5m9o5dv31t
        subject_person_id: p_bLFdqs59tLXdSZfVhJuA7u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文浦，清人物。籍贯吳縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638240）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vygP7B3tqWWD9v6NDbAu9Q
          claim_id: c_2gPheohagReu5m9o5dv31t
          source_id: s_4LeYyhqfYhbSNNPdmWPaT4
          stance: supports
          locator: CBDB:638240
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

# 王文浦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文浦 | accepted |
| bio.summary | 王文浦，清人物。籍贯吳縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638240） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文浦（CBDB 638240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638240&o=json)
