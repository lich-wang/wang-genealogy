---
schema: wang-person/v1
id: p_Qjt4ik3LNtwWW4feqe349s
status: active
merged_into: null
display_name: 王惟一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_83pUQ6TTneAJcwwwuPzMPV
        subject_person_id: p_Qjt4ik3LNtwWW4feqe349s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QyEBGG2m51wjGZXdFKJ9hZ
          claim_id: c_83pUQ6TTneAJcwwwuPzMPV
          source_id: s_A9FBEKZDBrKZbSMabPePEK
          stance: supports
          locator: CBDB:101343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101343）
          source: &a1
            id: s_A9FBEKZDBrKZbSMabPePEK
            source_type: api_record
            title: 中国历代人物传记资料库：王惟一（CBDB 101343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101343&o=json
            external_identifier: CBDB:101343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4a2z1UCdW9tEZP4tVqNxu
        subject_person_id: p_Qjt4ik3LNtwWW4feqe349s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟一，元人物。籍贯嶧州，曾任祕書監令史、典瑞院書寫。（中国历代人物传记资料库 CBDB 101343）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B1M1iosP6VEvDGqBNPDav1
          claim_id: c_N4a2z1UCdW9tEZP4tVqNxu
          source_id: s_A9FBEKZDBrKZbSMabPePEK
          stance: supports
          locator: CBDB:101343
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

# 王惟一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟一 | accepted |
| bio.summary | 王惟一，元人物。籍贯嶧州，曾任祕書監令史、典瑞院書寫。（中国历代人物传记资料库 CBDB 101343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟一（CBDB 101343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101343&o=json)
