---
schema: wang-person/v1
id: p_9CJEC8t6JNBuuPoqmxttK8
status: active
merged_into: null
display_name: 王登琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abFpdFdZxNNVCDkuoFNcoT
        subject_person_id: p_9CJEC8t6JNBuuPoqmxttK8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JaTBgyUWPyG6UaefTgH5VM
          claim_id: c_abFpdFdZxNNVCDkuoFNcoT
          source_id: s_MpU9sKZ7U5RKqVdDGx8uk8
          stance: supports
          locator: CBDB:639510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639510）
          source: &a1
            id: s_MpU9sKZ7U5RKqVdDGx8uk8
            source_type: api_record
            title: 中国历代人物传记资料库：王登琦（CBDB 639510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639510&o=json
            external_identifier: CBDB:639510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fncD9iQqGVVbGF9QgCw6Ff
        subject_person_id: p_9CJEC8t6JNBuuPoqmxttK8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王登琦，清人物。籍贯福州府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639510）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hPZ52TRrxYmzrhVC4pEPkg
          claim_id: c_fncD9iQqGVVbGF9QgCw6Ff
          source_id: s_MpU9sKZ7U5RKqVdDGx8uk8
          stance: supports
          locator: CBDB:639510
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

# 王登琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登琦 | accepted |
| bio.summary | 王登琦，清人物。籍贯福州府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登琦（CBDB 639510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639510&o=json)
