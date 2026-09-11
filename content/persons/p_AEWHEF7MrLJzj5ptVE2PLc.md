---
schema: wang-person/v1
id: p_AEWHEF7MrLJzj5ptVE2PLc
status: active
merged_into: null
display_name: 王濚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wq7norQibkUCfheAoPu6AH
        subject_person_id: p_AEWHEF7MrLJzj5ptVE2PLc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Q5ZwKP5sEcbkZYcL6CKhP
          claim_id: c_wq7norQibkUCfheAoPu6AH
          source_id: s_uYdaSwZXbZ3aPDKrkNfRX7
          stance: supports
          locator: CBDB:692688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692688）
          source: &a1
            id: s_uYdaSwZXbZ3aPDKrkNfRX7
            source_type: api_record
            title: 中国历代人物传记资料库：王濚（CBDB 692688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692688&o=json
            external_identifier: CBDB:692688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1h7n4ug8pMZF9WLM8Mrdz
        subject_person_id: p_AEWHEF7MrLJzj5ptVE2PLc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濚，清人物。籍贯海鹽，入仕庠生。（中国历代人物传记资料库 CBDB 692688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_97PP6URHuXd6epFvVKVqBg
          claim_id: c_G1h7n4ug8pMZF9WLM8Mrdz
          source_id: s_uYdaSwZXbZ3aPDKrkNfRX7
          stance: supports
          locator: CBDB:692688
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

# 王濚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濚 | accepted |
| bio.summary | 王濚，清人物。籍贯海鹽，入仕庠生。（中国历代人物传记资料库 CBDB 692688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濚（CBDB 692688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692688&o=json)
