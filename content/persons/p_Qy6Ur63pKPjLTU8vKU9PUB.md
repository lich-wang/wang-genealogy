---
schema: wang-person/v1
id: p_Qy6Ur63pKPjLTU8vKU9PUB
status: active
merged_into: null
display_name: 王先樹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eqAU9y5nQsgxU7L69HstLt
        subject_person_id: p_Qy6Ur63pKPjLTU8vKU9PUB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先樹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gWJ8wvZJ3jdJctq1x7SP7V
          claim_id: c_eqAU9y5nQsgxU7L69HstLt
          source_id: s_WHu61xkekZhbRYcmzt1Tb2
          stance: supports
          locator: CBDB:636233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636233）
          source: &a1
            id: s_WHu61xkekZhbRYcmzt1Tb2
            source_type: api_record
            title: 中国历代人物传记资料库：王先樹（CBDB 636233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636233&o=json
            external_identifier: CBDB:636233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zUEbpDsEFEro8x8X2W3wBY
        subject_person_id: p_Qy6Ur63pKPjLTU8vKU9PUB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先樹，清人物。籍贯樂會，入仕監生，曾任郎中。（中国历代人物传记资料库 CBDB 636233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_14CWDcnLlHlQ9C89yho_EE
          claim_id: c_zUEbpDsEFEro8x8X2W3wBY
          source_id: s_WHu61xkekZhbRYcmzt1Tb2
          stance: supports
          locator: CBDB:636233
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

# 王先樹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先樹 | accepted |
| bio.summary | 王先樹，清人物。籍贯樂會，入仕監生，曾任郎中。（中国历代人物传记资料库 CBDB 636233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先樹（CBDB 636233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636233&o=json)
