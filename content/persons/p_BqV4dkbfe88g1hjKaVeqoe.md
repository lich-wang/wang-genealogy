---
schema: wang-person/v1
id: p_BqV4dkbfe88g1hjKaVeqoe
status: active
merged_into: null
display_name: 王維德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BZmzFvt3zwK2F3s6WhQ4HW
        subject_person_id: p_BqV4dkbfe88g1hjKaVeqoe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w6KAF787HfSu24XTCfAbXf
          claim_id: c_BZmzFvt3zwK2F3s6WhQ4HW
          source_id: s_EFjyPV44zJq4g5PRSDfZMe
          stance: supports
          locator: CBDB:69398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69398）
          source: &a1
            id: s_EFjyPV44zJq4g5PRSDfZMe
            source_type: api_record
            title: 中国历代人物传记资料库：王維德（CBDB 69398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69398&o=json
            external_identifier: CBDB:69398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wpcCcfviUnU1x7jPS6mDp2
        subject_person_id: p_BqV4dkbfe88g1hjKaVeqoe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1669年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2FEbEMraovdPpkCh6eTCX
          claim_id: c_wpcCcfviUnU1x7jPS6mDp2
          source_id: s_EFjyPV44zJq4g5PRSDfZMe
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
        id: c_mJ4edXeWPKKcW59RTbsDrj
        subject_person_id: p_BqV4dkbfe88g1hjKaVeqoe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1749年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dcRWgCyGxniMQ71kJCgRCX
          claim_id: c_mJ4edXeWPKKcW59RTbsDrj
          source_id: s_EFjyPV44zJq4g5PRSDfZMe
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
        id: c_Ye1fjP8KzLosuX6HCvJoWz
        subject_person_id: p_BqV4dkbfe88g1hjKaVeqoe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維德（1669年—1749年），清人物。籍贯吳縣，身份为行醫。（中国历代人物传记资料库 CBDB 69398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tbyI5Mj4tuXNZT8JRSt_66
          claim_id: c_Ye1fjP8KzLosuX6HCvJoWz
          source_id: s_EFjyPV44zJq4g5PRSDfZMe
          stance: supports
          locator: CBDB:69398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qEN9MrGWXetFvXFIS_lKmQ
        subject_person_id: p_Gnw243Y9BUsu4fMCgtZ4YQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BqV4dkbfe88g1hjKaVeqoe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-DhYA8dsZ3hxgyeBC7qLEQ
          claim_id: c_qEN9MrGWXetFvXFIS_lKmQ
          source_id: s_EFjyPV44zJq4g5PRSDfZMe
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13103：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Gnw243Y9BUsu4fMCgtZ4YQ
        status: active
        display_name: 王若谷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王維德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維德 | accepted |
| birth.date | 1669年 | accepted |
| death.date | 1749年 | accepted |
| bio.summary | 王維德（1669年—1749年），清人物。籍贯吳縣，身份为行醫。（中国历代人物传记资料库 CBDB 69398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Gnw243Y9BUsu4fMCgtZ4YQ | 王若谷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維德（CBDB 69398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69398&o=json)
