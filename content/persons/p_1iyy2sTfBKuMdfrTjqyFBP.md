---
schema: wang-person/v1
id: p_1iyy2sTfBKuMdfrTjqyFBP
status: active
merged_into: null
display_name: 王堯卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uYYSz4LogTCHwNr6HYbvaw
        subject_person_id: p_1iyy2sTfBKuMdfrTjqyFBP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TL4LUswF1eqC8Tj8wFK4XK
          claim_id: c_uYYSz4LogTCHwNr6HYbvaw
          source_id: s_oHkyzFQnF5zvswhyBK681W
          stance: supports
          locator: CBDB:273833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273833）
          source: &a1
            id: s_oHkyzFQnF5zvswhyBK681W
            source_type: api_record
            title: 中国历代人物传记资料库：王堯卿（CBDB 273833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273833&o=json
            external_identifier: CBDB:273833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZV3gxp6inNLWFqToPaDZT5
        subject_person_id: p_1iyy2sTfBKuMdfrTjqyFBP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯卿，明人物。弘治十八年進士，籍贯定興。（中国历代人物传记资料库 CBDB 273833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xsEQjpT9Cxbb48Ke22XYLu
          claim_id: c_ZV3gxp6inNLWFqToPaDZT5
          source_id: s_oHkyzFQnF5zvswhyBK681W
          stance: supports
          locator: CBDB:273833
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

# 王堯卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯卿 | accepted |
| bio.summary | 王堯卿，明人物。弘治十八年進士，籍贯定興。（中国历代人物传记资料库 CBDB 273833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯卿（CBDB 273833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273833&o=json)
