---
schema: wang-person/v1
id: p_NQYJ6qupj2AcUruY4fn4FP
status: active
merged_into: null
display_name: 王伴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EqrNUJjXqdHmvWuipExWVg
        subject_person_id: p_NQYJ6qupj2AcUruY4fn4FP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1kcQih7h7T3jU8Lzz659hJ
          claim_id: c_EqrNUJjXqdHmvWuipExWVg
          source_id: s_yFqDguSWfyu9JUuhkncnHN
          stance: supports
          locator: CBDB:635982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635982）
          source: &a1
            id: s_yFqDguSWfyu9JUuhkncnHN
            source_type: api_record
            title: 中国历代人物传记资料库：王伴（CBDB 635982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635982&o=json
            external_identifier: CBDB:635982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LvAi59Cvkc99VXd5Z9Kfkt
        subject_person_id: p_NQYJ6qupj2AcUruY4fn4FP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伴，清人物。籍贯臨清直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 635982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kMkrwL7VhQTaXMfBJ4morU
          claim_id: c_LvAi59Cvkc99VXd5Z9Kfkt
          source_id: s_yFqDguSWfyu9JUuhkncnHN
          stance: supports
          locator: CBDB:635982
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

# 王伴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伴 | accepted |
| bio.summary | 王伴，清人物。籍贯臨清直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 635982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伴（CBDB 635982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635982&o=json)
