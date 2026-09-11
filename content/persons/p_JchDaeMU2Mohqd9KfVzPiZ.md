---
schema: wang-person/v1
id: p_JchDaeMU2Mohqd9KfVzPiZ
status: active
merged_into: null
display_name: 王餘慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NikDNNWc3gPPMTt6iD5T2b
        subject_person_id: p_JchDaeMU2Mohqd9KfVzPiZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Vffk175SmJ6gkwRiHLCp3
          claim_id: c_NikDNNWc3gPPMTt6iD5T2b
          source_id: s_PtLYCLexLXmU9YNiogFMx4
          stance: supports
          locator: CBDB:38344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38344）
          source: &a1
            id: s_PtLYCLexLXmU9YNiogFMx4
            source_type: api_record
            title: 中国历代人物传记资料库：王餘慶（CBDB 38344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38344&o=json
            external_identifier: CBDB:38344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2qPmBjnLa2tsAAPkfFyire
        subject_person_id: p_JchDaeMU2Mohqd9KfVzPiZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶，宋人物。曾任右侍禁、太子諸率府副率。（中国历代人物传记资料库 CBDB 38344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oYmHndx453CAYT-yg4Yt3h
          claim_id: c_2qPmBjnLa2tsAAPkfFyire
          source_id: s_PtLYCLexLXmU9YNiogFMx4
          stance: supports
          locator: CBDB:38344
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

# 王餘慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘慶 | accepted |
| bio.summary | 王餘慶，宋人物。曾任右侍禁、太子諸率府副率。（中国历代人物传记资料库 CBDB 38344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王餘慶（CBDB 38344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38344&o=json)
