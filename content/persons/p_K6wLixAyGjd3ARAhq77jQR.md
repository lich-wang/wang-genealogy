---
schema: wang-person/v1
id: p_K6wLixAyGjd3ARAhq77jQR
status: active
merged_into: null
display_name: 王璽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qj5FKqWHj8dU2uzHam7wmC
        subject_person_id: p_K6wLixAyGjd3ARAhq77jQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vp7NwU39fbKVi94DsnVAKq
          claim_id: c_qj5FKqWHj8dU2uzHam7wmC
          source_id: s_KY652PUgDA5xSA8WgtSHxZ
          stance: supports
          locator: CBDB:276118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276118）
          source: &a1
            id: s_KY652PUgDA5xSA8WgtSHxZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 276118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276118&o=json
            external_identifier: CBDB:276118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_67RyAJzD7sm73HVMyvUBbb
        subject_person_id: p_K6wLixAyGjd3ARAhq77jQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。正德六年進士，曾任右通政、知府。（中国历代人物传记资料库 CBDB 276118）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fUGxtrQaDjpCA7f5yJ4dBT
          claim_id: c_67RyAJzD7sm73HVMyvUBbb
          source_id: s_KY652PUgDA5xSA8WgtSHxZ
          stance: supports
          locator: CBDB:276118
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ze9v8x3gZx9jufMRHrhavR
        subject_person_id: p_K6wLixAyGjd3ARAhq77jQR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYYX5QMN2Am56hJCjJrxsQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPbSFn-KtE6wnwZ-1PcyiB
          claim_id: c_ze9v8x3gZx9jufMRHrhavR
          source_id: s_5Nh1R95Mr81Xk4XFG2bvEe
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5Nh1R95Mr81Xk4XFG2bvEe
            source_type: api_record
            title: 中国历代人物传记资料库：王元凱（CBDB 126471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126471&o=json
            external_identifier: CBDB:126471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DYYX5QMN2Am56hJCjJrxsQ
        status: active
        display_name: 王元凱
        merged_into_person_id: null
    - claim:
        id: c_R_wdAwBlDqP69IsTfZ-_xo
        subject_person_id: p_K6wLixAyGjd3ARAhq77jQR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SZRxbJ1yGra5er19BzwtBq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6nPoD6aVeWicoXCYQZxm6
          claim_id: c_R_wdAwBlDqP69IsTfZ-_xo
          source_id: s_KY652PUgDA5xSA8WgtSHxZ
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SZRxbJ1yGra5er19BzwtBq
        status: active
        display_name: 王元正
        merged_into_person_id: null
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。正德六年進士，曾任右通政、知府。（中国历代人物传记资料库 CBDB 276118） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DYYX5QMN2Am56hJCjJrxsQ | 王元凱 | accepted |
| descendants | p_SZRxbJ1yGra5er19BzwtBq | 王元正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 276118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276118&o=json)
- [中国历代人物传记资料库：王元凱（CBDB 126471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126471&o=json)
