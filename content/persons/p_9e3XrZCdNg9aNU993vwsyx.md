---
schema: wang-person/v1
id: p_9e3XrZCdNg9aNU993vwsyx
status: active
merged_into: null
display_name: 皇甫氏
revision: 1
cbdb_id: 163063
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e9mTDT17XUjjsatw48dr3X
        subject_person_id: p_9e3XrZCdNg9aNU993vwsyx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 皇甫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YbdaPSO4oUmt7GRyv8aiaw
          claim_id: c_e9mTDT17XUjjsatw48dr3X
          source_id: s_sO8dENOXE275LyVuGM2NWi
          stance: supports
          locator: CBDB:163063
          quotation: null
          interpretation_note: CBDB 明确记录的王基配偶
          source: &a1
            id: s_sO8dENOXE275LyVuGM2NWi
            source_type: api_record
            title: 中国历代人物传记资料库：皇甫氏(王基妻)（CBDB 163063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163063&o=json
            external_identifier: CBDB:163063
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
        id: c_R-GZvH2o7OgcsZppneoDnn
        subject_person_id: p_rzhasUxx6H8R47msKHyXUP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9e3XrZCdNg9aNU993vwsyx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBYy2IvggWXdD1YvrBQzj0
          claim_id: c_R-GZvH2o7OgcsZppneoDnn
          source_id: s_sO8dENOXE275LyVuGM2NWi
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou5：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rzhasUxx6H8R47msKHyXUP
        status: active
        display_name: 王基
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 皇甫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 皇甫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rzhasUxx6H8R47msKHyXUP | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：皇甫氏(王基妻)（CBDB 163063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163063&o=json)
