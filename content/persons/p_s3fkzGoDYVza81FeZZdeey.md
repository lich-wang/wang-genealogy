---
schema: wang-person/v1
id: p_s3fkzGoDYVza81FeZZdeey
status: active
merged_into: null
display_name: 徐剛振
revision: 1
cbdb_id: 121054
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxrtsT8WSrbnGDFz3qnJnw
        subject_person_id: p_s3fkzGoDYVza81FeZZdeey
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐剛振，清人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 121054）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zxglli7UxlbxDj4WYUC3Sn
          claim_id: c_LxrtsT8WSrbnGDFz3qnJnw
          source_id: s_UFy7YcMi5beg8w7DHN5Wa0
          stance: supports
          locator: CBDB:121054
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UFy7YcMi5beg8w7DHN5Wa0
            source_type: api_record
            title: 中国历代人物传记资料库：徐剛振（CBDB 121054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121054&o=json
            external_identifier: CBDB:121054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_coFRvSrinpGIHaA4XVHkER
        subject_person_id: p_s3fkzGoDYVza81FeZZdeey
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐剛振
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-F5iSR6NOrAAOhbNgzBcI4
          claim_id: c_coFRvSrinpGIHaA4XVHkER
          source_id: s_UFy7YcMi5beg8w7DHN5Wa0
          stance: supports
          locator: CBDB:121054
          quotation: null
          interpretation_note: CBDB 明确记录的王元珠配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qLkg_a3qJGYINoRom7pWBl
        subject_person_id: p_YMKWDiBR9Mv6EzeX7huhe1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s3fkzGoDYVza81FeZZdeey
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pyAmeXlJCQElvlNEJXfDH6
          claim_id: c_qLkg_a3qJGYINoRom7pWBl
          source_id: s_UFy7YcMi5beg8w7DHN5Wa0
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3936, HuWenKai #231：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YMKWDiBR9Mv6EzeX7huhe1
        status: active
        display_name: 王元珠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐剛振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐剛振，清人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 121054） | accepted |
| name.primary | 徐剛振 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YMKWDiBR9Mv6EzeX7huhe1 | 王元珠 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐剛振（CBDB 121054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121054&o=json)
