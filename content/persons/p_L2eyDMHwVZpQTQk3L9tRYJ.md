---
schema: wang-person/v1
id: p_L2eyDMHwVZpQTQk3L9tRYJ
status: active
merged_into: null
display_name: 王致中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UuADFJhtPpYTfs4QkLg7by
        subject_person_id: p_L2eyDMHwVZpQTQk3L9tRYJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UPSqbZbDWhJLeWRXGRiHHD
          claim_id: c_UuADFJhtPpYTfs4QkLg7by
          source_id: s_r7SH1q6LrCF39HeTquFjVm
          stance: supports
          locator: CBDB:547334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547334）
          source: &a1
            id: s_r7SH1q6LrCF39HeTquFjVm
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 547334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547334&o=json
            external_identifier: CBDB:547334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZsFUmxibt861dy3mfADvC1
        subject_person_id: p_L2eyDMHwVZpQTQk3L9tRYJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 547334）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KOmEUjasjK9qUJ2o4FHosn
          claim_id: c_ZsFUmxibt861dy3mfADvC1
          source_id: s_r7SH1q6LrCF39HeTquFjVm
          stance: supports
          locator: CBDB:547334
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

# 王致中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致中 | accepted |
| bio.summary | 王致中，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 547334） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致中（CBDB 547334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547334&o=json)
