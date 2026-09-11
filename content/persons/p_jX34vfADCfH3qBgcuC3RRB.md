---
schema: wang-person/v1
id: p_jX34vfADCfH3qBgcuC3RRB
status: active
merged_into: null
display_name: 王承敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wfW7ziLajshJxYEZAfBPdp
        subject_person_id: p_jX34vfADCfH3qBgcuC3RRB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJdF7W1a3u4NmNHbFZoGF6
          claim_id: c_wfW7ziLajshJxYEZAfBPdp
          source_id: s_GA98pKtYXffNxn7jLSx6AD
          stance: supports
          locator: CBDB:638081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638081）
          source: &a1
            id: s_GA98pKtYXffNxn7jLSx6AD
            source_type: api_record
            title: 中国历代人物传记资料库：王承敬（CBDB 638081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638081&o=json
            external_identifier: CBDB:638081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aKGXipSqTDKG1XfhtM69U4
        subject_person_id: p_jX34vfADCfH3qBgcuC3RRB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承敬，清人物。籍贯慈溪，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x7F96vxwroQF4gC_8avFM0
          claim_id: c_aKGXipSqTDKG1XfhtM69U4
          source_id: s_GA98pKtYXffNxn7jLSx6AD
          stance: supports
          locator: CBDB:638081
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

# 王承敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承敬 | accepted |
| bio.summary | 王承敬，清人物。籍贯慈溪，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承敬（CBDB 638081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638081&o=json)
