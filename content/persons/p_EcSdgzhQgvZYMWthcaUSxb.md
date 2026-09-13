---
schema: wang-person/v1
id: p_EcSdgzhQgvZYMWthcaUSxb
status: active
merged_into: null
display_name: 王崑藻
cbdb_id: 56786
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKhMQZWNWgP24i1yxdw5yp
        subject_person_id: p_EcSdgzhQgvZYMWthcaUSxb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑藻，史料所见人物。本项目依据《中国历代人物传记资料库：王崑藻（CBDB 56786）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PLTKa4C3apKGB3QNggqQKk
          claim_id: c_MKhMQZWNWgP24i1yxdw5yp
          source_id: s_LKzqP8YwyKF5NkQ5m7ksV4
          stance: supports
          locator: CBDB:56786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LKzqP8YwyKF5NkQ5m7ksV4
            source_type: api_record
            title: 中国历代人物传记资料库：王崑藻（CBDB 56786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56786&o=json
            external_identifier: CBDB:56786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AWgdrcpnTFdBruCwqA1syV
        subject_person_id: p_EcSdgzhQgvZYMWthcaUSxb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kySqX5whvpB3CFgNoWZFGf
          claim_id: c_AWgdrcpnTFdBruCwqA1syV
          source_id: s_LKzqP8YwyKF5NkQ5m7ksV4
          stance: supports
          locator: CBDB:56786
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o-q-jiyEu-5oDG7kQcy5Mn
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EcSdgzhQgvZYMWthcaUSxb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpGfjj_U_VXsoaGS9M_JBj
          claim_id: c_o-q-jiyEu-5oDG7kQcy5Mn
          source_id: s_LKzqP8YwyKF5NkQ5m7ksV4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1138, HuWenKai #258：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LKzqP8YwyKF5NkQ5m7ksV4
            source_type: api_record
            title: 中国历代人物传记资料库：王崑藻（CBDB 56786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56786&o=json
            external_identifier: CBDB:56786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dSq17UnVqarJGmqnUNoAds
        status: active
        display_name: 王春煦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崑藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崑藻，史料所见人物。本项目依据《中国历代人物传记资料库：王崑藻（CBDB 56786）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王崑藻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dSq17UnVqarJGmqnUNoAds | 王春煦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崑藻（CBDB 56786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56786&o=json)
