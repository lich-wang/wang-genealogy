---
schema: wang-person/v1
id: p_hr4owVcxQc5APCerqkGqH3
status: active
merged_into: null
display_name: 王佑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iWZDZo97o58NZUDeHeMULG
        subject_person_id: p_hr4owVcxQc5APCerqkGqH3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_27J93BqU2hZsb6rmRbS8mi
          claim_id: c_iWZDZo97o58NZUDeHeMULG
          source_id: s_2Dq94DiA8Q3aX8QGMheBWN
          stance: supports
          locator: CBDB:262429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262429）
          source: &a1
            id: s_2Dq94DiA8Q3aX8QGMheBWN
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 262429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262429&o=json
            external_identifier: CBDB:262429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChF1jXPpHFYVeB9jRSoVkm
        subject_person_id: p_hr4owVcxQc5APCerqkGqH3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。弘治三年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 262429）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lVczpmkr95qhKcJwZ3nuiF
          claim_id: c_ChF1jXPpHFYVeB9jRSoVkm
          source_id: s_2Dq94DiA8Q3aX8QGMheBWN
          stance: supports
          locator: CBDB:262429
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
  descendants:
    - claim:
        id: c_PGh1AyfCRJ21QxgarVvczi
        subject_person_id: p_hr4owVcxQc5APCerqkGqH3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TIJMC5NCqoISq8ZJyOQC0
          claim_id: c_PGh1AyfCRJ21QxgarVvczi
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tniXLNayvNhe4q9rD3xh4y
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json
            external_identifier: CBDB:126788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4rX1RM4YkpctdzscWgdRsh
        status: active
        display_name: 王綸
        merged_into_person_id: null
  other: []
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。弘治三年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 262429） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4rX1RM4YkpctdzscWgdRsh | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 126788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json)
- [中国历代人物传记资料库：王佑（CBDB 262429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262429&o=json)
