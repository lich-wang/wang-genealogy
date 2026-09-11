---
schema: wang-person/v1
id: p_Hs5dTewocAZFYmsQxmyBFY
status: active
merged_into: null
display_name: 王紳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bqgzDEkByz6ByFSB93kzbw
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e4W6TnQNMcQfArieto4AKm
          claim_id: c_bqgzDEkByz6ByFSB93kzbw
          source_id: s_RPqVXdBy41jDmRLX2LYLDD
          stance: supports
          locator: CBDB:202472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202472）
          source: &a1
            id: s_RPqVXdBy41jDmRLX2LYLDD
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 202472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202472&o=json
            external_identifier: CBDB:202472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FF883b8HJHNgxGWT6uZck
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4QyL2fzvC8Quhorg33K1a
          claim_id: c_4FF883b8HJHNgxGWT6uZck
          source_id: s_RPqVXdBy41jDmRLX2LYLDD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NZZ7sVrg8E5KbTcwx9JLeD
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86TUnxDK6so6JRCF7u94mz
          claim_id: c_NZZ7sVrg8E5KbTcwx9JLeD
          source_id: s_RPqVXdBy41jDmRLX2LYLDD
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
        id: c_Q_UgkJr40FJ9RwfCnsd2B8
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivJrT3fzYVnkH-KGJXqz9l
          claim_id: c_Q_UgkJr40FJ9RwfCnsd2B8
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kUVE4BP4DZUmzxjQje8RBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國寧（CBDB 288735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json
            external_identifier: CBDB:288735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KQX7wZ6kGeHGXVBXr7RepL
        status: active
        display_name: 王國寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Nm07r9Qq-0Sar8y_Hj5nna
        subject_person_id: p_cDhkwNASo4LnZoHgKrkdpx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nlkoJSa04pr_ILJPB744kZ
          claim_id: c_Nm07r9Qq-0Sar8y_Hj5nna
          source_id: s_H4Py2z2rrgUhZURFJfcReg
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H4Py2z2rrgUhZURFJfcReg
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 288734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288734&o=json
            external_identifier: CBDB:288734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cDhkwNASo4LnZoHgKrkdpx
        status: active
        display_name: 王吉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQX7wZ6kGeHGXVBXr7RepL | 王國寧 | accepted |
| ancestors | p_cDhkwNASo4LnZoHgKrkdpx | 王吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寧（CBDB 288735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json)
- [中国历代人物传记资料库：王吉（CBDB 288734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288734&o=json)
- [中国历代人物传记资料库：王紳（CBDB 202472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202472&o=json)
