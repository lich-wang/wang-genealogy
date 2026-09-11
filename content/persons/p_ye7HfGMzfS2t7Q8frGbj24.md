---
schema: wang-person/v1
id: p_ye7HfGMzfS2t7Q8frGbj24
status: active
merged_into: null
display_name: 王慈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ufAHMFCPE8KsHymAmLDfW
        subject_person_id: p_ye7HfGMzfS2t7Q8frGbj24
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CyUP7jS2QDE11n8JuAB6MH
          claim_id: c_9ufAHMFCPE8KsHymAmLDfW
          source_id: s_wx64MfyaSiHQmBMuxCgHq7
          stance: supports
          locator: CBDB:637912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637912）
          source: &a1
            id: s_wx64MfyaSiHQmBMuxCgHq7
            source_type: api_record
            title: 中国历代人物传记资料库：王慈（CBDB 637912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637912&o=json
            external_identifier: CBDB:637912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3sKPHqULAUuauNs3yec2FA
        subject_person_id: p_ye7HfGMzfS2t7Q8frGbj24
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈，清人物。籍贯寧波府，曾任復設訓導。（中国历代人物传记资料库 CBDB 637912）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p3oGGr8JSUVRzE_-eBpGSc
          claim_id: c_3sKPHqULAUuauNs3yec2FA
          source_id: s_wx64MfyaSiHQmBMuxCgHq7
          stance: supports
          locator: CBDB:637912
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

# 王慈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慈 | accepted |
| bio.summary | 王慈，清人物。籍贯寧波府，曾任復設訓導。（中国历代人物传记资料库 CBDB 637912） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慈（CBDB 637912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637912&o=json)
