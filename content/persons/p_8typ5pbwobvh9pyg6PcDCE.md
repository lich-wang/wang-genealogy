---
schema: wang-person/v1
id: p_8typ5pbwobvh9pyg6PcDCE
status: active
merged_into: null
display_name: 王華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a5SQkiRC62iMRLi469xxtG
        subject_person_id: p_8typ5pbwobvh9pyg6PcDCE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pCKwc2HDUug1Qp9qFHgLB8
          claim_id: c_a5SQkiRC62iMRLi469xxtG
          source_id: s_EPdNLfZNGH9YuqWPUor9T1
          stance: supports
          locator: CBDB:640098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640098）
          source: &a1
            id: s_EPdNLfZNGH9YuqWPUor9T1
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 640098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640098&o=json
            external_identifier: CBDB:640098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jFGL7TCLD4wL6PutXhmioH
        subject_person_id: p_8typ5pbwobvh9pyg6PcDCE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 640098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Ba-ckX23GtxF5rHf6n4Di
          claim_id: c_jFGL7TCLD4wL6PutXhmioH
          source_id: s_EPdNLfZNGH9YuqWPUor9T1
          stance: supports
          locator: CBDB:640098
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

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| bio.summary | 王華，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 640098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 640098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640098&o=json)
