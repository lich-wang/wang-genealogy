---
schema: wang-person/v1
id: p_7H3TPU2nfHoiknXCZ9JVid
status: active
merged_into: null
display_name: 王大化
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tSqMDBvC6k5f9ju1oHgCDj
        subject_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4YUguCNhd2G8417Y8UgjFQ
          claim_id: c_tSqMDBvC6k5f9ju1oHgCDj
          source_id: s_wCW9jRjL1KypShYP5kjEUG
          stance: supports
          locator: CBDB:202118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202118）
          source: &a1
            id: s_wCW9jRjL1KypShYP5kjEUG
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 202118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202118&o=json
            external_identifier: CBDB:202118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TfqJ19F83NYKCqHhvKsL9a
        subject_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d2brVt9Tp1MuzZwX1C1Kgz
          claim_id: c_TfqJ19F83NYKCqHhvKsL9a
          source_id: s_wCW9jRjL1KypShYP5kjEUG
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
        id: c_TAuXRPyQ1BmBTCMrWVCH2P
        subject_person_id: p_7H3TPU2nfHoiknXCZ9JVid
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
        - id: cs_ScYp3s8zva9Rpx7x291Z7d
          claim_id: c_TAuXRPyQ1BmBTCMrWVCH2P
          source_id: s_wCW9jRjL1KypShYP5kjEUG
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
        id: c_u_joNMUQi4X2U0AI5aSm4t
        subject_person_id: p_e5Sidd4uLDXKV7G8RopKVW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nZrXtLUyLPImFMstQ8at4D
          claim_id: c_u_joNMUQi4X2U0AI5aSm4t
          source_id: s_wCW9jRjL1KypShYP5kjEUG
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e5Sidd4uLDXKV7G8RopKVW
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2lTLKvrPIVXXJQEFMUvu6E
        subject_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7cPi3Pg4xUvnq8TGzpHCLb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FS2dZ0HFHiflUjxuPDgoee
          claim_id: c_2lTLKvrPIVXXJQEFMUvu6E
          source_id: s_I6JRwblYPno_yiRDi79PA4
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_I6JRwblYPno_yiRDi79PA4
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王大化妻)（CBDB 283875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283875&o=json
            external_identifier: CBDB:283875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7cPi3Pg4xUvnq8TGzpHCLb
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_hraBz00qrsrneNr8Ha6RJ4
        subject_person_id: p_vfBzh9Tg5w9fbvKCkKYmL6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k87wSlljI_u1kJCVoGMf8E
          claim_id: c_hraBz00qrsrneNr8Ha6RJ4
          source_id: s_wCW9jRjL1KypShYP5kjEUG
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfBzh9Tg5w9fbvKCkKYmL6
        status: active
        display_name: 王璉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王大化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大化 | accepted |
| birth.date | 1488年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e5Sidd4uLDXKV7G8RopKVW | 王睿 | accepted |
| spouses | p_7cPi3Pg4xUvnq8TGzpHCLb | 陳氏 | accepted |
| ancestors | p_vfBzh9Tg5w9fbvKCkKYmL6 | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王大化妻)（CBDB 283875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283875&o=json)
- [中国历代人物传记资料库：王大化（CBDB 202118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202118&o=json)
