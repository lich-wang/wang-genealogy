---
schema: wang-person/v1
id: p_hqCuRGLw8xBKqFLCQNmJMn
status: active
merged_into: null
display_name: 王信
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nkzuC3BjH9Lf8RCMsML5r5
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y1HWU3hMiPXQLjAJen47tY
          claim_id: c_nkzuC3BjH9Lf8RCMsML5r5
          source_id: s_uCN3wGo158FJQEmPLw7mUc
          stance: supports
          locator: CBDB:318707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318707）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_66UeqxCEHHZdfkyX8eirqK
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318707）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__JUHf7RTzU10fd7aLQA39O
          claim_id: c_66UeqxCEHHZdfkyX8eirqK
          source_id: s_uCN3wGo158FJQEmPLw7mUc
          stance: supports
          locator: CBDB:318707
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_FXTUX1KirgmPw4nA2wx9vP
        status: active
        display_name: 王範
        merged_into_person_id: null
    - claim:
        id: c_ZlVbijkfd1k-akwiJGwian
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9iTs1s3624HrJtsQztCydR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8INtC16ApotvbOS_yoidgI
          claim_id: c_ZlVbijkfd1k-akwiJGwian
          source_id: s_XC1d_fBQ8RBMGfuMjtg_1l
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王懋 之父／母。
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
        id: c_nJhx16qqiHfQ9SfWpH_ZxS
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9RYV6ZjsEd67mdtzbg7Yi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6jfaSUvgHo3bt7gFtnQNjZ
          claim_id: c_nJhx16qqiHfQ9SfWpH_ZxS
          source_id: s_SPEMhtUSHuXvt_OzqmSZch
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王範 为同胞（CBDB 记「弟」），王範 之父／母即 王聰 之父／母。
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
        id: c_6cW2wj9NS_yIJ_JwGryAi7
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UpbbBvT5rHmgArwuMmq5KB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpOwTAIcbxOSDIPn5wFLUR
          claim_id: c_6cW2wj9NS_yIJ_JwGryAi7
          source_id: s_XNRNrfJVzSYwmD6Gntlj5o
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王慧 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王慧 之父／母。
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
        id: c_x0uTOXOB5llv3JMMtps8w3
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nTPRuTd8oPJqdxUNK7k5o4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zjEprCJm6HzAsdIvtUlp2e
          claim_id: c_x0uTOXOB5llv3JMMtps8w3
          source_id: s_GPaTBUFt5uFRptCWXZYi88
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王憲 之父／母。
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
        id: c_iCTuVKK-vNeukTg7N62qLa
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s6cUm7gP1NGv9Y6ZaAAGr3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EoMVYGTMA349WbLCeV2mtr
          claim_id: c_iCTuVKK-vNeukTg7N62qLa
          source_id: s_nqy37ifCDCGZyR7pCQsKGg
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王忠 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王忠 之父／母。
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
        id: c_2A4NnwJRBNZOeiWpYoIY0M
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uat2FEz33LL2tVVNR7MiLh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NX-LYf1_E_S3PkG1xxabBn
          claim_id: c_2A4NnwJRBNZOeiWpYoIY0M
          source_id: s_inxKGvbdBNOZO0GiX_S7Nm
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王普 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王普 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FXTUX1KirgmPw4nA2wx9vP | 王範 | accepted |
| children | p_9iTs1s3624HrJtsQztCydR | 王懋 | accepted |
| children | p_U9RYV6ZjsEd67mdtzbg7Yi | 王聰 | accepted |
| children | p_UpbbBvT5rHmgArwuMmq5KB | 王慧 | accepted |
| children | p_nTPRuTd8oPJqdxUNK7k5o4 | 王憲 | accepted |
| children | p_s6cUm7gP1NGv9Y6ZaAAGr3 | 王忠 | accepted |
| children | p_uat2FEz33LL2tVVNR7MiLh | 王普 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 318751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318751&o=json)
- [中国历代人物传记资料库：王慧（CBDB 318774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318774&o=json)
- [中国历代人物传记资料库：王懋（CBDB 318796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json)
- [中国历代人物传记资料库：王普（CBDB 318785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json)
- [中国历代人物传记资料库：王憲（CBDB 318807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318807&o=json)
- [中国历代人物传记资料库：王信（CBDB 318707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318707&o=json)
- [中国历代人物传记资料库：王忠（CBDB 318762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318762&o=json)
