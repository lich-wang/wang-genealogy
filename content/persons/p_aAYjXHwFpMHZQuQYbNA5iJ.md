---
schema: wang-person/v1
id: p_aAYjXHwFpMHZQuQYbNA5iJ
status: active
merged_into: null
display_name: 王紹謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bEZ76EkKhxvN6JdAnp2SvR
        subject_person_id: p_aAYjXHwFpMHZQuQYbNA5iJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vLj7g4UcrMTyXcPkQXnDYh
          claim_id: c_bEZ76EkKhxvN6JdAnp2SvR
          source_id: s_56fbpwjHwKJXETKf2RFxVV
          stance: supports
          locator: CBDB:639780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639780）
          source: &a1
            id: s_56fbpwjHwKJXETKf2RFxVV
            source_type: api_record
            title: 中国历代人物传记资料库：王紹謙（CBDB 639780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639780&o=json
            external_identifier: CBDB:639780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kv49CQ94MccdcPvKGwhmxZ
        subject_person_id: p_aAYjXHwFpMHZQuQYbNA5iJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹謙，清人物。籍贯黎城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nohrsCxQRcLN01TuUvY8Fn
          claim_id: c_Kv49CQ94MccdcPvKGwhmxZ
          source_id: s_56fbpwjHwKJXETKf2RFxVV
          stance: supports
          locator: CBDB:639780
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

# 王紹謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹謙 | accepted |
| bio.summary | 王紹謙，清人物。籍贯黎城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹謙（CBDB 639780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639780&o=json)
