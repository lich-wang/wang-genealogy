---
schema: wang-person/v1
id: p_6vC5VQ5KmTdfDrfLHZ1L6R
status: active
merged_into: null
display_name: 王世聞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BEYPnEZZ6B7HNhEz8cBr1h
        subject_person_id: p_6vC5VQ5KmTdfDrfLHZ1L6R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世聞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNFFNzEPQygQR3ReJF4WXE
          claim_id: c_BEYPnEZZ6B7HNhEz8cBr1h
          source_id: s_6srbWmpSfcf6xH5bjnJA81
          stance: supports
          locator: CBDB:325422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325422）
          source: &a1
            id: s_6srbWmpSfcf6xH5bjnJA81
            source_type: api_record
            title: 中国历代人物传记资料库：王世聞（CBDB 325422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325422&o=json
            external_identifier: CBDB:325422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ahJbaTycNBcLV2k1JLneL
        subject_person_id: p_6vC5VQ5KmTdfDrfLHZ1L6R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世聞，明人物。嘉靖三十八年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 325422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y3HLWCBjrtAlaxrZX4dCwq
          claim_id: c_4ahJbaTycNBcLV2k1JLneL
          source_id: s_6srbWmpSfcf6xH5bjnJA81
          stance: supports
          locator: CBDB:325422
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

# 王世聞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世聞 | accepted |
| bio.summary | 王世聞，明人物。嘉靖三十八年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 325422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世聞（CBDB 325422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325422&o=json)
