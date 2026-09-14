---
schema: wang-person/v1
id: p_Hq41nXPS6acQQdhAZabmC1
status: active
merged_into: null
display_name: 王鑰
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tEvrb6JUcFjyeVj1dDo7w7
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UAUvgzHbwZJR1DU1yTJrrP
          claim_id: c_tEvrb6JUcFjyeVj1dDo7w7
          source_id: s_95qVLL4seFoBiwKH9PAJjP
          stance: supports
          locator: CBDB:206568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206568）
          source: &a1
            id: s_95qVLL4seFoBiwKH9PAJjP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 206568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206568&o=json
            external_identifier: CBDB:206568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pmAkkNG68LJd89eSLgP5HU
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYneejnn63vWojkjniZwfZ
          claim_id: c_pmAkkNG68LJd89eSLgP5HU
          source_id: s_95qVLL4seFoBiwKH9PAJjP
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
        id: c_GvhnzifG3RrDF2aY7BEt7H
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰（生于1554年），明人物。明清進士進士，籍贯忻州，入仕進士。（中国历代人物传记资料库 CBDB 206568）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UrjpSD24sK0XtZByj9TF_N
          claim_id: c_GvhnzifG3RrDF2aY7BEt7H
          source_id: s_95qVLL4seFoBiwKH9PAJjP
          stance: supports
          locator: CBDB:206568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZO-XYpGs2npguBRqZ-FNwq
        subject_person_id: p_VT8a4dGzV3YZgqDrEEd9JE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hq41nXPS6acQQdhAZabmC1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u1mpH0yCJpN5qrsR4m2uuF
          claim_id: c_ZO-XYpGs2npguBRqZ-FNwq
          source_id: s_ZN2FrUbHsywg5Kw3XvP3je
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZN2FrUbHsywg5Kw3XvP3je
            source_type: api_record
            title: 中国历代人物传记资料库：王應官（CBDB 219867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219867&o=json
            external_identifier: CBDB:219867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VT8a4dGzV3YZgqDrEEd9JE
        status: active
        display_name: 王應官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FDXiXK572Q1ERGTqv_wIiP
        subject_person_id: p_Bd6DMQzbp7ML12caYF6Sds
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hq41nXPS6acQQdhAZabmC1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FGxV5swBK74eZOU8OeVq1N
          claim_id: c_FDXiXK572Q1ERGTqv_wIiP
          source_id: s_N1HKLfLW4mTM5iw6PU2T4h
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N1HKLfLW4mTM5iw6PU2T4h
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 219865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219865&o=json
            external_identifier: CBDB:219865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bd6DMQzbp7ML12caYF6Sds
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_bR9KlkoHanaSyJAQiV-IjA
        subject_person_id: p_nyVuV6asBpHX7JxEUXdp2Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hq41nXPS6acQQdhAZabmC1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96UO9CSoVcu3NWw3heMWnq
          claim_id: c_bR9KlkoHanaSyJAQiV-IjA
          source_id: s_NW8Xpw5VkfHtvyozukfeyd
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NW8Xpw5VkfHtvyozukfeyd
            source_type: api_record
            title: 中国历代人物传记资料库：王漢臣（CBDB 219866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219866&o=json
            external_identifier: CBDB:219866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nyVuV6asBpHX7JxEUXdp2Y
        status: active
        display_name: 王漢臣
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Ayu1jeKSaLhiMYhjiV09En
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JbPyp7b1PmaBZmpNQmvd6D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5PU70L63-c4rE_J7kvGw5-
          claim_id: c_Ayu1jeKSaLhiMYhjiV09En
          source_id: s_8vNxBlPle26ARVDz1i4SXg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206568 王鑰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8vNxBlPle26ARVDz1i4SXg
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 219873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219873&o=json
            external_identifier: CBDB:219873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JbPyp7b1PmaBZmpNQmvd6D
        status: active
        display_name: 王鈍
        merged_into_person_id: null
    - claim:
        id: c_nUzMby7ApqQJ6Y0IUMozJM
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_arWg97Pk8q4gsFhEmPc2dz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6rYVfQpDjugm1u9XAG1jVJ
          claim_id: c_nUzMby7ApqQJ6Y0IUMozJM
          source_id: s_ioj6FfRq9_kE0lrwCysqpd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206568 王鑰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ioj6FfRq9_kE0lrwCysqpd
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 219874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219874&o=json
            external_identifier: CBDB:219874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_arWg97Pk8q4gsFhEmPc2dz
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_dNyVZqTwXnJbCCrp0l_Z_0
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oCasV61or1PP2X4aeTPyPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RmmffD2tAf1qjmtsMD108R
          claim_id: c_dNyVZqTwXnJbCCrp0l_Z_0
          source_id: s_5HFqI1kJAOT5W8XfdEDu4-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206568 王鑰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5HFqI1kJAOT5W8XfdEDu4-
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 219872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json
            external_identifier: CBDB:219872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oCasV61or1PP2X4aeTPyPB
        status: active
        display_name: 王鑛
        merged_into_person_id: null
---

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| birth.date | 1554年 | accepted |
| bio.summary | 王鑰（生于1554年），明人物。明清進士進士，籍贯忻州，入仕進士。（中国历代人物传记资料库 CBDB 206568） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VT8a4dGzV3YZgqDrEEd9JE | 王應官 | accepted |
| ancestors | p_Bd6DMQzbp7ML12caYF6Sds | 王謙 | accepted |
| ancestors | p_nyVuV6asBpHX7JxEUXdp2Y | 王漢臣 | accepted |
| other | p_JbPyp7b1PmaBZmpNQmvd6D | 王鈍 | accepted |
| other | p_arWg97Pk8q4gsFhEmPc2dz | 王鏞 | accepted |
| other | p_oCasV61or1PP2X4aeTPyPB | 王鑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈍（CBDB 219873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219873&o=json)
- [中国历代人物传记资料库：王漢臣（CBDB 219866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219866&o=json)
- [中国历代人物传记资料库：王鑛（CBDB 219872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json)
- [中国历代人物传记资料库：王謙（CBDB 219865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219865&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 206568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206568&o=json)
- [中国历代人物传记资料库：王應官（CBDB 219867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219867&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 219874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219874&o=json)
