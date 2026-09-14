---
schema: wang-person/v1
id: p_18fFnjtnGXtoq2dgN1ume2
status: active
merged_into: null
display_name: 王鳳嫻
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJJLmBwuGVH7iX5dc98F17
        subject_person_id: p_18fFnjtnGXtoq2dgN1ume2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳嫻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZLqVUgzrce5RJC99BvzcD
          claim_id: c_ZJJLmBwuGVH7iX5dc98F17
          source_id: s_zVH7LFv95trGPJ7gjDRJjK
          stance: supports
          locator: CBDB:119187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119187）
          source: &a1
            id: s_zVH7LFv95trGPJ7gjDRJjK
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳嫻（CBDB 119187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119187&o=json
            external_identifier: CBDB:119187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2eHcrCq4VLiWG9MycD8GLA
        subject_person_id: p_18fFnjtnGXtoq2dgN1ume2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcrmGHuxgEyFCQmFbBoUtb
          claim_id: c_2eHcrCq4VLiWG9MycD8GLA
          source_id: s_zVH7LFv95trGPJ7gjDRJjK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YL3gs4p6asFXR6qxzdxCwS
        subject_person_id: p_18fFnjtnGXtoq2dgN1ume2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cgpd1ZscDX5iSbe2nh4Bjo
          claim_id: c_YL3gs4p6asFXR6qxzdxCwS
          source_id: s_zVH7LFv95trGPJ7gjDRJjK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dtUb7HREcZpYECXFxVf6w6
        subject_person_id: p_18fFnjtnGXtoq2dgN1ume2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳嫻（1628年—1661年），史料所见人物。本项目依据《中国历代人物传记资料库：王鳳嫻（CBDB 119187）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CmqS2H8yCErWt6cw0b_O8v
          claim_id: c_dtUb7HREcZpYECXFxVf6w6
          source_id: s_zVH7LFv95trGPJ7gjDRJjK
          stance: supports
          locator: CBDB:119187
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_9oJd9m8cQk7A4LmwC3qXag
        subject_person_id: p_dL4jP8DHdSRLNu6vNpG9kU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_18fFnjtnGXtoq2dgN1ume2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1a0LRGhBVxCK9WzUWkrns
          claim_id: c_9oJd9m8cQk7A4LmwC3qXag
          source_id: s_gwwBliT1yvHavKpi8-oSK4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3313：妻子"
          quotation: null
          interpretation_note: null
          source:
            id: s_gwwBliT1yvHavKpi8-oSK4
            source_type: api_record
            title: 中国历代人物传记资料库：張本嘉（CBDB 119189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119189&o=json
            external_identifier: CBDB:119189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dL4jP8DHdSRLNu6vNpG9kU
        status: active
        display_name: 張本嘉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_G2J-qCnEJ5cXEPCDwEW8YE
        subject_person_id: p_18fFnjtnGXtoq2dgN1ume2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NyMy5GpGu38HZaYhsJwZDC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDm4hMZ0MZ23tZPEjfzzi5
          claim_id: c_G2J-qCnEJ5cXEPCDwEW8YE
          source_id: s_HdW8fmavfhWCjWA_udyncn
          stance: supports
          locator: CBDB 亲属：妹（KinPerson 119187 王鳳嫻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HdW8fmavfhWCjWA_udyncn
            source_type: api_record
            title: 中国历代人物传记资料库：王獻吉（CBDB 119188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119188&o=json
            external_identifier: CBDB:119188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NyMy5GpGu38HZaYhsJwZDC
        status: active
        display_name: 王獻吉
        merged_into_person_id: null
---

# 王鳳嫻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳嫻 | accepted |
| birth.date | 1628年 | accepted |
| death.date | 1661年 | accepted |
| bio.summary | 王鳳嫻（1628年—1661年），史料所见人物。本项目依据《中国历代人物传记资料库：王鳳嫻（CBDB 119187）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dL4jP8DHdSRLNu6vNpG9kU | 張本嘉 | accepted |
| other | p_NyMy5GpGu38HZaYhsJwZDC | 王獻吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳嫻（CBDB 119187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119187&o=json)
- [中国历代人物传记资料库：王獻吉（CBDB 119188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119188&o=json)
- [中国历代人物传记资料库：張本嘉（CBDB 119189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119189&o=json)
