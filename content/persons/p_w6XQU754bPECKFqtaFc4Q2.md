---
schema: wang-person/v1
id: p_w6XQU754bPECKFqtaFc4Q2
status: active
merged_into: null
display_name: 王紹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VBTqkTnNZ4p5816hXGesaS
        subject_person_id: p_w6XQU754bPECKFqtaFc4Q2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K953CJnw6oivpqhKHT1Ydn
          claim_id: c_VBTqkTnNZ4p5816hXGesaS
          source_id: s_1zR5kD37aaY2eb8zGZDd8U
          stance: supports
          locator: CBDB:437654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437654）
          source: &a1
            id: s_1zR5kD37aaY2eb8zGZDd8U
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 437654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437654&o=json
            external_identifier: CBDB:437654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mroMVX3CBDPHB33VnfS7jA
        subject_person_id: p_w6XQU754bPECKFqtaFc4Q2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_myMrDEDnP1lf0vz1Ofy-O6
          claim_id: c_mroMVX3CBDPHB33VnfS7jA
          source_id: s_1zR5kD37aaY2eb8zGZDd8U
          stance: supports
          locator: CBDB:437654
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
        id: c_WTjClPRDV2pYkM2kzNCPHY
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w6XQU754bPECKFqtaFc4Q2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R52jIUCgaWAdgFmEXSuKv7
          claim_id: c_WTjClPRDV2pYkM2kzNCPHY
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（孫 王紹 ⇄ 祖父 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [中国历代人物传记资料库：王紹（CBDB 437654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437654&o=json)
