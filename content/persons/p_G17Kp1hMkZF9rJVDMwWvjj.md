---
schema: wang-person/v1
id: p_G17Kp1hMkZF9rJVDMwWvjj
status: active
merged_into: null
display_name: 王大啟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HpNzj4cUFMUNTRVVFS8NNK
        subject_person_id: p_G17Kp1hMkZF9rJVDMwWvjj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大啟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9RcA9RcNuQot6CC3DW3yR
          claim_id: c_HpNzj4cUFMUNTRVVFS8NNK
          source_id: s_xu1hjFEgkEA8jHPVu8K8BV
          stance: supports
          locator: CBDB:264454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264454）
          source: &a1
            id: s_xu1hjFEgkEA8jHPVu8K8BV
            source_type: api_record
            title: 中国历代人物传记资料库：王大啟（CBDB 264454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264454&o=json
            external_identifier: CBDB:264454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3S5puSnrmLfEC3o8vaCZB8
        subject_person_id: p_G17Kp1hMkZF9rJVDMwWvjj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大啟，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264454）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vmjlC6Q9PldG8TRxe2OWUC
          claim_id: c_3S5puSnrmLfEC3o8vaCZB8
          source_id: s_xu1hjFEgkEA8jHPVu8K8BV
          stance: supports
          locator: CBDB:264454
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

# 王大啟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大啟 | accepted |
| bio.summary | 王大啟，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大啟（CBDB 264454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264454&o=json)
