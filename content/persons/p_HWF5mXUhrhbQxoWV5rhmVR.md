---
schema: wang-person/v1
id: p_HWF5mXUhrhbQxoWV5rhmVR
status: active
merged_into: null
display_name: 王時敏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2EdHoFR5QDr9n8KfX2BUBZ
        subject_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BWE3qneewLsVxHjeqxBLKP
          claim_id: c_2EdHoFR5QDr9n8KfX2BUBZ
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: CBDB:55432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55432）
          source: &a1
            id: s_9nCMaerC4DaYCofcJD8XP7
            source_type: api_record
            title: 中国历代人物传记资料库：王時敏（CBDB 55432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json
            external_identifier: CBDB:55432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ayxhv4pw1LmwdAT7Hb1NVW
        subject_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1592年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8BGdSSwQn3ad6QGB9KRrL
          claim_id: c_ayxhv4pw1LmwdAT7Hb1NVW
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nydCJp9ERM95V7fkuBR5ps
        subject_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8sbfEKf3R22gKMmnQgaHMn
          claim_id: c_nydCJp9ERM95V7fkuBR5ps
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9QMiyiXfBuNpSyi3s6G8v
        subject_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
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
        - id: cs_k77P9brN5FA135fHZMGTCJ
          claim_id: c_E9QMiyiXfBuNpSyi3s6G8v
          source_id: s_9nCMaerC4DaYCofcJD8XP7
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
        id: c_9LysD8oWG7xW-0lmmI2itU
        subject_person_id: p_kdP4rCdMUaqm8XsL572Ypm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iw1mx2XqzPws1aHh5JOm_k
          claim_id: c_9LysD8oWG7xW-0lmmI2itU
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: 國朝畫徵錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kdP4rCdMUaqm8XsL572Ypm
        status: merged
        display_name: 王衡
        merged_into_person_id: p_nNCdrm1mnJ77Np28ADWXHR
  children:
    - claim:
        id: c_qtkVSHyBDqwHGG-uz_14LS
        subject_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eir87uuM5h4TnmBRIyqtR4
          claim_id: c_qtkVSHyBDqwHGG-uz_14LS
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: 國朝畫徵錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K5DCxt9Hya2SyZizPQeDCw
        status: active
        display_name: 王撰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ZhjdfdZOJxmhLMaMH1wcKy
        subject_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWbnFQlkzWJsL3GphlNx1F
          claim_id: c_ZhjdfdZOJxmhLMaMH1wcKy
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: 國朝畫徵錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kf6CG7GiTEZFms57CWBMuQ
        status: active
        display_name: 王錫爵
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時敏 | accepted |
| birth.date | 1592年 | accepted |
| death.date | 1680年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kdP4rCdMUaqm8XsL572Ypm | 王衡 | accepted |
| children | p_K5DCxt9Hya2SyZizPQeDCw | 王撰 | accepted |
| ancestors | p_Kf6CG7GiTEZFms57CWBMuQ | 王錫爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時敏（CBDB 55432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json)
