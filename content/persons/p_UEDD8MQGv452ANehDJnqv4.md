---
schema: wang-person/v1
id: p_UEDD8MQGv452ANehDJnqv4
status: active
merged_into: null
display_name: 王元臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FiuK3iFxM8UorLX1Q1We2p
        subject_person_id: p_UEDD8MQGv452ANehDJnqv4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nDJd6aYK94jTugsPudH9Gw
          claim_id: c_FiuK3iFxM8UorLX1Q1We2p
          source_id: s_netDGmeqjtqFg8uxsRj87y
          stance: supports
          locator: CBDB:551057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551057）
          source: &a1
            id: s_netDGmeqjtqFg8uxsRj87y
            source_type: api_record
            title: 中国历代人物传记资料库：王元臣（CBDB 551057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551057&o=json
            external_identifier: CBDB:551057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wu4nqgNFyNhBJVSKq14Q49
        subject_person_id: p_UEDD8MQGv452ANehDJnqv4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cFMQEvKzeY61Xkp5qicezL
          claim_id: c_Wu4nqgNFyNhBJVSKq14Q49
          source_id: s_netDGmeqjtqFg8uxsRj87y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PTqRf_Q0N_RAf7taXsM7yN
        subject_person_id: p_UEDD8MQGv452ANehDJnqv4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RG86AZdrrpvcCw5F2RpuhG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SK2zR_a834Dein12WlKyxb
          claim_id: c_PTqRf_Q0N_RAf7taXsM7yN
          source_id: s_L1xS3GbeMRQ7Ji6hnia1FW
          stance: supports
          locator: 瓜洲志，Igid=124458：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L1xS3GbeMRQ7Ji6hnia1FW
            source_type: api_record
            title: 中国历代人物传记资料库：王文仁（CBDB 551058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551058&o=json
            external_identifier: CBDB:551058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RG86AZdrrpvcCw5F2RpuhG
        status: active
        display_name: 王文仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RG86AZdrrpvcCw5F2RpuhG | 王文仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文仁（CBDB 551058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551058&o=json)
- [中国历代人物传记资料库：王元臣（CBDB 551057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551057&o=json)
