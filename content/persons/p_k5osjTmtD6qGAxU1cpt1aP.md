---
schema: wang-person/v1
id: p_k5osjTmtD6qGAxU1cpt1aP
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BNkyJ86u2yCwoA1BA2uX3b
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SvMNpn89je5Y8E4amqpHE6
          claim_id: c_BNkyJ86u2yCwoA1BA2uX3b
          source_id: s_bBN9NXqMhvnvJpcS9rLrBu
          stance: supports
          locator: CBDB:23475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23475）
          source: &a1
            id: s_bBN9NXqMhvnvJpcS9rLrBu
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 23475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23475&o=json
            external_identifier: CBDB:23475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYrxBhZZ23Bu59Lz5LmPv8
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LnQTNcGfk4LwCQ2PAQD1RK
          claim_id: c_ZYrxBhZZ23Bu59Lz5LmPv8
          source_id: s_bBN9NXqMhvnvJpcS9rLrBu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_y4QFL_q8Qc0ysxcsVGXB_N
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slRd2UUE2rxjekk55k18sQ
          claim_id: c_y4QFL_q8Qc0ysxcsVGXB_N
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: 紹興十八年同年小錄，136：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oc1QNAEk7i97afFuxniTAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 23477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json
            external_identifier: CBDB:23477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jUfc5vCsBkQrPPCvwGCB11
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jUfc5vCsBkQrPPCvwGCB11 | 王堯臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 23475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23475&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 23477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json)
