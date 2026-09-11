---
schema: wang-person/v1
id: p_8aPaEptBHxExeRt6XEYQQF
status: active
merged_into: null
display_name: 王休泰
cbdb_id: 141176
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RagscXqr5LtxwHNS917HkR
        subject_person_id: p_8aPaEptBHxExeRt6XEYQQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休泰，唐人物。中国历代人物传记资料库（CBDB）以人物编号 141176 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IEB2mc4NFxbGjQtBnW2tz9
          claim_id: c_RagscXqr5LtxwHNS917HkR
          source_id: s_W7t6d9f6MfrPiisT67rS3G
          stance: supports
          locator: CBDB:141176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_W7t6d9f6MfrPiisT67rS3G
            source_type: api_record
            title: 中国历代人物传记资料库：王休泰（CBDB 141176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141176&o=json
            external_identifier: CBDB:141176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P1jgudDpFkCE3L8X1Fwkzb
        subject_person_id: p_8aPaEptBHxExeRt6XEYQQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gNJA3fc3tKkQuMDTz4iMnx
          claim_id: c_P1jgudDpFkCE3L8X1Fwkzb
          source_id: s_W7t6d9f6MfrPiisT67rS3G
          stance: supports
          locator: CBDB:141176
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_W7t6d9f6MfrPiisT67rS3G
            source_type: api_record
            title: 中国历代人物传记资料库：王休泰（CBDB 141176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141176&o=json
            external_identifier: CBDB:141176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4IkMLq9vgAGhDl7MAz8BKU
        subject_person_id: p_8aPaEptBHxExeRt6XEYQQF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QcyPxGfgTcq2taKswH2dMF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ckI5UtdOJ2x5gnIIlZDncn
          claim_id: c_4IkMLq9vgAGhDl7MAz8BKU
          source_id: s_xSMdoRMRgFCAN8EHkndkqt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 23：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xSMdoRMRgFCAN8EHkndkqt
            source_type: api_record
            title: 中国历代人物传记资料库：申氏(王休泰妻)（CBDB 154872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154872&o=json
            external_identifier: CBDB:154872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QcyPxGfgTcq2taKswH2dMF
        status: active
        display_name: 申氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王休泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王休泰，唐人物。中国历代人物传记资料库（CBDB）以人物编号 141176 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王休泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QcyPxGfgTcq2taKswH2dMF | 申氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：申氏(王休泰妻)（CBDB 154872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154872&o=json)
- [中国历代人物传记资料库：王休泰（CBDB 141176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141176&o=json)
