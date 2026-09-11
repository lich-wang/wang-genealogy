---
schema: wang-person/v1
id: p_97L7TBb2QHtb3BrD3e9DUG
status: active
merged_into: null
display_name: 王稼春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QcEHwcByR4Z5N5Un9KpZhw
        subject_person_id: p_97L7TBb2QHtb3BrD3e9DUG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稼春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5rr7Atq7E7akww1GEu5wCB
          claim_id: c_QcEHwcByR4Z5N5Un9KpZhw
          source_id: s_oA1MHy4Pp6GDxBaguUiXoM
          stance: supports
          locator: CBDB:639679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639679）
          source: &a1
            id: s_oA1MHy4Pp6GDxBaguUiXoM
            source_type: api_record
            title: 中国历代人物传记资料库：王稼春（CBDB 639679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639679&o=json
            external_identifier: CBDB:639679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1FuYToMocHn2J45GC3SpDh
        subject_person_id: p_97L7TBb2QHtb3BrD3e9DUG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稼春，清人物。籍贯湘鄉，入仕軍功補授(軍功)，曾任都司。（中国历代人物传记资料库 CBDB 639679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mFM7wPx5dg_4COU0j20Uga
          claim_id: c_1FuYToMocHn2J45GC3SpDh
          source_id: s_oA1MHy4Pp6GDxBaguUiXoM
          stance: supports
          locator: CBDB:639679
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

# 王稼春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稼春 | accepted |
| bio.summary | 王稼春，清人物。籍贯湘鄉，入仕軍功補授(軍功)，曾任都司。（中国历代人物传记资料库 CBDB 639679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王稼春（CBDB 639679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639679&o=json)
