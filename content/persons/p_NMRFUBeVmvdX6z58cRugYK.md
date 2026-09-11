---
schema: wang-person/v1
id: p_NMRFUBeVmvdX6z58cRugYK
status: active
merged_into: null
display_name: 王弘
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tcNFx4NivYyP2RnSUHEFM
        subject_person_id: p_NMRFUBeVmvdX6z58cRugYK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hfiZ5f5T9QhapBoMZxBk8G
          claim_id: c_5tcNFx4NivYyP2RnSUHEFM
          source_id: s_5HnXZPERFAcme1VQytRef5
          stance: supports
          locator: CBDB:200979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200979）
          source: &a1
            id: s_5HnXZPERFAcme1VQytRef5
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 200979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200979&o=json
            external_identifier: CBDB:200979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LdVt6HB1GQVwwSiK7QBMeo
        subject_person_id: p_NMRFUBeVmvdX6z58cRugYK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4u71Uy2mzBjPcXNQvu97o
          claim_id: c_LdVt6HB1GQVwwSiK7QBMeo
          source_id: s_5HnXZPERFAcme1VQytRef5
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
        id: c_2w8y6jmQn14ytAPAT8kRuT
        subject_person_id: p_NMRFUBeVmvdX6z58cRugYK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘（生于1458年），明人物。明清進士進士，籍贯南京廣洋衛，入仕進士，曾任副使、監察御史、行人司行人。（中国历代人物传记资料库 CBDB 200979）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P95XNIYSJG8Ym1cDdRZ1xl
          claim_id: c_2w8y6jmQn14ytAPAT8kRuT
          source_id: s_5HnXZPERFAcme1VQytRef5
          stance: supports
          locator: CBDB:200979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZopYMUwbig6Wy3Nzej5axS
        subject_person_id: p_K74x4UruQpAW2fkYoD9eky
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMRFUBeVmvdX6z58cRugYK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hti4orTCX76p6iEeh8azaH
          claim_id: c_ZopYMUwbig6Wy3Nzej5axS
          source_id: s_rED45EPTtfxTK9T8zPGN5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rED45EPTtfxTK9T8zPGN5p
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 265528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265528&o=json
            external_identifier: CBDB:265528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K74x4UruQpAW2fkYoD9eky
        status: active
        display_name: 王清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vgksFmgEaQY8bLNp0f0fxj
        subject_person_id: p_K7SU9AP7GmKVZSjKE1oq1N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NMRFUBeVmvdX6z58cRugYK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hy8cSiBEmLrWFx37gLmfyD
          claim_id: c_vgksFmgEaQY8bLNp0f0fxj
          source_id: s_jLjjw6ep6SRP3pGqFNZZs6
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jLjjw6ep6SRP3pGqFNZZs6
            source_type: api_record
            title: 中国历代人物传记资料库：王舍宗（CBDB 265527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265527&o=json
            external_identifier: CBDB:265527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_K7SU9AP7GmKVZSjKE1oq1N
        status: active
        display_name: 王舍宗
        merged_into_person_id: null
    - claim:
        id: c_JWEd8m3QOjRI3k93s_zJUS
        subject_person_id: p_tHHqbmapYM6PjLTqirKHfA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NMRFUBeVmvdX6z58cRugYK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqaSzV2GduY5hFi36ploZm
          claim_id: c_JWEd8m3QOjRI3k93s_zJUS
          source_id: s_Kg42FLV9BJ6dXTXRRiZhBU
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Kg42FLV9BJ6dXTXRRiZhBU
            source_type: api_record
            title: 中国历代人物传记资料库：王秀翁（CBDB 265524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265524&o=json
            external_identifier: CBDB:265524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tHHqbmapYM6PjLTqirKHfA
        status: active
        display_name: 王秀翁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | 王弘（生于1458年），明人物。明清進士進士，籍贯南京廣洋衛，入仕進士，曾任副使、監察御史、行人司行人。（中国历代人物传记资料库 CBDB 200979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K74x4UruQpAW2fkYoD9eky | 王清 | accepted |
| ancestors | p_K7SU9AP7GmKVZSjKE1oq1N | 王舍宗 | accepted |
| ancestors | p_tHHqbmapYM6PjLTqirKHfA | 王秀翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘（CBDB 200979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200979&o=json)
- [中国历代人物传记资料库：王清（CBDB 265528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265528&o=json)
- [中国历代人物传记资料库：王舍宗（CBDB 265527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265527&o=json)
- [中国历代人物传记资料库：王秀翁（CBDB 265524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265524&o=json)
