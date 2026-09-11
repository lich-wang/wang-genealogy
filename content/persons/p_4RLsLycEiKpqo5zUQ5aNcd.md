---
schema: wang-person/v1
id: p_4RLsLycEiKpqo5zUQ5aNcd
status: active
merged_into: null
display_name: 朱文毓
revision: 1
cbdb_id: 70110
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4CA0yNugAgTbliZT0K5fdd
        subject_person_id: p_4RLsLycEiKpqo5zUQ5aNcd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱文毓
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nN0DA3CKQDoUVQuvYdmh1
          claim_id: c_4CA0yNugAgTbliZT0K5fdd
          source_id: s_GVJvIH4CcxnwM3zSi3NKhf
          stance: supports
          locator: CBDB:70110
          quotation: null
          interpretation_note: CBDB 明确记录的王鉦配偶
          source: &a1
            id: s_GVJvIH4CcxnwM3zSi3NKhf
            source_type: api_record
            title: 中国历代人物传记资料库：朱文毓（CBDB 70110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70110&o=json
            external_identifier: CBDB:70110
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
        id: c_6nrGGHHk79MtNldjXKkaMp
        subject_person_id: p_7Gxk8QMPabHLFQZtQCAKKy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4RLsLycEiKpqo5zUQ5aNcd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vF6r_u4Lj1Mn3GCuzkJAbN
          claim_id: c_6nrGGHHk79MtNldjXKkaMp
          source_id: s_GVJvIH4CcxnwM3zSi3NKhf
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1370, HuWenKai #275：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7Gxk8QMPabHLFQZtQCAKKy
        status: active
        display_name: 王鉦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱文毓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 朱文毓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7Gxk8QMPabHLFQZtQCAKKy | 王鉦 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱文毓（CBDB 70110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70110&o=json)
