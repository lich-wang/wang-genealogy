---
schema: wang-person/v1
id: p_UZaJrSCB14421jWm2bfu9Q
status: active
merged_into: null
display_name: 王材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X9mVkjHCpoSDo9Y2VvPVnT
        subject_person_id: p_UZaJrSCB14421jWm2bfu9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2v59i3qrPqtDdGwBBfCeyB
          claim_id: c_X9mVkjHCpoSDo9Y2VvPVnT
          source_id: s_d8VztgJzB9BEHZRp8uziG9
          stance: supports
          locator: CBDB:291532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291532）
          source: &a1
            id: s_d8VztgJzB9BEHZRp8uziG9
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 291532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json
            external_identifier: CBDB:291532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rp3D1mU6cSDnMnTuhmH4ik
        subject_person_id: p_UZaJrSCB14421jWm2bfu9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材，明人物。嘉靖十一年進士，籍贯錢塘。（中国历代人物传记资料库 CBDB 291532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uxDBl9J6f9T-Jxmymr41zu
          claim_id: c_rp3D1mU6cSDnMnTuhmH4ik
          source_id: s_d8VztgJzB9BEHZRp8uziG9
          stance: supports
          locator: CBDB:291532
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

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| bio.summary | 王材，明人物。嘉靖十一年進士，籍贯錢塘。（中国历代人物传记资料库 CBDB 291532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 291532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json)
