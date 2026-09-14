---
schema: wang-person/v1
id: p_MPBiL1iM5rKucTNCufCi87
status: active
merged_into: null
display_name: 王容
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nJbgyeHjw766MjQtFSULD
        subject_person_id: p_MPBiL1iM5rKucTNCufCi87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gnQ92anQCnmKFQqcfuwVW
          claim_id: c_8nJbgyeHjw766MjQtFSULD
          source_id: s_56mZGn5YWySJqR5SA2vDLi
          stance: supports
          locator: CBDB:245703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245703）
          source: &a1
            id: s_56mZGn5YWySJqR5SA2vDLi
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 245703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json
            external_identifier: CBDB:245703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KS5oCELPJBwLo25n9qZUHu
        subject_person_id: p_MPBiL1iM5rKucTNCufCi87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WWrfUe5ctX99UxWSvjZUqJ
          claim_id: c_KS5oCELPJBwLo25n9qZUHu
          source_id: s_56mZGn5YWySJqR5SA2vDLi
          stance: supports
          locator: CBDB:245703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ouAi-0CSQ7-oZH9YGIOZ5w
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MPBiL1iM5rKucTNCufCi87
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_414hS6cbocpwUBtFZ3aFQ8
          claim_id: c_ouAi-0CSQ7-oZH9YGIOZ5w
          source_id: s_6W_7RkfMxqnou77KqQ9KiB
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王容 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王容 之父／母。
          source:
            id: s_6W_7RkfMxqnou77KqQ9KiB
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 245703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json
            external_identifier: CBDB:245703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P3bk3vpKCZxTvFzWKE93mj
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bazhdkCVT7a1ZEB1ADnwFl
        subject_person_id: p_MPBiL1iM5rKucTNCufCi87
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ICRoPe-m8WetPiaPGeCnee
          claim_id: c_bazhdkCVT7a1ZEB1ADnwFl
          source_id: s_6W_7RkfMxqnou77KqQ9KiB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6W_7RkfMxqnou77KqQ9KiB
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 245703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json
            external_identifier: CBDB:245703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wEuXW2QRPfavvbFYPCJ1DK
        status: active
        display_name: 王宏
        merged_into_person_id: null
---

# 王容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王容 | accepted |
| bio.summary | 王容，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P3bk3vpKCZxTvFzWKE93mj | 王麟 | accepted |
| other | p_wEuXW2QRPfavvbFYPCJ1DK | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王容（CBDB 245703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json)
