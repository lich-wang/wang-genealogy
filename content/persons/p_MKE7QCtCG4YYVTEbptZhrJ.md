---
schema: wang-person/v1
id: p_MKE7QCtCG4YYVTEbptZhrJ
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 149527
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_snm49xuypEymQUlwrV4Rk7
        subject_person_id: p_MKE7QCtCG4YYVTEbptZhrJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YhVIeygOn6ahI4CtxunMd4
          claim_id: c_snm49xuypEymQUlwrV4Rk7
          source_id: s_8ZLnCw4V53lARHfLV4j2Pw
          stance: supports
          locator: CBDB:149527
          quotation: null
          interpretation_note: CBDB 明确记录的王朋配偶
          source: &a1
            id: s_8ZLnCw4V53lARHfLV4j2Pw
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王朋妻)（CBDB 149527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149527&o=json
            external_identifier: CBDB:149527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_IpsB4m8pPQGAyS2QFHL_sJ
        subject_person_id: p_FuvcApHQfiR2S4FbfA5cHC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MKE7QCtCG4YYVTEbptZhrJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eqsg2wEnMmp1c32cNjnnhp
          claim_id: c_IpsB4m8pPQGAyS2QFHL_sJ
          source_id: s_8ZLnCw4V53lARHfLV4j2Pw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianshou 25：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FuvcApHQfiR2S4FbfA5cHC
        status: active
        display_name: 王朋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FuvcApHQfiR2S4FbfA5cHC | 王朋 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王朋妻)（CBDB 149527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149527&o=json)
