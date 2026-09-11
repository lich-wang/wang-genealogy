---
schema: wang-person/v1
id: p_cnxHgvNWzCNiTbu6SVUA3o
status: active
merged_into: null
display_name: 王春
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2m3Ryp1kiggHECP1XA1ki
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZ3JxJPJkxJCnhGVKHLBmv
          claim_id: c_F2m3Ryp1kiggHECP1XA1ki
          source_id: s_M5K8c7YTrHQkmNymF17C3J
          stance: supports
          locator: CBDB:198362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198362）
          source: &a1
            id: s_M5K8c7YTrHQkmNymF17C3J
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 198362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198362&o=json
            external_identifier: CBDB:198362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L6N8vUWJEpqu8eEg1McttH
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMA4mCECYW78A21bnLdHtL
          claim_id: c_L6N8vUWJEpqu8eEg1McttH
          source_id: s_M5K8c7YTrHQkmNymF17C3J
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
        id: c_zQ4dK4A5eXwP3rXovn3QYr
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春（生于1424年），明人物。明清進士進士，籍贯濟寧州，入仕進士。（中国历代人物传记资料库 CBDB 198362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0me_akcCdaUWNc9ygHPb2G
          claim_id: c_zQ4dK4A5eXwP3rXovn3QYr
          source_id: s_M5K8c7YTrHQkmNymF17C3J
          stance: supports
          locator: CBDB:198362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_foX01O4HPgtEtpTtd03bqJ
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqpKYBNcQx2IgwiOoAqbLP
          claim_id: c_foX01O4HPgtEtpTtd03bqJ
          source_id: s_rj4Xn1Tt1t2oVSwfrw3wy5
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rj4Xn1Tt1t2oVSwfrw3wy5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗器（CBDB 262581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262581&o=json
            external_identifier: CBDB:262581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_psesBqxpFDwKqz2PBTA4dC
        status: active
        display_name: 王宗器
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9Yp-BvmLeCd1i8JzqAbcnU
        subject_person_id: p_95awjgHBCHs1xjiDGEzzQZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9z7MH1VEK6yJmd41YeB_ex
          claim_id: c_9Yp-BvmLeCd1i8JzqAbcnU
          source_id: s_g8QKmkV21suPgQsLPSPGXg
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g8QKmkV21suPgQsLPSPGXg
            source_type: api_record
            title: 中国历代人物传记资料库：王繼先（CBDB 262570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262570&o=json
            external_identifier: CBDB:262570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_95awjgHBCHs1xjiDGEzzQZ
        status: active
        display_name: 王繼先
        merged_into_person_id: null
    - claim:
        id: c_5pbRqggGAzvMpPfcufWSmm
        subject_person_id: p_9V1EE18tsy5ujNqPYDC9fD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmvSofxcdi7IzOsPY63c_U
          claim_id: c_5pbRqggGAzvMpPfcufWSmm
          source_id: s_ddWEeffxitEDpXoEfD2CzC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ddWEeffxitEDpXoEfD2CzC
            source_type: api_record
            title: 中国历代人物传记资料库：王正興（CBDB 262559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json
            external_identifier: CBDB:262559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9V1EE18tsy5ujNqPYDC9fD
        status: active
        display_name: 王正興
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | 王春（生于1424年），明人物。明清進士進士，籍贯濟寧州，入仕進士。（中国历代人物传记资料库 CBDB 198362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_psesBqxpFDwKqz2PBTA4dC | 王宗器 | accepted |
| ancestors | p_95awjgHBCHs1xjiDGEzzQZ | 王繼先 | accepted |
| ancestors | p_9V1EE18tsy5ujNqPYDC9fD | 王正興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 198362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198362&o=json)
- [中国历代人物传记资料库：王繼先（CBDB 262570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262570&o=json)
- [中国历代人物传记资料库：王正興（CBDB 262559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json)
- [中国历代人物传记资料库：王宗器（CBDB 262581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262581&o=json)
