---
schema: wang-person/v1
id: p_uZgKpKHhtPUZVxo3tt1NG1
status: active
merged_into: null
display_name: 王靜一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5aqiSGezcDG4SQbXwo9VPY
        subject_person_id: p_uZgKpKHhtPUZVxo3tt1NG1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_96NK8RSBdwFMq1Lmu4BAR8
          claim_id: c_5aqiSGezcDG4SQbXwo9VPY
          source_id: s_1DNhshGEtAB6EznVxFGKFD
          stance: supports
          locator: CBDB:640853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640853）
          source: &a1
            id: s_1DNhshGEtAB6EznVxFGKFD
            source_type: api_record
            title: 中国历代人物传记资料库：王靜一（CBDB 640853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640853&o=json
            external_identifier: CBDB:640853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4kdNCjufWrLKL2pGcUT1df
        subject_person_id: p_uZgKpKHhtPUZVxo3tt1NG1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜一，清人物。籍贯綏陽，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 640853）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4_K4aaMnz7Q6JQWfAOT3Mg
          claim_id: c_4kdNCjufWrLKL2pGcUT1df
          source_id: s_1DNhshGEtAB6EznVxFGKFD
          stance: supports
          locator: CBDB:640853
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

# 王靜一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靜一 | accepted |
| bio.summary | 王靜一，清人物。籍贯綏陽，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 640853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靜一（CBDB 640853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640853&o=json)
