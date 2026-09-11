---
schema: wang-person/v1
id: p_pVmQ9pLzQcoaZ94xXzGG3b
status: active
merged_into: null
display_name: 王壽國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_216nAJMYhRz1GNEXLvh4bi
        subject_person_id: p_pVmQ9pLzQcoaZ94xXzGG3b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VmDPQLh7BmfVEcMVnRgqdQ
          claim_id: c_216nAJMYhRz1GNEXLvh4bi
          source_id: s_DpLEKwH8HPycmEv1qapF4Y
          stance: supports
          locator: CBDB:71643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71643）
          source: &a1
            id: s_DpLEKwH8HPycmEv1qapF4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王壽國（CBDB 71643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71643&o=json
            external_identifier: CBDB:71643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FWGthxxdUscTnxoHzRmrSM
        subject_person_id: p_pVmQ9pLzQcoaZ94xXzGG3b
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L1MRUXLWD3qHgEHSQCG4Df
          claim_id: c_FWGthxxdUscTnxoHzRmrSM
          source_id: s_DpLEKwH8HPycmEv1qapF4Y
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
        id: c_RRmJNVTtnNJGTnYt9J86Mm
        subject_person_id: p_pVmQ9pLzQcoaZ94xXzGG3b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽國（生于1831年），清人物。籍贯晉江。（中国历代人物传记资料库 CBDB 71643）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lgE4F7NEx0qviFjw6qIlE7
          claim_id: c_RRmJNVTtnNJGTnYt9J86Mm
          source_id: s_DpLEKwH8HPycmEv1qapF4Y
          stance: supports
          locator: CBDB:71643
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

# 王壽國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽國 | accepted |
| birth.date | 1831年 | accepted |
| bio.summary | 王壽國（生于1831年），清人物。籍贯晉江。（中国历代人物传记资料库 CBDB 71643） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽國（CBDB 71643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71643&o=json)
