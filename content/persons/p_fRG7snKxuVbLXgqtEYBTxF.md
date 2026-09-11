---
schema: wang-person/v1
id: p_fRG7snKxuVbLXgqtEYBTxF
status: active
merged_into: null
display_name: 王威
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uwzMJihrNepLsCmAntQ2gx
        subject_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Mp1riv9sadymVaAZaWuyD
          claim_id: c_uwzMJihrNepLsCmAntQ2gx
          source_id: s_X7BWCFDAXYRP29kQjvyruQ
          stance: supports
          locator: CBDB:262136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262136）
          source: &a1
            id: s_X7BWCFDAXYRP29kQjvyruQ
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 262136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json
            external_identifier: CBDB:262136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qY662hJYBosAAVgSUPh2qC
        subject_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262136）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JN6Bw9zKuThykLPNBbuzIp
          claim_id: c_qY662hJYBosAAVgSUPh2qC
          source_id: s_X7BWCFDAXYRP29kQjvyruQ
          stance: supports
          locator: CBDB:262136
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

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | 王威，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王威（CBDB 262136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json)
