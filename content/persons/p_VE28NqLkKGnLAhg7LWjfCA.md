---
schema: wang-person/v1
id: p_VE28NqLkKGnLAhg7LWjfCA
status: active
merged_into: null
display_name: 王撫民
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2YLMXr8xB2Kn9APKBMxSrP
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9xzB3QFLFCKyXoWFpaTgs
          claim_id: c_2YLMXr8xB2Kn9APKBMxSrP
          source_id: s_ErSy6Mx2ZYMAmC9yXBH7kf
          stance: supports
          locator: CBDB:336680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336680）
          source: &a1
            id: s_ErSy6Mx2ZYMAmC9yXBH7kf
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 336680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336680&o=json
            external_identifier: CBDB:336680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1csoC4N45jAfCDMVUVCse7
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民，明人物。隆慶二年進士，籍贯清源，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 336680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FmhgRGCbrR3VoS3ywqdKPP
          claim_id: c_1csoC4N45jAfCDMVUVCse7
          source_id: s_ErSy6Mx2ZYMAmC9yXBH7kf
          stance: supports
          locator: CBDB:336680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GaW5LSre0fCsSpFFmZttMN
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCALNTS1sJJCaiho4Fl6Zn
          claim_id: c_GaW5LSre0fCsSpFFmZttMN
          source_id: s_ErSy6Mx2ZYMAmC9yXBH7kf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WfLtQwVEGpoYGNPH8XRY6N
        status: active
        display_name: 王藻
        merged_into_person_id: null
    - claim:
        id: c_yhM7dnbZnp9-aWApjOSf5Q
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DgX7FNniEsVX1Bk7YAzJBg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_264Gf_3dvUrwkCNBHoFXZX
          claim_id: c_yhM7dnbZnp9-aWApjOSf5Q
          source_id: s_dGNzDCtQ0od2Q_Q3xN2wO-
          stance: supports
          locator: CBDB：兄弟 王藻（205665）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王蔚 与 王藻 为同胞（CBDB 记「弟」），王藻 之父／母即 王蔚 之父／母。
          source:
            id: s_dGNzDCtQ0od2Q_Q3xN2wO-
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 336683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336683&o=json
            external_identifier: CBDB:336683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DgX7FNniEsVX1Bk7YAzJBg
        status: active
        display_name: 王蔚
        merged_into_person_id: null
    - claim:
        id: c_yrJFO-__chZbMBoy5XEaoE
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gRB5rqFNepLJGjz1aa4JBK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wA-WjDYgczW-iE5bX3jOlM
          claim_id: c_yrJFO-__chZbMBoy5XEaoE
          source_id: s_BbO9X6iVi6pyuVVUdEELBf
          stance: supports
          locator: CBDB：兄弟 王藻（205665）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文薦 与 王藻 为同胞（CBDB 记「兄」），王藻 之父／母即 王文薦 之父／母。
          source:
            id: s_BbO9X6iVi6pyuVVUdEELBf
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 336684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336684&o=json
            external_identifier: CBDB:336684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gRB5rqFNepLJGjz1aa4JBK
        status: active
        display_name: 王文薦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王撫民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫民 | accepted |
| bio.summary | 王撫民，明人物。隆慶二年進士，籍贯清源，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 336680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WfLtQwVEGpoYGNPH8XRY6N | 王藻 | accepted |
| children | p_DgX7FNniEsVX1Bk7YAzJBg | 王蔚 | accepted |
| children | p_gRB5rqFNepLJGjz1aa4JBK | 王文薦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 336680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336680&o=json)
- [中国历代人物传记资料库：王蔚（CBDB 336683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336683&o=json)
- [中国历代人物传记资料库：王文薦（CBDB 336684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336684&o=json)
