---
schema: wang-person/v1
id: p_ueKoJJ48nCWc4ufboAsnUb
status: active
merged_into: null
display_name: 王延年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_txdWJJLQbqLcJ46oGuYiXF
        subject_person_id: p_ueKoJJ48nCWc4ufboAsnUb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gq1tFc44o8sjKo8rvFBqFK
          claim_id: c_txdWJJLQbqLcJ46oGuYiXF
          source_id: s_86J4RwhaMGJgmwSatniPRd
          stance: supports
          locator: CBDB:341958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341958）
          source: &a1
            id: s_86J4RwhaMGJgmwSatniPRd
            source_type: api_record
            title: 中国历代人物传记资料库：王延年（CBDB 341958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341958&o=json
            external_identifier: CBDB:341958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CFkXmW6TyPBkJFxYKby4Ce
        subject_person_id: p_ueKoJJ48nCWc4ufboAsnUb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年，清人物。明清進士進士，籍贯濰縣，入仕進士。（中国历代人物传记资料库 CBDB 341958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3D4x6C3q1F7N1CSIjili_u
          claim_id: c_CFkXmW6TyPBkJFxYKby4Ce
          source_id: s_86J4RwhaMGJgmwSatniPRd
          stance: supports
          locator: CBDB:341958
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

# 王延年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延年 | accepted |
| bio.summary | 王延年，清人物。明清進士進士，籍贯濰縣，入仕進士。（中国历代人物传记资料库 CBDB 341958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延年（CBDB 341958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341958&o=json)
