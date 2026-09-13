---
schema: wang-person/v1
id: p_KxCAbnXdrix7b6U1czoUqg
status: active
merged_into: null
display_name: 王與耕
cbdb_id: 253917
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rCiQxch9ivXQAV2tJQbc9N
        subject_person_id: p_KxCAbnXdrix7b6U1czoUqg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與耕，史料所见人物。本项目依据《中国历代人物传记资料库：王與耕（CBDB 253917）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zUrV_kZ9hlftm4dw-Ub1pP
          claim_id: c_rCiQxch9ivXQAV2tJQbc9N
          source_id: s_BQE6wYHFmrdPrQ1u5qKSvf
          stance: supports
          locator: CBDB:253917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BQE6wYHFmrdPrQ1u5qKSvf
            source_type: api_record
            title: 中国历代人物传记资料库：王與耕（CBDB 253917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253917&o=json
            external_identifier: CBDB:253917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DJNifSUyYh72X1QTxCL4n
        subject_person_id: p_KxCAbnXdrix7b6U1czoUqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與耕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pAa4Ayo71Vbp6Ak6mCEhrN
          claim_id: c_9DJNifSUyYh72X1QTxCL4n
          source_id: s_BQE6wYHFmrdPrQ1u5qKSvf
          stance: supports
          locator: CBDB:253917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_b1UuNpP9OarKnyB5o5BE8u
        subject_person_id: p_KxCAbnXdrix7b6U1czoUqg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nERHWSp-0grG4tVJVX-uE
          claim_id: c_b1UuNpP9OarKnyB5o5BE8u
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N2gM7RZc4LBqAHUJjH3STW
            source_type: api_record
            title: 中国历代人物传记资料库：王艮（CBDB 66624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66624&o=json
            external_identifier: CBDB:66624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CxY5QtqK8BuHWqQgSQqbEb
        status: active
        display_name: 王艮
        merged_into_person_id: null
  other: []
---

# 王與耕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王與耕，史料所见人物。本项目依据《中国历代人物传记资料库：王與耕（CBDB 253917）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王與耕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CxY5QtqK8BuHWqQgSQqbEb | 王艮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王艮（CBDB 66624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66624&o=json)
- [中国历代人物传记资料库：王與耕（CBDB 253917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253917&o=json)
