---
schema: wang-person/v1
id: p_R2W8odSPvEqkDwvFQFmKad
status: active
merged_into: null
display_name: 王鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4CAkSwLwyJk5kK2C82Eb1i
        subject_person_id: p_R2W8odSPvEqkDwvFQFmKad
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPLgXEEN2TLbFqzMqpNY16
          claim_id: c_4CAkSwLwyJk5kK2C82Eb1i
          source_id: s_DBapjDV9UFo5jyC2BtR69m
          stance: supports
          locator: CBDB:45828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45828）
          source: &a1
            id: s_DBapjDV9UFo5jyC2BtR69m
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 45828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45828&o=json
            external_identifier: CBDB:45828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jkSmtDG9LnQ259rJHigrSk
        subject_person_id: p_R2W8odSPvEqkDwvFQFmKad
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬，元人物。籍贯吳縣，身份为史學家、博學之人。（中国历代人物传记资料库 CBDB 45828）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x64jZzobO4mdP7enM_0APw
          claim_id: c_jkSmtDG9LnQ259rJHigrSk
          source_id: s_DBapjDV9UFo5jyC2BtR69m
          stance: supports
          locator: CBDB:45828
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

# 王鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬 | accepted |
| bio.summary | 王鵬，元人物。籍贯吳縣，身份为史學家、博學之人。（中国历代人物传记资料库 CBDB 45828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬（CBDB 45828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45828&o=json)
