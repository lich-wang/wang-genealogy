---
schema: wang-person/v1
id: p_RQP2GTKrZwQ3NxS72uMMeE
status: active
merged_into: null
display_name: 王秉書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pW683xQ2fMPHp6oLMvucrG
        subject_person_id: p_RQP2GTKrZwQ3NxS72uMMeE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BnLKGegXaAHpvsSLbuXAhB
          claim_id: c_pW683xQ2fMPHp6oLMvucrG
          source_id: s_NmXeL3jCPB3c96SMHdhTPL
          stance: supports
          locator: CBDB:639652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639652）
          source: &a1
            id: s_NmXeL3jCPB3c96SMHdhTPL
            source_type: api_record
            title: 中国历代人物传记资料库：王秉書（CBDB 639652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639652&o=json
            external_identifier: CBDB:639652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xm3zwD5WuTsgKtQmgm4yBZ
        subject_person_id: p_RQP2GTKrZwQ3NxS72uMMeE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉書，清人物。籍贯平越直隸州，曾任復設訓導。（中国历代人物传记资料库 CBDB 639652）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__cfNQNpfvXq575ypFCrIsS
          claim_id: c_xm3zwD5WuTsgKtQmgm4yBZ
          source_id: s_NmXeL3jCPB3c96SMHdhTPL
          stance: supports
          locator: CBDB:639652
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

# 王秉書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉書 | accepted |
| bio.summary | 王秉書，清人物。籍贯平越直隸州，曾任復設訓導。（中国历代人物传记资料库 CBDB 639652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉書（CBDB 639652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639652&o=json)
