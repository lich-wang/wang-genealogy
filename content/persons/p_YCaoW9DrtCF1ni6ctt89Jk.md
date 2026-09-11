---
schema: wang-person/v1
id: p_YCaoW9DrtCF1ni6ctt89Jk
status: active
merged_into: null
display_name: 王庶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L1asvLw8aGPLYJM5NfuTfv
        subject_person_id: p_YCaoW9DrtCF1ni6ctt89Jk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4vHP9Wr2qouRPriMyZ32MM
          claim_id: c_L1asvLw8aGPLYJM5NfuTfv
          source_id: s_tM6bNPsCM1A6gZ8Dh8tbuM
          stance: supports
          locator: CBDB:464052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464052）
          source: &a1
            id: s_tM6bNPsCM1A6gZ8Dh8tbuM
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 464052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464052&o=json
            external_identifier: CBDB:464052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qVgfUSah3kd4Ysv21QRsf
        subject_person_id: p_YCaoW9DrtCF1ni6ctt89Jk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶，宋人物。曾任安撫使。（中国历代人物传记资料库 CBDB 464052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wal4I9Ak99DfjMW9eX13WC
          claim_id: c_3qVgfUSah3kd4Ysv21QRsf
          source_id: s_tM6bNPsCM1A6gZ8Dh8tbuM
          stance: supports
          locator: CBDB:464052
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

# 王庶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庶 | accepted |
| bio.summary | 王庶，宋人物。曾任安撫使。（中国历代人物传记资料库 CBDB 464052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庶（CBDB 464052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464052&o=json)
