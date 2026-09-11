---
schema: wang-person/v1
id: p_pV5FwqJF3Es15SHUxwECXq
status: active
merged_into: null
display_name: 王壽康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Kfd4qc9186M6YYTF3vkq4
        subject_person_id: p_pV5FwqJF3Es15SHUxwECXq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B5qxBMfiEnYKg3zd4ZBgpk
          claim_id: c_9Kfd4qc9186M6YYTF3vkq4
          source_id: s_r7Lt4QWUzQDq1h5nKhLKS7
          stance: supports
          locator: CBDB:71645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71645）
          source: &a1
            id: s_r7Lt4QWUzQDq1h5nKhLKS7
            source_type: api_record
            title: 中国历代人物传记资料库：王壽康（CBDB 71645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71645&o=json
            external_identifier: CBDB:71645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B3bxmWLGpZ8EFDFna9UK6t
        subject_person_id: p_pV5FwqJF3Es15SHUxwECXq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1795年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ym4KPQG1nFCC3npdByZ4Am
          claim_id: c_B3bxmWLGpZ8EFDFna9UK6t
          source_id: s_r7Lt4QWUzQDq1h5nKhLKS7
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
        id: c_gBZDfkhs9MAfwRbBTDCVni
        subject_person_id: p_pV5FwqJF3Es15SHUxwECXq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptdEaWju5xT1Gpc6Numtc8
          claim_id: c_gBZDfkhs9MAfwRbBTDCVni
          source_id: s_r7Lt4QWUzQDq1h5nKhLKS7
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
        id: c_5Ai34fU4CitEC6yuewJuSZ
        subject_person_id: p_pV5FwqJF3Es15SHUxwECXq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽康（1795年—1859年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uU1XDNY7dTJe7NnTUOsNc8
          claim_id: c_5Ai34fU4CitEC6yuewJuSZ
          source_id: s_r7Lt4QWUzQDq1h5nKhLKS7
          stance: supports
          locator: CBDB:71645
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

# 王壽康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽康 | accepted |
| birth.date | 1795年 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | 王壽康（1795年—1859年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽康（CBDB 71645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71645&o=json)
