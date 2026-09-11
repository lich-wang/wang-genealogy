---
schema: wang-person/v1
id: p_AAYmZyTGk6MCh1ih4YynVM
status: active
merged_into: null
display_name: 王立節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FM5pkrabAWDBpgxUmfk83Y
        subject_person_id: p_AAYmZyTGk6MCh1ih4YynVM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvF21u4Ek4SdWKB7SFdT3d
          claim_id: c_FM5pkrabAWDBpgxUmfk83Y
          source_id: s_cTdsYzMGB5UkqKTS4f1zv7
          stance: supports
          locator: CBDB:534640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534640）
          source: &a1
            id: s_cTdsYzMGB5UkqKTS4f1zv7
            source_type: api_record
            title: 中国历代人物传记资料库：王立節（CBDB 534640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534640&o=json
            external_identifier: CBDB:534640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G21Ba3eAXXtnWW181x9KYp
        subject_person_id: p_AAYmZyTGk6MCh1ih4YynVM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立節，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 534640）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zRv-s1sg9R2BVcTKX4z4qh
          claim_id: c_G21Ba3eAXXtnWW181x9KYp
          source_id: s_cTdsYzMGB5UkqKTS4f1zv7
          stance: supports
          locator: CBDB:534640
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

# 王立節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立節 | accepted |
| bio.summary | 王立節，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 534640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立節（CBDB 534640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534640&o=json)
