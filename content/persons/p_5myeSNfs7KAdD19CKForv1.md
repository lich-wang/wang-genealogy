---
schema: wang-person/v1
id: p_5myeSNfs7KAdD19CKForv1
status: active
merged_into: null
display_name: 王介
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_343HY57bZBq7JGBr4yv6mV
        subject_person_id: p_5myeSNfs7KAdD19CKForv1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WU8JYChfjz66sc3WzVcBr8
          claim_id: c_343HY57bZBq7JGBr4yv6mV
          source_id: s_36cPpLCK3Gp7f9NQALtm3A
          stance: supports
          locator: CBDB:278414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278414）
          source: &a1
            id: s_36cPpLCK3Gp7f9NQALtm3A
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 278414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json
            external_identifier: CBDB:278414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_653SLSfSqfYvdFxUk6anJc
        subject_person_id: p_5myeSNfs7KAdD19CKForv1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介，明人物。正德六年進士，籍贯涿鹿中衛。（中国历代人物传记资料库 CBDB 278414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lh2Y3bVmxyWnAdPu2HGtM3
          claim_id: c_653SLSfSqfYvdFxUk6anJc
          source_id: s_36cPpLCK3Gp7f9NQALtm3A
          stance: supports
          locator: CBDB:278414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7LP7vaowAMwCi23tPVEBHY
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5myeSNfs7KAdD19CKForv1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRTTW3B5vYqtmPjzvoT97Q
          claim_id: c_7LP7vaowAMwCi23tPVEBHY
          source_id: s__I7VE6nacOcAa0SFeeNAyw
          stance: supports
          locator: CBDB：兄弟 王金（201798）之父／母 王某華
          quotation: null
          interpretation_note: 由兄弟关系推断：王介 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王介 之父／母。
          source:
            id: s__I7VE6nacOcAa0SFeeNAyw
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 278414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json
            external_identifier: CBDB:278414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gMnjRmnoNMq3o2vj1nLE69
        status: active
        display_name: 王某華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HXk2pZppyV4uGRbmr1c_2N
        subject_person_id: p_5myeSNfs7KAdD19CKForv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TplNAVtGJgbP1ldoQVtuQw
          claim_id: c_HXk2pZppyV4uGRbmr1c_2N
          source_id: s__I7VE6nacOcAa0SFeeNAyw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201798 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__I7VE6nacOcAa0SFeeNAyw
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 278414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json
            external_identifier: CBDB:278414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h7fXGW2qXexjH8ke4RSdR3
        status: active
        display_name: 王金
        merged_into_person_id: null
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | 王介，明人物。正德六年進士，籍贯涿鹿中衛。（中国历代人物传记资料库 CBDB 278414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gMnjRmnoNMq3o2vj1nLE69 | 王某華 | accepted |
| other | p_h7fXGW2qXexjH8ke4RSdR3 | 王金 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 278414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json)
