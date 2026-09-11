---
schema: wang-person/v1
id: p_JZ9ABX21r2pGL5CSXT41XF
status: active
merged_into: null
display_name: 王淑
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lz2wrywXKiMxk9A2XfNmPv
        subject_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UFgQGr9abMtCPeCbUahpPq
          claim_id: c_Lz2wrywXKiMxk9A2XfNmPv
          source_id: s_bn3fqbmA1CzM25KWpQSih8
          stance: supports
          locator: CBDB:204778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204778）
          source: &a1
            id: s_bn3fqbmA1CzM25KWpQSih8
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 204778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204778&o=json
            external_identifier: CBDB:204778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vb6ZV9w1wrk6UbEJxzVUTF
        subject_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dtNGLo6Nn4QQS5eVEhL3tQ
          claim_id: c_vb6ZV9w1wrk6UbEJxzVUTF
          source_id: s_bn3fqbmA1CzM25KWpQSih8
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
        id: c_TbUV5eF649NazYNY15DpFR
        subject_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑（生于1526年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 204778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7wqbktCo1cQm7rtqONX4Jp
          claim_id: c_TbUV5eF649NazYNY15DpFR
          source_id: s_bn3fqbmA1CzM25KWpQSih8
          stance: supports
          locator: CBDB:204778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hgdAPWkWCsZFdoecW9_xVr
        subject_person_id: p_3zsERGNnSdJfLFVXc9rCRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmwqaoM0-inP0jDONG7H59
          claim_id: c_hgdAPWkWCsZFdoecW9_xVr
          source_id: s_arswxMK4XGYq2WNZ7u3BRe
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_arswxMK4XGYq2WNZ7u3BRe
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 323925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323925&o=json
            external_identifier: CBDB:323925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3zsERGNnSdJfLFVXc9rCRi
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8xWtgFhuvGQOzfqqkzQUq4
        subject_person_id: p_FiHU1d28xKPXQ8Ckbzz4nL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78OB692l03MaiZo9P273v-
          claim_id: c_8xWtgFhuvGQOzfqqkzQUq4
          source_id: s_AfBPbWcFgorCL7JM1Gbreq
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AfBPbWcFgorCL7JM1Gbreq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 323924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323924&o=json
            external_identifier: CBDB:323924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FiHU1d28xKPXQ8Ckbzz4nL
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
    - claim:
        id: c_CIeZo0VQlBSWzwEkViFr43
        subject_person_id: p_tcoF99wzB7yBNpRiupzaWc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOgu6frvVo42ZSwFtJW3L9
          claim_id: c_CIeZo0VQlBSWzwEkViFr43
          source_id: s_ijUVY1M3ti9cFriWh3vCBe
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ijUVY1M3ti9cFriWh3vCBe
            source_type: api_record
            title: 中国历代人物传记资料库：王允壽（CBDB 323923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323923&o=json
            external_identifier: CBDB:323923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tcoF99wzB7yBNpRiupzaWc
        status: active
        display_name: 王允壽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | 王淑（生于1526年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 204778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zsERGNnSdJfLFVXc9rCRi | 王諫 | accepted |
| ancestors | p_FiHU1d28xKPXQ8Ckbzz4nL | 王朝卿 | accepted |
| ancestors | p_tcoF99wzB7yBNpRiupzaWc | 王允壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝卿（CBDB 323924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323924&o=json)
- [中国历代人物传记资料库：王諫（CBDB 323925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323925&o=json)
- [中国历代人物传记资料库：王淑（CBDB 204778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204778&o=json)
- [中国历代人物传记资料库：王允壽（CBDB 323923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323923&o=json)
