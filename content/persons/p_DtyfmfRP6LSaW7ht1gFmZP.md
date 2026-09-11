---
schema: wang-person/v1
id: p_DtyfmfRP6LSaW7ht1gFmZP
status: active
merged_into: null
display_name: 王仲實
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DQ8Jg4Z9gjYBMSULpWYuea
        subject_person_id: p_DtyfmfRP6LSaW7ht1gFmZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GJghuuVs8dL2By7knuopha
          claim_id: c_DQ8Jg4Z9gjYBMSULpWYuea
          source_id: s_nHEthMDmUKGAN5FThRjNAE
          stance: supports
          locator: CBDB:221922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221922）
          source: &a1
            id: s_nHEthMDmUKGAN5FThRjNAE
            source_type: api_record
            title: 中国历代人物传记资料库：王仲實（CBDB 221922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221922&o=json
            external_identifier: CBDB:221922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zTsoNXvXT2auTceKik5Mcs
        subject_person_id: p_DtyfmfRP6LSaW7ht1gFmZP
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
        - id: cs_BZBo3hVMqnPD2tG9PCteLH
          claim_id: c_zTsoNXvXT2auTceKik5Mcs
          source_id: s_nHEthMDmUKGAN5FThRjNAE
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
        id: c_SQlN58-1RnYB_w_N_NQGb1
        subject_person_id: p_DtyfmfRP6LSaW7ht1gFmZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3aMVouUh1i5LfdSb79YgNN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akoYIGsrXPEMKo3g3EMshJ
          claim_id: c_SQlN58-1RnYB_w_N_NQGb1
          source_id: s_nHEthMDmUKGAN5FThRjNAE
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3aMVouUh1i5LfdSb79YgNN
        status: active
        display_name: 王元命
        merged_into_person_id: null
  other: []
---

# 王仲實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲實 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3aMVouUh1i5LfdSb79YgNN | 王元命 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲實（CBDB 221922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221922&o=json)
