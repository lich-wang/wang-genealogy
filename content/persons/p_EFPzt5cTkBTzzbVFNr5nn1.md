---
schema: wang-person/v1
id: p_EFPzt5cTkBTzzbVFNr5nn1
status: active
merged_into: null
display_name: 王承志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dv6LW2FkDpFQyDF1tKg9TJ
        subject_person_id: p_EFPzt5cTkBTzzbVFNr5nn1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_djQPyQwa9qHuJYsfsYk9KN
          claim_id: c_Dv6LW2FkDpFQyDF1tKg9TJ
          source_id: s_gWYbkeKtMAqBnJM5N9XmuP
          stance: supports
          locator: CBDB:638076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638076）
          source: &a1
            id: s_gWYbkeKtMAqBnJM5N9XmuP
            source_type: api_record
            title: 中国历代人物传记资料库：王承志（CBDB 638076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638076&o=json
            external_identifier: CBDB:638076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kgVCepywyGrW6yEXewSayA
        subject_person_id: p_EFPzt5cTkBTzzbVFNr5nn1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承志，清人物。籍贯商城，入仕鄉貢舉人，曾任典史、知縣。（中国历代人物传记资料库 CBDB 638076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R_MrMK6hskS883_tcuY1N_
          claim_id: c_kgVCepywyGrW6yEXewSayA
          source_id: s_gWYbkeKtMAqBnJM5N9XmuP
          stance: supports
          locator: CBDB:638076
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

# 王承志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承志 | accepted |
| bio.summary | 王承志，清人物。籍贯商城，入仕鄉貢舉人，曾任典史、知縣。（中国历代人物传记资料库 CBDB 638076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承志（CBDB 638076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638076&o=json)
