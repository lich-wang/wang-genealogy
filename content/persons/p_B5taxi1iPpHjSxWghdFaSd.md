---
schema: wang-person/v1
id: p_B5taxi1iPpHjSxWghdFaSd
status: active
merged_into: null
display_name: 王從政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LAZ1DEbxhpsUsy8uvUN2x9
        subject_person_id: p_B5taxi1iPpHjSxWghdFaSd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R2H4oEBDg3BHNjyFbMk1gE
          claim_id: c_LAZ1DEbxhpsUsy8uvUN2x9
          source_id: s_9wk9KGzHB9mm2CVJDNhy67
          stance: supports
          locator: CBDB:479657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479657）
          source: &a1
            id: s_9wk9KGzHB9mm2CVJDNhy67
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 479657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479657&o=json
            external_identifier: CBDB:479657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cfQehBSKUgZ3aLipZErdTK
        subject_person_id: p_B5taxi1iPpHjSxWghdFaSd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政，元人物。曾任都轉運鹽使、總管。（中国历代人物传记资料库 CBDB 479657）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iuSjNvv04STYTC1Pg8smoZ
          claim_id: c_cfQehBSKUgZ3aLipZErdTK
          source_id: s_9wk9KGzHB9mm2CVJDNhy67
          stance: supports
          locator: CBDB:479657
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

# 王從政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從政 | accepted |
| bio.summary | 王從政，元人物。曾任都轉運鹽使、總管。（中国历代人物传记资料库 CBDB 479657） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從政（CBDB 479657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479657&o=json)
