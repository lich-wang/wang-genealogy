---
schema: wang-person/v1
id: p_jcSR28HVc1YdUmWB2uemAX
status: active
merged_into: null
display_name: 王瑺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nPdVibs68PH9oYs8CGVEa8
        subject_person_id: p_jcSR28HVc1YdUmWB2uemAX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8eo68YW7cwMRqq2cexQMdt
          claim_id: c_nPdVibs68PH9oYs8CGVEa8
          source_id: s_XMU6BgbSFx5xrWPiBV2UX6
          stance: supports
          locator: CBDB:230881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230881）
          source: &a1
            id: s_XMU6BgbSFx5xrWPiBV2UX6
            source_type: api_record
            title: 中国历代人物传记资料库：王瑺（CBDB 230881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230881&o=json
            external_identifier: CBDB:230881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6v5ohun5rXqv2U3HGJSh84
        subject_person_id: p_jcSR28HVc1YdUmWB2uemAX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王瑺，明人物。萬曆丙戌科進士進士，籍贯清遠，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 230881）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wFkUfoxn_WgnFioYJKYhdh
          claim_id: c_6v5ohun5rXqv2U3HGJSh84
          source_id: s_XMU6BgbSFx5xrWPiBV2UX6
          stance: supports
          locator: CBDB:230881
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
  descendants: []
  other: []
---

# 王瑺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑺 | accepted |
| bio.summary | 王瑺，明人物。萬曆丙戌科進士進士，籍贯清遠，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 230881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑺（CBDB 230881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230881&o=json)
