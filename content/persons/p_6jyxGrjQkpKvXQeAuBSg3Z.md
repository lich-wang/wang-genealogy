---
schema: wang-person/v1
id: p_6jyxGrjQkpKvXQeAuBSg3Z
status: active
merged_into: null
display_name: 王志賢
cbdb_id: 226928
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i4M3MrkzcLcQnhn3e9mLHG
        subject_person_id: p_6jyxGrjQkpKvXQeAuBSg3Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司，入仕庠生，曾任吏目。（中国历代人物传记资料库 CBDB 226928）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TMvKS83CyDuoZ7H52jVq-O
          claim_id: c_i4M3MrkzcLcQnhn3e9mLHG
          source_id: s_bhDYnDhBjB6EUP5pr5yYuB
          stance: supports
          locator: CBDB:226928
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bhDYnDhBjB6EUP5pr5yYuB
            source_type: api_record
            title: 中国历代人物传记资料库：王志賢（CBDB 226928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226928&o=json
            external_identifier: CBDB:226928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1PpFXVwwo7U7KhGBEMoJTJ
        subject_person_id: p_6jyxGrjQkpKvXQeAuBSg3Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_u9kruwGoucnrizMe7EqFbW
          claim_id: c_1PpFXVwwo7U7KhGBEMoJTJ
          source_id: s_bhDYnDhBjB6EUP5pr5yYuB
          stance: supports
          locator: CBDB:226928
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C8DhwefxfZU1VmKSti-U8Q
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6jyxGrjQkpKvXQeAuBSg3Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xq1So-qMZ1m0bdqmPdTis3
          claim_id: c_C8DhwefxfZU1VmKSti-U8Q
          source_id: s_w3MuKEHEGUv7NGOT-42DWm
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王志賢 与 王立賢 为同胞（CBDB 记「弟」），王立賢 之父／母即 王志賢 之父／母。
          source:
            id: s_w3MuKEHEGUv7NGOT-42DWm
            source_type: api_record
            title: 中国历代人物传记资料库：王志賢（CBDB 226928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226928&o=json
            external_identifier: CBDB:226928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MZb3xwrJh2KS7jR6a3sirM
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dNUXZr15_YukgZItWkpZRJ
        subject_person_id: p_6jyxGrjQkpKvXQeAuBSg3Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_gDeJTjtErRPJPXw8s5zL
          claim_id: c_dNUXZr15_YukgZItWkpZRJ
          source_id: s_w3MuKEHEGUv7NGOT-42DWm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207055 王立賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w3MuKEHEGUv7NGOT-42DWm
            source_type: api_record
            title: 中国历代人物传记资料库：王志賢（CBDB 226928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226928&o=json
            external_identifier: CBDB:226928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
---

# 王志賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司，入仕庠生，曾任吏目。（中国历代人物传记资料库 CBDB 226928） | accepted |
| name.primary | 王志賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZb3xwrJh2KS7jR6a3sirM | 王佐 | accepted |
| other | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志賢（CBDB 226928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226928&o=json)
