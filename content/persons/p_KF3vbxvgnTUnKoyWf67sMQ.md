---
schema: wang-person/v1
id: p_KF3vbxvgnTUnKoyWf67sMQ
status: active
merged_into: null
display_name: 王承烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3EFZESBn2bu3YhtJmSzxDu
        subject_person_id: p_KF3vbxvgnTUnKoyWf67sMQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iGwFTJt5HCbYpBJsH2MzSM
          claim_id: c_3EFZESBn2bu3YhtJmSzxDu
          source_id: s_sh47GSphGpw7SMvtUFZxx7
          stance: supports
          locator: CBDB:342043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342043）
          source: &a1
            id: s_sh47GSphGpw7SMvtUFZxx7
            source_type: api_record
            title: 中国历代人物传记资料库：王承烈（CBDB 342043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342043&o=json
            external_identifier: CBDB:342043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rWtEH7bh2aKEJfxnPZ9wCa
        subject_person_id: p_KF3vbxvgnTUnKoyWf67sMQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承烈，清人物。明清進士進士，籍贯平遠，入仕進士。（中国历代人物传记资料库 CBDB 342043）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FiMWfJ694aKkbyChbZ5wY_
          claim_id: c_rWtEH7bh2aKEJfxnPZ9wCa
          source_id: s_sh47GSphGpw7SMvtUFZxx7
          stance: supports
          locator: CBDB:342043
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

# 王承烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承烈 | accepted |
| bio.summary | 王承烈，清人物。明清進士進士，籍贯平遠，入仕進士。（中国历代人物传记资料库 CBDB 342043） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承烈（CBDB 342043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342043&o=json)
