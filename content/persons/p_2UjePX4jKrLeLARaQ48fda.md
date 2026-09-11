---
schema: wang-person/v1
id: p_2UjePX4jKrLeLARaQ48fda
status: active
merged_into: null
display_name: 沈氏
revision: 1
cbdb_id: 212652
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XTSplne9bXJvuqextM9egy
        subject_person_id: p_2UjePX4jKrLeLARaQ48fda
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212652）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Shyyw-5w5YIJU-3sJ0OGIe
          claim_id: c_XTSplne9bXJvuqextM9egy
          source_id: s_JoIj8dA9N0zm5ScQaRwJEt
          stance: supports
          locator: CBDB:212652
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JoIj8dA9N0zm5ScQaRwJEt
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王家棟妻)（CBDB 212652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212652&o=json
            external_identifier: CBDB:212652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uRKaiVA7EoKn_xOcPpqQ54
        subject_person_id: p_2UjePX4jKrLeLARaQ48fda
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MgU9XBf5h5BN1DumUtlP5
          claim_id: c_uRKaiVA7EoKn_xOcPpqQ54
          source_id: s_JoIj8dA9N0zm5ScQaRwJEt
          stance: supports
          locator: CBDB:212652
          quotation: null
          interpretation_note: CBDB 明确记录的王家棟配偶
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
        id: c_le7GSvw_uqDufAdqDFgy7g
        subject_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2UjePX4jKrLeLARaQ48fda
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcMht81AofwsRvkUiiw1in
          claim_id: c_le7GSvw_uqDufAdqDFgy7g
          source_id: s_JoIj8dA9N0zm5ScQaRwJEt
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bhku7LXKrphWSf7fyoW8hh
        status: active
        display_name: 王家棟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 沈氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212652） | accepted |
| name.primary | 沈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Bhku7LXKrphWSf7fyoW8hh | 王家棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王家棟妻)（CBDB 212652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212652&o=json)
