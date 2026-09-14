---
schema: wang-person/v1
id: p_C5sPLwT8DaYnK3mMqL8j3j
status: active
merged_into: null
display_name: 王得臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R145ZUm3Zt9P4sKA8uDoJn
        subject_person_id: p_C5sPLwT8DaYnK3mMqL8j3j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rBTGzFtzSbbLHDFMYJM2Dx
          claim_id: c_R145ZUm3Zt9P4sKA8uDoJn
          source_id: s_7rsci6ef5iS5TiCDZuTefd
          stance: supports
          locator: CBDB:1890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1890）
          source: &a1
            id: s_7rsci6ef5iS5TiCDZuTefd
            source_type: api_record
            title: 中国历代人物传记资料库：王得臣（CBDB 1890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1890&o=json
            external_identifier: CBDB:1890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmpMn48sGugyNPdajMR6k9
        subject_person_id: p_C5sPLwT8DaYnK3mMqL8j3j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得臣，宋人物。籍贯安陸，入仕進士，曾任提舉、司農寺少卿、判官。（中国历代人物传记资料库 CBDB 1890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g9HDAsOEqEJCV7NY3bvGUX
          claim_id: c_LmpMn48sGugyNPdajMR6k9
          source_id: s_7rsci6ef5iS5TiCDZuTefd
          stance: supports
          locator: CBDB:1890
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
  other:
    - claim:
        id: c_wynApDWOW4V47niRVsmgv5
        subject_person_id: p_BtsgLzVd8aNX2Z9uai4hdF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C5sPLwT8DaYnK3mMqL8j3j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPmzDCNmnsMhuyP5OQOAw6
          claim_id: c_wynApDWOW4V47niRVsmgv5
          source_id: s_Sj3ebZ7SRtEK92wF5_vAJl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 1890 王得臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Sj3ebZ7SRtEK92wF5_vAJl
            source_type: api_record
            title: 中国历代人物传记资料库：王鄰臣（CBDB 21799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21799&o=json
            external_identifier: CBDB:21799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtsgLzVd8aNX2Z9uai4hdF
        status: active
        display_name: 王鄰臣
        merged_into_person_id: null
---

# 王得臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得臣 | accepted |
| bio.summary | 王得臣，宋人物。籍贯安陸，入仕進士，曾任提舉、司農寺少卿、判官。（中国历代人物传记资料库 CBDB 1890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_BtsgLzVd8aNX2Z9uai4hdF | 王鄰臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得臣（CBDB 1890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1890&o=json)
- [中国历代人物传记资料库：王鄰臣（CBDB 21799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21799&o=json)
