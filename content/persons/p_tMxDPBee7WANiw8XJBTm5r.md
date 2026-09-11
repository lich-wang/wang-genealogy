---
schema: wang-person/v1
id: p_tMxDPBee7WANiw8XJBTm5r
status: active
merged_into: null
display_name: 王懷清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jCfWaS8Mduk3ZHgMn89DT
        subject_person_id: p_tMxDPBee7WANiw8XJBTm5r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4dbZ8sjkLVDsVLBuh55hyx
          claim_id: c_2jCfWaS8Mduk3ZHgMn89DT
          source_id: s_bH7iqT6ZUvzSKhqx2REWyP
          stance: supports
          locator: CBDB:71705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71705）
          source: &a1
            id: s_bH7iqT6ZUvzSKhqx2REWyP
            source_type: api_record
            title: 中国历代人物传记资料库：王懷清（CBDB 71705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71705&o=json
            external_identifier: CBDB:71705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QX7CTjDsH5d2L8yLcUhjut
        subject_person_id: p_tMxDPBee7WANiw8XJBTm5r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RTHKaDUjwWVcBkC5w9NJK3
          claim_id: c_QX7CTjDsH5d2L8yLcUhjut
          source_id: s_bH7iqT6ZUvzSKhqx2REWyP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ASThAyXnsTVPNGvnTZHps1
        subject_person_id: p_tMxDPBee7WANiw8XJBTm5r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷清（卒于1861年），清人物。籍贯定遠，入仕監生，曾任知縣、州判。（中国历代人物传记资料库 CBDB 71705）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ILgJaysqQ99gMUH9xo2a-b
          claim_id: c_ASThAyXnsTVPNGvnTZHps1
          source_id: s_bH7iqT6ZUvzSKhqx2REWyP
          stance: supports
          locator: CBDB:71705
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

# 王懷清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷清 | accepted |
| death.date | 1861年 | accepted |
| bio.summary | 王懷清（卒于1861年），清人物。籍贯定遠，入仕監生，曾任知縣、州判。（中国历代人物传记资料库 CBDB 71705） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷清（CBDB 71705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71705&o=json)
