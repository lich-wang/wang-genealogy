---
schema: wang-person/v1
id: p_uH3FpppC9zy3QgMqbzW5AL
status: active
merged_into: null
display_name: 某氏
revision: 1
cbdb_id: 134604
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zln1oqYqsqBFH5hPaxrZdM
        subject_person_id: p_uH3FpppC9zy3QgMqbzW5AL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UT4agHmYh_xAakZfwCG-6x
          claim_id: c_zln1oqYqsqBFH5hPaxrZdM
          source_id: s_gPPmkS50kejAaNDVbeb_XZ
          stance: supports
          locator: CBDB:134604
          quotation: null
          interpretation_note: CBDB 明确记录的王良配偶
          source: &a1
            id: s_gPPmkS50kejAaNDVbeb_XZ
            source_type: api_record
            title: 中国历代人物传记资料库：某氏(王良妻)（CBDB 134604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134604&o=json
            external_identifier: CBDB:134604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
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
        id: c_gLEPBJVaCAOhLmCziPrlmm
        subject_person_id: p_uH3FpppC9zy3QgMqbzW5AL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_17LFViQqC7kDQcKC7Pxwru
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybwskdOV5u6i772gli-Fbh
          claim_id: c_gLEPBJVaCAOhLmCziPrlmm
          source_id: s_gPPmkS50kejAaNDVbeb_XZ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2497：丈夫"
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_17LFViQqC7kDQcKC7Pxwru
        status: active
        display_name: 王良
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 某氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 某氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_17LFViQqC7kDQcKC7Pxwru | 王良 | accepted |

## 外部来源

- [中国历代人物传记资料库：某氏(王良妻)（CBDB 134604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134604&o=json)
