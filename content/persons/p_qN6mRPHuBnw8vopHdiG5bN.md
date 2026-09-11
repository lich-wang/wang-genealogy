---
schema: wang-person/v1
id: p_qN6mRPHuBnw8vopHdiG5bN
status: active
merged_into: null
display_name: 王識
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XqFTHGcx7EXBp1TQCTiNa2
        subject_person_id: p_qN6mRPHuBnw8vopHdiG5bN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王識
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ba7U9fodEJn2HPCWJUqPR3
          claim_id: c_XqFTHGcx7EXBp1TQCTiNa2
          source_id: s_JA14bBwCCgSqACdwmt4ACA
          stance: supports
          locator: CBDB:45824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45824）
          source: &a1
            id: s_JA14bBwCCgSqACdwmt4ACA
            source_type: api_record
            title: 中国历代人物传记资料库：王識（CBDB 45824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45824&o=json
            external_identifier: CBDB:45824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ySAJhFTCAiJTAskMaZXG7
        subject_person_id: p_qN6mRPHuBnw8vopHdiG5bN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王識，宋人物。籍贯永春，身份为天文學家（星象家）、曆算家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 45824）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ekVV3VBRoKwuUhm8YdXLbG
          claim_id: c_4ySAJhFTCAiJTAskMaZXG7
          source_id: s_JA14bBwCCgSqACdwmt4ACA
          stance: supports
          locator: CBDB:45824
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

# 王識

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王識 | accepted |
| bio.summary | 王識，宋人物。籍贯永春，身份为天文學家（星象家）、曆算家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 45824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王識（CBDB 45824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45824&o=json)
