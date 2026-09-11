---
schema: wang-person/v1
id: p_Gc2kpGiqYLwvU8gxU7QHL1
status: active
merged_into: null
display_name: 王一樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zyBNQx1S8ddBXpToY7iheT
        subject_person_id: p_Gc2kpGiqYLwvU8gxU7QHL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMQ8PvZib5j1jHMdZumuW2
          claim_id: c_zyBNQx1S8ddBXpToY7iheT
          source_id: s_cETx3HCdGFyViLc1oE68Ka
          stance: supports
          locator: CBDB:577282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577282）
          source: &a1
            id: s_cETx3HCdGFyViLc1oE68Ka
            source_type: api_record
            title: 中国历代人物传记资料库：王一樞（CBDB 577282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577282&o=json
            external_identifier: CBDB:577282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQZzjTPtaKfkgpixWAqKcr
        subject_person_id: p_Gc2kpGiqYLwvU8gxU7QHL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一樞，明人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 577282）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3hYdiT_QNrkRCnwDNJCXqg
          claim_id: c_TQZzjTPtaKfkgpixWAqKcr
          source_id: s_cETx3HCdGFyViLc1oE68Ka
          stance: supports
          locator: CBDB:577282
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

# 王一樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一樞 | accepted |
| bio.summary | 王一樞，明人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 577282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一樞（CBDB 577282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577282&o=json)
