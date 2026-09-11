---
schema: wang-person/v1
id: p_26otXuRvyNkWGBZaSdCQ3z
status: active
merged_into: null
display_name: 王翰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9HDGTWQRSKNw9CunNCgEvN
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dBDnGvez1t7UR6MA9GAvrv
          claim_id: c_9HDGTWQRSKNw9CunNCgEvN
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: CBDB:198648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198648）
          source: &a1
            id: s_T83fogLUrutThepXCGjKi8
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 198648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json
            external_identifier: CBDB:198648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tSBykEg6wSCy6pKnK587qt
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbRUssZRHEvCGHqmoJir88
          claim_id: c_tSBykEg6wSCy6pKnK587qt
          source_id: s_T83fogLUrutThepXCGjKi8
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
        id: c_FrzSFUqG83mcJzkJfJARTA
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QmTfwtBNqBR2iqcp5tGe96
          claim_id: c_FrzSFUqG83mcJzkJfJARTA
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H66rbU1bq1WaLw5X6yn5Mt
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Saf5k06GozK3O25rSw7l-M
          claim_id: c_H66rbU1bq1WaLw5X6yn5Mt
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EXMZPtghLZpQ12NTp4oe7P
        status: active
        display_name: 王恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1f9We89Vjuck-mZuRX95u2
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bcZ1VLkcdspNMGRuBqnA56
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWvq4qYW-Z-AP3ghr0yCc6
          claim_id: c_1f9We89Vjuck-mZuRX95u2
          source_id: s_5ZQSHTqlClRUeMTJt9eg3b
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5ZQSHTqlClRUeMTJt9eg3b
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王翰妻)（CBDB 298724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298724&o=json
            external_identifier: CBDB:298724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bcZ1VLkcdspNMGRuBqnA56
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_3VAN07NVVnoDm9E24q5A-k
        subject_person_id: p_VE3g4LsZqpKR3uB35Wnvxt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJDrc1krfKZE4DlZSltCea
          claim_id: c_3VAN07NVVnoDm9E24q5A-k
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VE3g4LsZqpKR3uB35Wnvxt
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_QZBXfylBFN8bN00Ctd3jQr
        subject_person_id: p_Ym9fvs9sydA5YA8AtBg8zN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7HwJnJ1sVWcOGWvPfYGVx
          claim_id: c_QZBXfylBFN8bN00Ctd3jQr
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ym9fvs9sydA5YA8AtBg8zN
        status: active
        display_name: 王毅
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EXMZPtghLZpQ12NTp4oe7P | 王恭 | accepted |
| spouses | p_bcZ1VLkcdspNMGRuBqnA56 | 張氏 | accepted |
| ancestors | p_VE3g4LsZqpKR3uB35Wnvxt | 王忠 | accepted |
| ancestors | p_Ym9fvs9sydA5YA8AtBg8zN | 王毅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 198648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json)
- [中国历代人物传记资料库：張氏(王翰妻)（CBDB 298724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298724&o=json)
