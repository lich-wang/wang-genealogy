---
schema: wang-person/v1
id: p_wKQiP1EfRixbApmFB2CXep
status: active
merged_into: null
display_name: 王詢
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UtF8JQAkFgjZinGD4QVudL
        subject_person_id: p_wKQiP1EfRixbApmFB2CXep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fa98TVP9bVm92M1WtPR2jz
          claim_id: c_UtF8JQAkFgjZinGD4QVudL
          source_id: s_9NQJdaWBb31AFnxdEdSc95
          stance: supports
          locator: CBDB:202367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202367）
          source: &a1
            id: s_9NQJdaWBb31AFnxdEdSc95
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 202367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202367&o=json
            external_identifier: CBDB:202367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V3CNM1ofvKXEDSBM58VRK7
        subject_person_id: p_wKQiP1EfRixbApmFB2CXep
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1387年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6yNuNqfjooD7yyB6a5fYXu
          claim_id: c_V3CNM1ofvKXEDSBM58VRK7
          source_id: s_9NQJdaWBb31AFnxdEdSc95
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
        id: c_aJxCPxXA79odxMNamWBm4k
        subject_person_id: p_wKQiP1EfRixbApmFB2CXep
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢（生于1387年），明人物。明清進士進士，籍贯廬陵，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 202367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hn049FnhrynOE7p58uePar
          claim_id: c_aJxCPxXA79odxMNamWBm4k
          source_id: s_9NQJdaWBb31AFnxdEdSc95
          stance: supports
          locator: CBDB:202367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JT8CAEBDXeMZWIfxJpvhxz
        subject_person_id: p_w998MxB5FG3owa8b4Gi5jp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNFa9nhAspUmlw_Vo-LLvq
          claim_id: c_JT8CAEBDXeMZWIfxJpvhxz
          source_id: s_NmbphCa9wBxbTcC888kYjQ
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NmbphCa9wBxbTcC888kYjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昭善（CBDB 287042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287042&o=json
            external_identifier: CBDB:287042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_w998MxB5FG3owa8b4Gi5jp
        status: active
        display_name: 王昭善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JU5C2Q5IjHMjFU8Ol5dcT4
        subject_person_id: p_kczQmxP52MnpzK7NJpeo6m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbP_pLu05ZAMW46ISkoWkT
          claim_id: c_JU5C2Q5IjHMjFU8Ol5dcT4
          source_id: s_qDfyLES5d8BYBFzHttHiHM
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qDfyLES5d8BYBFzHttHiHM
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 287040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287040&o=json
            external_identifier: CBDB:287040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kczQmxP52MnpzK7NJpeo6m
        status: active
        display_name: 王克誠
        merged_into_person_id: null
    - claim:
        id: c_thf8EBv4DqHJiJYB1J8eQy
        subject_person_id: p_SCBNgMsaVyG8431T9fMQuX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9Wzh1vRkePCYThLcvuwRF
          claim_id: c_thf8EBv4DqHJiJYB1J8eQy
          source_id: s_Nh3MfVCaWadN9P35n8zKcR
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nh3MfVCaWadN9P35n8zKcR
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 287039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287039&o=json
            external_identifier: CBDB:287039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SCBNgMsaVyG8431T9fMQuX
        status: active
        display_name: 王友諒
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_b0PgnjuidxY36SKjVx5whn
        subject_person_id: p_3kbLEyh3L5tbvL3QjK9tvL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1us0vH1WMj4Y5LdVh0Pyr
          claim_id: c_b0PgnjuidxY36SKjVx5whn
          source_id: s_5pZpy7gt3PAMpMwcWMes7J
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202367 王詢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5pZpy7gt3PAMpMwcWMes7J
            source_type: api_record
            title: 中国历代人物传记资料库：王穩（CBDB 287044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287044&o=json
            external_identifier: CBDB:287044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3kbLEyh3L5tbvL3QjK9tvL
        status: active
        display_name: 王穩
        merged_into_person_id: null
---

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| birth.date | 1387年 | accepted |
| bio.summary | 王詢（生于1387年），明人物。明清進士進士，籍贯廬陵，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 202367） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w998MxB5FG3owa8b4Gi5jp | 王昭善 | accepted |
| ancestors | p_kczQmxP52MnpzK7NJpeo6m | 王克誠 | accepted |
| ancestors | p_SCBNgMsaVyG8431T9fMQuX | 王友諒 | accepted |
| other | p_3kbLEyh3L5tbvL3QjK9tvL | 王穩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克誠（CBDB 287040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287040&o=json)
- [中国历代人物传记资料库：王穩（CBDB 287044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287044&o=json)
- [中国历代人物传记资料库：王詢（CBDB 202367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202367&o=json)
- [中国历代人物传记资料库：王友諒（CBDB 287039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287039&o=json)
- [中国历代人物传记资料库：王昭善（CBDB 287042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287042&o=json)
