---
schema: wang-person/v1
id: p_TzCLmWMvn17u2bahM5DSjP
status: active
merged_into: null
display_name: 王朝舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMF4b868AWNiAyrG391FE8
        subject_person_id: p_TzCLmWMvn17u2bahM5DSjP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rs5F227abuv91CE6zkBpga
          claim_id: c_eMF4b868AWNiAyrG391FE8
          source_id: s_NKgF68deDt6WtJ3K4YJ8wc
          stance: supports
          locator: CBDB:295495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295495）
          source: &a1
            id: s_NKgF68deDt6WtJ3K4YJ8wc
            source_type: api_record
            title: 中国历代人物传记资料库：王朝舉（CBDB 295495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295495&o=json
            external_identifier: CBDB:295495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_udfDdXzebjFyXEezfinPFo
        subject_person_id: p_TzCLmWMvn17u2bahM5DSjP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝舉，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2zBJCCI724lMHJ-TVeB6_e
          claim_id: c_udfDdXzebjFyXEezfinPFo
          source_id: s_NKgF68deDt6WtJ3K4YJ8wc
          stance: supports
          locator: CBDB:295495
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

# 王朝舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝舉 | accepted |
| bio.summary | 王朝舉，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝舉（CBDB 295495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295495&o=json)
