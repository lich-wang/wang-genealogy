---
schema: wang-person/v1
id: p_3jAPx9Wof5hKaF1txYh3pp
status: active
merged_into: null
display_name: 王之佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BXjQ1eZnaFBxfnAftinZDT
        subject_person_id: p_3jAPx9Wof5hKaF1txYh3pp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6g6ZBWMerbrRge9kLfCwa8
          claim_id: c_BXjQ1eZnaFBxfnAftinZDT
          source_id: s_BqPFKMDRHWGdud3EZ2gJoR
          stance: supports
          locator: CBDB:71351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71351）
          source: &a1
            id: s_BqPFKMDRHWGdud3EZ2gJoR
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 71351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71351&o=json
            external_identifier: CBDB:71351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E1zC1guspL1KoNUdVbtuGj
        subject_person_id: p_3jAPx9Wof5hKaF1txYh3pp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJUbpZSf2h7K85ZvCCUx6L
          claim_id: c_E1zC1guspL1KoNUdVbtuGj
          source_id: s_BqPFKMDRHWGdud3EZ2gJoR
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
        id: c_Sg8xFw144CgPJSFFG1wisF
        subject_person_id: p_3jAPx9Wof5hKaF1txYh3pp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XH5HKoCM44UjG1mRDYWUNx
          claim_id: c_Sg8xFw144CgPJSFFG1wisF
          source_id: s_BqPFKMDRHWGdud3EZ2gJoR
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
  ancestors: []
  descendants: []
  other: []
---

# 王之佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之佐 | accepted |
| birth.date | 1790年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之佐（CBDB 71351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71351&o=json)
