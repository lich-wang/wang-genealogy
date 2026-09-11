---
schema: wang-person/v1
id: p_EXMZPtghLZpQ12NTp4oe7P
status: active
merged_into: null
display_name: 王恭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8DV1dNYm6QijcexXg2dJ78
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VcEiJjf5AMbAk21QuriNRJ
          claim_id: c_8DV1dNYm6QijcexXg2dJ78
          source_id: s_ocE5b3394vQ6KhxvuCmWHH
          stance: supports
          locator: CBDB:298702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298702）
          source: &a1
            id: s_ocE5b3394vQ6KhxvuCmWHH
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 298702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298702&o=json
            external_identifier: CBDB:298702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FpWXVJjjFtsvjy7r8Lp4Vh
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
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
        - id: cs_mQPb23uVBSMS3sLkc8tz7Q
          claim_id: c_FpWXVJjjFtsvjy7r8Lp4Vh
          source_id: s_ocE5b3394vQ6KhxvuCmWHH
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
        id: c_H66rbU1bq1WaLw5X6yn5Mt
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Saf5k06GozK3O25rSw7l-M
          claim_id: c_H66rbU1bq1WaLw5X6yn5Mt
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T83fogLUrutThepXCGjKi8
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 198648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json
            external_identifier: CBDB:198648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 298702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298702&o=json)
- [中国历代人物传记资料库：王翰（CBDB 198648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json)
