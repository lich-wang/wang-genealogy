---
schema: wang-person/v1
id: p_RN9ocucA86xJHPbc7HAmg6
status: active
merged_into: null
display_name: 王濟民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrorS5DL6T89aLZbxrsxiK
        subject_person_id: p_RN9ocucA86xJHPbc7HAmg6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPM1e8uZiz69ALQofohv4E
          claim_id: c_YrorS5DL6T89aLZbxrsxiK
          source_id: s_wqehtt7pK1BSTuuC18ygDJ
          stance: supports
          locator: CBDB:209989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209989）
          source: &a1
            id: s_wqehtt7pK1BSTuuC18ygDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 209989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json
            external_identifier: CBDB:209989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z6GyM2A9Xddu2pv21c7FVx
        subject_person_id: p_RN9ocucA86xJHPbc7HAmg6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gkBeRUwhhX4aaTmEE5O4Yv
          claim_id: c_Z6GyM2A9Xddu2pv21c7FVx
          source_id: s_wqehtt7pK1BSTuuC18ygDJ
          stance: supports
          locator: CBDB:209989
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

# 王濟民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟民 | accepted |
| bio.summary | 王濟民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟民（CBDB 209989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json)
