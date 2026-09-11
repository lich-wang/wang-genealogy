---
schema: wang-person/v1
id: p_CgEKz1NoAXQAHTMt7rq26j
status: active
merged_into: null
display_name: 王希哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AYS7KRJ3UeRiVhJR14g2Hr
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zNt49GBRNpGDoaHYBVPBAQ
          claim_id: c_AYS7KRJ3UeRiVhJR14g2Hr
          source_id: s_LphhT8ZVfiGGNobzUEgK9t
          stance: supports
          locator: CBDB:236843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236843）
          source: &a1
            id: s_LphhT8ZVfiGGNobzUEgK9t
            source_type: api_record
            title: 中国历代人物传记资料库：王希哲（CBDB 236843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236843&o=json
            external_identifier: CBDB:236843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQU8Le3gnRvWB2Y57eC4Nc
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希哲，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__iyRdQujVsucnGa3bsI5Wr
          claim_id: c_FQU8Le3gnRvWB2Y57eC4Nc
          source_id: s_LphhT8ZVfiGGNobzUEgK9t
          stance: supports
          locator: CBDB:236843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jqytP4b1ow89RfSt_Z6Kmq
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0PDqpw6ETqDty76jw5V_P4
          claim_id: c_jqytP4b1ow89RfSt_Z6Kmq
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2D4p66LisW9zuWaUxemQ21
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 66976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json
            external_identifier: CBDB:66976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希哲 | accepted |
| bio.summary | 王希哲，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希哲（CBDB 236843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236843&o=json)
- [中国历代人物传记资料库：王宇（CBDB 66976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json)
