---
schema: wang-person/v1
id: p_qEZ5XAZtELsh4xjqgKuUd6
status: active
merged_into: null
display_name: 王英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BKiK9fAq1Rcw4pYXVu2oQS
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PoN7kJnMN6WLHAT8sm6fqJ
          claim_id: c_BKiK9fAq1Rcw4pYXVu2oQS
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: CBDB:257670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257670）
          source: &a1
            id: s_ive934eT1oYiGVyXd3ETSt
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 257670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json
            external_identifier: CBDB:257670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ttRk5kqXZNT4BnEfcpSpL
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fcO3r5PJzf2uPmPSWgvcVe
          claim_id: c_9ttRk5kqXZNT4BnEfcpSpL
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: CBDB:257670
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
        id: c_snd-1P9gBi6wh2uPGM-hnF
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fpCwSNc_rwwlpasv0SlvRV
          claim_id: c_snd-1P9gBi6wh2uPGM-hnF
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCS3B6qxdWUziaAFj1bjfH
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_k_SFAUdYMWZcp5kOrkqAEX
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4wRX7j7WkxJ0MfROyMnzHf
          claim_id: c_k_SFAUdYMWZcp5kOrkqAEX
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ppyWLxr8Sp6zZ7s3LPugbF
        status: active
        display_name: 王綬
        merged_into_person_id: null
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NCS3B6qxdWUziaAFj1bjfH | 王綸 | accepted |
| descendants | p_ppyWLxr8Sp6zZ7s3LPugbF | 王綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 257670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json)
