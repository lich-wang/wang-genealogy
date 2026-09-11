---
schema: wang-person/v1
id: p_rpaRuHSmRUCSL2gLiB3QJN
status: active
merged_into: null
display_name: 王學海
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JK9xvucV4juyc5P98tcnKx
        subject_person_id: p_rpaRuHSmRUCSL2gLiB3QJN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5tvms4Mp6hK22oJTJLbn59
          claim_id: c_JK9xvucV4juyc5P98tcnKx
          source_id: s_dnv3hJbX8KhSQQM5WA1iQY
          stance: supports
          locator: CBDB:637042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637042）
          source: &a1
            id: s_dnv3hJbX8KhSQQM5WA1iQY
            source_type: api_record
            title: 中国历代人物传记资料库：王學海（CBDB 637042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637042&o=json
            external_identifier: CBDB:637042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5X6MMa25iFb8JqpoZFS9hm
        subject_person_id: p_rpaRuHSmRUCSL2gLiB3QJN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學海，清人物。籍贯鳳陽，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637042）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NWutYbr9sxPaDW_oJ3VeHW
          claim_id: c_5X6MMa25iFb8JqpoZFS9hm
          source_id: s_dnv3hJbX8KhSQQM5WA1iQY
          stance: supports
          locator: CBDB:637042
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

# 王學海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學海 | accepted |
| bio.summary | 王學海，清人物。籍贯鳳陽，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學海（CBDB 637042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637042&o=json)
