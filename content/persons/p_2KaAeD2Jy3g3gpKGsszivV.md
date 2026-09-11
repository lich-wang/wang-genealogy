---
schema: wang-person/v1
id: p_2KaAeD2Jy3g3gpKGsszivV
status: active
merged_into: null
display_name: 王文燦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zmkRKeTqyk6Vkdx841X81E
        subject_person_id: p_2KaAeD2Jy3g3gpKGsszivV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_191eywiLRnBit3REqEg9WB
          claim_id: c_zmkRKeTqyk6Vkdx841X81E
          source_id: s_LE8QQDqyFDP2sPKbgp6Rvy
          stance: supports
          locator: CBDB:638264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638264）
          source: &a1
            id: s_LE8QQDqyFDP2sPKbgp6Rvy
            source_type: api_record
            title: 中国历代人物传记资料库：王文燦（CBDB 638264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638264&o=json
            external_identifier: CBDB:638264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TXJMeMDqHgtBTQ6HH1gnzC
        subject_person_id: p_2KaAeD2Jy3g3gpKGsszivV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文燦，清人物。籍贯平凉，曾任訓導。（中国历代人物传记资料库 CBDB 638264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DROurwhKtKRRafb2dmIeXW
          claim_id: c_TXJMeMDqHgtBTQ6HH1gnzC
          source_id: s_LE8QQDqyFDP2sPKbgp6Rvy
          stance: supports
          locator: CBDB:638264
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

# 王文燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文燦 | accepted |
| bio.summary | 王文燦，清人物。籍贯平凉，曾任訓導。（中国历代人物传记资料库 CBDB 638264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文燦（CBDB 638264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638264&o=json)
