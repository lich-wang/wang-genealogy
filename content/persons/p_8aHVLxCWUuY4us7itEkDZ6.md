---
schema: wang-person/v1
id: p_8aHVLxCWUuY4us7itEkDZ6
status: active
merged_into: null
display_name: 王緯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c76SvvXZCbLLs8gfVCVLuH
        subject_person_id: p_8aHVLxCWUuY4us7itEkDZ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7xJDkfPQr8sAPqzV1DRcuL
          claim_id: c_c76SvvXZCbLLs8gfVCVLuH
          source_id: s_Co6toTzn1qMLe8sLD7S3F6
          stance: supports
          locator: CBDB:261827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261827）
          source: &a1
            id: s_Co6toTzn1qMLe8sLD7S3F6
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 261827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261827&o=json
            external_identifier: CBDB:261827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S9342bWY6cDVqhUUmco5hX
        subject_person_id: p_8aHVLxCWUuY4us7itEkDZ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6v7np4fkZDw5BA_ZbBCsiF
          claim_id: c_S9342bWY6cDVqhUUmco5hX
          source_id: s_Co6toTzn1qMLe8sLD7S3F6
          stance: supports
          locator: CBDB:261827
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

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| bio.summary | 王緯，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緯（CBDB 261827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261827&o=json)
