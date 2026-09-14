---
schema: wang-person/v1
id: p_4UYcL3HUTixEDeFTBA8Q41
status: active
merged_into: null
display_name: 王綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NvpBojtKvyH2M5GvYrVoJ9
        subject_person_id: p_4UYcL3HUTixEDeFTBA8Q41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9XLBFuzRM6LBRp9dfGq1x
          claim_id: c_NvpBojtKvyH2M5GvYrVoJ9
          source_id: s_FKD9gYquYmSAy61VemRf9a
          stance: supports
          locator: CBDB:260409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260409）
          source: &a1
            id: s_FKD9gYquYmSAy61VemRf9a
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 260409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json
            external_identifier: CBDB:260409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5LKC9R6rB94dd54mPwKDp
        subject_person_id: p_4UYcL3HUTixEDeFTBA8Q41
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u4nnCSRzU2J4GFsIN6jb4o
          claim_id: c_Z5LKC9R6rB94dd54mPwKDp
          source_id: s_FKD9gYquYmSAy61VemRf9a
          stance: supports
          locator: CBDB:260409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HPfVciehtfIq6upmS7QZs_
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4UYcL3HUTixEDeFTBA8Q41
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41CSOs9X_oZcQAuljV-HHf
          claim_id: c_HPfVciehtfIq6upmS7QZs_
          source_id: s_A6lYXjhkeWn6jnh8ZzKcXI
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王綸 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綸 之父／母。
          source:
            id: s_A6lYXjhkeWn6jnh8ZzKcXI
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 260409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json
            external_identifier: CBDB:260409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BFQVEDhv1-EKcYLoOuxCZK
        subject_person_id: p_4UYcL3HUTixEDeFTBA8Q41
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FXedX4suc8bWE0UmGqDQ8E
          claim_id: c_BFQVEDhv1-EKcYLoOuxCZK
          source_id: s_A6lYXjhkeWn6jnh8ZzKcXI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A6lYXjhkeWn6jnh8ZzKcXI
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 260409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json
            external_identifier: CBDB:260409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | 王綸，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| other | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 260409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json)
