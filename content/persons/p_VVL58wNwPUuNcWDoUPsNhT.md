---
schema: wang-person/v1
id: p_VVL58wNwPUuNcWDoUPsNhT
status: active
merged_into: null
display_name: 王士眞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Z1dKNJHQ5D7w4ED2xLZqp
        subject_person_id: p_VVL58wNwPUuNcWDoUPsNhT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士眞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rB44KoV2JLH54d9NRTaPYn
          claim_id: c_6Z1dKNJHQ5D7w4ED2xLZqp
          source_id: s_ES7UY63GbYohbY9BjggEsG
          stance: supports
          locator: CBDB:380264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380264）
          source: &a1
            id: s_ES7UY63GbYohbY9BjggEsG
            source_type: api_record
            title: 中国历代人物传记资料库：王士眞（CBDB 380264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380264&o=json
            external_identifier: CBDB:380264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_53mY5EM3z7wJM7Ni4A11mC
        subject_person_id: p_VVL58wNwPUuNcWDoUPsNhT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士眞，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HgAzGLieF1-KSI_AXJiH1w
          claim_id: c_53mY5EM3z7wJM7Ni4A11mC
          source_id: s_ES7UY63GbYohbY9BjggEsG
          stance: supports
          locator: CBDB:380264
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

# 王士眞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士眞 | accepted |
| bio.summary | 王士眞，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士眞（CBDB 380264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380264&o=json)
