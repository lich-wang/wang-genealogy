---
schema: wang-person/v1
id: p_KDimTzuHAnF3D7G1An5ygn
status: active
merged_into: null
display_name: 黃氏
revision: 1
cbdb_id: 55557
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7qvl9KKYymmcvLv5FDvXtb
        subject_person_id: p_KDimTzuHAnF3D7G1An5ygn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgCQEBhjlPnLOdBjWYeFqz
          claim_id: c_7qvl9KKYymmcvLv5FDvXtb
          source_id: s_sMFOeJPMvhHhO5wbTew1KX
          stance: supports
          locator: CBDB:55557
          quotation: null
          interpretation_note: CBDB 明确记录的王沅配偶
          source: &a1
            id: s_sMFOeJPMvhHhO5wbTew1KX
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(王沅妻)（CBDB 55557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55557&o=json
            external_identifier: CBDB:55557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sBMERQBejPvH1beTwL-eL8
        subject_person_id: p_dCgm6CGkiEo8UGfTcsSD3j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KDimTzuHAnF3D7G1An5ygn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pmha4sDHpm_3-zKQB0kSnH
          claim_id: c_sBMERQBejPvH1beTwL-eL8
          source_id: s_sMFOeJPMvhHhO5wbTew1KX
          stance: supports
          locator: CBDB 双向互证（妻子 黃氏(王沅妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dCgm6CGkiEo8UGfTcsSD3j
        status: active
        display_name: 王沅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 黃氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dCgm6CGkiEo8UGfTcsSD3j | 王沅 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(王沅妻)（CBDB 55557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55557&o=json)
