---
schema: wang-person/v1
id: p_Bhku7LXKrphWSf7fyoW8hh
status: active
merged_into: null
display_name: 王家棟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A25jsXr6M2sApvHipQrqde
        subject_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ck9vSwQ2qG8qDS8UJDxdNW
          claim_id: c_A25jsXr6M2sApvHipQrqde
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
          stance: supports
          locator: CBDB:206050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206050）
          source: &a1
            id: s_7YzPmeQaASL2r7rYU3xfW1
            source_type: api_record
            title: 中国历代人物传记资料库：王家棟（CBDB 206050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206050&o=json
            external_identifier: CBDB:206050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FCkE9Y4jPSVjQkeMgFuHVa
        subject_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kaMegTQ3nfUhtwuwiTFSvk
          claim_id: c_FCkE9Y4jPSVjQkeMgFuHVa
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
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
        id: c_hB89ECbTqvC3TiPKFtG1Qq
        subject_person_id: p_Bhku7LXKrphWSf7fyoW8hh
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
        - id: cs_xsXGjy7z8x5d5U9RrcZ6c4
          claim_id: c_hB89ECbTqvC3TiPKFtG1Qq
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
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
        id: c_ySWuBZqjJptvEaRuMbdZsf
        subject_person_id: p_C95v2bmBPCZC14CCLuDTq6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1F3XN1VJIZNkZShgJVbkn
          claim_id: c_ySWuBZqjJptvEaRuMbdZsf
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C95v2bmBPCZC14CCLuDTq6
        status: active
        display_name: 王滔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_le7GSvw_uqDufAdqDFgy7g
        subject_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2UjePX4jKrLeLARaQ48fda
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcMht81AofwsRvkUiiw1in
          claim_id: c_le7GSvw_uqDufAdqDFgy7g
          source_id: s_JoIj8dA9N0zm5ScQaRwJEt
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JoIj8dA9N0zm5ScQaRwJEt
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王家棟妻)（CBDB 212652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212652&o=json
            external_identifier: CBDB:212652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2UjePX4jKrLeLARaQ48fda
        status: active
        display_name: 沈氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_-si33NYitEvqFexFk-kQrB
        subject_person_id: p_gYCzF6vom9uRciu3ySukCo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_91k1H1plZirUDnUTwq1_f-
          claim_id: c_-si33NYitEvqFexFk-kQrB
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gYCzF6vom9uRciu3ySukCo
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_-s_z6wi2qwnEWupCHyV8IB
        subject_person_id: p_N3ZUqsCoTqA4YCEdrCHAAq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i1fx-fQR8cJ47aqwH2MS3_
          claim_id: c_-s_z6wi2qwnEWupCHyV8IB
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N3ZUqsCoTqA4YCEdrCHAAq
        status: active
        display_name: 王𦒅
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王家棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家棟 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C95v2bmBPCZC14CCLuDTq6 | 王滔 | accepted |
| spouses | p_2UjePX4jKrLeLARaQ48fda | 沈氏 | accepted |
| ancestors | p_gYCzF6vom9uRciu3ySukCo | 王輔 | accepted |
| ancestors | p_N3ZUqsCoTqA4YCEdrCHAAq | 王𦒅 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王家棟妻)（CBDB 212652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212652&o=json)
- [中国历代人物传记资料库：王家棟（CBDB 206050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206050&o=json)
