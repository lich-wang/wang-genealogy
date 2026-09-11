---
schema: wang-person/v1
id: p_6LL9sfe2kT8EamAYbDwTHh
status: active
merged_into: null
display_name: 王彥忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T75uF9EprpLCyM1jLxh7tX
        subject_person_id: p_6LL9sfe2kT8EamAYbDwTHh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hM75sf6Vi9CKGBQ17mY4Ab
          claim_id: c_T75uF9EprpLCyM1jLxh7tX
          source_id: s_1oN1n4UjPgtT6frYaCcZMo
          stance: supports
          locator: CBDB:692315
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692315）
          source: &a1
            id: s_1oN1n4UjPgtT6frYaCcZMo
            source_type: api_record
            title: 中国历代人物传记资料库：王彥忠（CBDB 692315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692315&o=json
            external_identifier: CBDB:692315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kk7upqZWosAWAg74uvXrEH
        subject_person_id: p_6LL9sfe2kT8EamAYbDwTHh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥忠，明人物。籍贯黟縣，身份为武藝，曾任府經歷、迪功郎。（中国历代人物传记资料库 CBDB 692315）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NPu2b9wV1R6zP5C6Wf8UVO
          claim_id: c_Kk7upqZWosAWAg74uvXrEH
          source_id: s_1oN1n4UjPgtT6frYaCcZMo
          stance: supports
          locator: CBDB:692315
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

# 王彥忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥忠 | accepted |
| bio.summary | 王彥忠，明人物。籍贯黟縣，身份为武藝，曾任府經歷、迪功郎。（中国历代人物传记资料库 CBDB 692315） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥忠（CBDB 692315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692315&o=json)
