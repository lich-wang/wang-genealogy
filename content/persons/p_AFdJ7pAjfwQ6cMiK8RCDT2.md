---
schema: wang-person/v1
id: p_AFdJ7pAjfwQ6cMiK8RCDT2
status: active
merged_into: null
display_name: 王在晉
cbdb_id: 64468
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FbALQbtNfkyzcafSWuL5pH
        subject_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在晉，明人物。中国历代人物传记资料库（CBDB）以人物编号 64468 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yBujVudROW7yLV1Q77EfCI
          claim_id: c_FbALQbtNfkyzcafSWuL5pH
          source_id: s_2kKChQExFpd7AkGgXA1ci2
          stance: supports
          locator: CBDB:64468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_2kKChQExFpd7AkGgXA1ci2
            source_type: api_record
            title: 中国历代人物传记资料库：王在晉（CBDB 64468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64468&o=json
            external_identifier: CBDB:64468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wYeRqr3yAGCwa834Xc2AZ8
        subject_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3kDhrbrt8Es5uxWAh1846T
          claim_id: c_wYeRqr3yAGCwa834Xc2AZ8
          source_id: s_2kKChQExFpd7AkGgXA1ci2
          stance: supports
          locator: CBDB:64468
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_2kKChQExFpd7AkGgXA1ci2
            source_type: api_record
            title: 中国历代人物传记资料库：王在晉（CBDB 64468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64468&o=json
            external_identifier: CBDB:64468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qrtohWFOxoX7rJK676G6yT
        subject_person_id: p_d1Lyrtyu4j3AM9Goy6dTcT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWV6gL7TRNqz-LlUMHgHWF
          claim_id: c_qrtohWFOxoX7rJK676G6yT
          source_id: s_R3uro5zQCDofqK8ozEYEYL
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R3uro5zQCDofqK8ozEYEYL
            source_type: api_record
            title: 中国历代人物传记资料库：王祺（CBDB 231880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231880&o=json
            external_identifier: CBDB:231880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d1Lyrtyu4j3AM9Goy6dTcT
        status: active
        display_name: 王祺
        merged_into_person_id: null
    - claim:
        id: c_XUZUi8W-AxTRWAG-E8cZG2
        subject_person_id: p_fAinSNShUSAPALebedd6vv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_koWMHLrmePdISz6x8pRMEV
          claim_id: c_XUZUi8W-AxTRWAG-E8cZG2
          source_id: s_NMaDWzRiKPBxM6weg3b52d
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NMaDWzRiKPBxM6weg3b52d
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 231881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231881&o=json
            external_identifier: CBDB:231881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fAinSNShUSAPALebedd6vv
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王在晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王在晉，明人物。中国历代人物传记资料库（CBDB）以人物编号 64468 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王在晉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_d1Lyrtyu4j3AM9Goy6dTcT | 王祺 | accepted |
| ancestors | p_fAinSNShUSAPALebedd6vv | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祺（CBDB 231880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231880&o=json)
- [中国历代人物传记资料库：王在晉（CBDB 64468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64468&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 231881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231881&o=json)
