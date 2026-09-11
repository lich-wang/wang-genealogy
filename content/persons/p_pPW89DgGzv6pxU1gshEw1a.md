---
schema: wang-person/v1
id: p_pPW89DgGzv6pxU1gshEw1a
status: active
merged_into: null
display_name: 王夢昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TmwZLM2RNML8FBeRPKpNdf
        subject_person_id: p_pPW89DgGzv6pxU1gshEw1a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nH4mr4xxBK9ttPeaTBh7vA
          claim_id: c_TmwZLM2RNML8FBeRPKpNdf
          source_id: s_mr88K1TpviUh2L6Efd3788
          stance: supports
          locator: CBDB:688250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688250）
          source: &a1
            id: s_mr88K1TpviUh2L6Efd3788
            source_type: api_record
            title: 中国历代人物传记资料库：王夢昌（CBDB 688250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688250&o=json
            external_identifier: CBDB:688250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vy78kGxQJtwME3vwQx5yBf
        subject_person_id: p_pPW89DgGzv6pxU1gshEw1a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢昌，宋人物。籍贯長汀，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 688250）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oU050padHvKiI9MfAFDZLb
          claim_id: c_vy78kGxQJtwME3vwQx5yBf
          source_id: s_mr88K1TpviUh2L6Efd3788
          stance: supports
          locator: CBDB:688250
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

# 王夢昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢昌 | accepted |
| bio.summary | 王夢昌，宋人物。籍贯長汀，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 688250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢昌（CBDB 688250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688250&o=json)
