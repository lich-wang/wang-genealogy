---
schema: wang-person/v1
id: p_Q9KiwFCDjz7GhVaFadDPj6
status: active
merged_into: null
display_name: 王淑章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aHXWAHcAVCGSchY1rHuAXx
        subject_person_id: p_Q9KiwFCDjz7GhVaFadDPj6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_owbaUkX4w9htgW6VHvK2gC
          claim_id: c_aHXWAHcAVCGSchY1rHuAXx
          source_id: s_Gwt8KDumBZqBKsdsPKkc2r
          stance: supports
          locator: CBDB:639116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639116）
          source: &a1
            id: s_Gwt8KDumBZqBKsdsPKkc2r
            source_type: api_record
            title: 中国历代人物传记资料库：王淑章（CBDB 639116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639116&o=json
            external_identifier: CBDB:639116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sc8fikKKY1n1yJdtMS9Nw5
        subject_person_id: p_Q9KiwFCDjz7GhVaFadDPj6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑章，清人物。籍贯寧津，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639116）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__tEAoP3vRzxFgbPZ0delT9
          claim_id: c_sc8fikKKY1n1yJdtMS9Nw5
          source_id: s_Gwt8KDumBZqBKsdsPKkc2r
          stance: supports
          locator: CBDB:639116
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

# 王淑章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑章 | accepted |
| bio.summary | 王淑章，清人物。籍贯寧津，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑章（CBDB 639116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639116&o=json)
