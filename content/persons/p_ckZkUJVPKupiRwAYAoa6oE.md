---
schema: wang-person/v1
id: p_ckZkUJVPKupiRwAYAoa6oE
status: active
merged_into: null
display_name: 王宗著
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2Vp59Rt7DoZFJjdPnd7FR
        subject_person_id: p_ckZkUJVPKupiRwAYAoa6oE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NFf177i7xHsJjXsKPawRYM
          claim_id: c_U2Vp59Rt7DoZFJjdPnd7FR
          source_id: s_UMDDqe688Y4km4vazenEHE
          stance: supports
          locator: CBDB:226571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226571）
          source: &a1
            id: s_UMDDqe688Y4km4vazenEHE
            source_type: api_record
            title: 中国历代人物传记资料库：王宗著（CBDB 226571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226571&o=json
            external_identifier: CBDB:226571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d6GzGG6hGDsyWxXAp4Lg8X
        subject_person_id: p_ckZkUJVPKupiRwAYAoa6oE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗著，明人物。萬曆丙戌科進士進士，籍贯京山，入仕庠生。（中国历代人物传记资料库 CBDB 226571）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NZnw1IUJzV3FTQpAbIl-KU
          claim_id: c_d6GzGG6hGDsyWxXAp4Lg8X
          source_id: s_UMDDqe688Y4km4vazenEHE
          stance: supports
          locator: CBDB:226571
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

# 王宗著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗著 | accepted |
| bio.summary | 王宗著，明人物。萬曆丙戌科進士進士，籍贯京山，入仕庠生。（中国历代人物传记资料库 CBDB 226571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗著（CBDB 226571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226571&o=json)
