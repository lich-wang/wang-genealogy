---
schema: wang-person/v1
id: p_px4rrRJS4GLJhkkYi5Mdde
status: active
merged_into: null
display_name: 王榕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTEMw2EfsCQycorsAikm3V
        subject_person_id: p_px4rrRJS4GLJhkkYi5Mdde
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qtwdBsRZ6c98rsQLD3aPL1
          claim_id: c_zTEMw2EfsCQycorsAikm3V
          source_id: s_hV7M7TLnLBbXmyoJL1Xadc
          stance: supports
          locator: CBDB:638782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638782）
          source: &a1
            id: s_hV7M7TLnLBbXmyoJL1Xadc
            source_type: api_record
            title: 中国历代人物传记资料库：王榕（CBDB 638782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638782&o=json
            external_identifier: CBDB:638782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQHEC2qcHEa4d7c8kVnxks
        subject_person_id: p_px4rrRJS4GLJhkkYi5Mdde
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榕，清人物。籍贯江寧，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ekCBFuq1yrWS3evG5ZfJP-
          claim_id: c_JQHEC2qcHEa4d7c8kVnxks
          source_id: s_hV7M7TLnLBbXmyoJL1Xadc
          stance: supports
          locator: CBDB:638782
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
  ancestors: []
  descendants: []
  other: []
---

# 王榕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榕 | accepted |
| bio.summary | 王榕，清人物。籍贯江寧，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638782） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榕（CBDB 638782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638782&o=json)
