---
schema: wang-person/v1
id: p_3P6PL5iSpXsS5WK4moYCCA
status: active
merged_into: null
display_name: 王瀴
cbdb_id: 323578
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_akMAiq2zSKkzvZkKTL3Y22
        subject_person_id: p_3P6PL5iSpXsS5WK4moYCCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀴，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 323578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_odMqyEcROO0d9UTfBOX87k
          claim_id: c_akMAiq2zSKkzvZkKTL3Y22
          source_id: s_MB3h4ovn7qsRd3TE21rFuE
          stance: supports
          locator: CBDB:323578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MB3h4ovn7qsRd3TE21rFuE
            source_type: api_record
            title: 中国历代人物传记资料库：王瀴（CBDB 323578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323578&o=json
            external_identifier: CBDB:323578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KLRq8YfRE5fdrHCxKDQrm5
        subject_person_id: p_3P6PL5iSpXsS5WK4moYCCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wtLyLiF46xnszpND6PJXWf
          claim_id: c_KLRq8YfRE5fdrHCxKDQrm5
          source_id: s_MB3h4ovn7qsRd3TE21rFuE
          stance: supports
          locator: CBDB:323578
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_XzvfYckO-yl_jpOXZ46QeG
        subject_person_id: p_3P6PL5iSpXsS5WK4moYCCA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UYeZjxwRSFnnKq62fsnzid
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqi_9JjTcDihCV9kGfzUD0
          claim_id: c_XzvfYckO-yl_jpOXZ46QeG
          source_id: s_MB3h4ovn7qsRd3TE21rFuE
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MB3h4ovn7qsRd3TE21rFuE
            source_type: api_record
            title: 中国历代人物传记资料库：王瀴（CBDB 323578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323578&o=json
            external_identifier: CBDB:323578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UYeZjxwRSFnnKq62fsnzid
        status: active
        display_name: 王葑
        merged_into_person_id: null
  other: []
---

# 王瀴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瀴，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 323578） | accepted |
| name.primary | 王瀴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UYeZjxwRSFnnKq62fsnzid | 王葑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀴（CBDB 323578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323578&o=json)
