---
schema: wang-person/v1
id: p_PmpQ81cznYUogTJ4wiZXMy
status: active
merged_into: null
display_name: 王沔水
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PjJPuscr55kkhxyEGJ8WNA
        subject_person_id: p_PmpQ81cznYUogTJ4wiZXMy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔水
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fBriq9XCXkXAkXpQY6rxN
          claim_id: c_PjJPuscr55kkhxyEGJ8WNA
          source_id: s_A2aZdpM1J77mCGTLaGP2xJ
          stance: supports
          locator: CBDB:342642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342642）
          source: &a1
            id: s_A2aZdpM1J77mCGTLaGP2xJ
            source_type: api_record
            title: 中国历代人物传记资料库：王沔水（CBDB 342642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342642&o=json
            external_identifier: CBDB:342642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aTxe69QTUbUzojLo2AR5WY
        subject_person_id: p_PmpQ81cznYUogTJ4wiZXMy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔水，清人物。明清進士進士，籍贯陳留，入仕進士。（中国历代人物传记资料库 CBDB 342642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FjSXXu3LpKQXOw-iWKkayA
          claim_id: c_aTxe69QTUbUzojLo2AR5WY
          source_id: s_A2aZdpM1J77mCGTLaGP2xJ
          stance: supports
          locator: CBDB:342642
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

# 王沔水

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沔水 | accepted |
| bio.summary | 王沔水，清人物。明清進士進士，籍贯陳留，入仕進士。（中国历代人物传记资料库 CBDB 342642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沔水（CBDB 342642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342642&o=json)
