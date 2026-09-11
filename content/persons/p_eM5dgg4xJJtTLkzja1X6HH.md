---
schema: wang-person/v1
id: p_eM5dgg4xJJtTLkzja1X6HH
status: active
merged_into: null
display_name: 王汝葑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KLeQPtiYPBB4SQpBA9gMdf
        subject_person_id: p_eM5dgg4xJJtTLkzja1X6HH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝葑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_53rLmPBWwru4uUSREHKwRD
          claim_id: c_KLeQPtiYPBB4SQpBA9gMdf
          source_id: s_tj96pL5Xn6AbSkCU2qDUZZ
          stance: supports
          locator: CBDB:639032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639032）
          source: &a1
            id: s_tj96pL5Xn6AbSkCU2qDUZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王汝葑（CBDB 639032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639032&o=json
            external_identifier: CBDB:639032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hgWkFX9GFNP1YQPK3SsiPG
        subject_person_id: p_eM5dgg4xJJtTLkzja1X6HH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝葑，清人物。籍贯定州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DUYmEr6EUmBWJUFCk0E7FD
          claim_id: c_hgWkFX9GFNP1YQPK3SsiPG
          source_id: s_tj96pL5Xn6AbSkCU2qDUZZ
          stance: supports
          locator: CBDB:639032
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

# 王汝葑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝葑 | accepted |
| bio.summary | 王汝葑，清人物。籍贯定州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝葑（CBDB 639032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639032&o=json)
