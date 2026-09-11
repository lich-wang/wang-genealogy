---
schema: wang-person/v1
id: p_Dg27moF3SbFTVJLWr81o69
status: active
merged_into: null
display_name: 苟氏
revision: 1
cbdb_id: 282501
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LbW507ECgs5Vap0r1Vh_Fj
        subject_person_id: p_Dg27moF3SbFTVJLWr81o69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 苟氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mir4F-Xaitp1R6t4qFV6Xq
          claim_id: c_LbW507ECgs5Vap0r1Vh_Fj
          source_id: s_BFcUCAd5A_JdcVNTc5hdYG
          stance: supports
          locator: CBDB:282501
          quotation: null
          interpretation_note: CBDB 明确记录的王瑄配偶
          source: &a1
            id: s_BFcUCAd5A_JdcVNTc5hdYG
            source_type: api_record
            title: 中国历代人物传记资料库：苟氏(王瑄妻)（CBDB 282501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282501&o=json
            external_identifier: CBDB:282501
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
        id: c_4vS7mf--rMrbi4r1pmDIko
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Dg27moF3SbFTVJLWr81o69
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ODTIk-KB4bnQgSMjz-QN7
          claim_id: c_4vS7mf--rMrbi4r1pmDIko
          source_id: s_BFcUCAd5A_JdcVNTc5hdYG
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 苟氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 苟氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：苟氏(王瑄妻)（CBDB 282501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282501&o=json)
