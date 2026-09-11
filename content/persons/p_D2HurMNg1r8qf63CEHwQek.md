---
schema: wang-person/v1
id: p_D2HurMNg1r8qf63CEHwQek
status: active
merged_into: null
display_name: 王時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fR188y76D79EHXsLW6aQzu
        subject_person_id: p_D2HurMNg1r8qf63CEHwQek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SGdszt6jjsjscFrbg75hME
          claim_id: c_fR188y76D79EHXsLW6aQzu
          source_id: s_rtC1bUB8aFKTGguVB8U2GQ
          stance: supports
          locator: CBDB:262454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262454）
          source: &a1
            id: s_rtC1bUB8aFKTGguVB8U2GQ
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 262454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json
            external_identifier: CBDB:262454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJU3HsbSDTAjTjScFiQyxv
        subject_person_id: p_D2HurMNg1r8qf63CEHwQek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262454）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1V6yfcjkNqnMNGm_D-E6x8
          claim_id: c_AJU3HsbSDTAjTjScFiQyxv
          source_id: s_rtC1bUB8aFKTGguVB8U2GQ
          stance: supports
          locator: CBDB:262454
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

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | 王時，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 262454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json)
