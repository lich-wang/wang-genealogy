---
schema: wang-person/v1
id: p_ATT7KfmJN5jo5itxcH6T9U
status: active
merged_into: null
display_name: 王樟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hRAmxJa3PG4QeAFXBaYyBF
        subject_person_id: p_ATT7KfmJN5jo5itxcH6T9U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HtQ8Rh8BfChWKD8eJ4WJPn
          claim_id: c_hRAmxJa3PG4QeAFXBaYyBF
          source_id: s_mWtPJ4HgGWbT4hUgo6F9fn
          stance: supports
          locator: CBDB:250840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250840）
          source: &a1
            id: s_mWtPJ4HgGWbT4hUgo6F9fn
            source_type: api_record
            title: 中国历代人物传记资料库：王樟（CBDB 250840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250840&o=json
            external_identifier: CBDB:250840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7aDEmnpCVeQBFCJ5ke5GVY
        subject_person_id: p_ATT7KfmJN5jo5itxcH6T9U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樟，明人物。成化十四年進士，籍贯虹縣。（中国历代人物传记资料库 CBDB 250840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Jhwh1zTgDIqQ-m80ixHbt
          claim_id: c_7aDEmnpCVeQBFCJ5ke5GVY
          source_id: s_mWtPJ4HgGWbT4hUgo6F9fn
          stance: supports
          locator: CBDB:250840
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

# 王樟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樟 | accepted |
| bio.summary | 王樟，明人物。成化十四年進士，籍贯虹縣。（中国历代人物传记资料库 CBDB 250840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樟（CBDB 250840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250840&o=json)
