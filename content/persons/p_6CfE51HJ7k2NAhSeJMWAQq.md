---
schema: wang-person/v1
id: p_6CfE51HJ7k2NAhSeJMWAQq
status: active
merged_into: null
display_name: 王容
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XCT3ZsG7u5L8dncwATYEEf
        subject_person_id: p_6CfE51HJ7k2NAhSeJMWAQq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d1kB3X2eQCo1gb5CTzz7ui
          claim_id: c_XCT3ZsG7u5L8dncwATYEEf
          source_id: s_1NzpG4ALngkaJG9AwNiPSr
          stance: supports
          locator: CBDB:38389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38389）
          source: &a1
            id: s_1NzpG4ALngkaJG9AwNiPSr
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 38389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38389&o=json
            external_identifier: CBDB:38389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2EXKaoHrNf7z66qbJVEmYC
        subject_person_id: p_6CfE51HJ7k2NAhSeJMWAQq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容，宋人物。籍贯湘陰，身份为史學家，入仕進士，曾任起居郎、上輕車都尉、殿中省尚舍奉御。（中国历代人物传记资料库 CBDB 38389）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nvec0yyyndETCW7-2zVmON
          claim_id: c_2EXKaoHrNf7z66qbJVEmYC
          source_id: s_1NzpG4ALngkaJG9AwNiPSr
          stance: supports
          locator: CBDB:38389
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

# 王容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王容 | accepted |
| bio.summary | 王容，宋人物。籍贯湘陰，身份为史學家，入仕進士，曾任起居郎、上輕車都尉、殿中省尚舍奉御。（中国历代人物传记资料库 CBDB 38389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王容（CBDB 38389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38389&o=json)
