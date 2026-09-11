---
schema: wang-person/v1
id: p_ByfedhZMkQZ2osvi5pfvXp
status: active
merged_into: null
display_name: 王閔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nkrZc3eLZ2mZcpqp6P641T
        subject_person_id: p_ByfedhZMkQZ2osvi5pfvXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aayvc84Vf28BAVd8ZvmzMo
          claim_id: c_nkrZc3eLZ2mZcpqp6P641T
          source_id: s_4DuqkcvTjkjUKjzv1NUvFX
          stance: supports
          locator: CBDB:323758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323758）
          source: &a1
            id: s_4DuqkcvTjkjUKjzv1NUvFX
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 323758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323758&o=json
            external_identifier: CBDB:323758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rJUyrSurP7Yt7Y9qNK6MdK
        subject_person_id: p_ByfedhZMkQZ2osvi5pfvXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閔，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323758）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FEy25S8fJdnSU3tC-EdEe5
          claim_id: c_rJUyrSurP7Yt7Y9qNK6MdK
          source_id: s_4DuqkcvTjkjUKjzv1NUvFX
          stance: supports
          locator: CBDB:323758
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

# 王閔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閔 | accepted |
| bio.summary | 王閔，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323758） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閔（CBDB 323758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323758&o=json)
