---
schema: wang-person/v1
id: p_F3EGSiYLHX8KBG731v3oKv
status: active
merged_into: null
display_name: 王修玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_798qz2ghs1f4C5UPLLPoN5
        subject_person_id: p_F3EGSiYLHX8KBG731v3oKv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_58zQuDL893PKg2N1jDEaT3
          claim_id: c_798qz2ghs1f4C5UPLLPoN5
          source_id: s_oGG4RKoRQ1PC8fWrMeA49Q
          stance: supports
          locator: CBDB:568743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568743）
          source: &a1
            id: s_oGG4RKoRQ1PC8fWrMeA49Q
            source_type: api_record
            title: 中国历代人物传记资料库：王修玉（CBDB 568743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568743&o=json
            external_identifier: CBDB:568743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FKd2ao44XXP9AQUjbLwsRv
        subject_person_id: p_F3EGSiYLHX8KBG731v3oKv
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
        - id: cs_dCirZ13DvK8h8yChcHzH39
          claim_id: c_FKd2ao44XXP9AQUjbLwsRv
          source_id: s_oGG4RKoRQ1PC8fWrMeA49Q
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

# 王修玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修玉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修玉（CBDB 568743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568743&o=json)
