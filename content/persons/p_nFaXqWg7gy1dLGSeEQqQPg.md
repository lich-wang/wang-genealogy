---
schema: wang-person/v1
id: p_nFaXqWg7gy1dLGSeEQqQPg
status: active
merged_into: null
display_name: 王約
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRafy5qktwUp9sKJZKCQeH
        subject_person_id: p_nFaXqWg7gy1dLGSeEQqQPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uqFgAEVp9XPLVrAerv91qi
          claim_id: c_VRafy5qktwUp9sKJZKCQeH
          source_id: s_oLZBHndHsLrcPTwT2if9bm
          stance: supports
          locator: CBDB:272835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272835）
          source: &a1
            id: s_oLZBHndHsLrcPTwT2if9bm
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 272835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272835&o=json
            external_identifier: CBDB:272835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_piLr8MJXmqEP9jNGToiM1k
        subject_person_id: p_nFaXqWg7gy1dLGSeEQqQPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約，明人物。弘治十八年進士，籍贯開州，曾任義官。（中国历代人物传记资料库 CBDB 272835）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oagdbnuL0Caibqbz1bNrvO
          claim_id: c_piLr8MJXmqEP9jNGToiM1k
          source_id: s_oLZBHndHsLrcPTwT2if9bm
          stance: supports
          locator: CBDB:272835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8X3eedPO4yi1DKvzNOIL_P
        subject_person_id: p_mCtAQA38FjMf51Dp9sA6Hp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nFaXqWg7gy1dLGSeEQqQPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b4raiZE26d0LX8a_4azGR7
          claim_id: c_8X3eedPO4yi1DKvzNOIL_P
          source_id: s_ffSupKpKCTN18tlsqX3AYQ
          stance: supports
          locator: CBDB：兄弟 王綖（126771）之父／母 王溥
          quotation: null
          interpretation_note: 由兄弟关系推断：王約 与 王綖 为同胞（CBDB 记「弟」），王綖 之父／母即 王約 之父／母。
          source:
            id: s_ffSupKpKCTN18tlsqX3AYQ
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 272835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272835&o=json
            external_identifier: CBDB:272835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mCtAQA38FjMf51Dp9sA6Hp
        status: active
        display_name: 王溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AnnjguiUlwaZ5tfGog8Cav
        subject_person_id: p_WF551B42q65ujmx95gTJGt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nFaXqWg7gy1dLGSeEQqQPg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uef9q1FyL1bI23lMMSsH3Q
          claim_id: c_AnnjguiUlwaZ5tfGog8Cav
          source_id: s_ffSupKpKCTN18tlsqX3AYQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126771 王綖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ffSupKpKCTN18tlsqX3AYQ
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 272835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272835&o=json
            external_identifier: CBDB:272835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WF551B42q65ujmx95gTJGt
        status: active
        display_name: 王綖
        merged_into_person_id: null
---

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | 王約，明人物。弘治十八年進士，籍贯開州，曾任義官。（中国历代人物传记资料库 CBDB 272835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mCtAQA38FjMf51Dp9sA6Hp | 王溥 | accepted |
| other | p_WF551B42q65ujmx95gTJGt | 王綖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 272835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272835&o=json)
