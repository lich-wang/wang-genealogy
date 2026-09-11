---
schema: wang-person/v1
id: p_CvexZGJpSfjjALu2joPK1N
status: active
merged_into: null
display_name: 王瑄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t3ahXF8VDP29jxUNAtScA7
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8HhFrN6mKDQ3KjBrhCG535
          claim_id: c_t3ahXF8VDP29jxUNAtScA7
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: CBDB:126752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126752）
          source: &a1
            id: s_Yy8BuZ9UTECH2SA99gjmDH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 126752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json
            external_identifier: CBDB:126752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7UyNAtw9iSdeRoBynMZgNf
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。明清進士進士，籍贯遂寧，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ifsn27XshzWf1KZrLyCt0Z
          claim_id: c_7UyNAtw9iSdeRoBynMZgNf
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: CBDB:126752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__oyCQu0QcnbomUMzz6GJPD
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEh4RHPQAaFC5WzQy7Qebi
          claim_id: c__oyCQu0QcnbomUMzz6GJPD
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        status: active
        display_name: 王言
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_Dg27moF3SbFTVJLWr81o69
        status: active
        display_name: 苟氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KPhzbc4oMSt1U3dMu0SpIA
        subject_person_id: p_vTiLkryjy9ET11XHMxwRJR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VhtjH4ybS-gaoINhR2jWck
          claim_id: c_KPhzbc4oMSt1U3dMu0SpIA
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vTiLkryjy9ET11XHMxwRJR
        status: active
        display_name: 王清宇
        merged_into_person_id: null
    - claim:
        id: c_npQ5fPKhsEY49JShmR5iI9
        subject_person_id: p_y6k5bbhVEm5GUb8nPt89ho
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTHQr5KlKpOd70dsFCiw8k
          claim_id: c_npQ5fPKhsEY49JShmR5iI9
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y6k5bbhVEm5GUb8nPt89ho
        status: active
        display_name: 王同孝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。明清進士進士，籍贯遂寧，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ws6vwZFsXZUpBYjSrkcdGJ | 王言 | accepted |
| spouses | p_Dg27moF3SbFTVJLWr81o69 | 苟氏 | accepted |
| ancestors | p_vTiLkryjy9ET11XHMxwRJR | 王清宇 | accepted |
| ancestors | p_y6k5bbhVEm5GUb8nPt89ho | 王同孝 | accepted |

## 外部来源

- [中国历代人物传记资料库：苟氏(王瑄妻)（CBDB 282501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282501&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 126752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json)
