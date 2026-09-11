---
schema: wang-person/v1
id: p_zFW75JsLW2jwjcFNjtMCtW
status: active
merged_into: null
display_name: 王汀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zBN2sdysuiFGtYqeXFLqSt
        subject_person_id: p_zFW75JsLW2jwjcFNjtMCtW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DB9grtatCVUwWRa342Wuoo
          claim_id: c_zBN2sdysuiFGtYqeXFLqSt
          source_id: s_M6eWGAcJJAY98pAR6qxd5M
          stance: supports
          locator: CBDB:3981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3981）
          source: &a1
            id: s_M6eWGAcJJAY98pAR6qxd5M
            source_type: api_record
            title: 中国历代人物传记资料库：王汀（CBDB 3981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3981&o=json
            external_identifier: CBDB:3981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MiWZHcEK556Eu8z7LzMp3M
        subject_person_id: p_zFW75JsLW2jwjcFNjtMCtW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汀，宋人物。籍贯北海，身份为落第士人、收徒講學，入仕舉進士、諸科不第。（中国历代人物传记资料库 CBDB 3981）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ShSLz5dFqNqU8M-mnY68rO
          claim_id: c_MiWZHcEK556Eu8z7LzMp3M
          source_id: s_M6eWGAcJJAY98pAR6qxd5M
          stance: supports
          locator: CBDB:3981
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

# 王汀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汀 | accepted |
| bio.summary | 王汀，宋人物。籍贯北海，身份为落第士人、收徒講學，入仕舉進士、諸科不第。（中国历代人物传记资料库 CBDB 3981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汀（CBDB 3981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3981&o=json)
