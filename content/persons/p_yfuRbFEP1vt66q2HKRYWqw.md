---
schema: wang-person/v1
id: p_yfuRbFEP1vt66q2HKRYWqw
status: active
merged_into: null
display_name: 王芝蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8DjKrEYGPtefXgDiRpwLY
        subject_person_id: p_yfuRbFEP1vt66q2HKRYWqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZAA7oDqcUQy97KjExyuLwt
          claim_id: c_E8DjKrEYGPtefXgDiRpwLY
          source_id: s_3cEZpqXsGVDu5Wh3M3EFiw
          stance: supports
          locator: CBDB:71526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71526）
          source: &a1
            id: s_3cEZpqXsGVDu5Wh3M3EFiw
            source_type: api_record
            title: 中国历代人物传记资料库：王芝蘭（CBDB 71526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71526&o=json
            external_identifier: CBDB:71526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5QenzGUCwhFZrjaFQtakm5
        subject_person_id: p_yfuRbFEP1vt66q2HKRYWqw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKAof1dn3nQo533A9o7qeN
          claim_id: c_5QenzGUCwhFZrjaFQtakm5
          source_id: s_3cEZpqXsGVDu5Wh3M3EFiw
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
        id: c_vFdbMhq9FE7f93XQjceKdt
        subject_person_id: p_yfuRbFEP1vt66q2HKRYWqw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝蘭（生于1851年），清人物。籍贯長清。（中国历代人物传记资料库 CBDB 71526）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yUpjOFn0PAppcXt9tBRhRH
          claim_id: c_vFdbMhq9FE7f93XQjceKdt
          source_id: s_3cEZpqXsGVDu5Wh3M3EFiw
          stance: supports
          locator: CBDB:71526
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

# 王芝蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝蘭 | accepted |
| birth.date | 1851年 | accepted |
| bio.summary | 王芝蘭（生于1851年），清人物。籍贯長清。（中国历代人物传记资料库 CBDB 71526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芝蘭（CBDB 71526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71526&o=json)
