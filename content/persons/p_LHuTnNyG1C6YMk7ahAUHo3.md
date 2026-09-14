---
schema: wang-person/v1
id: p_LHuTnNyG1C6YMk7ahAUHo3
status: active
merged_into: null
display_name: 王俊
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NKGawh2dV8H5sXSxP9MhCm
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25EWQVY76QF66CW9qnK1Tj
          claim_id: c_NKGawh2dV8H5sXSxP9MhCm
          source_id: s_ziFYSQ2ruSLKUDGBjHyQau
          stance: supports
          locator: CBDB:271773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271773）
          source: &a1
            id: s_ziFYSQ2ruSLKUDGBjHyQau
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271773&o=json
            external_identifier: CBDB:271773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bRsLLqmZtfSLDu51jjqRbb
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271773）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gszzEiPcXNafG0ZRA5d6z7
          claim_id: c_bRsLLqmZtfSLDu51jjqRbb
          source_id: s_ziFYSQ2ruSLKUDGBjHyQau
          stance: supports
          locator: CBDB:271773
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6W3s7FmtLshtB_n4Y4E0Ht
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkZKzuiGYuk2p425nfhmX6
          claim_id: c_6W3s7FmtLshtB_n4Y4E0Ht
          source_id: s_ziFYSQ2ruSLKUDGBjHyQau
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_stHoVQftjNFmSu9T7T3WAa
        status: active
        display_name: 王昇
        merged_into_person_id: null
    - claim:
        id: c_HAbP1YFdbrmHKUNOBVPlV3
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7zJTA8P44SADgfLmzQmWsp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rgE3_fSWtLPhCGrwkrGdBs
          claim_id: c_HAbP1YFdbrmHKUNOBVPlV3
          source_id: s_KhQlt26UbP6J1ZtusnVOii
          stance: supports
          locator: CBDB：兄弟 王昇（198437）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王興 与 王昇 为同胞（CBDB 记「弟」），王昇 之父／母即 王興 之父／母。
          source:
            id: s_KhQlt26UbP6J1ZtusnVOii
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 271817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271817&o=json
            external_identifier: CBDB:271817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7zJTA8P44SADgfLmzQmWsp
        status: active
        display_name: 王興
        merged_into_person_id: null
    - claim:
        id: c_5DetdgabZOTHXTbPAkWnFq
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UQ6RTfM1eUG5mYfaY1pW9i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cC9qgQEw8p9n1mSjp5OTuy
          claim_id: c_5DetdgabZOTHXTbPAkWnFq
          source_id: s_YX40jBvgBWd8pvTZt91nuo
          stance: supports
          locator: CBDB：兄弟 王昇（198437）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王麟 与 王昇 为同胞（CBDB 记「兄」），王昇 之父／母即 王麟 之父／母。
          source:
            id: s_YX40jBvgBWd8pvTZt91nuo
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 271828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271828&o=json
            external_identifier: CBDB:271828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UQ6RTfM1eUG5mYfaY1pW9i
        status: active
        display_name: 王麟
        merged_into_person_id: null
    - claim:
        id: c_5Rnug0Vg72vg-zDC29ZW6H
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s6y4se8DCW4eukcpENqdMJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G5uXMZSOD9QZSFqJrO1Ub4
          claim_id: c_5Rnug0Vg72vg-zDC29ZW6H
          source_id: s_csG_l9GVk1kI3wch7n2-Gz
          stance: supports
          locator: CBDB：兄弟 王昇（198437）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳 与 王昇 为同胞（CBDB 记「兄」），王昇 之父／母即 王鳳 之父／母。
          source:
            id: s_csG_l9GVk1kI3wch7n2-Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 271839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json
            external_identifier: CBDB:271839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s6y4se8DCW4eukcpENqdMJ
        status: active
        display_name: 王鳳
        merged_into_person_id: null
    - claim:
        id: c_jWgdyzYMBKV7_YrIcCbpI8
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z3W5Kxe67VFh1mAWJB2FDG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d0ce6CIUhdtRCjazjoeKgJ
          claim_id: c_jWgdyzYMBKV7_YrIcCbpI8
          source_id: s_YJ8fFHxKCt7lCiuRR6hF2u
          stance: supports
          locator: CBDB：兄弟 王昇（198437）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王信 与 王昇 为同胞（CBDB 记「弟」），王昇 之父／母即 王信 之父／母。
          source:
            id: s_YJ8fFHxKCt7lCiuRR6hF2u
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 271806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json
            external_identifier: CBDB:271806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z3W5Kxe67VFh1mAWJB2FDG
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271773） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_stHoVQftjNFmSu9T7T3WAa | 王昇 | accepted |
| children | p_7zJTA8P44SADgfLmzQmWsp | 王興 | accepted |
| children | p_UQ6RTfM1eUG5mYfaY1pW9i | 王麟 | accepted |
| children | p_s6y4se8DCW4eukcpENqdMJ | 王鳳 | accepted |
| children | p_z3W5Kxe67VFh1mAWJB2FDG | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 271839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json)
- [中国历代人物传记资料库：王俊（CBDB 271773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271773&o=json)
- [中国历代人物传记资料库：王麟（CBDB 271828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271828&o=json)
- [中国历代人物传记资料库：王信（CBDB 271806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json)
- [中国历代人物传记资料库：王興（CBDB 271817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271817&o=json)
