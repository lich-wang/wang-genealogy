---
schema: wang-person/v1
id: p_56BMcTwHdA112DjDwXZ6X9
status: active
merged_into: null
display_name: 王九牧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mxt9A8AKRJ4APGMaWL1cQ4
        subject_person_id: p_56BMcTwHdA112DjDwXZ6X9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hPa9oMBNZkdGuncGZr1qcJ
          claim_id: c_mxt9A8AKRJ4APGMaWL1cQ4
          source_id: s_tCVsS8tiXBdxhPCroTTC6i
          stance: supports
          locator: CBDB:342893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342893）
          source: &a1
            id: s_tCVsS8tiXBdxhPCroTTC6i
            source_type: api_record
            title: 中国历代人物传记资料库：王九牧（CBDB 342893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342893&o=json
            external_identifier: CBDB:342893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMaftGc5494xFCACXn9Ntm
        subject_person_id: p_56BMcTwHdA112DjDwXZ6X9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九牧，明人物。明清進士進士，籍贯醴泉，入仕進士。（中国历代人物传记资料库 CBDB 342893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RfHa8Eyo6veRJ1C4eTDORw
          claim_id: c_SMaftGc5494xFCACXn9Ntm
          source_id: s_tCVsS8tiXBdxhPCroTTC6i
          stance: supports
          locator: CBDB:342893
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

# 王九牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九牧 | accepted |
| bio.summary | 王九牧，明人物。明清進士進士，籍贯醴泉，入仕進士。（中国历代人物传记资料库 CBDB 342893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九牧（CBDB 342893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342893&o=json)
