---
schema: wang-person/v1
id: p_NsuLYWGMDN4Ho6Lw73DB78
status: active
merged_into: null
display_name: 揚氏
revision: 1
cbdb_id: 166232
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1DVPV0HJpEUzKtuqouQCN9
        subject_person_id: p_NsuLYWGMDN4Ho6Lw73DB78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 揚氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x91IMc9DQoZd66eDj9cPBx
          claim_id: c_1DVPV0HJpEUzKtuqouQCN9
          source_id: s_-4w4i5PxYz1jZK6cFSJDA3
          stance: supports
          locator: CBDB:166232
          quotation: null
          interpretation_note: CBDB 明确记录的王海朝配偶
          source: &a1
            id: s_-4w4i5PxYz1jZK6cFSJDA3
            source_type: api_record
            title: 中国历代人物传记资料库：揚氏(王海朝妻)（CBDB 166232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166232&o=json
            external_identifier: CBDB:166232
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
        id: c_kt1rajZ1dR422_MdH7QTcN
        subject_person_id: p_GCUbRsVW8TQC8UPFJ4RVue
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NsuLYWGMDN4Ho6Lw73DB78
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SGtWhMLu8ll6dkZD3WgPHd
          claim_id: c_kt1rajZ1dR422_MdH7QTcN
          source_id: s_-4w4i5PxYz1jZK6cFSJDA3
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe65：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GCUbRsVW8TQC8UPFJ4RVue
        status: active
        display_name: 王海朝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 揚氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 揚氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GCUbRsVW8TQC8UPFJ4RVue | 王海朝 | accepted |

## 外部来源

- [中国历代人物传记资料库：揚氏(王海朝妻)（CBDB 166232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166232&o=json)
