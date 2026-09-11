---
schema: wang-person/v1
id: p_HDEActBvBTc9gv1hQTu3Ln
status: active
merged_into: null
display_name: 王鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BeGP5EbpLVLan13JEFV3Ek
        subject_person_id: p_HDEActBvBTc9gv1hQTu3Ln
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UEJ9LFCnMH3ioqN3GQDtoj
          claim_id: c_BeGP5EbpLVLan13JEFV3Ek
          source_id: s_NC8M11fp5JmAdvjW2BxbAm
          stance: supports
          locator: CBDB:573975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573975）
          source: &a1
            id: s_NC8M11fp5JmAdvjW2BxbAm
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 573975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573975&o=json
            external_identifier: CBDB:573975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZGQP3ScYGQHyrGPx1KkeM
        subject_person_id: p_HDEActBvBTc9gv1hQTu3Ln
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鑾，清人物。籍贯漢陽，入仕學校: 生員(庠生)，曾任縣丞。（中国历代人物传记资料库 CBDB 573975）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OY8M7IU9qKSudF4a8pVjTD
          claim_id: c_EZGQP3ScYGQHyrGPx1KkeM
          source_id: s_NC8M11fp5JmAdvjW2BxbAm
          stance: supports
          locator: CBDB:573975
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

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| bio.summary | 王鑾，清人物。籍贯漢陽，入仕學校: 生員(庠生)，曾任縣丞。（中国历代人物传记资料库 CBDB 573975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 573975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573975&o=json)
