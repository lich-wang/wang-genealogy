---
schema: wang-person/v1
id: p_vbmJR5uCeaqCSLSaANHLNi
status: active
merged_into: null
display_name: 王朝卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnqMHAec5eFFCARho8ravu
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PHFJBwm6YYiPiodNucvyZg
          claim_id: c_SnqMHAec5eFFCARho8ravu
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: CBDB:233969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233969）
          source: &a1
            id: s_JPUoHK4HTPgdv3qDzUa2MG
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 233969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233969&o=json
            external_identifier: CBDB:233969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4mCvgitRQvui3m3ZkWzTM
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿，明人物。籍贯鄧州，曾任知縣、文林郎。（中国历代人物传记资料库 CBDB 233969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-r6GF2SzZkTCNHVPlac0yQ
          claim_id: c_b4mCvgitRQvui3m3ZkWzTM
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: CBDB:233969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WSjMToR4XmJm0VN3RvRcEq
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrBfyqYzxE-wc6aO801TF7
          claim_id: c_WSjMToR4XmJm0VN3RvRcEq
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝卿 | accepted |
| bio.summary | 王朝卿，明人物。籍贯鄧州，曾任知縣、文林郎。（中国历代人物传记资料库 CBDB 233969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝卿（CBDB 233969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233969&o=json)
