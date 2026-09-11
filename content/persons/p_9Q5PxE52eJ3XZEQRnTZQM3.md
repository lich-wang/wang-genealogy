---
schema: wang-person/v1
id: p_9Q5PxE52eJ3XZEQRnTZQM3
status: active
merged_into: null
display_name: 王友棻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9sWHLUzHuc3Kt5WxZopkh
        subject_person_id: p_9Q5PxE52eJ3XZEQRnTZQM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友棻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z5PevLPS2Dhihs6oAVmFbw
          claim_id: c_R9sWHLUzHuc3Kt5WxZopkh
          source_id: s_6uLJSAMfzZ6P75semzBy2L
          stance: supports
          locator: CBDB:636458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636458）
          source: &a1
            id: s_6uLJSAMfzZ6P75semzBy2L
            source_type: api_record
            title: 中国历代人物传记资料库：王友棻（CBDB 636458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636458&o=json
            external_identifier: CBDB:636458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BFRC6rjPaA6Cw5Ft9BvVPS
        subject_person_id: p_9Q5PxE52eJ3XZEQRnTZQM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友棻，清人物。籍贯平定直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636458）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BAaUN_FpMfD9awY2U8KXr5
          claim_id: c_BFRC6rjPaA6Cw5Ft9BvVPS
          source_id: s_6uLJSAMfzZ6P75semzBy2L
          stance: supports
          locator: CBDB:636458
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

# 王友棻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友棻 | accepted |
| bio.summary | 王友棻，清人物。籍贯平定直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636458） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友棻（CBDB 636458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636458&o=json)
