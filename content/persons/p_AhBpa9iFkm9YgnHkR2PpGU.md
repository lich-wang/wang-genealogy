---
schema: wang-person/v1
id: p_AhBpa9iFkm9YgnHkR2PpGU
status: active
merged_into: null
display_name: 王庚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ycJxFs1Kmk8HX7rm4ys6nT
        subject_person_id: p_AhBpa9iFkm9YgnHkR2PpGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CoBUJny1HyACsvy84muXm8
          claim_id: c_ycJxFs1Kmk8HX7rm4ys6nT
          source_id: s_p9UEyAF17q1yNHiDdTXxX5
          stance: supports
          locator: CBDB:121312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121312）
          source: &a1
            id: s_p9UEyAF17q1yNHiDdTXxX5
            source_type: api_record
            title: 中国历代人物传记资料库：王庚（CBDB 121312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121312&o=json
            external_identifier: CBDB:121312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nhRGqb4fWZuc2fE4yAXtbE
        subject_person_id: p_AhBpa9iFkm9YgnHkR2PpGU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚，清人物。籍贯豐潤。（中国历代人物传记资料库 CBDB 121312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RmR_cWKyn2uD0n8SUV1xmF
          claim_id: c_nhRGqb4fWZuc2fE4yAXtbE
          source_id: s_p9UEyAF17q1yNHiDdTXxX5
          stance: supports
          locator: CBDB:121312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eQk8iPJ2yJx1WyoigArZb8
        subject_person_id: p_MoYjGDFKhbFzhuXnAkB1ME
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AhBpa9iFkm9YgnHkR2PpGU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KoMOykrGJA7w0PmFGRx2eC
          claim_id: c_eQk8iPJ2yJx1WyoigArZb8
          source_id: s_p9UEyAF17q1yNHiDdTXxX5
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4236, HuWenKai #796：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MoYjGDFKhbFzhuXnAkB1ME
        status: active
        display_name: 王廷勳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庚 | accepted |
| bio.summary | 王庚，清人物。籍贯豐潤。（中国历代人物传记资料库 CBDB 121312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MoYjGDFKhbFzhuXnAkB1ME | 王廷勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庚（CBDB 121312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121312&o=json)
