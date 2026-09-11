---
schema: wang-person/v1
id: p_HcqVKZ9Lzy1qe9z3qqmyHv
status: active
merged_into: null
display_name: 王之鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kGkVY3BsEFM22c5Zdw22R2
        subject_person_id: p_HcqVKZ9Lzy1qe9z3qqmyHv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JgLC2vAxQJsH5REsmoFc6g
          claim_id: c_kGkVY3BsEFM22c5Zdw22R2
          source_id: s_4T56rPErExbTgyk6J2tkDi
          stance: supports
          locator: CBDB:64616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（64616）
          source: &a1
            id: s_4T56rPErExbTgyk6J2tkDi
            source_type: api_record
            title: 中国历代人物传记资料库：王之鼎（CBDB 64616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64616&o=json
            external_identifier: CBDB:64616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_81yhkq85cCN4edcmdzfQvZ
        subject_person_id: p_HcqVKZ9Lzy1qe9z3qqmyHv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1631年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pbM2CuzPhK9itVd9iNyEWa
          claim_id: c_81yhkq85cCN4edcmdzfQvZ
          source_id: s_4T56rPErExbTgyk6J2tkDi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dLgnpBiVoaMEkYy9vEE1gC
        subject_person_id: p_HcqVKZ9Lzy1qe9z3qqmyHv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v3v6PBpV7GE5dzJ7KoMLh8
          claim_id: c_dLgnpBiVoaMEkYy9vEE1gC
          source_id: s_4T56rPErExbTgyk6J2tkDi
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
        id: c_jH1iADiVDv5VCCg34bitWM
        subject_person_id: p_HcqVKZ9Lzy1qe9z3qqmyHv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鼎（1631年—1680年），清人物。籍贯榆林衛，曾任將軍銜、旗漢軍副都統、鎮海將軍。（中国历代人物传记资料库 CBDB 64616）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OzCNFSLgnJmMoQJyIX2wuF
          claim_id: c_jH1iADiVDv5VCCg34bitWM
          source_id: s_4T56rPErExbTgyk6J2tkDi
          stance: supports
          locator: CBDB:64616
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

# 王之鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鼎 | accepted |
| birth.date | 1631年 | accepted |
| death.date | 1680年 | accepted |
| bio.summary | 王之鼎（1631年—1680年），清人物。籍贯榆林衛，曾任將軍銜、旗漢軍副都統、鎮海將軍。（中国历代人物传记资料库 CBDB 64616） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之鼎（CBDB 64616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64616&o=json)
