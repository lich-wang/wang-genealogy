---
schema: wang-person/v1
id: p_PumjFsoPNkknUHAuVomGv3
status: active
merged_into: null
display_name: 王林文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VfWC4anEuoQN4VF5zejU69
        subject_person_id: p_PumjFsoPNkknUHAuVomGv3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LrGZdRzMr1z9gsa9jsFngh
          claim_id: c_VfWC4anEuoQN4VF5zejU69
          source_id: s_zV54FV4z46Kcx2B5NSgsQ2
          stance: supports
          locator: CBDB:638685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638685）
          source: &a1
            id: s_zV54FV4z46Kcx2B5NSgsQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王林文（CBDB 638685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638685&o=json
            external_identifier: CBDB:638685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8neAFbZZpTedmhsCcU4BDw
        subject_person_id: p_PumjFsoPNkknUHAuVomGv3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林文，清人物。籍贯諸城，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638685）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MuVMVWQCPQBh1C0utB3qIN
          claim_id: c_8neAFbZZpTedmhsCcU4BDw
          source_id: s_zV54FV4z46Kcx2B5NSgsQ2
          stance: supports
          locator: CBDB:638685
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

# 王林文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林文 | accepted |
| bio.summary | 王林文，清人物。籍贯諸城，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王林文（CBDB 638685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638685&o=json)
