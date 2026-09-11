---
schema: wang-person/v1
id: p_kCdr4Vt3ng3vFN4WR6C2uB
status: active
merged_into: null
display_name: 王尚志
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NC1s7AEr5b8Jv67pyedgT4
        subject_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BpGMaFDNYQs88b5ALigewA
          claim_id: c_NC1s7AEr5b8Jv67pyedgT4
          source_id: s_bkk9AJgkCJ12XXCaokyR9J
          stance: supports
          locator: CBDB:201927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201927）
          source: &a1
            id: s_bkk9AJgkCJ12XXCaokyR9J
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 201927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201927&o=json
            external_identifier: CBDB:201927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TzM9T8hMKZoMajB2j76kBU
        subject_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1477年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_36tum2sSDwTG79bhjZ5hLD
          claim_id: c_TzM9T8hMKZoMajB2j76kBU
          source_id: s_bkk9AJgkCJ12XXCaokyR9J
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
        id: c_o9tPuanHPKc6i9NAmFJFL6
        subject_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志（生于1477年），明人物。正德十二年進士，籍贯淅川，入仕進士。（中国历代人物传记资料库 CBDB 201927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ji4WTdaUdEDY6fadR3WjXE
          claim_id: c_o9tPuanHPKc6i9NAmFJFL6
          source_id: s_bkk9AJgkCJ12XXCaokyR9J
          stance: supports
          locator: CBDB:201927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qWdk02Z7LTSjPX-vUF9KA3
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtXokd83HNrtUzXhMKSMKv
          claim_id: c_qWdk02Z7LTSjPX-vUF9KA3
          source_id: s_4Jd3SGz3ToLj2uBg4TUMBw
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百一十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4Jd3SGz3ToLj2uBg4TUMBw
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 280589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280589&o=json
            external_identifier: CBDB:280589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dH2xuW5Lt7eGA9nJNsvby5
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CCulRIF_lRkN9ARd6wUU04
        subject_person_id: p_P55JoyvrtsfzbA6X9e4b8E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X3C7CnnV3BPEcEq3UF2gUs
          claim_id: c_CCulRIF_lRkN9ARd6wUU04
          source_id: s_tBE58XWdNxueHh6PsSZDzU
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百一十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tBE58XWdNxueHh6PsSZDzU
            source_type: api_record
            title: 中国历代人物传记资料库：王志高（CBDB 280587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280587&o=json
            external_identifier: CBDB:280587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P55JoyvrtsfzbA6X9e4b8E
        status: active
        display_name: 王志高
        merged_into_person_id: null
    - claim:
        id: c_4H5kuJB8spFCThTDtynlMH
        subject_person_id: p_ZAALGmvA7VXjgxTSp3NT6Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sJyhU4JRIa_Qx2qZuJH9_
          claim_id: c_4H5kuJB8spFCThTDtynlMH
          source_id: s_SHTgHQoKvBrhZ5yqgifaFq
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百一十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SHTgHQoKvBrhZ5yqgifaFq
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 280588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280588&o=json
            external_identifier: CBDB:280588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZAALGmvA7VXjgxTSp3NT6Q
        status: active
        display_name: 王讓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尚志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚志 | accepted |
| birth.date | 1477年 | accepted |
| bio.summary | 王尚志（生于1477年），明人物。正德十二年進士，籍贯淅川，入仕進士。（中国历代人物传记资料库 CBDB 201927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dH2xuW5Lt7eGA9nJNsvby5 | 王浩 | accepted |
| ancestors | p_P55JoyvrtsfzbA6X9e4b8E | 王志高 | accepted |
| ancestors | p_ZAALGmvA7VXjgxTSp3NT6Q | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 280589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280589&o=json)
- [中国历代人物传记资料库：王讓（CBDB 280588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280588&o=json)
- [中国历代人物传记资料库：王尚志（CBDB 201927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201927&o=json)
- [中国历代人物传记资料库：王志高（CBDB 280587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280587&o=json)
