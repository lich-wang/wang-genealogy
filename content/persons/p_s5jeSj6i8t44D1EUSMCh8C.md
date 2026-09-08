---
schema: wang-person/v1
id: p_s5jeSj6i8t44D1EUSMCh8C
status: active
merged_into: null
display_name: 董氏
cbdb_id: 314682
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FFcZ0Ed22o9wOri1zQK8Dm
        subject_person_id: p_s5jeSj6i8t44D1EUSMCh8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏，王鈇妻。维基数据以独立条目 Q65839782 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_qmpayB09GN7oNAKS8NKIa-
          claim_id: c_FFcZ0Ed22o9wOri1zQK8Dm
          source_id: s_B6U4sCWWXFAJNGh8K5V5bP
          stance: supports
          locator: Q65839782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_B6U4sCWWXFAJNGh8K5V5bP
            source_type: api_record
            title: 维基数据：董氏（Q65839782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65839782
            external_identifier: Q65839782
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLrV6KxuS8xdcZ1wPgXsEU
        subject_person_id: p_s5jeSj6i8t44D1EUSMCh8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2Cq42Aoig6c48TBZsLWKSk
          claim_id: c_vLrV6KxuS8xdcZ1wPgXsEU
          source_id: s_XYGnCxGjB2KPDxiwaxnLmH
          stance: supports
          locator: Q65839782
          quotation: null
          interpretation_note: null
          source:
            id: s_XYGnCxGjB2KPDxiwaxnLmH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：董氏（314682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314682&o=json
            external_identifier: CBDB:314682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:04.723Z
            metadata_json: null
        - id: cs_ZHpxFFEwgoui89MVd7pb63
          claim_id: c_vLrV6KxuS8xdcZ1wPgXsEU
          source_id: s_B6U4sCWWXFAJNGh8K5V5bP
          stance: supports
          locator: Q65839782
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_T2eKG3UA1arxkBo73SH8Js
        subject_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s5jeSj6i8t44D1EUSMCh8C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AdoeAyLtAPKG9K2T4hdEYU
          claim_id: c_T2eKG3UA1arxkBo73SH8Js
          source_id: s_B6U4sCWWXFAJNGh8K5V5bP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_B6U4sCWWXFAJNGh8K5V5bP
            source_type: api_record
            title: 维基数据：董氏（Q65839782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65839782
            external_identifier: Q65839782
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
            metadata_json: null
        - id: cs_qAFtfqtomgvPfyHynE4TGN
          claim_id: c_T2eKG3UA1arxkBo73SH8Js
          source_id: s_deCBvgZw2nEFm4a1pkhxQU
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十九年進士登科錄:一卷
          source:
            id: s_deCBvgZw2nEFm4a1pkhxQU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鈇（67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:54.378Z
            metadata_json: null
        - id: cs_yMYhMz1PmHTkcgeWziYkdQ
          claim_id: c_T2eKG3UA1arxkBo73SH8Js
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person:
        id: p_jWRBXNs9hNQYimujJ64LcZ
        status: active
        display_name: 王𫓧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 董氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 董氏，王鈇妻。维基数据以独立条目 Q65839782 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 董氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jWRBXNs9hNQYimujJ64LcZ | 王𫓧 | accepted |

## 外部来源

- [维基数据：董氏（Q65839782）](https://www.wikidata.org/wiki/Q65839782)
- [维基数据：王𫓧（Q15934129）](https://www.wikidata.org/wiki/Q15934129)
- [CBDB 中国历代人物传记资料库：董氏（314682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314682&o=json)
- [CBDB 中国历代人物传记资料库：王鈇（67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
