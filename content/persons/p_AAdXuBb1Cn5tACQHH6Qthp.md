---
schema: wang-person/v1
id: p_AAdXuBb1Cn5tACQHH6Qthp
status: active
merged_into: null
display_name: 王宣旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6FoJg8D4UZUVTdUBXg9xNs
        subject_person_id: p_AAdXuBb1Cn5tACQHH6Qthp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vHEshwXr6TpYbDHPPQJEmK
          claim_id: c_6FoJg8D4UZUVTdUBXg9xNs
          source_id: s_F8L6a1hAWALMUGbMeGDmw9
          stance: supports
          locator: CBDB:539953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539953）
          source: &a1
            id: s_F8L6a1hAWALMUGbMeGDmw9
            source_type: api_record
            title: 中国历代人物传记资料库：王宣旦（CBDB 539953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539953&o=json
            external_identifier: CBDB:539953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yvvcvGDs8PnfXBh2ubQz7t
        subject_person_id: p_AAdXuBb1Cn5tACQHH6Qthp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣旦，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 539953）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vpEyzTpzko04B2f1vErChq
          claim_id: c_yvvcvGDs8PnfXBh2ubQz7t
          source_id: s_F8L6a1hAWALMUGbMeGDmw9
          stance: supports
          locator: CBDB:539953
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

# 王宣旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣旦 | accepted |
| bio.summary | 王宣旦，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 539953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣旦（CBDB 539953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539953&o=json)
