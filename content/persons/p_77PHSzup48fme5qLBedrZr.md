---
schema: wang-person/v1
id: p_77PHSzup48fme5qLBedrZr
status: active
merged_into: null
display_name: 王永德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iGYKZES93YyV1yKQKZCeE4
        subject_person_id: p_77PHSzup48fme5qLBedrZr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9Bxj8WbzBku6SfQ5mTyBN
          claim_id: c_iGYKZES93YyV1yKQKZCeE4
          source_id: s_BvW1jcfBgsX9acncVx9gjz
          stance: supports
          locator: CBDB:638979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638979）
          source: &a1
            id: s_BvW1jcfBgsX9acncVx9gjz
            source_type: api_record
            title: 中国历代人物传记资料库：王永德（CBDB 638979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638979&o=json
            external_identifier: CBDB:638979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvySsieo62Z4jfwTA7X86G
        subject_person_id: p_77PHSzup48fme5qLBedrZr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永德，清人物。籍贯解州直隸州直轄地方，入仕鄉貢舉人，曾任學正、訓導、復設訓導。（中国历代人物传记资料库 CBDB 638979）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_emKig97lQc0lDilVfDrI_L
          claim_id: c_PvySsieo62Z4jfwTA7X86G
          source_id: s_BvW1jcfBgsX9acncVx9gjz
          stance: supports
          locator: CBDB:638979
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

# 王永德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永德 | accepted |
| bio.summary | 王永德，清人物。籍贯解州直隸州直轄地方，入仕鄉貢舉人，曾任學正、訓導、復設訓導。（中国历代人物传记资料库 CBDB 638979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永德（CBDB 638979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638979&o=json)
