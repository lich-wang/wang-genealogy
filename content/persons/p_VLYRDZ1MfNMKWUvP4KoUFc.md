---
schema: wang-person/v1
id: p_VLYRDZ1MfNMKWUvP4KoUFc
status: active
merged_into: null
display_name: 王孝良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQ3YMFB6JRpE3DbXU2uTBC
        subject_person_id: p_VLYRDZ1MfNMKWUvP4KoUFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Abns9hH86qJ2RL6NeKT2VF
          claim_id: c_VQ3YMFB6JRpE3DbXU2uTBC
          source_id: s_8J7QV5wHstNsWPt92ty9hG
          stance: supports
          locator: CBDB:637010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637010）
          source: &a1
            id: s_8J7QV5wHstNsWPt92ty9hG
            source_type: api_record
            title: 中国历代人物传记资料库：王孝良（CBDB 637010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637010&o=json
            external_identifier: CBDB:637010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHrxUhA7GGwjcDQSzo4P6a
        subject_person_id: p_VLYRDZ1MfNMKWUvP4KoUFc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝良，清人物。籍贯合肥，入仕武童，曾任參將。（中国历代人物传记资料库 CBDB 637010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X5Re0DFUM51fAeADcAwEvw
          claim_id: c_CHrxUhA7GGwjcDQSzo4P6a
          source_id: s_8J7QV5wHstNsWPt92ty9hG
          stance: supports
          locator: CBDB:637010
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

# 王孝良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝良 | accepted |
| bio.summary | 王孝良，清人物。籍贯合肥，入仕武童，曾任參將。（中国历代人物传记资料库 CBDB 637010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝良（CBDB 637010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637010&o=json)
