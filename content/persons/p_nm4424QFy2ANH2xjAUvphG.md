---
schema: wang-person/v1
id: p_nm4424QFy2ANH2xjAUvphG
status: active
merged_into: null
display_name: 王國英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRwtK7qkMn3nNQRLCQd2HF
        subject_person_id: p_nm4424QFy2ANH2xjAUvphG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Ew4CSX4SJsXJzBJhmkXQx
          claim_id: c_GRwtK7qkMn3nNQRLCQd2HF
          source_id: s_75n5wKgmdRxfsGey4mWeif
          stance: supports
          locator: CBDB:69364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69364）
          source: &a1
            id: s_75n5wKgmdRxfsGey4mWeif
            source_type: api_record
            title: 中国历代人物传记资料库：王國英（CBDB 69364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69364&o=json
            external_identifier: CBDB:69364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ssLpyAAtMA4ULEt6sFHYZb
        subject_person_id: p_nm4424QFy2ANH2xjAUvphG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1772年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r81CMdStj4rVFDCzMjhccZ
          claim_id: c_ssLpyAAtMA4ULEt6sFHYZb
          source_id: s_75n5wKgmdRxfsGey4mWeif
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1JaD71RhD4xS497wmLR81C
        subject_person_id: p_nm4424QFy2ANH2xjAUvphG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國英（卒于1772年），清人物。籍贯成都，入仕優貢生，曾任典史、知府、知縣。（中国历代人物传记资料库 CBDB 69364）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R_cN4fF8V9tJ15Dv_6tg49
          claim_id: c_1JaD71RhD4xS497wmLR81C
          source_id: s_75n5wKgmdRxfsGey4mWeif
          stance: supports
          locator: CBDB:69364
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

# 王國英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國英 | accepted |
| death.date | 1772年 | accepted |
| bio.summary | 王國英（卒于1772年），清人物。籍贯成都，入仕優貢生，曾任典史、知府、知縣。（中国历代人物传记资料库 CBDB 69364） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國英（CBDB 69364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69364&o=json)
