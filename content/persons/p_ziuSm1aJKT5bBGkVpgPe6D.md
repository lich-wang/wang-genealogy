---
schema: wang-person/v1
id: p_ziuSm1aJKT5bBGkVpgPe6D
status: active
merged_into: null
display_name: 王肇基
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NM64vibVp1DC6pCp3qxcmp
        subject_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t3pWyYhGPs5QhfT7DBMYRF
          claim_id: c_NM64vibVp1DC6pCp3qxcmp
          source_id: s_wi3X6ZAwrALXJW1GxwEnq7
          stance: supports
          locator: CBDB:558200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558200）
          source: &a1
            id: s_wi3X6ZAwrALXJW1GxwEnq7
            source_type: api_record
            title: 中国历代人物传记资料库：王肇基（CBDB 558200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558200&o=json
            external_identifier: CBDB:558200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NvhmPjC8hsAw9aQQ7guR97
        subject_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王肇基，清人物。籍贯新野，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 558200）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oHZfKHX8I-WguN3i2zJoTj
          claim_id: c_NvhmPjC8hsAw9aQQ7guR97
          source_id: s_wi3X6ZAwrALXJW1GxwEnq7
          stance: supports
          locator: CBDB:558200
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pBpTaYMKHnhbKcvFbv1L6Q
        subject_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uRs1dBvGfLVZFwWBK4Lb79
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXEsJ-M5DOvurWOAke0I8r
          claim_id: c_pBpTaYMKHnhbKcvFbv1L6Q
          source_id: s_AKq5syFNXzHYruraiuhLSD
          stance: supports
          locator: 南陽府志，lgid=878826：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AKq5syFNXzHYruraiuhLSD
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 558206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558206&o=json
            external_identifier: CBDB:558206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uRs1dBvGfLVZFwWBK4Lb79
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RKgz4GOwV8DQt_Q87y8IGu
        subject_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_A6XGw5wRBA39b5Xjrnp7o5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3p8aU9ZLVCgcukKVpGUVth
          claim_id: c_RKgz4GOwV8DQt_Q87y8IGu
          source_id: s_IlcKRwEhbFOLwBZw_kgOs_
          stance: supports
          locator: 南陽府志，lgid=878826：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_IlcKRwEhbFOLwBZw_kgOs_
            source_type: api_record
            title: 中国历代人物传记资料库：路氏(王肇基妻)（CBDB 558201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558201&o=json
            external_identifier: CBDB:558201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A6XGw5wRBA39b5Xjrnp7o5
        status: active
        display_name: 路氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5nVMMowIBJSMr5geG6dDqP
        subject_person_id: p_1KC4KFQQLTcP7hbayMfMtf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6drSyUsQK_3QMABsHMUH7i
          claim_id: c_5nVMMowIBJSMr5geG6dDqP
          source_id: s_OsVFPHYRBE73ioqRFhrH-W
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 558200 王肇基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OsVFPHYRBE73ioqRFhrH-W
            source_type: api_record
            title: 中国历代人物传记资料库：王建基（CBDB 558204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558204&o=json
            external_identifier: CBDB:558204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1KC4KFQQLTcP7hbayMfMtf
        status: active
        display_name: 王建基
        merged_into_person_id: null
---

# 王肇基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇基 | accepted |
| bio.summary | 王肇基，清人物。籍贯新野，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 558200） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uRs1dBvGfLVZFwWBK4Lb79 | 王鉞 | accepted |
| spouses | p_A6XGw5wRBA39b5Xjrnp7o5 | 路氏 | accepted |
| other | p_1KC4KFQQLTcP7hbayMfMtf | 王建基 | accepted |

## 外部来源

- [中国历代人物传记资料库：路氏(王肇基妻)（CBDB 558201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558201&o=json)
- [中国历代人物传记资料库：王建基（CBDB 558204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558204&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 558206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558206&o=json)
- [中国历代人物传记资料库：王肇基（CBDB 558200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558200&o=json)
