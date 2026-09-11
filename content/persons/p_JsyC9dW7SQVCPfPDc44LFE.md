---
schema: wang-person/v1
id: p_JsyC9dW7SQVCPfPDc44LFE
status: active
merged_into: null
display_name: 王名
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jCNFYoEwbUo5b6bGDB7v4Q
        subject_person_id: p_JsyC9dW7SQVCPfPDc44LFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zaFD5hMyiyPLWvdYbgSBRr
          claim_id: c_jCNFYoEwbUo5b6bGDB7v4Q
          source_id: s_1bZVYjmMBqi6i7TPB2HzWV
          stance: supports
          locator: CBDB:636512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636512）
          source: &a1
            id: s_1bZVYjmMBqi6i7TPB2HzWV
            source_type: api_record
            title: 中国历代人物传记资料库：王名（CBDB 636512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636512&o=json
            external_identifier: CBDB:636512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U83L33J3LaGuhTzFB3qFEA
        subject_person_id: p_JsyC9dW7SQVCPfPDc44LFE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636512）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f7G_fb2CFr2EZ6jhooXCg9
          claim_id: c_U83L33J3LaGuhTzFB3qFEA
          source_id: s_1bZVYjmMBqi6i7TPB2HzWV
          stance: supports
          locator: CBDB:636512
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

# 王名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王名 | accepted |
| bio.summary | 王名，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636512） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王名（CBDB 636512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636512&o=json)
