---
schema: wang-person/v1
id: p_BnBLKLfaqxcVPEz4Mit3Zc
status: active
merged_into: null
display_name: 王齊玉
cbdb_id: 288683
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZUh6keYv7VkcjNWX2DrCQp
        subject_person_id: p_BnBLKLfaqxcVPEz4Mit3Zc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊玉，明人物。嘉靖八年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 288683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8gu21ocuLKojuLMZ-pXRqp
          claim_id: c_ZUh6keYv7VkcjNWX2DrCQp
          source_id: s_CUcpTiXX3NT5SUvtGFB3Ur
          stance: supports
          locator: CBDB:288683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CUcpTiXX3NT5SUvtGFB3Ur
            source_type: api_record
            title: 中国历代人物传记资料库：王齊玉（CBDB 288683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288683&o=json
            external_identifier: CBDB:288683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMUtP5B91E6jmYLE62MNB1
        subject_person_id: p_BnBLKLfaqxcVPEz4Mit3Zc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6pjEmKbHky97b3S1vUCa1a
          claim_id: c_eMUtP5B91E6jmYLE62MNB1
          source_id: s_CUcpTiXX3NT5SUvtGFB3Ur
          stance: supports
          locator: CBDB:288683
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LPOdOI1AIbj2WlaTIwpeyO
        subject_person_id: p_BnBLKLfaqxcVPEz4Mit3Zc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yiBWk3kt22w7MVN_EY76ck
          claim_id: c_LPOdOI1AIbj2WlaTIwpeyO
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UEWpGjBMG8mpTrFMd5NdKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 202468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json
            external_identifier: CBDB:202468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hdA2EX5rq1DHua8Wnk5XqK
        status: active
        display_name: 王鉅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王齊玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王齊玉，明人物。嘉靖八年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 288683） | accepted |
| name.primary | 王齊玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hdA2EX5rq1DHua8Wnk5XqK | 王鉅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉅（CBDB 202468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json)
- [中国历代人物传记资料库：王齊玉（CBDB 288683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288683&o=json)
