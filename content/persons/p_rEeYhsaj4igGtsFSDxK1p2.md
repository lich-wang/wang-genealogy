---
schema: wang-person/v1
id: p_rEeYhsaj4igGtsFSDxK1p2
status: active
merged_into: null
display_name: 王宇文
cbdb_id: 101160
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f5bMFD747wLhVnK3EBfCcj
        subject_person_id: p_rEeYhsaj4igGtsFSDxK1p2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇文，元人物。籍贯撫州路，入仕鄉貢舉人，曾任樞密院經歷。（中国历代人物传记资料库 CBDB 101160）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Wso0EoarvrfgEwYgLllfh3
          claim_id: c_f5bMFD747wLhVnK3EBfCcj
          source_id: s_cSPQKqYZPY37VdN4pzS4Uq
          stance: supports
          locator: CBDB:101160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cSPQKqYZPY37VdN4pzS4Uq
            source_type: api_record
            title: 中国历代人物传记资料库：王宇文（CBDB 101160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101160&o=json
            external_identifier: CBDB:101160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r4fdHk5WzMN4n6ugBFSZ6E
        subject_person_id: p_rEeYhsaj4igGtsFSDxK1p2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_34sbfbsqNujNAQR5UpE4tb
          claim_id: c_r4fdHk5WzMN4n6ugBFSZ6E
          source_id: s_cSPQKqYZPY37VdN4pzS4Uq
          stance: supports
          locator: CBDB:101160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王宇文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宇文，元人物。籍贯撫州路，入仕鄉貢舉人，曾任樞密院經歷。（中国历代人物传记资料库 CBDB 101160） | accepted |
| name.primary | 王宇文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宇文（CBDB 101160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101160&o=json)
