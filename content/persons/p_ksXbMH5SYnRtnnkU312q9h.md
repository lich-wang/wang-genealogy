---
schema: wang-person/v1
id: p_ksXbMH5SYnRtnnkU312q9h
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GPqgx6ntsHHHE7KR8wNQhS
        subject_person_id: p_ksXbMH5SYnRtnnkU312q9h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPpJypb5Kd37s8uMZBiTTS
          claim_id: c_GPqgx6ntsHHHE7KR8wNQhS
          source_id: s_kTQ17UA4V67muoBUcyERek
          stance: supports
          locator: CBDB:285953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285953）
          source: &a1
            id: s_kTQ17UA4V67muoBUcyERek
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 285953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285953&o=json
            external_identifier: CBDB:285953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9qJuiLg9F22X1fvk3L3yH
        subject_person_id: p_ksXbMH5SYnRtnnkU312q9h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。正德十六年進士，曾任百戶。（中国历代人物传记资料库 CBDB 285953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CpmwJqwPSN0s7wnuPFweFq
          claim_id: c_j9qJuiLg9F22X1fvk3L3yH
          source_id: s_kTQ17UA4V67muoBUcyERek
          stance: supports
          locator: CBDB:285953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_nIeIIY6dHH2WJ4DSRrUt6V
        subject_person_id: p_ksXbMH5SYnRtnnkU312q9h
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekYAnsss02mBzT4qbqiXYg
          claim_id: c_nIeIIY6dHH2WJ4DSRrUt6V
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jeazmAgpnL84Ce6RMwkVPH
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json
            external_identifier: CBDB:202276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ihqwFHoQL5fezFftJsukMb
        status: active
        display_name: 王銳
        merged_into_person_id: null
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。正德十六年進士，曾任百戶。（中国历代人物传记资料库 CBDB 285953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ihqwFHoQL5fezFftJsukMb | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 285953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285953&o=json)
- [中国历代人物传记资料库：王銳（CBDB 202276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json)
