---
schema: wang-person/v1
id: p_7oLhNpqUYp1tqETFx86wc3
status: active
merged_into: null
display_name: 苏氏
cbdb_id: 222407
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IRpyktBdbyumG4iFOwJw2k
        subject_person_id: p_7oLhNpqUYp1tqETFx86wc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 苏氏，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 222407）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_U7T4ByueTK3QatdQ2CTSqW
          claim_id: c_IRpyktBdbyumG4iFOwJw2k
          source_id: s_G5CvC7ErQtexGD3RbWPKSg
          stance: supports
          locator: CBDB:222407
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_G5CvC7ErQtexGD3RbWPKSg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蘇氏（222407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222407&o=json
            external_identifier: CBDB:222407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:06.858Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CbGpwd4NuMbLK1geEMY2mu
        subject_person_id: p_7oLhNpqUYp1tqETFx86wc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 苏氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TeuDKX6ZJw2kZc2BNuc7YT
          claim_id: c_CbGpwd4NuMbLK1geEMY2mu
          source_id: s_jqLkujpLgmQYEPkB4Z8xbF
          stance: supports
          locator: Q65825522
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_jqLkujpLgmQYEPkB4Z8xbF
            source_type: api_record
            title: 维基数据：苏氏（Q65825522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65825522
            external_identifier: Q65825522
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.712Z
            metadata_json: null
        - id: cs_pp1Wf5YeBq7Y9rvFZWaTo3
          claim_id: c_CbGpwd4NuMbLK1geEMY2mu
          source_id: s_G5CvC7ErQtexGD3RbWPKSg
          stance: supports
          locator: Q65825522
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_v38cKNpCPNBaF1J6qrmHfw
        subject_person_id: p_7oLhNpqUYp1tqETFx86wc3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H1qN9DJkUwvePJbjMNJmyp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmQp7rLLohCs6mGSM7MTpB
          claim_id: c_v38cKNpCPNBaF1J6qrmHfw
          source_id: s_ta7fJKZC1v4nhWm2mDhw14
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ta7fJKZC1v4nhWm2mDhw14
            source_type: api_record
            title: 维基数据：王士崧（Q16925700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925700
            external_identifier: Q16925700
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E5%B4%A7
        - id: cs_8rb5QPupW9bLXCCCjy4jNa
          claim_id: c_v38cKNpCPNBaF1J6qrmHfw
          source_id: s_jqLkujpLgmQYEPkB4Z8xbF
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_m9u3fk6N515NKFNNGDV7J2
          claim_id: c_v38cKNpCPNBaF1J6qrmHfw
          source_id: s_SGyN6PwCC37j9pzx1eeEdU
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆十一年進士登科錄:一卷
          source:
            id: s_SGyN6PwCC37j9pzx1eeEdU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士崧（35068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35068&o=json
            external_identifier: CBDB:35068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:46.279Z
            metadata_json: null
      object_person:
        id: p_H1qN9DJkUwvePJbjMNJmyp
        status: active
        display_name: 王士崧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 苏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 苏氏，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 222407） | accepted |
| name.primary | 苏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_H1qN9DJkUwvePJbjMNJmyp | 王士崧 | accepted |

## 外部来源

- [维基数据：苏氏（Q65825522）](https://www.wikidata.org/wiki/Q65825522)
- [维基数据：王士崧（Q16925700）](https://www.wikidata.org/wiki/Q16925700)
- [CBDB 中国历代人物传记资料库：蘇氏（222407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222407&o=json)
- [CBDB 中国历代人物传记资料库：王士崧（35068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35068&o=json)
