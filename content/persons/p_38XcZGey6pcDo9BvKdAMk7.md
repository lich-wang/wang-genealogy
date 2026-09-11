---
schema: wang-person/v1
id: p_38XcZGey6pcDo9BvKdAMk7
status: active
merged_into: null
display_name: 王檻相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uNFj5U1uQ6acFJhhNEdPYp
        subject_person_id: p_38XcZGey6pcDo9BvKdAMk7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檻相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gHBkrNDz44eptngruKxHds
          claim_id: c_uNFj5U1uQ6acFJhhNEdPYp
          source_id: s_1pP8ysggXZywCYmeuuS3Q4
          stance: supports
          locator: CBDB:638877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638877）
          source: &a1
            id: s_1pP8ysggXZywCYmeuuS3Q4
            source_type: api_record
            title: 中国历代人物传记资料库：王檻相（CBDB 638877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638877&o=json
            external_identifier: CBDB:638877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vmwW1zoB68gd2cJL6P1gJh
        subject_person_id: p_38XcZGey6pcDo9BvKdAMk7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檻相，清人物。籍贯山東省，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 638877）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMRT_ksjnkolcxZqLHY4qG
          claim_id: c_vmwW1zoB68gd2cJL6P1gJh
          source_id: s_1pP8ysggXZywCYmeuuS3Q4
          stance: supports
          locator: CBDB:638877
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

# 王檻相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檻相 | accepted |
| bio.summary | 王檻相，清人物。籍贯山東省，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 638877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檻相（CBDB 638877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638877&o=json)
