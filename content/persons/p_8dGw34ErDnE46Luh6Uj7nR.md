---
schema: wang-person/v1
id: p_8dGw34ErDnE46Luh6Uj7nR
status: active
merged_into: null
display_name: 王廷玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9pcoAxjEDgihZVqUtPwwh
        subject_person_id: p_8dGw34ErDnE46Luh6Uj7nR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XdNCZZtYS4XmqNiRDB1y32
          claim_id: c_w9pcoAxjEDgihZVqUtPwwh
          source_id: s_ooggxHEhXDZ7vRUxBEowHx
          stance: supports
          locator: CBDB:510072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510072）
          source: &a1
            id: s_ooggxHEhXDZ7vRUxBEowHx
            source_type: api_record
            title: 中国历代人物传记资料库：王廷玉（CBDB 510072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510072&o=json
            external_identifier: CBDB:510072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yHhnW4HtFMQJKmAqqgMyQ7
        subject_person_id: p_8dGw34ErDnE46Luh6Uj7nR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王廷玉，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 510072）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MH8BqoWDaZ0Wneb6qH4tpC
          claim_id: c_yHhnW4HtFMQJKmAqqgMyQ7
          source_id: s_ooggxHEhXDZ7vRUxBEowHx
          stance: supports
          locator: CBDB:510072
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

# 王廷玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷玉 | accepted |
| bio.summary | 王廷玉，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 510072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷玉（CBDB 510072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510072&o=json)
