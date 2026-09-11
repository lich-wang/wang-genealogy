---
schema: wang-person/v1
id: p_bKawPprtDf73EW6Js5T441
status: active
merged_into: null
display_name: 王廷魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MpJDURVF5KCpC91bEhYaKv
        subject_person_id: p_bKawPprtDf73EW6Js5T441
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wUPJgKsDAZSywHwCQLiEy6
          claim_id: c_MpJDURVF5KCpC91bEhYaKv
          source_id: s_bfKM8EmywwZ9Hy98YtUfGL
          stance: supports
          locator: CBDB:637575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637575）
          source: &a1
            id: s_bfKM8EmywwZ9Hy98YtUfGL
            source_type: api_record
            title: 中国历代人物传记资料库：王廷魁（CBDB 637575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637575&o=json
            external_identifier: CBDB:637575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Baq9kHPyTk88i2FUoYBgnS
        subject_person_id: p_bKawPprtDf73EW6Js5T441
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷魁，清人物。籍贯孟津，入仕縣學附生，曾任知縣、復設訓導。（中国历代人物传记资料库 CBDB 637575）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8ttLddstbCTTTRoTcJZ-l4
          claim_id: c_Baq9kHPyTk88i2FUoYBgnS
          source_id: s_bfKM8EmywwZ9Hy98YtUfGL
          stance: supports
          locator: CBDB:637575
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

# 王廷魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷魁 | accepted |
| bio.summary | 王廷魁，清人物。籍贯孟津，入仕縣學附生，曾任知縣、復設訓導。（中国历代人物传记资料库 CBDB 637575） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷魁（CBDB 637575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637575&o=json)
