---
schema: wang-person/v1
id: p_VYtFzPbziddvD9zkw88Psz
status: active
merged_into: null
display_name: 王師德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W65RGpQ9hEz25SMeKdiZ1L
        subject_person_id: p_VYtFzPbziddvD9zkw88Psz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bN9dPhEbo6s54E44wPbd7k
          claim_id: c_W65RGpQ9hEz25SMeKdiZ1L
          source_id: s_9DxthkMRUtc39htUuv83YL
          stance: supports
          locator: CBDB:10690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10690）
          source: &a1
            id: s_9DxthkMRUtc39htUuv83YL
            source_type: api_record
            title: 中国历代人物传记资料库：王師德（CBDB 10690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10690&o=json
            external_identifier: CBDB:10690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_31p7A1NunjkyDNaTEZj2TV
        subject_person_id: p_VYtFzPbziddvD9zkw88Psz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1102年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aWZBi4bR8JvYdfH6fBRL8
          claim_id: c_31p7A1NunjkyDNaTEZj2TV
          source_id: s_9DxthkMRUtc39htUuv83YL
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
        id: c_uAVTRcoV7b2eUPX3ufT25j
        subject_person_id: p_VYtFzPbziddvD9zkw88Psz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1161年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xi5NEAeyW5yHDHMmAN9ZXB
          claim_id: c_uAVTRcoV7b2eUPX3ufT25j
          source_id: s_9DxthkMRUtc39htUuv83YL
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
        id: c_MYGqPFPooyW1d7hqQKqrLT
        subject_person_id: p_VYtFzPbziddvD9zkw88Psz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師德（1102年—1161年），宋人物。籍贯金華，曾任承事郎、太師、宣議郎。（中国历代人物传记资料库 CBDB 10690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BCNNQ3tE_np3qoq3OTWhKU
          claim_id: c_MYGqPFPooyW1d7hqQKqrLT
          source_id: s_9DxthkMRUtc39htUuv83YL
          stance: supports
          locator: CBDB:10690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3pkHMC4WryHmkBFrAR1PWp
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VYtFzPbziddvD9zkw88Psz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0qbqgoTGXXmUHmyt2N3QNg
          claim_id: c_3pkHMC4WryHmkBFrAR1PWp
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（子 王師德 ⇄ 父 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
  children:
    - claim:
        id: c_zL8FDfZ2BNzGgfzJbQUcLU
        subject_person_id: p_VYtFzPbziddvD9zkw88Psz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UvehpGMJTzc9aejBRt9mWN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8qOqrMzrdpkjUwZzXyTq2y
          claim_id: c_zL8FDfZ2BNzGgfzJbQUcLU
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: CBDB 双向互证（父 王師德 ⇄ 子 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jH1N5zKcYCmDMDNPzpwQ7F
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 10697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json
            external_identifier: CBDB:10697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師德 | accepted |
| birth.date | 1102年 | accepted |
| death.date | 1161年 | accepted |
| bio.summary | 王師德（1102年—1161年），宋人物。籍贯金華，曾任承事郎、太師、宣議郎。（中国历代人物传记资料库 CBDB 10690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |
| children | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
- [中国历代人物传记资料库：王淮（CBDB 10697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json)
- [中国历代人物传记资料库：王師德（CBDB 10690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10690&o=json)
