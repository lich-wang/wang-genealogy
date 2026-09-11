---
schema: wang-person/v1
id: p_PQxnXnMpqc5renDBdYkS9X
status: active
merged_into: null
display_name: 王履謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Son7yjqzvujWbeAAKCVrAC
        subject_person_id: p_PQxnXnMpqc5renDBdYkS9X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VkGk2iHG4BJf3kRpcH644g
          claim_id: c_Son7yjqzvujWbeAAKCVrAC
          source_id: s_cgka58WmkctbPwMN51ZsTJ
          stance: supports
          locator: CBDB:101407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101407）
          source: &a1
            id: s_cgka58WmkctbPwMN51ZsTJ
            source_type: api_record
            title: 中国历代人物传记资料库：王履謙（CBDB 101407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101407&o=json
            external_identifier: CBDB:101407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tjLTLF4gzV43CwaUUKKJpQ
        subject_person_id: p_PQxnXnMpqc5renDBdYkS9X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履謙，元人物。籍贯平定州，曾任監察御史、吏部員外郎、吏部主事。（中国历代人物传记资料库 CBDB 101407）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8KtzbkIdPUKeN3LeWgbKNJ
          claim_id: c_tjLTLF4gzV43CwaUUKKJpQ
          source_id: s_cgka58WmkctbPwMN51ZsTJ
          stance: supports
          locator: CBDB:101407
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

# 王履謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履謙 | accepted |
| bio.summary | 王履謙，元人物。籍贯平定州，曾任監察御史、吏部員外郎、吏部主事。（中国历代人物传记资料库 CBDB 101407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履謙（CBDB 101407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101407&o=json)
