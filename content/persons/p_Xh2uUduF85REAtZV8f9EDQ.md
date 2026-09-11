---
schema: wang-person/v1
id: p_Xh2uUduF85REAtZV8f9EDQ
status: active
merged_into: null
display_name: 王大紀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NaCeKLhd9hMrbTV6jTund1
        subject_person_id: p_Xh2uUduF85REAtZV8f9EDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fD6R9o8JPForeJB8dDE5d5
          claim_id: c_NaCeKLhd9hMrbTV6jTund1
          source_id: s_MEDQkh5esTKLxhQ7HdHgKP
          stance: supports
          locator: CBDB:555414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555414）
          source: &a1
            id: s_MEDQkh5esTKLxhQ7HdHgKP
            source_type: api_record
            title: 中国历代人物传记资料库：王大紀（CBDB 555414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555414&o=json
            external_identifier: CBDB:555414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_exyXsHjrTsNRE4kZKCjRYe
        subject_person_id: p_Xh2uUduF85REAtZV8f9EDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大紀，明人物。籍贯鎮平，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 555414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gKgk3MqMK2qB7DGKmuIyeE
          claim_id: c_exyXsHjrTsNRE4kZKCjRYe
          source_id: s_MEDQkh5esTKLxhQ7HdHgKP
          stance: supports
          locator: CBDB:555414
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

# 王大紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大紀 | accepted |
| bio.summary | 王大紀，明人物。籍贯鎮平，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 555414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大紀（CBDB 555414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555414&o=json)
