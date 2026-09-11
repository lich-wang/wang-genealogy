---
schema: wang-person/v1
id: p_bNDLTW3gYoA1JcLjYeRCQ2
status: active
merged_into: null
display_name: 王佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UFLVPxo2Pc8cRjVqPK3txW
        subject_person_id: p_bNDLTW3gYoA1JcLjYeRCQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTDXHQiSsgD6sKr8rEmfHA
          claim_id: c_UFLVPxo2Pc8cRjVqPK3txW
          source_id: s_deCobLCvUzGox1VDRkmCbx
          stance: supports
          locator: CBDB:213744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213744）
          source: &a1
            id: s_deCobLCvUzGox1VDRkmCbx
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 213744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213744&o=json
            external_identifier: CBDB:213744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fSdmy5bfAEym8HsFzfQQd8
        subject_person_id: p_bNDLTW3gYoA1JcLjYeRCQ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213744）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q9TS0dfSIGvt08wW4OADfK
          claim_id: c_fSdmy5bfAEym8HsFzfQQd8
          source_id: s_deCobLCvUzGox1VDRkmCbx
          stance: supports
          locator: CBDB:213744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 213744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213744&o=json)
