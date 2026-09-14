---
schema: wang-person/v1
id: p_FXTUX1KirgmPw4nA2wx9vP
status: active
merged_into: null
display_name: 王範
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hy1haezryhAC15qr2uMNff
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hu7X8yX3htGRrss72w6kN3
          claim_id: c_hy1haezryhAC15qr2uMNff
          source_id: s_5WtDimXSmSqKDyXiDdRsw6
          stance: supports
          locator: CBDB:198805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198805）
          source: &a1
            id: s_5WtDimXSmSqKDyXiDdRsw6
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 198805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198805&o=json
            external_identifier: CBDB:198805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ap28DyEnTvcukX2Pm56iL2
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1434年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPQ1a4aNtjF5MFF4Bp9JBi
          claim_id: c_ap28DyEnTvcukX2Pm56iL2
          source_id: s_5WtDimXSmSqKDyXiDdRsw6
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
        id: c_S8KwmBYbKK2kP75CLUNtZ9
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王範（生于1434年），明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 198805）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JaWJaZqmHz_SYc3ki-9fRY
          claim_id: c_S8KwmBYbKK2kP75CLUNtZ9
          source_id: s_5WtDimXSmSqKDyXiDdRsw6
          stance: supports
          locator: CBDB:198805
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N-KEe1yozGFUakLqTBhQkr
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDV5kii6E16mGRnSR9x_Ut
          claim_id: c_N-KEe1yozGFUakLqTBhQkr
          source_id: s_uCN3wGo158FJQEmPLw7mUc
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uCN3wGo158FJQEmPLw7mUc
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 318707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318707&o=json
            external_identifier: CBDB:318707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hqCuRGLw8xBKqFLCQNmJMn
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ia0VeTq6TIBY3BDOhK8GkH
        subject_person_id: p_659gpM9wCpYQqW2bC9Lr2T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_by3bcwNh2dXn1ywhH9Bx9f
          claim_id: c_ia0VeTq6TIBY3BDOhK8GkH
          source_id: s_1pb5X8kEN9TPVKRZ9FnArJ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1pb5X8kEN9TPVKRZ9FnArJ
            source_type: api_record
            title: 中国历代人物传记资料库：王福榮（CBDB 318696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318696&o=json
            external_identifier: CBDB:318696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_659gpM9wCpYQqW2bC9Lr2T
        status: active
        display_name: 王福榮
        merged_into_person_id: null
    - claim:
        id: c_lSMt5XreAveAh2lDsRkhAw
        subject_person_id: p_VV2haeZm9131FmjoQ4a1Vb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0qNLQv6IrLHONoWpIEn1pz
          claim_id: c_lSMt5XreAveAh2lDsRkhAw
          source_id: s_eCbDWoDrqqhs8uKxoPEkRZ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eCbDWoDrqqhs8uKxoPEkRZ
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 318685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318685&o=json
            external_identifier: CBDB:318685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VV2haeZm9131FmjoQ4a1Vb
        status: active
        display_name: 王玉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_WldJ_Pi0-h1gOOAGJEUOcw
        subject_person_id: p_9iTs1s3624HrJtsQztCydR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iTYIAOpacZHErUgkNYVIjT
          claim_id: c_WldJ_Pi0-h1gOOAGJEUOcw
          source_id: s_XC1d_fBQ8RBMGfuMjtg_1l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XC1d_fBQ8RBMGfuMjtg_1l
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 318796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json
            external_identifier: CBDB:318796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9iTs1s3624HrJtsQztCydR
        status: active
        display_name: 王懋
        merged_into_person_id: null
    - claim:
        id: c_rMTOIZ0TtmGkx9slrhMtmn
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U9RYV6ZjsEd67mdtzbg7Yi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QVc-jHWr71NmAlt43k05Uw
          claim_id: c_rMTOIZ0TtmGkx9slrhMtmn
          source_id: s_SPEMhtUSHuXvt_OzqmSZch
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SPEMhtUSHuXvt_OzqmSZch
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 318751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318751&o=json
            external_identifier: CBDB:318751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U9RYV6ZjsEd67mdtzbg7Yi
        status: active
        display_name: 王聰
        merged_into_person_id: null
    - claim:
        id: c_2ecpInJDvxmYv8zR45U7kK
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UpbbBvT5rHmgArwuMmq5KB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Mcjlwm5eT7GXfK7-Dkmfd
          claim_id: c_2ecpInJDvxmYv8zR45U7kK
          source_id: s_XNRNrfJVzSYwmD6Gntlj5o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XNRNrfJVzSYwmD6Gntlj5o
            source_type: api_record
            title: 中国历代人物传记资料库：王慧（CBDB 318774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318774&o=json
            external_identifier: CBDB:318774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UpbbBvT5rHmgArwuMmq5KB
        status: active
        display_name: 王慧
        merged_into_person_id: null
    - claim:
        id: c_87Euyvpk1ac7NAeyktGhEQ
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nTPRuTd8oPJqdxUNK7k5o4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lBirlpqZrwlriFHOzZEAnw
          claim_id: c_87Euyvpk1ac7NAeyktGhEQ
          source_id: s_GPaTBUFt5uFRptCWXZYi88
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GPaTBUFt5uFRptCWXZYi88
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 318807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318807&o=json
            external_identifier: CBDB:318807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nTPRuTd8oPJqdxUNK7k5o4
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_DH_yLTFprkmYdGh-itChSz
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s6cUm7gP1NGv9Y6ZaAAGr3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tkld8jolSgIN1b_Zk8qUZY
          claim_id: c_DH_yLTFprkmYdGh-itChSz
          source_id: s_nqy37ifCDCGZyR7pCQsKGg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nqy37ifCDCGZyR7pCQsKGg
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 318762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318762&o=json
            external_identifier: CBDB:318762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s6cUm7gP1NGv9Y6ZaAAGr3
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_OoFz3S11Ftw5OfBoou_vDc
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uat2FEz33LL2tVVNR7MiLh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNmRHyPb0rykxE19zf-L4t
          claim_id: c_OoFz3S11Ftw5OfBoou_vDc
          source_id: s_inxKGvbdBNOZO0GiX_S7Nm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_inxKGvbdBNOZO0GiX_S7Nm
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 318785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json
            external_identifier: CBDB:318785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uat2FEz33LL2tVVNR7MiLh
        status: active
        display_name: 王普
        merged_into_person_id: null
---

# 王範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王範 | accepted |
| birth.date | 1434年 | accepted |
| bio.summary | 王範（生于1434年），明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 198805） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hqCuRGLw8xBKqFLCQNmJMn | 王信 | accepted |
| ancestors | p_659gpM9wCpYQqW2bC9Lr2T | 王福榮 | accepted |
| ancestors | p_VV2haeZm9131FmjoQ4a1Vb | 王玉 | accepted |
| other | p_9iTs1s3624HrJtsQztCydR | 王懋 | accepted |
| other | p_U9RYV6ZjsEd67mdtzbg7Yi | 王聰 | accepted |
| other | p_UpbbBvT5rHmgArwuMmq5KB | 王慧 | accepted |
| other | p_nTPRuTd8oPJqdxUNK7k5o4 | 王憲 | accepted |
| other | p_s6cUm7gP1NGv9Y6ZaAAGr3 | 王忠 | accepted |
| other | p_uat2FEz33LL2tVVNR7MiLh | 王普 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 318751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318751&o=json)
- [中国历代人物传记资料库：王範（CBDB 198805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198805&o=json)
- [中国历代人物传记资料库：王福榮（CBDB 318696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318696&o=json)
- [中国历代人物传记资料库：王慧（CBDB 318774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318774&o=json)
- [中国历代人物传记资料库：王懋（CBDB 318796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json)
- [中国历代人物传记资料库：王普（CBDB 318785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json)
- [中国历代人物传记资料库：王憲（CBDB 318807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318807&o=json)
- [中国历代人物传记资料库：王信（CBDB 318707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318707&o=json)
- [中国历代人物传记资料库：王玉（CBDB 318685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318685&o=json)
- [中国历代人物传记资料库：王忠（CBDB 318762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318762&o=json)
