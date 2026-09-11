---
schema: wang-person/v1
id: p_w5pNEVYCVJAEuFuR4sLpcJ
status: active
merged_into: null
display_name: 王弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwA2M5e8YDRJMh7v4YsU7g
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3hgViB2o79XmNpd6fVa8aJ
          claim_id: c_EwA2M5e8YDRJMh7v4YsU7g
          source_id: s_q5GNQEar1pp9iTKrGMwo37
          stance: supports
          locator: CBDB:273948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273948）
          source: &a1
            id: s_q5GNQEar1pp9iTKrGMwo37
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 273948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273948&o=json
            external_identifier: CBDB:273948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VPW2g1XKRE9HmqEsUcCYTY
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。弘治十八年進士，籍贯黃巖，曾任知府。（中国历代人物传记资料库 CBDB 273948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MVtkmmOeZVn5OfAdem11RM
          claim_id: c_VPW2g1XKRE9HmqEsUcCYTY
          source_id: s_q5GNQEar1pp9iTKrGMwo37
          stance: supports
          locator: CBDB:273948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nSU79ISorauI45iTBW6Xj8
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXMiZF0nIWzKIf41pRReNh
          claim_id: c_nSU79ISorauI45iTBW6Xj8
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4SkWq6uYYWjkowxuTzuZDA
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 201535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json
            external_identifier: CBDB:201535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mXq9uxGc8pg1wHpdoUPQx2
        status: active
        display_name: 王坊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。弘治十八年進士，籍贯黃巖，曾任知府。（中国历代人物传记资料库 CBDB 273948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 273948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273948&o=json)
- [中国历代人物传记资料库：王坊（CBDB 201535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json)
