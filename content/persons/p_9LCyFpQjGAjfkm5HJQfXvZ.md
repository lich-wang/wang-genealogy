---
schema: wang-person/v1
id: p_9LCyFpQjGAjfkm5HJQfXvZ
status: active
merged_into: null
display_name: 王度
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MNcPuGVGx4egZHg7KJyX3
        subject_person_id: p_9LCyFpQjGAjfkm5HJQfXvZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ym6he2MyEpmGM5RYMcGE4d
          claim_id: c_7MNcPuGVGx4egZHg7KJyX3
          source_id: s_Qqk79WaQbo9gAVa6S1RAgn
          stance: supports
          locator: CBDB:18288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18288）
          source: &a1
            id: s_Qqk79WaQbo9gAVa6S1RAgn
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 18288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18288&o=json
            external_identifier: CBDB:18288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_53BogfJhjtmhPQZJFy826B
        subject_person_id: p_9LCyFpQjGAjfkm5HJQfXvZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，宋人物。籍贯莒縣，曾任太子中允。（中国历代人物传记资料库 CBDB 18288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_egIOHeQOhcee8MMZOm2hfg
          claim_id: c_53BogfJhjtmhPQZJFy826B
          source_id: s_Qqk79WaQbo9gAVa6S1RAgn
          stance: supports
          locator: CBDB:18288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SAlKu_3ObsTCRXwACtxHpa
        subject_person_id: p_NMC5NfN2C2NZZbTjCYCkPx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9LCyFpQjGAjfkm5HJQfXvZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VmrvGP2nogCmrjoxl90mu2
          claim_id: c_SAlKu_3ObsTCRXwACtxHpa
          source_id: s_Qqk79WaQbo9gAVa6S1RAgn
          stance: supports
          locator: CBDB 双向互证（父 王仲卿 ⇄ 子 王度）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_NMC5NfN2C2NZZbTjCYCkPx
        status: active
        display_name: 王仲卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，宋人物。籍贯莒縣，曾任太子中允。（中国历代人物传记资料库 CBDB 18288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMC5NfN2C2NZZbTjCYCkPx | 王仲卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 18288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18288&o=json)
