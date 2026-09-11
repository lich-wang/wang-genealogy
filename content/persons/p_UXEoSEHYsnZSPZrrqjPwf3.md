---
schema: wang-person/v1
id: p_UXEoSEHYsnZSPZrrqjPwf3
status: active
merged_into: null
display_name: 王輔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZCkc48ZmNcQFbKBiGfL9FR
        subject_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8fLE2N8YzLqV86FSmf2srS
          claim_id: c_ZCkc48ZmNcQFbKBiGfL9FR
          source_id: s_8EiAxdpMbiFKjRHsDt8YwJ
          stance: supports
          locator: CBDB:199509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199509）
          source: &a1
            id: s_8EiAxdpMbiFKjRHsDt8YwJ
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 199509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199509&o=json
            external_identifier: CBDB:199509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NZCtF9MskH8FaGocnLgYni
        subject_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPpsCbzPqm2KXS92Q5UAEX
          claim_id: c_NZCtF9MskH8FaGocnLgYni
          source_id: s_8EiAxdpMbiFKjRHsDt8YwJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4tQGqpgzqV7iXmqL3cpv2U
        subject_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MtM2kpQCLW7g9Jo7QDYxW3
          claim_id: c_4tQGqpgzqV7iXmqL3cpv2U
          source_id: s_8EiAxdpMbiFKjRHsDt8YwJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_atIre5UeoY7bnJRG1RRGZl
        subject_person_id: p_pdjXPPpE6u8B1ajFAKge7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dgbv3k3BZR_fVch1sQ83oT
          claim_id: c_atIre5UeoY7bnJRG1RRGZl
          source_id: s_JDXGQM52jtWKsAYoQtJ71Q
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JDXGQM52jtWKsAYoQtJ71Q
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 246027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246027&o=json
            external_identifier: CBDB:246027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pdjXPPpE6u8B1ajFAKge7T
        status: active
        display_name: 王禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Bd8p0Yupl2Rsnu24TVVPMD
        subject_person_id: p_5RFV7J2odPpRKDCszp2uRB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ghHYytW0AVk99VtQLknqJX
          claim_id: c_Bd8p0Yupl2Rsnu24TVVPMD
          source_id: s_iQ1pF26NvZNwVuM8fYWP9Y
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iQ1pF26NvZNwVuM8fYWP9Y
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 246026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246026&o=json
            external_identifier: CBDB:246026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5RFV7J2odPpRKDCszp2uRB
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_u4PghzHVGylbAc0s4dPGK_
        subject_person_id: p_rJvZ3yktmFxrApnpKx2dQ3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n0tng6dMapyp68Lxdscm7O
          claim_id: c_u4PghzHVGylbAc0s4dPGK_
          source_id: s_ZMedo3CSZPMa4aqsohGbXN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZMedo3CSZPMa4aqsohGbXN
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 246025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246025&o=json
            external_identifier: CBDB:246025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rJvZ3yktmFxrApnpKx2dQ3
        status: active
        display_name: 王整
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pdjXPPpE6u8B1ajFAKge7T | 王禮 | accepted |
| ancestors | p_5RFV7J2odPpRKDCszp2uRB | 王榮 | accepted |
| ancestors | p_rJvZ3yktmFxrApnpKx2dQ3 | 王整 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 199509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199509&o=json)
- [中国历代人物传记资料库：王禮（CBDB 246027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246027&o=json)
- [中国历代人物传记资料库：王榮（CBDB 246026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246026&o=json)
- [中国历代人物传记资料库：王整（CBDB 246025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246025&o=json)
