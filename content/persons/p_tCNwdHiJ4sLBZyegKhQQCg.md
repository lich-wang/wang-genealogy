---
schema: wang-person/v1
id: p_tCNwdHiJ4sLBZyegKhQQCg
status: active
merged_into: null
display_name: 王春煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_51mCCnvbxHdfTXRUHTAts1
        subject_person_id: p_tCNwdHiJ4sLBZyegKhQQCg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Boru7JzcR7h5GRbLEigRvj
          claim_id: c_51mCCnvbxHdfTXRUHTAts1
          source_id: s_8cNxvFkTQJARjEfGauRH8C
          stance: supports
          locator: CBDB:343355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343355）
          source: &a1
            id: s_8cNxvFkTQJARjEfGauRH8C
            source_type: api_record
            title: 中国历代人物传记资料库：王春煦（CBDB 343355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343355&o=json
            external_identifier: CBDB:343355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WHgYCdKPAM71ADDYSb4qru
        subject_person_id: p_tCNwdHiJ4sLBZyegKhQQCg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春煦，清人物。明清進士進士，籍贯婁縣，入仕進士，曾任編修、同考官、御史。（中国历代人物传记资料库 CBDB 343355）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_539nAsQ7rBXQO6FhDzOnix
          claim_id: c_WHgYCdKPAM71ADDYSb4qru
          source_id: s_8cNxvFkTQJARjEfGauRH8C
          stance: supports
          locator: CBDB:343355
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

# 王春煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春煦 | accepted |
| bio.summary | 王春煦，清人物。明清進士進士，籍贯婁縣，入仕進士，曾任編修、同考官、御史。（中国历代人物传记资料库 CBDB 343355） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春煦（CBDB 343355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343355&o=json)
