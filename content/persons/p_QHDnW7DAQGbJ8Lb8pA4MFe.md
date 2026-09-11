---
schema: wang-person/v1
id: p_QHDnW7DAQGbJ8Lb8pA4MFe
status: active
merged_into: null
display_name: 王顯揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L7D13FnLyHXbzjawiR1qrY
        subject_person_id: p_QHDnW7DAQGbJ8Lb8pA4MFe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TikGF5DAP53Z6Yj9PhfCk
          claim_id: c_L7D13FnLyHXbzjawiR1qrY
          source_id: s_MEv6W33ck6124u1i6x6Brs
          stance: supports
          locator: CBDB:640877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640877）
          source: &a1
            id: s_MEv6W33ck6124u1i6x6Brs
            source_type: api_record
            title: 中国历代人物传记资料库：王顯揚（CBDB 640877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640877&o=json
            external_identifier: CBDB:640877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GB2q7CehFuGcw9dBNWxAFP
        subject_person_id: p_QHDnW7DAQGbJ8Lb8pA4MFe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯揚，清人物。籍贯遵義，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 640877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XqtKCgihDtbCORle-4JgPa
          claim_id: c_GB2q7CehFuGcw9dBNWxAFP
          source_id: s_MEv6W33ck6124u1i6x6Brs
          stance: supports
          locator: CBDB:640877
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

# 王顯揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯揚 | accepted |
| bio.summary | 王顯揚，清人物。籍贯遵義，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 640877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯揚（CBDB 640877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640877&o=json)
