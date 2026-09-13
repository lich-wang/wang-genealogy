---
schema: wang-person/v1
id: p_QLH6TpKgMAWFBq48mvAzJJ
status: active
merged_into: null
display_name: 王幼慈
cbdb_id: 205804
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1w6m7ZY3mrKKQTQhtwfDQi
        subject_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼慈（生于1533年），史料所见人物。本项目依据《中国历代人物传记资料库：王幼慈（CBDB 205804）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_FVf0E117kThTJM1BcIW6un
          claim_id: c_1w6m7ZY3mrKKQTQhtwfDQi
          source_id: s_iEkdwpfBMjtq8WX8kFqgTz
          stance: supports
          locator: CBDB:205804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iEkdwpfBMjtq8WX8kFqgTz
            source_type: api_record
            title: 中国历代人物传记资料库：王幼慈（CBDB 205804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205804&o=json
            external_identifier: CBDB:205804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sFxtuYrCfkAdt3DGH8D4N1
        subject_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1533-01-01
            latest: 1533-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1C96gCF9SV4KJx9PPgZ8rP
          claim_id: c_sFxtuYrCfkAdt3DGH8D4N1
          source_id: s_iEkdwpfBMjtq8WX8kFqgTz
          stance: supports
          locator: CBDB:205804
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1533
          source:
            id: s_iEkdwpfBMjtq8WX8kFqgTz
            source_type: api_record
            title: 中国历代人物传记资料库：王幼慈（CBDB 205804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205804&o=json
            external_identifier: CBDB:205804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FgTnXsyUvFYoQC9L1tHutP
        subject_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼慈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xe6zbF9qiGuKnTEwndP7hs
          claim_id: c_FgTnXsyUvFYoQC9L1tHutP
          source_id: s_iEkdwpfBMjtq8WX8kFqgTz
          stance: supports
          locator: CBDB:205804
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1533
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QHBlI0t9xRiIBHzVFkgzcA
        subject_person_id: p_eHPGE6GvUtTD8VCfeCV2pJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfTfKAEyRiUJfPvpUs--r0
          claim_id: c_QHBlI0t9xRiIBHzVFkgzcA
          source_id: s_Uv6bLDhEnFbcgBwGzgAMwf
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Uv6bLDhEnFbcgBwGzgAMwf
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉聘（CBDB 208854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208854&o=json
            external_identifier: CBDB:208854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_eHPGE6GvUtTD8VCfeCV2pJ
        status: active
        display_name: 王嘉聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TpIKSXmpNEf4SS6XLDkeEQ
        subject_person_id: p_F7P1m37QAM7LJBGiRdNSb7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HvitPzZQH3X8E_S8Lyanqc
          claim_id: c_TpIKSXmpNEf4SS6XLDkeEQ
          source_id: s_YzNwZC1JS9cbFP6ugshb34
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YzNwZC1JS9cbFP6ugshb34
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 208853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208853&o=json
            external_identifier: CBDB:208853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F7P1m37QAM7LJBGiRdNSb7
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_DJrt7r9Rps47L02cz-uvru
        subject_person_id: p_FD6NxS1tzgVELTm9bNwyEu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0vC4W2FiBp70tdLIYOzpbV
          claim_id: c_DJrt7r9Rps47L02cz-uvru
          source_id: s_zM2UXCfpEbcqERgexR4K88
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zM2UXCfpEbcqERgexR4K88
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 208852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208852&o=json
            external_identifier: CBDB:208852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FD6NxS1tzgVELTm9bNwyEu
        status: active
        display_name: 王昱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王幼慈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王幼慈（生于1533年），史料所见人物。本项目依据《中国历代人物传记资料库：王幼慈（CBDB 205804）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1533年 | accepted |
| name.primary | 王幼慈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eHPGE6GvUtTD8VCfeCV2pJ | 王嘉聘 | accepted |
| ancestors | p_F7P1m37QAM7LJBGiRdNSb7 | 王雄 | accepted |
| ancestors | p_FD6NxS1tzgVELTm9bNwyEu | 王昱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉聘（CBDB 208854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208854&o=json)
- [中国历代人物传记资料库：王雄（CBDB 208853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208853&o=json)
- [中国历代人物传记资料库：王幼慈（CBDB 205804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205804&o=json)
- [中国历代人物传记资料库：王昱（CBDB 208852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208852&o=json)
