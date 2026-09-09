---
schema: wang-person/v1
id: p_ZrCm5Ac1MEKv3HBn2XLnW1
status: active
merged_into: null
display_name: 王垂佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YytkDZSM1JLDYHkA5jF2iL
        subject_person_id: p_ZrCm5Ac1MEKv3HBn2XLnW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rzRpgbRifanwAvyVNZSBt
          claim_id: c_YytkDZSM1JLDYHkA5jF2iL
          source_id: s_yJp3Nfp8FcZbXmCqbH7YH3
          stance: supports
          locator: CBDB:547408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547408）
          source: &a1
            id: s_yJp3Nfp8FcZbXmCqbH7YH3
            source_type: api_record
            title: 中国历代人物传记资料库：王垂佑（CBDB 547408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547408&o=json
            external_identifier: CBDB:547408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1rz16rP36uv2FZ7E4BApM5
        subject_person_id: p_ZrCm5Ac1MEKv3HBn2XLnW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZFfZCKaeLmzSkLAEL3792m
          claim_id: c_1rz16rP36uv2FZ7E4BApM5
          source_id: s_yJp3Nfp8FcZbXmCqbH7YH3
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

# 王垂佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垂佑 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垂佑（CBDB 547408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547408&o=json)
