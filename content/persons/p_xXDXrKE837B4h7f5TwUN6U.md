---
schema: wang-person/v1
id: p_xXDXrKE837B4h7f5TwUN6U
status: active
merged_into: null
display_name: 任婉
revision: 1
cbdb_id: 56681
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_llQYHNFgPibWMiJa8ELoKM
        subject_person_id: p_xXDXrKE837B4h7f5TwUN6U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任婉，史料所见人物。本项目依据《中国历代人物传记资料库：任婉（CBDB 56681）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7vbMW4-wCDV7yqR6w7zbh
          claim_id: c_llQYHNFgPibWMiJa8ELoKM
          source_id: s_KT1joQ3-0ohKjyugmhWGDW
          stance: supports
          locator: CBDB:56681
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KT1joQ3-0ohKjyugmhWGDW
            source_type: api_record
            title: 中国历代人物传记资料库：任婉（CBDB 56681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56681&o=json
            external_identifier: CBDB:56681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6FovY9pNu9rS8aLeFhuSQJ
        subject_person_id: p_xXDXrKE837B4h7f5TwUN6U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任婉
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x76RqA94NExxQH5Hkz6L7Z
          claim_id: c_6FovY9pNu9rS8aLeFhuSQJ
          source_id: s_KT1joQ3-0ohKjyugmhWGDW
          stance: supports
          locator: CBDB:56681
          quotation: null
          interpretation_note: CBDB 明确记录的王子莊配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JqeKNMjsd_5qqD0xsp7Zoo
        subject_person_id: p_dnePnJFNmUipgTFL31QdDj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xXDXrKE837B4h7f5TwUN6U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnSpZaiGb2hPVXHbgWu-p-
          claim_id: c_JqeKNMjsd_5qqD0xsp7Zoo
          source_id: s_KT1joQ3-0ohKjyugmhWGDW
          stance: supports
          locator: CBDB 双向互证（妻子 任婉）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dnePnJFNmUipgTFL31QdDj
        status: active
        display_name: 王子莊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任婉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 任婉，史料所见人物。本项目依据《中国历代人物传记资料库：任婉（CBDB 56681）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 任婉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dnePnJFNmUipgTFL31QdDj | 王子莊 | accepted |

## 外部来源

- [中国历代人物传记资料库：任婉（CBDB 56681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56681&o=json)
