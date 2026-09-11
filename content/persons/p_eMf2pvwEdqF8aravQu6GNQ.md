---
schema: wang-person/v1
id: p_eMf2pvwEdqF8aravQu6GNQ
status: active
merged_into: null
display_name: 王逢祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DL7mdE6JMQqxRnRLXTX7PZ
        subject_person_id: p_eMf2pvwEdqF8aravQu6GNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nEMQRE6UpFwxxk9MNhXZUi
          claim_id: c_DL7mdE6JMQqxRnRLXTX7PZ
          source_id: s_K14G8hsnaZ25xDWaFQBLHq
          stance: supports
          locator: CBDB:640414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640414）
          source: &a1
            id: s_K14G8hsnaZ25xDWaFQBLHq
            source_type: api_record
            title: 中国历代人物传记资料库：王逢祿（CBDB 640414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640414&o=json
            external_identifier: CBDB:640414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qXJm7yPHzXry8eDeXuGdqM
        subject_person_id: p_eMf2pvwEdqF8aravQu6GNQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢祿，清人物。籍贯華州，入仕廩貢生，曾任經歷。（中国历代人物传记资料库 CBDB 640414）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VGKO4fLif3XNh22wnslQ1g
          claim_id: c_qXJm7yPHzXry8eDeXuGdqM
          source_id: s_K14G8hsnaZ25xDWaFQBLHq
          stance: supports
          locator: CBDB:640414
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

# 王逢祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢祿 | accepted |
| bio.summary | 王逢祿，清人物。籍贯華州，入仕廩貢生，曾任經歷。（中国历代人物传记资料库 CBDB 640414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢祿（CBDB 640414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640414&o=json)
