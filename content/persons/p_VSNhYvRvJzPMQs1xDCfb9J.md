---
schema: wang-person/v1
id: p_VSNhYvRvJzPMQs1xDCfb9J
status: active
merged_into: null
display_name: 王詔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uPkL1zKNzbdcB5rb3KyjFj
        subject_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vviC7VLm3RqwCfvZASvrKh
          claim_id: c_uPkL1zKNzbdcB5rb3KyjFj
          source_id: s_YLjDA4XHDh552kQMQyULHd
          stance: supports
          locator: CBDB:198502
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198502）
          source: &a1
            id: s_YLjDA4XHDh552kQMQyULHd
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 198502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198502&o=json
            external_identifier: CBDB:198502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3J92wJR6Y45uJ3zDmHEqQz
        subject_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zd5wd6yFHkNLde6ZqUxknm
          claim_id: c_3J92wJR6Y45uJ3zDmHEqQz
          source_id: s_YLjDA4XHDh552kQMQyULHd
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
        id: c_Fo9TjivMv92fp45jLbsHeh
        subject_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔（生于1425年），明人物。景泰五年進士，籍贯懷柔，入仕進士。（中国历代人物传记资料库 CBDB 198502）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wNLfcaLGefH8qDnEDSVk2H
          claim_id: c_Fo9TjivMv92fp45jLbsHeh
          source_id: s_YLjDA4XHDh552kQMQyULHd
          stance: supports
          locator: CBDB:198502
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8LoE5eMoOW77cJdgQFtX1f
        subject_person_id: p_Bn1ZVcnd33H3XNU3Lai8Qn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qls34JaVRZD8xcuw3O-6UR
          claim_id: c_8LoE5eMoOW77cJdgQFtX1f
          source_id: s_AV6nNYCCCV7F972GfKyb6G
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AV6nNYCCCV7F972GfKyb6G
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 280975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280975&o=json
            external_identifier: CBDB:280975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bn1ZVcnd33H3XNU3Lai8Qn
        status: active
        display_name: 王禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BpFJx4z040CDvQhBIHopGp
        subject_person_id: p_Pw4V9B2YZddUe16WxLunML
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPAduRzEGiXgi7sV3v9Lop
          claim_id: c_BpFJx4z040CDvQhBIHopGp
          source_id: s_QDn97QGQ5CPD1GbNjCagCV
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QDn97QGQ5CPD1GbNjCagCV
            source_type: api_record
            title: 中国历代人物传记资料库：王德彬（CBDB 280952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280952&o=json
            external_identifier: CBDB:280952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Pw4V9B2YZddUe16WxLunML
        status: active
        display_name: 王德彬
        merged_into_person_id: null
    - claim:
        id: c_0luQz8DWEu8tl3Kx4_hZ9G
        subject_person_id: p_vS1NJPXp1JsEPjdjzDi7Gg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zns7zYEbz0LoGcTJ6ZUNVq
          claim_id: c_0luQz8DWEu8tl3Kx4_hZ9G
          source_id: s_oUA8wKZLkNeQFDmYHmGoi5
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oUA8wKZLkNeQFDmYHmGoi5
            source_type: api_record
            title: 中国历代人物传记资料库：王甫義（CBDB 280963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280963&o=json
            external_identifier: CBDB:280963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vS1NJPXp1JsEPjdjzDi7Gg
        status: active
        display_name: 王甫義
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | 王詔（生于1425年），明人物。景泰五年進士，籍贯懷柔，入仕進士。（中国历代人物传记资料库 CBDB 198502） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bn1ZVcnd33H3XNU3Lai8Qn | 王禮 | accepted |
| ancestors | p_Pw4V9B2YZddUe16WxLunML | 王德彬 | accepted |
| ancestors | p_vS1NJPXp1JsEPjdjzDi7Gg | 王甫義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德彬（CBDB 280952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280952&o=json)
- [中国历代人物传记资料库：王甫義（CBDB 280963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280963&o=json)
- [中国历代人物传记资料库：王禮（CBDB 280975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280975&o=json)
- [中国历代人物传记资料库：王詔（CBDB 198502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198502&o=json)
