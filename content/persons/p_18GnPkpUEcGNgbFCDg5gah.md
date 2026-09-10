---
schema: wang-person/v1
id: p_18GnPkpUEcGNgbFCDg5gah
status: active
merged_into: null
display_name: 王任用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JhTu7KixUdZGm5dGH3oSoG
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBF1HQBFohB3Ag5ave1f7H
          claim_id: c_JhTu7KixUdZGm5dGH3oSoG
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: CBDB:203867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203867）
          source: &a1
            id: s_ZeEXZ4gqmGctbEfXb8vPv6
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 203867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json
            external_identifier: CBDB:203867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fFPD2FZYQoJu7NUgsvbbNd
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1KabQU1nfTY4fr8fAGjhXD
          claim_id: c_fFPD2FZYQoJu7NUgsvbbNd
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
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
        id: c_VdAcyAewk746y95u8szGUM
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
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
        - id: cs_nVb9xATcRrPpD7CA7fsekP
          claim_id: c_VdAcyAewk746y95u8szGUM
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
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
        id: c_amIRleQceg_1YUg4gzNSMR
        subject_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxMzuSqxs59L9m8riCjY5R
          claim_id: c_amIRleQceg_1YUg4gzNSMR
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾祖、祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CvzpEJfQqQbdZFgH5SKxcJ
        status: active
        display_name: 王時雨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王任用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任用 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvzpEJfQqQbdZFgH5SKxcJ | 王時雨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任用（CBDB 203867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json)
