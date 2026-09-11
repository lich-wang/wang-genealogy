---
schema: wang-person/v1
id: p_3Ro3ioP86d19hKuiZvdaZx
status: active
merged_into: null
display_name: 王圭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rpb88i7sqJJBxRK1qu7uzG
        subject_person_id: p_3Ro3ioP86d19hKuiZvdaZx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N3wypUn884B7REQU2cxf67
          claim_id: c_Rpb88i7sqJJBxRK1qu7uzG
          source_id: s_VyAKdVuJ41Nr52sqU7mJYD
          stance: supports
          locator: CBDB:482571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482571）
          source: &a1
            id: s_VyAKdVuJ41Nr52sqU7mJYD
            source_type: api_record
            title: 中国历代人物传记资料库：王圭（CBDB 482571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482571&o=json
            external_identifier: CBDB:482571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_By6iFXABFdy4nw6wq18yjE
        subject_person_id: p_3Ro3ioP86d19hKuiZvdaZx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圭，元人物。曾任照磨。（中国历代人物传记资料库 CBDB 482571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5KQD7WLddLVi4zyIzDLF1N
          claim_id: c_By6iFXABFdy4nw6wq18yjE
          source_id: s_VyAKdVuJ41Nr52sqU7mJYD
          stance: supports
          locator: CBDB:482571
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

# 王圭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圭 | accepted |
| bio.summary | 王圭，元人物。曾任照磨。（中国历代人物传记资料库 CBDB 482571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王圭（CBDB 482571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482571&o=json)
