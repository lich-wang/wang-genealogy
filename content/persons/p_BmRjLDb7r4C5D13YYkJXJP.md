---
schema: wang-person/v1
id: p_BmRjLDb7r4C5D13YYkJXJP
status: active
merged_into: null
display_name: 王朝聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VDd6pVeR18kvh2mNbAJUg6
        subject_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KjisR8a69FLKiwmwy59hTS
          claim_id: c_VDd6pVeR18kvh2mNbAJUg6
          source_id: s_sFJQTXUFu6v81FQm4JYm8G
          stance: supports
          locator: CBDB:295494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295494）
          source: &a1
            id: s_sFJQTXUFu6v81FQm4JYm8G
            source_type: api_record
            title: 中国历代人物传记资料库：王朝聘（CBDB 295494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json
            external_identifier: CBDB:295494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hr5Qvz6e2VG9yNS1GDaVWb
        subject_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295494）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_lXAlS5cnauCN8URFmcAv
          claim_id: c_hr5Qvz6e2VG9yNS1GDaVWb
          source_id: s_sFJQTXUFu6v81FQm4JYm8G
          stance: supports
          locator: CBDB:295494
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

# 王朝聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝聘 | accepted |
| bio.summary | 王朝聘，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝聘（CBDB 295494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json)
