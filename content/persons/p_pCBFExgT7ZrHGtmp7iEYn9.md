---
schema: wang-person/v1
id: p_pCBFExgT7ZrHGtmp7iEYn9
status: active
merged_into: null
display_name: 王參之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MzViwk5UJ7bHHE5j6EnmtK
        subject_person_id: p_pCBFExgT7ZrHGtmp7iEYn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KWEzVQRvyc5L9QPJ9Yk1Gx
          claim_id: c_MzViwk5UJ7bHHE5j6EnmtK
          source_id: s_V9fVzNDAoBr5scCxmskUdF
          stance: supports
          locator: CBDB:526691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526691）
          source: &a1
            id: s_V9fVzNDAoBr5scCxmskUdF
            source_type: api_record
            title: 中国历代人物传记资料库：王參之（CBDB 526691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526691&o=json
            external_identifier: CBDB:526691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yd1Moz64rn8rbCBKkeFsDp
        subject_person_id: p_pCBFExgT7ZrHGtmp7iEYn9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參之，史料所见人物。本项目依据《中国历代人物传记资料库：王參之（CBDB 526691）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nv-EGBU0OCB0gFh0g9XfeU
          claim_id: c_yd1Moz64rn8rbCBKkeFsDp
          source_id: s_V9fVzNDAoBr5scCxmskUdF
          stance: supports
          locator: CBDB:526691
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
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MJhZ9VIHNuZRxm_vkKuB7s
        subject_person_id: p_pCBFExgT7ZrHGtmp7iEYn9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uEh8UA1AH6YcpkcBezQYVg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7dmOFZSny6MDE1jjCb9Cn
          claim_id: c_MJhZ9VIHNuZRxm_vkKuB7s
          source_id: s_yae5ZIzfcEeWiVZxVOoIIj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69080 王介之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yae5ZIzfcEeWiVZxVOoIIj
            source_type: api_record
            title: 中国历代人物传记资料库：王參之（CBDB 526691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526691&o=json
            external_identifier: CBDB:526691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uEh8UA1AH6YcpkcBezQYVg
        status: active
        display_name: 王介之
        merged_into_person_id: null
---

# 王參之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王參之 | accepted |
| bio.summary | 王參之，史料所见人物。本项目依据《中国历代人物传记资料库：王參之（CBDB 526691）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_uEh8UA1AH6YcpkcBezQYVg | 王介之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王參之（CBDB 526691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526691&o=json)
