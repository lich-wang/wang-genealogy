---
schema: wang-person/v1
id: p_viaM6m196hS8EVYS6L8gg8
status: active
merged_into: null
display_name: 王宣化
cbdb_id: 205636
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Jp5gPmMCvNASjWBWp3hDs
        subject_person_id: p_viaM6m196hS8EVYS6L8gg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣化（生于1535年），明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 205636）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4DI8tHq--ahJHUSoKbWY1p
          claim_id: c_7Jp5gPmMCvNASjWBWp3hDs
          source_id: s_3Py7G31HfcSzJAysw32J6Y
          stance: supports
          locator: CBDB:205636
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3Py7G31HfcSzJAysw32J6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣化（CBDB 205636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205636&o=json
            external_identifier: CBDB:205636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yDWc5bfev2y45xLcFeY86C
        subject_person_id: p_viaM6m196hS8EVYS6L8gg8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1535-01-01
            latest: 1535-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HPGHiKG5255BbcTF1EDXuL
          claim_id: c_yDWc5bfev2y45xLcFeY86C
          source_id: s_3Py7G31HfcSzJAysw32J6Y
          stance: supports
          locator: CBDB:205636
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1535
          source:
            id: s_3Py7G31HfcSzJAysw32J6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣化（CBDB 205636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205636&o=json
            external_identifier: CBDB:205636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LNDqXLm6LirjFBnjX3JwF7
        subject_person_id: p_viaM6m196hS8EVYS6L8gg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fvHY8rrgE6WZaCU1McKw4h
          claim_id: c_LNDqXLm6LirjFBnjX3JwF7
          source_id: s_3Py7G31HfcSzJAysw32J6Y
          stance: supports
          locator: CBDB:205636
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1535
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_99crtNrT2UbTVX9pUi1G07
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huZLz-wVMycE4IhqPGd_SN
          claim_id: c_99crtNrT2UbTVX9pUi1G07
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZEzLzBt8XxPVyNeRGY1FvK
            source_type: api_record
            title: 中国历代人物传记资料库：王士逵（CBDB 336303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json
            external_identifier: CBDB:336303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3NLrzrSSHKzjmRv78pJAPK
        status: active
        display_name: 王士逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fJeR5aGh2d3LeGjvMbNMni
        subject_person_id: p_EtyR6xHEv72189qSFKHFEe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTxQ9ldH04ylPkjBkUSZJ6
          claim_id: c_fJeR5aGh2d3LeGjvMbNMni
          source_id: s_GM1H3Ci6GEbStUBaCd68o1
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GM1H3Ci6GEbStUBaCd68o1
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 336301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336301&o=json
            external_identifier: CBDB:336301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EtyR6xHEv72189qSFKHFEe
        status: active
        display_name: 王悅
        merged_into_person_id: null
    - claim:
        id: c_WaJEfwslBLuHNC9LL1h0S9
        subject_person_id: p_yLx6R2Cr3giQeKiH6Z4SsW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S_LZOmSaTO0bst2XDaSc3m
          claim_id: c_WaJEfwslBLuHNC9LL1h0S9
          source_id: s_awp23GQCvHVAdn4boEMZNZ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_awp23GQCvHVAdn4boEMZNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 336302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336302&o=json
            external_identifier: CBDB:336302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yLx6R2Cr3giQeKiH6Z4SsW
        status: active
        display_name: 王賓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宣化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宣化（生于1535年），明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 205636） | accepted |
| birth.date | 1535年 | accepted |
| name.primary | 王宣化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NLrzrSSHKzjmRv78pJAPK | 王士逵 | accepted |
| ancestors | p_EtyR6xHEv72189qSFKHFEe | 王悅 | accepted |
| ancestors | p_yLx6R2Cr3giQeKiH6Z4SsW | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 336302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336302&o=json)
- [中国历代人物传记资料库：王士逵（CBDB 336303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json)
- [中国历代人物传记资料库：王宣化（CBDB 205636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205636&o=json)
- [中国历代人物传记资料库：王悅（CBDB 336301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336301&o=json)
