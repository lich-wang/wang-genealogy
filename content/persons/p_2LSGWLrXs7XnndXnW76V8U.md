---
schema: wang-person/v1
id: p_2LSGWLrXs7XnndXnW76V8U
status: active
merged_into: null
display_name: 王統
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5q7VYaAvdAshWkcgYuUD9x
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsBMwdNSSGqkfNp9WCd8h7
          claim_id: c_5q7VYaAvdAshWkcgYuUD9x
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: CBDB:200725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200725）
          source: &a1
            id: s_FzHANRPNeNFZ34nEd8FtEx
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 200725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json
            external_identifier: CBDB:200725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x75vsGgzRDtqPSWJCEkuvh
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7sNDDvCqcNwBgf2DjWKF4
          claim_id: c_x75vsGgzRDtqPSWJCEkuvh
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bq9LSbxsiy4hJKsGXEk6c9
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統（生于1451年），明人物。明清進士進士，籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 200725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ctcbU-xG3d1An_8sDbssnh
          claim_id: c_Bq9LSbxsiy4hJKsGXEk6c9
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: CBDB:200725
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DDExLOZw-CBhbG2XosvsZ7
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ulBp3xNfivQxawPqX1Vra2
          claim_id: c_DDExLOZw-CBhbG2XosvsZ7
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HxJiGj8JHn8DhGEqa1wJaa
        status: active
        display_name: 王大綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XdZo_vATX8_P31O8j944GU
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Qs82NSfkRxV82SHeQ1eQhc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WeHEidmG9V4w23wJZrMdi
          claim_id: c_XdZo_vATX8_P31O8j944GU
          source_id: s_QTwLECA0gATDI9zMVPZSWu
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QTwLECA0gATDI9zMVPZSWu
            source_type: api_record
            title: 中国历代人物传记资料库：饒氏(王統妻)（CBDB 261993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261993&o=json
            external_identifier: CBDB:261993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Qs82NSfkRxV82SHeQ1eQhc
        status: active
        display_name: 饒氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_I03NHMrpegyFHpjf8tZWwy
        subject_person_id: p_MxjAUiWBNpbJEtL1inDQQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLNRODPm3qh5NBUC5oWFZN
          claim_id: c_I03NHMrpegyFHpjf8tZWwy
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MxjAUiWBNpbJEtL1inDQQE
        status: active
        display_name: 王思敬
        merged_into_person_id: null
    - claim:
        id: c_Wv8uoBqpnAO2MmKGdhvV9U
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpzTbc5e-5lMgK535_pjPl
          claim_id: c_Wv8uoBqpnAO2MmKGdhvV9U
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VynyhNxLVZm8KKMYzz5BcS
        status: active
        display_name: 王汝為
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王統

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | 王統（生于1451年），明人物。明清進士進士，籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 200725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxJiGj8JHn8DhGEqa1wJaa | 王大綸 | accepted |
| spouses | p_Qs82NSfkRxV82SHeQ1eQhc | 饒氏 | accepted |
| ancestors | p_MxjAUiWBNpbJEtL1inDQQE | 王思敬 | accepted |
| ancestors | p_VynyhNxLVZm8KKMYzz5BcS | 王汝為 | accepted |

## 外部来源

- [中国历代人物传记资料库：饒氏(王統妻)（CBDB 261993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261993&o=json)
- [中国历代人物传记资料库：王統（CBDB 200725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json)
