---
schema: wang-person/v1
id: p_jSQoxKR3z78APeENPtC9EZ
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 151178
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rXlAPyF95tedSh1tP2LvA
        subject_person_id: p_jSQoxKR3z78APeENPtC9EZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_thHzOWRI42e-o9rIHsY_G0
          claim_id: c_1rXlAPyF95tedSh1tP2LvA
          source_id: s_JRTXB_nte9QFTHrt9d60IB
          stance: supports
          locator: CBDB:151178
          quotation: null
          interpretation_note: CBDB 明确记录的王德配偶
          source: &a1
            id: s_JRTXB_nte9QFTHrt9d60IB
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王德妻)（CBDB 151178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151178&o=json
            external_identifier: CBDB:151178
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
        id: c_bADWp1Wm8lriOvA4STGWEV
        subject_person_id: p_VcKqnff8KGP5df8SY7FJso
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jSQoxKR3z78APeENPtC9EZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IcMCwkCgHywDBRs_rmrjTg
          claim_id: c_bADWp1Wm8lriOvA4STGWEV
          source_id: s_JRTXB_nte9QFTHrt9d60IB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 31：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VcKqnff8KGP5df8SY7FJso
        status: active
        display_name: 王德
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VcKqnff8KGP5df8SY7FJso | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王德妻)（CBDB 151178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151178&o=json)
