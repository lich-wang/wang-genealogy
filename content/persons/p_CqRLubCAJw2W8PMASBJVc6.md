---
schema: wang-person/v1
id: p_CqRLubCAJw2W8PMASBJVc6
status: active
merged_into: null
display_name: 王巽言
cbdb_id: 321239
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CmBPMgdDzPC7uKgjKvtEm9
        subject_person_id: p_CqRLubCAJw2W8PMASBJVc6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽言，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kqvx3Pjf4rVTiB2q44c9NM
          claim_id: c_CmBPMgdDzPC7uKgjKvtEm9
          source_id: s_rEkKEffsxyP6JpaD8BY6zx
          stance: supports
          locator: CBDB:321239
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rEkKEffsxyP6JpaD8BY6zx
            source_type: api_record
            title: 中国历代人物传记资料库：王巽言（CBDB 321239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json
            external_identifier: CBDB:321239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J57QpsPdK9ETqNjSttNpKx
        subject_person_id: p_CqRLubCAJw2W8PMASBJVc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iy63VtYT8u35eZ5gEfSwBV
          claim_id: c_J57QpsPdK9ETqNjSttNpKx
          source_id: s_rEkKEffsxyP6JpaD8BY6zx
          stance: supports
          locator: CBDB:321239
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k3IHtRN0zgaiz-ERglZvn8
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqRLubCAJw2W8PMASBJVc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lnOw5mM4JhOTmUD1Tigiet
          claim_id: c_k3IHtRN0zgaiz-ERglZvn8
          source_id: s_Tli5fbZc67TWwuo1x2LMyN
          stance: supports
          locator: CBDB：兄弟 王嘉言（204590）之父／母 王濂
          quotation: null
          interpretation_note: 由兄弟关系推断：王巽言 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王巽言 之父／母。
          source:
            id: s_Tli5fbZc67TWwuo1x2LMyN
            source_type: api_record
            title: 中国历代人物传记资料库：王巽言（CBDB 321239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json
            external_identifier: CBDB:321239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRKaEr8menL16CrSqqwL5J
        status: active
        display_name: 王濂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZxOheO4O4cD1X94poy6Cx7
        subject_person_id: p_CqRLubCAJw2W8PMASBJVc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdm178j5KmRhO1Zbx9np-7
          claim_id: c_ZxOheO4O4cD1X94poy6Cx7
          source_id: s_Tli5fbZc67TWwuo1x2LMyN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204590 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tli5fbZc67TWwuo1x2LMyN
            source_type: api_record
            title: 中国历代人物传记资料库：王巽言（CBDB 321239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json
            external_identifier: CBDB:321239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FZsZBsVgtXYBR7R5He9YWs
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
---

# 王巽言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王巽言，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321239） | accepted |
| name.primary | 王巽言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PRKaEr8menL16CrSqqwL5J | 王濂 | accepted |
| other | p_FZsZBsVgtXYBR7R5He9YWs | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王巽言（CBDB 321239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json)
