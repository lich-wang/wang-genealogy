---
schema: wang-person/v1
id: p_ygW4DDucdKk8PecoLSKG3k
status: active
merged_into: null
display_name: 王又溟
cbdb_id: 56216
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58YLog8GH5LU5LsEPNHRWX
        subject_person_id: p_ygW4DDucdKk8PecoLSKG3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王又溟，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 56216）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ogb6qNrtanos1HVAo0JFOc
          claim_id: c_58YLog8GH5LU5LsEPNHRWX
          source_id: s_Cg39F4J6JBHna2D2jJPf1Y
          stance: supports
          locator: CBDB:56216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cg39F4J6JBHna2D2jJPf1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王又溟（CBDB 56216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56216&o=json
            external_identifier: CBDB:56216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KzCikWWsJezmh3QDKsNZo2
        subject_person_id: p_ygW4DDucdKk8PecoLSKG3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又溟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VnN8Ro5UmTYuGJXMGMt2RJ
          claim_id: c_KzCikWWsJezmh3QDKsNZo2
          source_id: s_Cg39F4J6JBHna2D2jJPf1Y
          stance: supports
          locator: CBDB:56216
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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
        id: c_Ha51gw34a84Dy1U7eb6ZdX
        subject_person_id: p_ygW4DDucdKk8PecoLSKG3k
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qhrTGeNQmfraC8uYD8CPnE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fon7hlyzvufBKDxQljQNJw
          claim_id: c_Ha51gw34a84Dy1U7eb6ZdX
          source_id: s_kIkqfgseAIGMsd4we3kbCm
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #662, HuWenKai #561：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kIkqfgseAIGMsd4we3kbCm
            source_type: api_record
            title: 中国历代人物传记资料库：許飛雲（CBDB 56214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56214&o=json
            external_identifier: CBDB:56214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qhrTGeNQmfraC8uYD8CPnE
        status: active
        display_name: 許飛雲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王又溟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王又溟，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 56216） | accepted |
| name.primary | 王又溟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qhrTGeNQmfraC8uYD8CPnE | 許飛雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王又溟（CBDB 56216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56216&o=json)
- [中国历代人物传记资料库：許飛雲（CBDB 56214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56214&o=json)
