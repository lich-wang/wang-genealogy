---
schema: wang-person/v1
id: p_twkuLvU1QzsKfoH44veeEW
status: active
merged_into: null
display_name: 王宗義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uNYquaPvoGF6JnhREWbCZ2
        subject_person_id: p_twkuLvU1QzsKfoH44veeEW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oNJ8kHGew533nwduibrDA8
          claim_id: c_uNYquaPvoGF6JnhREWbCZ2
          source_id: s_hf7PSqk9DserwK2K4R5gUU
          stance: supports
          locator: CBDB:637116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637116）
          source: &a1
            id: s_hf7PSqk9DserwK2K4R5gUU
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 637116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637116&o=json
            external_identifier: CBDB:637116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_obNB8sLMHiXZv7thRtpGur
        subject_person_id: p_twkuLvU1QzsKfoH44veeEW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王宗義，清人物。籍贯大興，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 637116）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5VedPcdVq2O5eZKdTznEsn
          claim_id: c_obNB8sLMHiXZv7thRtpGur
          source_id: s_hf7PSqk9DserwK2K4R5gUU
          stance: supports
          locator: CBDB:637116
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

# 王宗義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗義 | accepted |
| bio.summary | 王宗義，清人物。籍贯大興，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 637116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗義（CBDB 637116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637116&o=json)
