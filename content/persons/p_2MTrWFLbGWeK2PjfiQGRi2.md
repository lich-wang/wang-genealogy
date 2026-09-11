---
schema: wang-person/v1
id: p_2MTrWFLbGWeK2PjfiQGRi2
status: active
merged_into: null
display_name: 王錡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E67NTWD16WCGoKHTJRhCRU
        subject_person_id: p_2MTrWFLbGWeK2PjfiQGRi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9JyPREDortE2W6FDMpgri3
          claim_id: c_E67NTWD16WCGoKHTJRhCRU
          source_id: s_wsFZ5oMRJRdFUGGsrh2qkR
          stance: supports
          locator: CBDB:35047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35047）
          source: &a1
            id: s_wsFZ5oMRJRdFUGGsrh2qkR
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 35047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35047&o=json
            external_identifier: CBDB:35047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VwVyDNukKKky65NhMtUh4Z
        subject_person_id: p_2MTrWFLbGWeK2PjfiQGRi2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEC64y2fDjEDD6LJ2KUE31
          claim_id: c_VwVyDNukKKky65NhMtUh4Z
          source_id: s_wsFZ5oMRJRdFUGGsrh2qkR
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
        id: c_QihCmGsKjMGbeVYAyBf7jm
        subject_person_id: p_2MTrWFLbGWeK2PjfiQGRi2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UApG667sP7NbMrU2DK64TN
          claim_id: c_QihCmGsKjMGbeVYAyBf7jm
          source_id: s_wsFZ5oMRJRdFUGGsrh2qkR
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
        id: c_rkuHZQQEcYU5uCwEbA9a7G
        subject_person_id: p_2MTrWFLbGWeK2PjfiQGRi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡（1432年—1499年），明人物。籍贯長洲，身份为士人。（中国历代人物传记资料库 CBDB 35047）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jDTFEAezdsGjLXHX7vr-Ta
          claim_id: c_rkuHZQQEcYU5uCwEbA9a7G
          source_id: s_wsFZ5oMRJRdFUGGsrh2qkR
          stance: supports
          locator: CBDB:35047
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

# 王錡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錡 | accepted |
| birth.date | 1432年 | accepted |
| death.date | 1499年 | accepted |
| bio.summary | 王錡（1432年—1499年），明人物。籍贯長洲，身份为士人。（中国历代人物传记资料库 CBDB 35047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錡（CBDB 35047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35047&o=json)
