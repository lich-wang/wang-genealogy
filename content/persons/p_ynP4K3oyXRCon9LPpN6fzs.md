---
schema: wang-person/v1
id: p_ynP4K3oyXRCon9LPpN6fzs
status: active
merged_into: null
display_name: 王士堯
cbdb_id: 23373
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39Nqxs4QKfqRUTfSDAatJ8
        subject_person_id: p_ynP4K3oyXRCon9LPpN6fzs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士堯，史料所见人物。本项目依据《中国历代人物传记资料库：王士堯（CBDB 23373）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_oBYEl4y-JYM8eQC_9I46yg
          claim_id: c_39Nqxs4QKfqRUTfSDAatJ8
          source_id: s_mFNoqYEvyaQbkoHSUhp143
          stance: supports
          locator: CBDB:23373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mFNoqYEvyaQbkoHSUhp143
            source_type: api_record
            title: 中国历代人物传记资料库：王士堯（CBDB 23373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23373&o=json
            external_identifier: CBDB:23373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_32QpfHcYQCD1MdtSCuygNh
        subject_person_id: p_ynP4K3oyXRCon9LPpN6fzs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WFzfuE7QNK4mDotGaxA61g
          claim_id: c_32QpfHcYQCD1MdtSCuygNh
          source_id: s_mFNoqYEvyaQbkoHSUhp143
          stance: supports
          locator: CBDB:23373
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0Fx04Wt32yzOjEwupbScmQ
        subject_person_id: p_2TP6dNe4vu3EfhSiDunrh7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ynP4K3oyXRCon9LPpN6fzs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NLtCvFLH-cOBPVbi4iurb4
          claim_id: c_0Fx04Wt32yzOjEwupbScmQ
          source_id: s_NMe7oFG4No3ECHWjNAoEFU
          stance: supports
          locator: CBDB 双向互证（子 王士堯 ⇄ 父 王居善）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_NMe7oFG4No3ECHWjNAoEFU
            source_type: api_record
            title: 中国历代人物传记资料库：王居善（CBDB 23372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23372&o=json
            external_identifier: CBDB:23372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2TP6dNe4vu3EfhSiDunrh7
        status: active
        display_name: 王居善
        merged_into_person_id: null
  children:
    - claim:
        id: c_dq_fEt4u_4q3AQQltobSfw
        subject_person_id: p_ynP4K3oyXRCon9LPpN6fzs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mAJWR5ayMFHDtMLPB9B5Bv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y41xsWoLFeKO_Kiw9D1cEK
          claim_id: c_dq_fEt4u_4q3AQQltobSfw
          source_id: s_h1AYajc1ce38fcpJJkRkux
          stance: supports
          locator: CBDB 双向互证（父 王士堯 ⇄ 子 王行）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_h1AYajc1ce38fcpJJkRkux
            source_type: api_record
            title: 中国历代人物传记资料库：王行（CBDB 23374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23374&o=json
            external_identifier: CBDB:23374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mAJWR5ayMFHDtMLPB9B5Bv
        status: active
        display_name: 王行
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士堯，史料所见人物。本项目依据《中国历代人物传记资料库：王士堯（CBDB 23373）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王士堯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2TP6dNe4vu3EfhSiDunrh7 | 王居善 | accepted |
| children | p_mAJWR5ayMFHDtMLPB9B5Bv | 王行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王居善（CBDB 23372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23372&o=json)
- [中国历代人物传记资料库：王士堯（CBDB 23373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23373&o=json)
- [中国历代人物传记资料库：王行（CBDB 23374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23374&o=json)
