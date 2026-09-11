---
schema: wang-person/v1
id: p_DpuSp4mmLYMfmUMioXctjR
status: active
merged_into: null
display_name: 王堯封
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qowioZXvNLnZcFvnjDDffK
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qw3MCQGuJRUJ6Zf5CHTsLQ
          claim_id: c_qowioZXvNLnZcFvnjDDffK
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: CBDB:126717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126717）
          source: &a1
            id: s_uixiEQGafMsgEK7QifZFvn
            source_type: api_record
            title: 中国历代人物传记资料库：王堯封（CBDB 126717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126717&o=json
            external_identifier: CBDB:126717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6qMHnL8wmxhFczYk6j43vm
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNmoPQibuDyLgGeSh4VuUY
          claim_id: c_6qMHnL8wmxhFczYk6j43vm
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HG2Mw3Eq5dvRD1mg1JZJPR
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41Tm43FPgmkBiJnitN8PfS
          claim_id: c_HG2Mw3Eq5dvRD1mg1JZJPR
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4zMbC26CdzVsQii3ixzsA
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
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
        - id: cs_zsk35W24BK61gfdb15Ktd2
          claim_id: c_U4zMbC26CdzVsQii3ixzsA
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_N3FzE8E0J-6n27A8gBulpj
        subject_person_id: p_aewufbD64G6Qk8r5aHNdhe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ys-jYOFMV1zYBq9DExUkw3
          claim_id: c_N3FzE8E0J-6n27A8gBulpj
          source_id: s_N13F8FSUcxHs1MGFnPWZKn
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N13F8FSUcxHs1MGFnPWZKn
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 222807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222807&o=json
            external_identifier: CBDB:222807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aewufbD64G6Qk8r5aHNdhe
        status: active
        display_name: 王瀚
        merged_into_person_id: null
    - claim:
        id: c_495c8qXsJ6JJnZn6XJMGDG
        subject_person_id: p_inPFV8Tvc2PR92pWnYK5AT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUdxqzcr_iX6qqTYxg4ldc
          claim_id: c_495c8qXsJ6JJnZn6XJMGDG
          source_id: s_v3KjvDPd1y8ZB5sxnWkn5T
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3KjvDPd1y8ZB5sxnWkn5T
            source_type: api_record
            title: 中国历代人物传记资料库：王㮣（CBDB 222808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222808&o=json
            external_identifier: CBDB:222808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_inPFV8Tvc2PR92pWnYK5AT
        status: active
        display_name: 王㮣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王堯封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯封 | accepted |
| birth.date | 1543年 | accepted |
| death.date | 1613年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_aewufbD64G6Qk8r5aHNdhe | 王瀚 | accepted |
| ancestors | p_inPFV8Tvc2PR92pWnYK5AT | 王㮣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 222807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222807&o=json)
- [中国历代人物传记资料库：王堯封（CBDB 126717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126717&o=json)
- [中国历代人物传记资料库：王㮣（CBDB 222808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222808&o=json)
