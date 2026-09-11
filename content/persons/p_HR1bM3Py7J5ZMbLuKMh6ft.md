---
schema: wang-person/v1
id: p_HR1bM3Py7J5ZMbLuKMh6ft
status: active
merged_into: null
display_name: 王璊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jWWCxgQfePJzyRXNazeSnm
        subject_person_id: p_HR1bM3Py7J5ZMbLuKMh6ft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AwErBj2mdEiH5BPGMheJZr
          claim_id: c_jWWCxgQfePJzyRXNazeSnm
          source_id: s_6V29mnQLpi2hMgjeJLxV5E
          stance: supports
          locator: CBDB:54864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54864）
          source: &a1
            id: s_6V29mnQLpi2hMgjeJLxV5E
            source_type: api_record
            title: 中国历代人物传记资料库：王璊（CBDB 54864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54864&o=json
            external_identifier: CBDB:54864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V8ociq7eAdbxLa3LqaVBxR
        subject_person_id: p_HR1bM3Py7J5ZMbLuKMh6ft
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kX4C3SZu8CH4B6gM6hAcGi
          claim_id: c_V8ociq7eAdbxLa3LqaVBxR
          source_id: s_6V29mnQLpi2hMgjeJLxV5E
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
        id: c_spj9EUfpWYprs21mfRcT8W
        subject_person_id: p_HR1bM3Py7J5ZMbLuKMh6ft
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbYAAoipomsMm3dHRva6DA
          claim_id: c_spj9EUfpWYprs21mfRcT8W
          source_id: s_6V29mnQLpi2hMgjeJLxV5E
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
        id: c_xsy2hwYkh1vT8xSC6cFipD
        subject_person_id: p_HR1bM3Py7J5ZMbLuKMh6ft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璊（1796年—1829年），清人物。籍贯湘潭。（中国历代人物传记资料库 CBDB 54864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VQ1iv_ncWc8IhPcgAsHl41
          claim_id: c_xsy2hwYkh1vT8xSC6cFipD
          source_id: s_6V29mnQLpi2hMgjeJLxV5E
          stance: supports
          locator: CBDB:54864
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
  spouses:
    - claim:
        id: c_CUTnPuisVc_gz1RH433yuT
        subject_person_id: p_HR1bM3Py7J5ZMbLuKMh6ft
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MaGB66mhMrHZAHGAJ5yXPR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ClFSotjUVoCf6xP7BrCW0
          claim_id: c_CUTnPuisVc_gz1RH433yuT
          source_id: s_JIe_nNaGvVThuJYMZhTyfO
          stance: supports
          locator: CBDB 双向互证（丈夫 夏恆）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JIe_nNaGvVThuJYMZhTyfO
            source_type: api_record
            title: 中国历代人物传记资料库：夏恆（CBDB 54868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54868&o=json
            external_identifier: CBDB:54868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MaGB66mhMrHZAHGAJ5yXPR
        status: active
        display_name: 夏恆
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王璊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璊 | accepted |
| birth.date | 1796年 | accepted |
| death.date | 1829年 | accepted |
| bio.summary | 王璊（1796年—1829年），清人物。籍贯湘潭。（中国历代人物传记资料库 CBDB 54864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MaGB66mhMrHZAHGAJ5yXPR | 夏恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璊（CBDB 54864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54864&o=json)
- [中国历代人物传记资料库：夏恆（CBDB 54868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54868&o=json)
