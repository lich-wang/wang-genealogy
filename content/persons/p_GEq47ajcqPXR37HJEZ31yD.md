---
schema: wang-person/v1
id: p_GEq47ajcqPXR37HJEZ31yD
status: active
merged_into: null
display_name: 高氏
revision: 1
cbdb_id: 159952
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_OoYf1EdWt-fwLp_ZET2r3C
        subject_person_id: p_GEq47ajcqPXR37HJEZ31yD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PHOtBcfbH4RZshxxOyLkQ
          claim_id: c_OoYf1EdWt-fwLp_ZET2r3C
          source_id: s_bOZoc-JnWGOePy923TOZNY
          stance: supports
          locator: CBDB:159952
          quotation: null
          interpretation_note: CBDB 明确记录的王公素配偶
          source: &a1
            id: s_bOZoc-JnWGOePy923TOZNY
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王公素妻)（CBDB 159952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159952&o=json
            external_identifier: CBDB:159952
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
        id: c_CW4s3I7w0VL4b2tXNf8aSQ
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GEq47ajcqPXR37HJEZ31yD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gy3RlgIuoWrQEbiq0KqpJ6
          claim_id: c_CW4s3I7w0VL4b2tXNf8aSQ
          source_id: s_bOZoc-JnWGOePy923TOZNY
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_buHPPD7o3Zg7opBbsnKMQ6
        status: active
        display_name: 王公素
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 高氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_buHPPD7o3Zg7opBbsnKMQ6 | 王公素 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王公素妻)（CBDB 159952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159952&o=json)
