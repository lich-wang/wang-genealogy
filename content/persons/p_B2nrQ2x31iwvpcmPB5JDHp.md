---
schema: wang-person/v1
id: p_B2nrQ2x31iwvpcmPB5JDHp
status: active
merged_into: null
display_name: 王軏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FabL7FA2DrTFmyWq9FMUUp
        subject_person_id: p_B2nrQ2x31iwvpcmPB5JDHp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e5nuWkij1JRaZuxCd93e22
          claim_id: c_FabL7FA2DrTFmyWq9FMUUp
          source_id: s_W12URNw28b1WDkQuw8foLi
          stance: supports
          locator: CBDB:68281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68281）
          source: &a1
            id: s_W12URNw28b1WDkQuw8foLi
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 68281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68281&o=json
            external_identifier: CBDB:68281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6YdqFNc54dEYjsCb1GRPNx
        subject_person_id: p_B2nrQ2x31iwvpcmPB5JDHp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏，明人物。明清進士進士，籍贯江都，入仕進士，曾任兵部尚書、布政使司左參議、布政使司左參政。（中国历代人物传记资料库 CBDB 68281）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RYREfm29ZMS-y-dxwfo3Kf
          claim_id: c_6YdqFNc54dEYjsCb1GRPNx
          source_id: s_W12URNw28b1WDkQuw8foLi
          stance: supports
          locator: CBDB:68281
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

# 王軏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軏 | accepted |
| bio.summary | 王軏，明人物。明清進士進士，籍贯江都，入仕進士，曾任兵部尚書、布政使司左參議、布政使司左參政。（中国历代人物传记资料库 CBDB 68281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軏（CBDB 68281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68281&o=json)
