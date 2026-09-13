---
schema: wang-person/v1
id: p_YvPpeaMbbpb1qU56e9bQ57
status: active
merged_into: null
display_name: 王崇曾
cbdb_id: 342227
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fNpwvYqras7MKp8By3uEoM
        subject_person_id: p_YvPpeaMbbpb1qU56e9bQ57
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇曾，清人物。明清進士進士，籍贯開州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 342227）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aOS5jJQBT1NUyeg-ETNust
          claim_id: c_fNpwvYqras7MKp8By3uEoM
          source_id: s_iqDNuDvKkihu51FBNP5bxi
          stance: supports
          locator: CBDB:342227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iqDNuDvKkihu51FBNP5bxi
            source_type: api_record
            title: 中国历代人物传记资料库：王崇曾（CBDB 342227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342227&o=json
            external_identifier: CBDB:342227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQ8xpeJesP7ApgNcGnc5CL
        subject_person_id: p_YvPpeaMbbpb1qU56e9bQ57
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jLqFtRM7HdxPHe2NVmtTox
          claim_id: c_QQ8xpeJesP7ApgNcGnc5CL
          source_id: s_iqDNuDvKkihu51FBNP5bxi
          stance: supports
          locator: CBDB:342227
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 清
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

# 王崇曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇曾，清人物。明清進士進士，籍贯開州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 342227） | accepted |
| name.primary | 王崇曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇曾（CBDB 342227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342227&o=json)
