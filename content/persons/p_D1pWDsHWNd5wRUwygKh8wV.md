---
schema: wang-person/v1
id: p_D1pWDsHWNd5wRUwygKh8wV
status: active
merged_into: null
display_name: 王三餘
cbdb_id: 126452
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7rvAT5vhqYH24KkB7Wpr8
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三餘，明人物。中国历代人物传记资料库（CBDB）以人物编号 126452 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_np97aNshqgZjxFh0hZ30hF
          claim_id: c_T7rvAT5vhqYH24KkB7Wpr8
          source_id: s_ykLTZ4fenQDoggY7N55tnM
          stance: supports
          locator: CBDB:126452
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_ykLTZ4fenQDoggY7N55tnM
            source_type: api_record
            title: 中国历代人物传记资料库：王三餘（CBDB 126452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126452&o=json
            external_identifier: CBDB:126452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fd1P4oZEqAEPHbUGTqgP2w
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三餘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v3bazMRz9nNSbT6KNr5wSr
          claim_id: c_Fd1P4oZEqAEPHbUGTqgP2w
          source_id: s_ykLTZ4fenQDoggY7N55tnM
          stance: supports
          locator: CBDB:126452
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_ykLTZ4fenQDoggY7N55tnM
            source_type: api_record
            title: 中国历代人物传记资料库：王三餘（CBDB 126452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126452&o=json
            external_identifier: CBDB:126452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ujeiQU1mGhPXS11WrbzFFP
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvTmrClVjv0u7dbzQVqN02
          claim_id: c_ujeiQU1mGhPXS11WrbzFFP
          source_id: s_xAEVe87o3biD33g4CLb25Y
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xAEVe87o3biD33g4CLb25Y
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 214400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json
            external_identifier: CBDB:214400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NMZVjztWKmHmBJ3VeqqESt
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_p4kOqH25BY-JjhDNXwhWec
        subject_person_id: p_HFYLoGj9XA7izk92Amt8wf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dckEt0vZ-BYwMFKa4OXXBH
          claim_id: c_p4kOqH25BY-JjhDNXwhWec
          source_id: s_7SVHQWTaRvsDKUgykqg2us
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7SVHQWTaRvsDKUgykqg2us
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 214398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214398&o=json
            external_identifier: CBDB:214398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HFYLoGj9XA7izk92Amt8wf
        status: active
        display_name: 王讓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三餘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三餘，明人物。中国历代人物传记资料库（CBDB）以人物编号 126452 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王三餘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMZVjztWKmHmBJ3VeqqESt | 王遜 | accepted |
| ancestors | p_HFYLoGj9XA7izk92Amt8wf | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 214398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214398&o=json)
- [中国历代人物传记资料库：王三餘（CBDB 126452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126452&o=json)
- [中国历代人物传记资料库：王遜（CBDB 214400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json)
