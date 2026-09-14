---
schema: wang-person/v1
id: p_45EiG84QQT2n3AHG97tGmn
status: active
merged_into: null
display_name: 王良
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AP234TQc29F1dAf6WgE4GP
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AeVovNFJYCx37jQM2oAGTS
          claim_id: c_AP234TQc29F1dAf6WgE4GP
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: CBDB:292231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292231）
          source: &a1
            id: s_es3vxojSiF6C7MrRXppwJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 292231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292231&o=json
            external_identifier: CBDB:292231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UrfMiYpXFqdJLwy5b29hVW
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mxD_3FNRIQ2yZW9MOrapPa
          claim_id: c_UrfMiYpXFqdJLwy5b29hVW
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: CBDB:292231
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_c6NDpK1zptPjGZsfpgKyVW
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJ91EnqP8F2-2hqnfGJJZu
          claim_id: c_c6NDpK1zptPjGZsfpgKyVW
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HE5e4JMgdzoDwzM6FykZUf
        status: active
        display_name: 王聮
        merged_into_person_id: null
    - claim:
        id: c_oV2S0A6L2xCeuD-gxDNX3B
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LsK61B35Dk3MgL7bBrDmzB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__mckGUtZoMbKZyf05a7Lo-
          claim_id: c_oV2S0A6L2xCeuD-gxDNX3B
          source_id: s_N-wbNWGZBykmQpyVQlekcQ
          stance: supports
          locator: CBDB：兄弟 王聮（202677）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王耿 与 王聮 为同胞（CBDB 记「兄」），王聮 之父／母即 王耿 之父／母。
          source:
            id: s_N-wbNWGZBykmQpyVQlekcQ
            source_type: api_record
            title: 中国历代人物传记资料库：王耿（CBDB 292238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292238&o=json
            external_identifier: CBDB:292238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LsK61B35Dk3MgL7bBrDmzB
        status: active
        display_name: 王耿
        merged_into_person_id: null
    - claim:
        id: c_XQtMfjUZt49nYJm_1jVvH6
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_izaQ53dqQKiqq71sb4MqAA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X2YQE1vysrCgp-fk9BWuWk
          claim_id: c_XQtMfjUZt49nYJm_1jVvH6
          source_id: s_mr05kq8N4khluw3--D5Giv
          stance: supports
          locator: CBDB：兄弟 王聮（202677）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王聘 与 王聮 为同胞（CBDB 记「兄」），王聮 之父／母即 王聘 之父／母。
          source:
            id: s_mr05kq8N4khluw3--D5Giv
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 292237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292237&o=json
            external_identifier: CBDB:292237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_izaQ53dqQKiqq71sb4MqAA
        status: active
        display_name: 王聘
        merged_into_person_id: null
    - claim:
        id: c_-d7JKU4X102zteTfiMMEYQ
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j8BetNqB6kS35PP6e1DrKD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPPSPI55xju-foZ1LyCYzo
          claim_id: c_-d7JKU4X102zteTfiMMEYQ
          source_id: s_QdLgW-Uz7mnf99PBBjQqHp
          stance: supports
          locator: CBDB：兄弟 王聮（202677）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王職 与 王聮 为同胞（CBDB 记「弟」），王聮 之父／母即 王職 之父／母。
          source:
            id: s_QdLgW-Uz7mnf99PBBjQqHp
            source_type: api_record
            title: 中国历代人物传记资料库：王職（CBDB 292235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292235&o=json
            external_identifier: CBDB:292235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j8BetNqB6kS35PP6e1DrKD
        status: active
        display_name: 王職
        merged_into_person_id: null
    - claim:
        id: c_NT3YZ0__n8FkGCsFRa_zvy
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rbbHrY43bT56EfEwRVWSQh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Xd0S1KCteiCn54sOnTr7k
          claim_id: c_NT3YZ0__n8FkGCsFRa_zvy
          source_id: s_IwD9RFP6Ak9DSsn0Zujy33
          stance: supports
          locator: CBDB：兄弟 王聮（202677）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王聆 与 王聮 为同胞（CBDB 记「兄」），王聮 之父／母即 王聆 之父／母。
          source:
            id: s_IwD9RFP6Ak9DSsn0Zujy33
            source_type: api_record
            title: 中国历代人物传记资料库：王聆（CBDB 292236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292236&o=json
            external_identifier: CBDB:292236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rbbHrY43bT56EfEwRVWSQh
        status: active
        display_name: 王聆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292231） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HE5e4JMgdzoDwzM6FykZUf | 王聮 | accepted |
| children | p_LsK61B35Dk3MgL7bBrDmzB | 王耿 | accepted |
| children | p_izaQ53dqQKiqq71sb4MqAA | 王聘 | accepted |
| children | p_j8BetNqB6kS35PP6e1DrKD | 王職 | accepted |
| children | p_rbbHrY43bT56EfEwRVWSQh | 王聆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王耿（CBDB 292238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292238&o=json)
- [中国历代人物传记资料库：王良（CBDB 292231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292231&o=json)
- [中国历代人物传记资料库：王聆（CBDB 292236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292236&o=json)
- [中国历代人物传记资料库：王聘（CBDB 292237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292237&o=json)
- [中国历代人物传记资料库：王職（CBDB 292235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292235&o=json)
