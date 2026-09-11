---
schema: wang-person/v1
id: p_5vJLAzNDx7JY5MNSu628Uh
status: active
merged_into: null
display_name: 王瑁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jji83hCfngyW96NS6Z98iA
        subject_person_id: p_5vJLAzNDx7JY5MNSu628Uh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u6tTMtFgWFqQaLo2gPzkAi
          claim_id: c_jji83hCfngyW96NS6Z98iA
          source_id: s_AK8CdDg933oFnVu9HocpwB
          stance: supports
          locator: CBDB:284309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284309）
          source: &a1
            id: s_AK8CdDg933oFnVu9HocpwB
            source_type: api_record
            title: 中国历代人物传记资料库：王瑁（CBDB 284309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284309&o=json
            external_identifier: CBDB:284309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r2pDwC4vopSi2HeCwt5wQY
        subject_person_id: p_5vJLAzNDx7JY5MNSu628Uh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑁，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DwUkQkCsk0E3-iL9kKt_Tj
          claim_id: c_r2pDwC4vopSi2HeCwt5wQY
          source_id: s_AK8CdDg933oFnVu9HocpwB
          stance: supports
          locator: CBDB:284309
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

# 王瑁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑁 | accepted |
| bio.summary | 王瑁，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑁（CBDB 284309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284309&o=json)
