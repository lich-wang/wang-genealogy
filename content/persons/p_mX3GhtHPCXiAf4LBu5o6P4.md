---
schema: wang-person/v1
id: p_mX3GhtHPCXiAf4LBu5o6P4
status: active
merged_into: null
display_name: 史致蕃
cbdb_id: 62775
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SEa7fVnDLasDfvbHb7z16f
        subject_person_id: p_mX3GhtHPCXiAf4LBu5o6P4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 史致蕃，清人物。明清進士進士，籍贯宛平，入仕進士，曾任布政使、按察使、鄉試考官。（中国历代人物传记资料库 CBDB 62775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1byjulXcC_pT3ie5n1UmD
          claim_id: c_SEa7fVnDLasDfvbHb7z16f
          source_id: s_Fk5PqBFSrCuFK12PLr3b1d
          stance: supports
          locator: CBDB:62775
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fk5PqBFSrCuFK12PLr3b1d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：史致蕃（62775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62775&o=json
            external_identifier: CBDB:62775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_C6fj4jLeSa567LnC3DaMqw
        subject_person_id: p_mX3GhtHPCXiAf4LBu5o6P4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 史致蕃
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YHpsYj8pP9jRRAtHScWajv
          claim_id: c_C6fj4jLeSa567LnC3DaMqw
          source_id: s_CC7x2cYhAh7m1CUb8G1iVZ
          stance: supports
          locator: Q13688950
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_CC7x2cYhAh7m1CUb8G1iVZ
            source_type: api_record
            title: 维基数据：史致蕃（Q13688950）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688950
            external_identifier: Q13688950
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8F%B2%E8%87%B4%E8%95%83
        - id: cs_CumwG8w2QuRHN47KFzf9gu
          claim_id: c_C6fj4jLeSa567LnC3DaMqw
          source_id: s_Fk5PqBFSrCuFK12PLr3b1d
          stance: supports
          locator: CBDB:62775
          quotation: null
          interpretation_note: 导入亲属人物姓名
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
        id: c_6Eq8HbLk4QcLgULavW2vbW
        subject_person_id: p_mX3GhtHPCXiAf4LBu5o6P4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Rqtj2SNyBdvLmz523jMBP7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRMyakkwDvEPU12DNYEyNd
          claim_id: c_6Eq8HbLk4QcLgULavW2vbW
          source_id: s_6RNWqL19YxdULNCXE7RTBw
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6RNWqL19YxdULNCXE7RTBw
            source_type: api_record
            title: 维基数据：王氏（Q13688975）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688975
            external_identifier: Q13688975
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
        - id: cs_BVGJbFLEyLW9kYvS7kvGPB
          claim_id: c_6Eq8HbLk4QcLgULavW2vbW
          source_id: s_CC7x2cYhAh7m1CUb8G1iVZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_Rqtj2SNyBdvLmz523jMBP7
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 史致蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 史致蕃，清人物。明清進士進士，籍贯宛平，入仕進士，曾任布政使、按察使、鄉試考官。（中国历代人物传记资料库 CBDB 62775） | accepted |
| name.primary | 史致蕃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Rqtj2SNyBdvLmz523jMBP7 | 王氏 | accepted |

## 外部来源

- [维基数据：史致蕃（Q13688950）](https://www.wikidata.org/wiki/Q13688950)
- [维基数据：王氏（Q13688975）](https://www.wikidata.org/wiki/Q13688975)
- [CBDB 中国历代人物传记资料库：史致蕃（62775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62775&o=json)
