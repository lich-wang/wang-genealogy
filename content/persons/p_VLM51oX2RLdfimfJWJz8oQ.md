---
schema: wang-person/v1
id: p_VLM51oX2RLdfimfJWJz8oQ
status: active
merged_into: null
display_name: 王麐孫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4DT5EtBBz98rEoMWMATza
        subject_person_id: p_VLM51oX2RLdfimfJWJz8oQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麐孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GzzDhG4Y1w98HhBD3wzXg2
          claim_id: c_d4DT5EtBBz98rEoMWMATza
          source_id: s_dAzFaeC1FoQW9UNKEcSRF1
          stance: supports
          locator: CBDB:641027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641027）
          source: &a1
            id: s_dAzFaeC1FoQW9UNKEcSRF1
            source_type: api_record
            title: 中国历代人物传记资料库：王麐孫（CBDB 641027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641027&o=json
            external_identifier: CBDB:641027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K3vGabwunwBLshdBTUeJLW
        subject_person_id: p_VLM51oX2RLdfimfJWJz8oQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麐孫，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 641027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1FZDhTLlyntnSeOznotus3
          claim_id: c_K3vGabwunwBLshdBTUeJLW
          source_id: s_dAzFaeC1FoQW9UNKEcSRF1
          stance: supports
          locator: CBDB:641027
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

# 王麐孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麐孫 | accepted |
| bio.summary | 王麐孫，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 641027） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麐孫（CBDB 641027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641027&o=json)
