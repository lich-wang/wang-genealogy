---
schema: wang-person/v1
id: p_wpXMCcgaebc24TV1Effv7d
status: active
merged_into: null
display_name: 王鍾靈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uEognJZmnQCQuoGvynghQi
        subject_person_id: p_wpXMCcgaebc24TV1Effv7d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾靈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yHMYzcR4NvaKh3rg7uiEFA
          claim_id: c_uEognJZmnQCQuoGvynghQi
          source_id: s_rc8FNc1YoXZx5AJJ7yPyJp
          stance: supports
          locator: CBDB:71882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71882）
          source: &a1
            id: s_rc8FNc1YoXZx5AJJ7yPyJp
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾靈（CBDB 71882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71882&o=json
            external_identifier: CBDB:71882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gYqEcjjWRFFbBBLWHKXzG6
        subject_person_id: p_wpXMCcgaebc24TV1Effv7d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1634年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jhrTRuhTkgBT4kANPmFBEx
          claim_id: c_gYqEcjjWRFFbBBLWHKXzG6
          source_id: s_rc8FNc1YoXZx5AJJ7yPyJp
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
        id: c_G4R46jFJkJn4eVmJFxkoHz
        subject_person_id: p_wpXMCcgaebc24TV1Effv7d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾靈（生于1634年），清人物。籍贯聞喜。（中国历代人物传记资料库 CBDB 71882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uW7zx94AX-qievdpn2CAeU
          claim_id: c_G4R46jFJkJn4eVmJFxkoHz
          source_id: s_rc8FNc1YoXZx5AJJ7yPyJp
          stance: supports
          locator: CBDB:71882
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

# 王鍾靈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾靈 | accepted |
| birth.date | 1634年 | accepted |
| bio.summary | 王鍾靈（生于1634年），清人物。籍贯聞喜。（中国历代人物传记资料库 CBDB 71882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾靈（CBDB 71882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71882&o=json)
