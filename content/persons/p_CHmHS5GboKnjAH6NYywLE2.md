---
schema: wang-person/v1
id: p_CHmHS5GboKnjAH6NYywLE2
status: active
merged_into: null
display_name: 岳氏
revision: 1
cbdb_id: 703468
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pjTSWwkxgsbVn1Hxt891Ku
        subject_person_id: p_CHmHS5GboKnjAH6NYywLE2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 岳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7fniU4v0vd7fVJ3Y0G8IV9
          claim_id: c_pjTSWwkxgsbVn1Hxt891Ku
          source_id: s_XQUE7zEvbZ5SZ04pOPQpO8
          stance: supports
          locator: CBDB:703468
          quotation: null
          interpretation_note: CBDB 明确记录的王者佐配偶
          source: &a1
            id: s_XQUE7zEvbZ5SZ04pOPQpO8
            source_type: api_record
            title: 中国历代人物传记资料库：岳氏(王者佐妻)（CBDB 703468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703468&o=json
            external_identifier: CBDB:703468
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
        id: c_Icme9fs5MSVIMyudVFEDqj
        subject_person_id: p_Rn9eABeG9HKMiPF1fsFCAM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CHmHS5GboKnjAH6NYywLE2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mPIe1aZlkbpE7ePtyJk0nT
          claim_id: c_Icme9fs5MSVIMyudVFEDqj
          source_id: s_XQUE7zEvbZ5SZ04pOPQpO8
          stance: supports
          locator: 平陰縣志，lgid=630885：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rn9eABeG9HKMiPF1fsFCAM
        status: active
        display_name: 王者佐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 岳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 岳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Rn9eABeG9HKMiPF1fsFCAM | 王者佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：岳氏(王者佐妻)（CBDB 703468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703468&o=json)
