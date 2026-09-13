---
schema: wang-person/v1
id: p_VFz621JQvzkevtvTagNpXa
status: active
merged_into: null
display_name: 王編
cbdb_id: 207578
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rgr4x82r7tFdWMTnK69oBw
        subject_person_id: p_VFz621JQvzkevtvTagNpXa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王編（生于1565年），明人物。明清進士進士，籍贯寧鄉，入仕進士。（中国历代人物传记资料库 CBDB 207578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IgUIapO_JOiYe9u-EavvFK
          claim_id: c_rgr4x82r7tFdWMTnK69oBw
          source_id: s_Tab1K7ZvR26cDPm71AmyfZ
          stance: supports
          locator: CBDB:207578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Tab1K7ZvR26cDPm71AmyfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王編（CBDB 207578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207578&o=json
            external_identifier: CBDB:207578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CEz4G3KJ6iJAXJGEgztNQx
        subject_person_id: p_VFz621JQvzkevtvTagNpXa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1565年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1565-01-01
            latest: 1565-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iacPRroEKYhHjdhxipq4f6
          claim_id: c_CEz4G3KJ6iJAXJGEgztNQx
          source_id: s_Tab1K7ZvR26cDPm71AmyfZ
          stance: supports
          locator: CBDB:207578
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1565
          source:
            id: s_Tab1K7ZvR26cDPm71AmyfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王編（CBDB 207578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207578&o=json
            external_identifier: CBDB:207578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hGBL3z7rhXeFGjTm7AyUUs
        subject_person_id: p_VFz621JQvzkevtvTagNpXa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王編
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iugPhQv5Bf47mdfdVaW7RQ
          claim_id: c_hGBL3z7rhXeFGjTm7AyUUs
          source_id: s_Tab1K7ZvR26cDPm71AmyfZ
          stance: supports
          locator: CBDB:207578
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1565
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H_36ln7SJ-5QVXjra2lrGa
        subject_person_id: p_QnmEwQHENmCEtEe6Kpvw8Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFz621JQvzkevtvTagNpXa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wehM3aeGB29fiIEhdXDBDD
          claim_id: c_H_36ln7SJ-5QVXjra2lrGa
          source_id: s_HcuWSVmfUMKiXdhBfSW2WW
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第二甲第十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HcuWSVmfUMKiXdhBfSW2WW
            source_type: api_record
            title: 中国历代人物传记资料库：王弘化（CBDB 232609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232609&o=json
            external_identifier: CBDB:232609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QnmEwQHENmCEtEe6Kpvw8Y
        status: active
        display_name: 王弘化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rvmrAiUkDAjS1wzZddEwI5
        subject_person_id: p_5brz9c1G1GjK83wnzr6oiQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VFz621JQvzkevtvTagNpXa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P0fGRE1CERGuW4fA5GUhhX
          claim_id: c_rvmrAiUkDAjS1wzZddEwI5
          source_id: s_eWYJkm3aY98rny7Xxcigw6
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第二甲第十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eWYJkm3aY98rny7Xxcigw6
            source_type: api_record
            title: 中国历代人物传记资料库：王敷（CBDB 232608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232608&o=json
            external_identifier: CBDB:232608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5brz9c1G1GjK83wnzr6oiQ
        status: active
        display_name: 王敷
        merged_into_person_id: null
    - claim:
        id: c_AiRa8HXVrTDSSiUvBMBsia
        subject_person_id: p_NP62pFMPs2etxKKLyNk16s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VFz621JQvzkevtvTagNpXa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bKA5kLgE0HC928KMpr8-A
          claim_id: c_AiRa8HXVrTDSSiUvBMBsia
          source_id: s_u4N4YJS92a8g3cdFJz41EV
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第二甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_u4N4YJS92a8g3cdFJz41EV
            source_type: api_record
            title: 中国历代人物传记资料库：王子深（CBDB 232607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232607&o=json
            external_identifier: CBDB:232607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_NP62pFMPs2etxKKLyNk16s
        status: active
        display_name: 王子深
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王編

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王編（生于1565年），明人物。明清進士進士，籍贯寧鄉，入仕進士。（中国历代人物传记资料库 CBDB 207578） | accepted |
| birth.date | 1565年 | accepted |
| name.primary | 王編 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QnmEwQHENmCEtEe6Kpvw8Y | 王弘化 | accepted |
| ancestors | p_5brz9c1G1GjK83wnzr6oiQ | 王敷 | accepted |
| ancestors | p_NP62pFMPs2etxKKLyNk16s | 王子深 | accepted |

## 外部来源

- [中国历代人物传记资料库：王編（CBDB 207578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207578&o=json)
- [中国历代人物传记资料库：王敷（CBDB 232608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232608&o=json)
- [中国历代人物传记资料库：王弘化（CBDB 232609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232609&o=json)
- [中国历代人物传记资料库：王子深（CBDB 232607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232607&o=json)
