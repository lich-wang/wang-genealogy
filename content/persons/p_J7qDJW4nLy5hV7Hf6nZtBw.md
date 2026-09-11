---
schema: wang-person/v1
id: p_J7qDJW4nLy5hV7Hf6nZtBw
status: active
merged_into: null
display_name: 王象瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FeqpuhHHzeXxsR6S21AE4f
        subject_person_id: p_J7qDJW4nLy5hV7Hf6nZtBw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u1VJ6vGGM82ZXQUX2tQQKw
          claim_id: c_FeqpuhHHzeXxsR6S21AE4f
          source_id: s_S8dcu2JAXp1XhQC3freK5m
          stance: supports
          locator: CBDB:72002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72002）
          source: &a1
            id: s_S8dcu2JAXp1XhQC3freK5m
            source_type: api_record
            title: 中国历代人物传记资料库：王象瑜（CBDB 72002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72002&o=json
            external_identifier: CBDB:72002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ekpq3PkiD9YbjbQJoapkda
        subject_person_id: p_J7qDJW4nLy5hV7Hf6nZtBw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1818年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHzHQk4SPHic7UUSaK5C2C
          claim_id: c_ekpq3PkiD9YbjbQJoapkda
          source_id: s_S8dcu2JAXp1XhQC3freK5m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kSvpajVhdGLHksSTNRKQCL
        subject_person_id: p_J7qDJW4nLy5hV7Hf6nZtBw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象瑜（生于1818年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 72002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uVjX6z6AnURzVn1HiL19ve
          claim_id: c_kSvpajVhdGLHksSTNRKQCL
          source_id: s_S8dcu2JAXp1XhQC3freK5m
          stance: supports
          locator: CBDB:72002
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

# 王象瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象瑜 | accepted |
| birth.date | 1818年 | accepted |
| bio.summary | 王象瑜（生于1818年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 72002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象瑜（CBDB 72002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72002&o=json)
