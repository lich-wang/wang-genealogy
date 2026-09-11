---
schema: wang-person/v1
id: p_XWgo6Q1nhAmPTc3Xg4eENs
status: active
merged_into: null
display_name: 王翀
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2RStsbLuHvLSXzf1bcmoDb
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_apQRj7zVYNHBbHBQpjpYX6
          claim_id: c_2RStsbLuHvLSXzf1bcmoDb
          source_id: s_P2iNnHizE4gq3RD2ivrLtc
          stance: supports
          locator: CBDB:200923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200923）
          source: &a1
            id: s_P2iNnHizE4gq3RD2ivrLtc
            source_type: api_record
            title: 中国历代人物传记资料库：王翀（CBDB 200923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200923&o=json
            external_identifier: CBDB:200923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7d8Qb3MFABzBUwCDMNKGEr
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fadPYHS6FJoQ5KSfqLocyt
          claim_id: c_7d8Qb3MFABzBUwCDMNKGEr
          source_id: s_P2iNnHizE4gq3RD2ivrLtc
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
        id: c_M2xFDNJ37M1tB17AH5TVzQ
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翀（生于1457年），明人物。明清進士進士，籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 200923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ze8VEKdg2rCM_ibA-qo29X
          claim_id: c_M2xFDNJ37M1tB17AH5TVzQ
          source_id: s_P2iNnHizE4gq3RD2ivrLtc
          stance: supports
          locator: CBDB:200923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f_mVBER0JpmdngZ4anx_Pp
        subject_person_id: p_y6LBWWQUDfvbAme5hkV5bP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-u8_p_mxT4mbs98WeyokjN
          claim_id: c_f_mVBER0JpmdngZ4anx_Pp
          source_id: s_V7bBK9Z5MA2Mm83Cscu51D
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V7bBK9Z5MA2Mm83Cscu51D
            source_type: api_record
            title: 中国历代人物传记资料库：王大韶（CBDB 264656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264656&o=json
            external_identifier: CBDB:264656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_y6LBWWQUDfvbAme5hkV5bP
        status: active
        display_name: 王大韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pRP5CaQqV9t7x4v83GTNDE
        subject_person_id: p_1nAYMGDjjS8xNNpA1JXED9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sSYzhddAebUJXK2WjYd6FM
          claim_id: c_pRP5CaQqV9t7x4v83GTNDE
          source_id: s_jJxomVxefBqRRG62oQwD63
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jJxomVxefBqRRG62oQwD63
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 264655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264655&o=json
            external_identifier: CBDB:264655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1nAYMGDjjS8xNNpA1JXED9
        status: active
        display_name: 王翼
        merged_into_person_id: null
    - claim:
        id: c_gA0SU4TVursccXXQRv4Z3K
        subject_person_id: p_xJqqBPc7ko94ZXe3uyJXCb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_tQYFV5x-3BnHHPc5-5Tu
          claim_id: c_gA0SU4TVursccXXQRv4Z3K
          source_id: s_UeJCKmJwevEyCVeULHLihT
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UeJCKmJwevEyCVeULHLihT
            source_type: api_record
            title: 中国历代人物传记资料库：王應貞（CBDB 264654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264654&o=json
            external_identifier: CBDB:264654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xJqqBPc7ko94ZXe3uyJXCb
        status: active
        display_name: 王應貞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王翀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翀 | accepted |
| birth.date | 1457年 | accepted |
| bio.summary | 王翀（生于1457年），明人物。明清進士進士，籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 200923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y6LBWWQUDfvbAme5hkV5bP | 王大韶 | accepted |
| ancestors | p_1nAYMGDjjS8xNNpA1JXED9 | 王翼 | accepted |
| ancestors | p_xJqqBPc7ko94ZXe3uyJXCb | 王應貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翀（CBDB 200923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200923&o=json)
- [中国历代人物传记资料库：王大韶（CBDB 264656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264656&o=json)
- [中国历代人物传记资料库：王翼（CBDB 264655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264655&o=json)
- [中国历代人物传记资料库：王應貞（CBDB 264654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264654&o=json)
