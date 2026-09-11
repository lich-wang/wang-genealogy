---
schema: wang-person/v1
id: p_W9ZtR1XxvGkrodjCFZhZJj
status: active
merged_into: null
display_name: 王朋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gw26YG17GxGvaozSK4JPEc
        subject_person_id: p_W9ZtR1XxvGkrodjCFZhZJj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_66gZuAcFgRDaLAYNAE6K9M
          claim_id: c_Gw26YG17GxGvaozSK4JPEc
          source_id: s_NtU1FTUSoyEXsEL3BYqCp1
          stance: supports
          locator: CBDB:293417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293417）
          source: &a1
            id: s_NtU1FTUSoyEXsEL3BYqCp1
            source_type: api_record
            title: 中国历代人物传记资料库：王朋（CBDB 293417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293417&o=json
            external_identifier: CBDB:293417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mDimkLArrZvUNwFhPMnPna
        subject_person_id: p_W9ZtR1XxvGkrodjCFZhZJj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uMqDrJZGrYLM3LuCvhPPW
          claim_id: c_mDimkLArrZvUNwFhPMnPna
          source_id: s_NtU1FTUSoyEXsEL3BYqCp1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mNyhBbOz34o-x2RhisoeHF
        subject_person_id: p_W9ZtR1XxvGkrodjCFZhZJj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5WstGP1wjrrH0FpwOYmHU
          claim_id: c_mNyhBbOz34o-x2RhisoeHF
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f67YAvJ62hQ7NjsmZ31Sup
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 126540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json
            external_identifier: CBDB:126540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AV2ZgKZQXWPMrvp5xNJqFj
        status: active
        display_name: 王克復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AV2ZgKZQXWPMrvp5xNJqFj | 王克復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克復（CBDB 126540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json)
- [中国历代人物传记资料库：王朋（CBDB 293417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293417&o=json)
