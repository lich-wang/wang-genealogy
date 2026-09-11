---
schema: wang-person/v1
id: p_Gaw82eLMUREL4otcCy8uLm
status: active
merged_into: null
display_name: 王國華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H68NLYzr9H8pUMJf6ViJhq
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iNA5rdrEKEgVEkquNoeCL8
          claim_id: c_H68NLYzr9H8pUMJf6ViJhq
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: CBDB:69330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69330）
          source: &a1
            id: s_peiEiEziXw9q7UdS1GCKzj
            source_type: api_record
            title: 中国历代人物传记资料库：王國華（CBDB 69330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69330&o=json
            external_identifier: CBDB:69330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eAAqGFDxCbRz9sSM8eenHH
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vx3Dv4gdWmieW4QTvyy9cc
          claim_id: c_eAAqGFDxCbRz9sSM8eenHH
          source_id: s_peiEiEziXw9q7UdS1GCKzj
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
        id: c_41ZFV8EKabnHZj229HPG29
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國華（卒于1832年），清人物。籍贯貴築，入仕世襲(替)，曾任參將、凱里營都司、提標中軍參將。（中国历代人物传记资料库 CBDB 69330）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dfPCDdazgkgiGLxW-6CkIw
          claim_id: c_41ZFV8EKabnHZj229HPG29
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: CBDB:69330
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4nAQzTNI0A1CXZVvXHnp7G
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gk21g7E82LeFqiSW4yWrxd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GwshBhRQw6aapkbwR7VcRm
          claim_id: c_4nAQzTNI0A1CXZVvXHnp7G
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13034：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Gk21g7E82LeFqiSW4yWrxd
        status: active
        display_name: 王臻祜
        merged_into_person_id: null
    - claim:
        id: c_LJgXv3HeKskx_1pFIKeSqm
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BBoM7iC99VDANEzaPkLVf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lpgWaL2ZhoGdXMNBzM1tCc
          claim_id: c_LJgXv3HeKskx_1pFIKeSqm
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13034：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BBoM7iC99VDANEzaPkLVf3
        status: active
        display_name: 王臻祿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國華 | accepted |
| death.date | 1832年 | accepted |
| bio.summary | 王國華（卒于1832年），清人物。籍贯貴築，入仕世襲(替)，曾任參將、凱里營都司、提標中軍參將。（中国历代人物传记资料库 CBDB 69330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Gk21g7E82LeFqiSW4yWrxd | 王臻祜 | accepted |
| children | p_BBoM7iC99VDANEzaPkLVf3 | 王臻祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國華（CBDB 69330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69330&o=json)
