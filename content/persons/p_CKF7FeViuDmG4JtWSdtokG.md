---
schema: wang-person/v1
id: p_CKF7FeViuDmG4JtWSdtokG
status: active
merged_into: null
display_name: 蘇氏
revision: 1
cbdb_id: 148216
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3_QlN-PZphFvwekYREbLoK
        subject_person_id: p_CKF7FeViuDmG4JtWSdtokG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x-aZq0yMPhG6TD47Ndz2R8
          claim_id: c_3_QlN-PZphFvwekYREbLoK
          source_id: s_UwePw-5Kf3wn82guVKMHT8
          stance: supports
          locator: CBDB:148216
          quotation: null
          interpretation_note: CBDB 明确记录的王端配偶
          source: &a1
            id: s_UwePw-5Kf3wn82guVKMHT8
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王端妻)（CBDB 148216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148216&o=json
            external_identifier: CBDB:148216
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
        id: c_aNIIviLD0rYwQIkpJ9sGFe
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CKF7FeViuDmG4JtWSdtokG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s4s9pdKqPIi6aB-nGe1g5N
          claim_id: c_aNIIviLD0rYwQIkpJ9sGFe
          source_id: s_UwePw-5Kf3wn82guVKMHT8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 36：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_igdQuKMftZdo9KJqFgfBZY
        status: active
        display_name: 王端
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蘇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蘇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_igdQuKMftZdo9KJqFgfBZY | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王端妻)（CBDB 148216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148216&o=json)
